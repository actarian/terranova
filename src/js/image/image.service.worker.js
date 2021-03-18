
const ImageServiceWorkerEvent = {
	Progress: 'progress',
	Complete: 'complete',
};

const controllers = {};

function resize(src, blob, size) {
	if (!self.createImageBitmap || !self.OffscreenCanvas) {
		return sendMessage(ImageServiceWorkerEvent.Complete, src, blob);
	}
	self.createImageBitmap(blob).then(function(img) {
		const MAX_WIDTH = 320;
		const MAX_HEIGHT = 240;
		let width = img.width;
		let height = img.height;
		if (width > height) {
			if (width > MAX_WIDTH) {
				height *= MAX_WIDTH / width;
				width = MAX_WIDTH;
			}
		} else {
			if (height > MAX_HEIGHT) {
				width *= MAX_HEIGHT / height;
				height = MAX_HEIGHT;
			}
		}
		const canvas = new OffscreenCanvas(width, height);
		const ctx = canvas.getContext('2d');
		canvas.width = width;
		canvas.height = height;
		ctx.drawImage(img, 0, 0, width, height);
		canvas.convertToBlob({ type: 'image/jpeg', quality: 0.9 }).then(function(resizedBlob) {
			sendMessage(ImageServiceWorkerEvent.Complete, src, resizedBlob);
		});
	});
}

function sendMessage(type, src, data) {
	self.postMessage({
		type: type,
		src: src,
		data: data
	});
}

self.addEventListener('message', function(event) {
	const id = event.data.id;
	const src = event.data.src;
	const size = event.data.size;
	if (id && !src) {
		const controller = controllers[id];
		if (controller) {
			// console.log('Aborting', id);
			controller.abort();
		}
		return;
	}
	const options = {
		mode: 'cors', // no-cors, *cors, same-origin
	};
	if (typeof fetch === 'function') {
		if (self.AbortController) {
			const controller = new AbortController();
			options.signal = controller.signal;
			controllers[id] = controller;
			// console.log('AbortController', id);
		}
		const response = fetch(src, options)
			.then(fetchProgress({
				// implement onProgress method
				onProgress(event) {
					// console.log('ImageServiceWorker', event.loaded, event.total);
					sendMessage(ImageServiceWorkerEvent.Progress, src, event);
				},
			}))
			.then(function(response) {
				return response.blob();
			}, function(error) {
				console.log(error);
			})
			.then(function(blob) {
				delete controllers[id];
				if (typeof size === 'object') {
					resize(src, blob, size);
				} else {
					sendMessage(ImageServiceWorkerEvent.Complete, src, blob);
				}
			}, function(error) {
				console.log(error);
			});
	} else {
		const request = new XMLHttpRequest();
		request.open('GET', src, true);
		request.responseType = 'blob';
		request.withCredentials = true;
		request.onload = function() {
			if (request.status < 300) {
				if (typeof size === 'object') {
					resize(src, this.response, size);
				} else {
					sendMessage(ImageServiceWorkerEvent.Complete, src, this.response);
				}
			} else {
				// new Error('Image didn\'t load successfully; error code:' + request.statusText);
			}
		};
		request.onprogress = function(event) {
			// console.log('ImageServiceWorker', event.loaded, event.total);
			sendMessage(ImageServiceWorkerEvent.Progress, src, event);
		}
		request.onerror = function() {
			// new Error('There was a network error.');
		};
		request.send();
	}
});

/*
self.addEventListener('message', function(event) {
	// console.log(event);
	const src = event.data;
	const response = fetch(src).then(function(response) {
		return response.blob();
	}).then(function(blob) {
		// Send the image data to the UI thread!
		self.postMessage({
			src: src,
			blob: blob,
		});
	});
});
*/

function isFetchProgressSupported() {
	return (
		typeof Response !== 'undefined' && typeof ReadableStream !== 'undefined'
	);
}

function fetchProgress({
	defaultSize = 0,
	emitDelay = 10,
	onProgress = () => null,
	onComplete = () => null,
	onError = () => null,
}) {
	return function FetchProgress(response) {
		if (!isFetchProgressSupported()) {
			return response;
		}
		const { body, headers, status } = response;
		const contentLength = headers.get('content-length') || defaultSize;
		const progress = new Progress(contentLength, emitDelay);
		const reader = body.getReader();
		const stream = new ReadableStream({
			start(controller) {
				function push() {
					reader
						.read()
						.then(({ done, value }) => {
							if (done) {
								onComplete({});
								controller.close();
								return;
							}
							if (value) {
								progress.next(
									value,
									onProgress
								);
							}
							controller.enqueue(value);
							push();
						})
						.catch((err) => {
							onError(err);
						});
				}
				push();
			},
		});
		return new Response(stream, { headers, status });
	};
}

class Progress {

	constructor(length, emitDelay = 1000) {
		this.eventStart = 0;
		this.loaded = 0;
		this.length = parseInt(length, 10) || 0;
		this.emitDelay = emitDelay;
	}

	next(chunk, onProgress) {
		const chunkLength = chunk.length;
		this.loaded += chunkLength;
		this.eventStart = this.eventStart || Date.now();
		if (this.length >= this.loaded || Date.now() - this.eventStart > this.emitDelay) {
			this.eventStart = Date.now();
			const progress = {
				total: this.length,
				loaded: this.loaded,
			};
			onProgress(progress);
		}
	}

}

/*
function fetchProgress__(response, onProgress) {
	const reader = response.body.getReader();
	// Step 2: get total length
	const contentLength = +response.headers.get('Content-Length');
	// Step 3: read the data
	let receivedLength = 0; // received that many bytes at the moment
	let chunks = []; // array of received binary chunks (comprises the body)
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}
		chunks.push(value);
		receivedLength += value.length;
		if (typeof onProgress === 'function') {
			onProgress(receivedLength, contentLength);
		}
		console.log(`ImageServiceWorker.onProgress ${receivedLength} of ${contentLength}`)
	}
	// Step 4: concatenate chunks into single Uint8Array
	let chunksAll = new Uint8Array(receivedLength); // (4.1)
	let position = 0;
	for (let chunk of chunks) {
		chunksAll.set(chunk, position); // (4.2)
		position += chunk.length;
	}
	// Step 5: decode into a string
	let result = new TextDecoder("utf-8").decode(chunksAll);
	// We're done!
	let commits = JSON.parse(result);
}
*/
