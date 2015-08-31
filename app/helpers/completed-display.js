import Ember from 'ember';

/* Returns the 'complete' class name for items marked completed. */
export function completedDisplay(params/*, hash*/) {
	var isItemCompleted = params[0];
	if (isItemCompleted) {
		return 'complete';
	}
	return '';
}

export default Ember.Helper.helper(completedDisplay);
