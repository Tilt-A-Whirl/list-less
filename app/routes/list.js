import Ember from 'ember';

/* Individual list route, for display of items */
export default Ember.Route.extend({

	/* Combine the list with its items, so we'll have access to
	the list title in the template */
	model: function(params) {
		return Ember.RSVP.hash({
			list: this.store.findRecord('list', params.list_id),
			items: this.findItems(params)
		});
	},

	/* Item input actions */
	actions: {

		/* Creates a new item */
		createItem: function(newItemTitle) {

	    	var list = this.get('controller').get('model.list');
	    	
	        // Create the new item model
	        var item = this.store.createRecord('item', {
	            title: newItemTitle,
	            quantity: 1,
	            isActive: true,
	            list: list
	        });

	        // Clear the text field
	        this.get('controller').set('newItemTitle', '');

	        var self = this;

	        // Save the new model, then refresh -
	        // 'then' must be used or else too many items end
	        // up in hasMany array
	        item.save().then(function() {
	        	self.refresh();
	        });
	    }
	},

	/* Finds items based on parent list id or if this is the
	master shopping list, finds all items. We can't filter all 
	items here by a computed property (isIncluded) so we'll 
	use a handlebar helper to hide the ones from lists that
	aren't selected. */
    findItems: function(params) {
		var list_id = params.list_id;
		if (list_id != '0') {
			return this.store.query('item', { list: list_id });
		}
		return this.store.findAll('item');
	}
});