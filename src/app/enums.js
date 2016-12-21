(function () {
	'use strict';

	angular
		.module('app')
		.constant('enums', {
			projectStatuses: {
				closed: {
					code: 0,
					statusTitle: 'Closed'
				}
			},
			dateFormatters: {
				dayOfWeekAndDate: 'EEEE, MMMM dd',
				timeAmPm: 'hh:mm a',
				defaultDate: 'MM/dd/yy'
			},
			statusType: {
				expert: 'expert',
				consultation: 'consultation'
			},
			statuses: {
				statusNew: {
					id: 'NEW',
					order: 1,
					statusTitle: 'New',
					statusClassName: 'co-label-danger'
				},
				viewed: {
					id: 'VIEWED',
					order: 2,
					statusTitle: 'Viewed',
					statusClassName: 'co-label-neutral'
				},
				rejected: {
					id: 'REJECTED',
					order: 3,
					statusTitle: 'Declined',
					statusClassName: 'co-label-neutral-outline'
				},
				disqualified: {
					id: 'DISQUALIFIED',
					order: 4,
					statusTitle: 'Disqualified',
					statusClassName: 'co-label-neutral-outline'
				},
				readyToSchedule: {
					id: 'READYTOSCHEDULE',
					order: 5,
					statusTitle: 'Ready to schedule',
					statusClassName: 'co-label-danger'
				},
				inScheduling: {
					id: 'INSCHEDULING',
					order: 6,
					statusTitle: 'In scheduling',
					statusClassName: 'co-label-neutral'
				},
				postponed: {
					id: 'POSTPONED',
					order: 8,
					statusTitle: 'Postponed',
					statusClassName: 'co-label-danger-outline'
				},
				scheduled: {
					id: 'SCHEDULED',
					order: 9,
					statusTitle: 'Scheduled',
					statusClassName: 'co-label-dark'
				},
				completed: {
					id: 'COMPLETED',
					order: 10,
					statusTitle: 'Completed',
					statusClassName: 'co-label-dark-outline'
				},
				followup: {
					id: 'FOLLOWUP',
					order: 11,
					statusTitle: 'Follow-up',
					statusClassName: 'co-label-dark-outline'
				},
				canceled: {
					id: 'CANCELED',
					order: 12,
					statusTitle: 'Cancelled',
					statusClassName: 'co-label-neutral-outline'
				},
				none: {
					id: 'NONE',
					order: 12,
					statusTitle: 'None',
					statusClassName: 'co-label-danger-outline'
				}
			},
			substatuses: {
				rejected: {
					id: 'REJECTEDBYCLIENTCOMPLIANCE',
					order: 1,
					substatusTitle: 'Rejected by Client Compliance'
				},
				unusable: {
					id: 'EXPERTISUNUSABLE',
					order: 2,
					substatusTitle: 'Expert is Unusable'
				},
				waiting: {
					id: 'WAITINGONCLIENTCOMPLIANCE',
					order: 3,
					substatusTitle: 'Waiting on Client Compliance Approval'
				},
				none: {
					id: 'NONE',
					order: 4,
					substatusTitle: ''
				},
				removed: {
					id: 'REMOVEDFROMSCHEDULING',
					order: 5,
					substatusTitle: 'Removed from Scheduling'
				}

			},
			notificationEventTypes: {
				experts: {
					code: 1
				},
				consultations: {
					code: 2
				}
			},
			targetGroupNames: {
				companies: { title: 'company', idString: 'companyId' },
				industries: { title: 'industry', idString: 'industryId' },
				keywords: { title: 'keyword', idString: 'keywordId' }
			}
		});
}());
