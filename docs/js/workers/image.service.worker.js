/**
 * @license more v1.0.0
 * (c) 2021 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(f){typeof define==='function'&&define.amd?define(f):f();}((function(){'use strict';var ImageServiceWorkerEvent = {
  Progress: 'progress',
  Complete: 'complete'
};
var controllers = {};

function resize(src, blob, size) {
  if (!self.createImageBitmap || !self.OffscreenCanvas) {
    return sendMessage(ImageServiceWorkerEvent.Complete, src, blob);
  }

  self.createImageBitmap(blob).then(function (img) {
    var MAX_WIDTH = 320;
    var MAX_HEIGHT = 240;
    var width = img.width;
    var height = img.height;

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

    var canvas = new OffscreenCanvas(width, height);
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    canvas.convertToBlob({
      type: 'image/jpeg',
      quality: 0.9
    }).then(function (resizedBlob) {
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

self.addEventListener('message', function (event) {
  var id = event.data.id;
  var src = event.data.src;
  var size = event.data.size;

  if (id && !src) {
    var controller = controllers[id];

    if (controller) {
      // console.log('Aborting', id);
      controller.abort();
    }

    return;
  }

  var options = {
    mode: 'cors' // no-cors, *cors, same-origin

  };

  if (typeof fetch === 'function') {
    if (self.AbortController) {
      var _controller = new AbortController();

      options.signal = _controller.signal;
      controllers[id] = _controller; // console.log('AbortController', id);
    }

    var response = fetch(src, options).then(fetchProgress({
      // implement onProgress method
      onProgress: function onProgress(event) {
        // console.log('ImageServiceWorker', event.loaded, event.total);
        sendMessage(ImageServiceWorkerEvent.Progress, src, event);
      }
    })).then(function (response) {
      return response.blob();
    }, function (error) {
      console.log(error);
    }).then(function (blob) {
      delete controllers[id];

      if (typeof size === 'object') {
        resize(src, blob);
      } else {
        sendMessage(ImageServiceWorkerEvent.Complete, src, blob);
      }
    }, function (error) {
      console.log(error);
    });
  } else {
    var request = new XMLHttpRequest();
    request.open('GET', src, true);
    request.responseType = 'blob';
    request.withCredentials = true;

    request.onload = function () {
      if (request.status < 300) {
        if (typeof size === 'object') {
          resize(src, this.response);
        } else {
          sendMessage(ImageServiceWorkerEvent.Complete, src, this.response);
        }
      }
    };

    request.onprogress = function (event) {
      // console.log('ImageServiceWorker', event.loaded, event.total);
      sendMessage(ImageServiceWorkerEvent.Progress, src, event);
    };

    request.onerror = function () {// new Error('There was a network error.');
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
  return typeof Response !== 'undefined' && typeof ReadableStream !== 'undefined';
}

function fetchProgress(_ref) {
  var _ref$defaultSize = _ref.defaultSize,
      defaultSize = _ref$defaultSize === void 0 ? 0 : _ref$defaultSize,
      _ref$emitDelay = _ref.emitDelay,
      emitDelay = _ref$emitDelay === void 0 ? 10 : _ref$emitDelay,
      _ref$onProgress = _ref.onProgress,
      onProgress = _ref$onProgress === void 0 ? function () {
    return null;
  } : _ref$onProgress,
      _ref$onComplete = _ref.onComplete,
      onComplete = _ref$onComplete === void 0 ? function () {
    return null;
  } : _ref$onComplete,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {
    return null;
  } : _ref$onError;
  return function FetchProgress(response) {
    if (!isFetchProgressSupported()) {
      return response;
    }

    var body = response.body,
        headers = response.headers,
        status = response.status;
    var contentLength = headers.get('content-length') || defaultSize;
    var progress = new Progress(contentLength, emitDelay);
    var reader = body.getReader();
    var stream = new ReadableStream({
      start: function start(controller) {
        function push() {
          reader.read().then(function (_ref2) {
            var done = _ref2.done,
                value = _ref2.value;

            if (done) {
              onComplete({});
              controller.close();
              return;
            }

            if (value) {
              progress.next(value, onProgress);
            }

            controller.enqueue(value);
            push();
          }).catch(function (err) {
            onError(err);
          });
        }

        push();
      }
    });
    return new Response(stream, {
      headers: headers,
      status: status
    });
  };
}

var Progress = /*#__PURE__*/function () {
  function Progress(length, emitDelay) {
    if (emitDelay === void 0) {
      emitDelay = 1000;
    }

    this.eventStart = 0;
    this.loaded = 0;
    this.length = parseInt(length, 10) || 0;
    this.emitDelay = emitDelay;
  }

  var _proto = Progress.prototype;

  _proto.next = function next(chunk, onProgress) {
    var chunkLength = chunk.length;
    this.loaded += chunkLength;
    this.eventStart = this.eventStart || Date.now();

    if (this.length >= this.loaded || Date.now() - this.eventStart > this.emitDelay) {
      this.eventStart = Date.now();
      var progress = {
        total: this.length,
        loaded: this.loaded
      };
      onProgress(progress);
    }
  };

  return Progress;
}();
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
*/})));