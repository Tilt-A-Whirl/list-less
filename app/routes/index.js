import Ember from 'ember';

/* Transition from the main index route directly into
list 0, which is the shopping list and always exists. */
export default Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('list.index', '0');
	}
});
