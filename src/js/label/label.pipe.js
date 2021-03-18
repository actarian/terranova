import { Pipe } from "rxcomp";
import { Utils } from "../utils/utils";

export const LABELS = Utils.merge({
	browse: 'Browse',
	cancel: 'Cancel',
	drag_and_drop_images: 'Drag And Drop your images here',
	error_email: 'Invalid email',
	error_match: 'Fields do not match',
	error_required: 'Field is required',
	loading: 'loading',
	remove: 'Remove',
	required: 'Required',
	select: 'Select',
	select_file: 'Select a file...',
	update: 'Update',
	upload: 'Upload',
	waiting_host: 'waiting host',
	// editor
	editor_image: 'Image',
	editor_video: 'Video',
	editor_model: 'Model',
	editor_publisher_stream: 'Publisher Stream',
	editor_next_attendee_stream: 'Next Attendee Stream',
	editor_waiting_room: 'Waiting Room',
	editor_panorama: 'Panorama',
	editor_panorama_grid: 'Panorama Grid',
	editor_room_3d: 'Room 3D',
	editor_model: 'Model',
	editor_nav: 'Nav Tooltip',
	editor_gltf: 'Gltf Model',
	editor_plane: 'Plane',
	editor_curved_plane: 'Curved Plane',
	editor_texture: 'Texture',
}, window.labels);

export default class LabelPipe extends Pipe {

	static transform(key) {
		const labels = LABELS;
		return labels[key] || `#${key}#`;
	}

	static getKeys(...keys) {
		return this.transform(keys.map(x => x.replace('-','_')).join('_'));
	}
}

LabelPipe.meta = {
	name: 'label',
};
