import Ember from 'ember';

/* Returns the button text for the sort based on 
the current state of the sort flag. */
export function sortType(params/*, hash*/) {
	var alphaSort = params[0];
	if (alphaSort) {
		return "Sort by list";
	}
	return "Sort by abc";
}

export default Ember.Helper.helper(sortType);
