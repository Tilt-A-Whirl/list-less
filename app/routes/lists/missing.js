import Ember from 'ember';

/* Redirects on invalid URL */
export default Ember.Route.extend({
	redirect: function() {
		this.transitionTo('list.index', '0');
	}
});
