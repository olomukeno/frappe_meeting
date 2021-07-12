// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.views.calendar["Meeting"] = {
	field_map: {
		"start": "start",
		"end": "end",
		"id": "name",
		"title": "title",
		"status": "status",
	},
	options: {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month'
		}
	},
	get_events_method: "meeting.meeting.doctype.meeting.api.get_meetings"
}
