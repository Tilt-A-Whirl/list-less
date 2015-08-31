import Ember from 'ember';

/* Lists collection route */
export default Ember.Route.extend({

	/* Simple model definition */
	model: function() {
		return this.store.findAll('list');
	},

	/* Item input actions */
	actions: {

		/* Creates a new list and then displays the new list
		so items can be added. */
	    createList: function(newListTitle) {

	    	// Create new list record
	    	var list = this.store.createRecord('list', {
	    		title: newListTitle
	    	});

	    	// Clear input
	    	this.get('controller').set('newListTitle', '');

	    	var self = this;

	    	// Save, then go to new empty list page
	    	list.save().then(function() {
	    		self.transitionTo('list', list.get('id'));
	    	});

	    }
	}
});
