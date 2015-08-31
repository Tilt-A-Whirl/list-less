import Ember from 'ember';

/* If an item belongs to a list that is not included in the
master shopping list, its class will be 'hidden' in the
shopping list route. */
export function itemDisplay(params/*, hash*/) {
	var isItemIncluded = params[0];
	if (!isItemIncluded) {
		return 'hidden';
	}
	return '';
}

export default Ember.Helper.helper(itemDisplay);
