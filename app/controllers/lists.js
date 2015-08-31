import Ember from 'ember';

export default Ember.Controller.extend({

	/* Sort lists by title */
    sortProps: ['title'],
    sortedLists: Ember.computed.sort('model', 'sortProps'),

    /* Selectable lists are all lists except the shopping (master) list */
    selectableLists: Ember.computed('model', function(key, value) {
    	return this.get('model').rejectBy('id', '0');
    }),

    /* List button actions */
    actions: {

    	/* Delete entire list */
    	deleteList: function(list) {
    		var items = list.get('items');
    		list.deleteRecord(); // clears relationships
			items.invoke('deleteRecord');
			items.invoke('save');
			var self = this;
			// Transition to main page in case we're on the page of
			// the list we're deleting
	    	list.save().then(function() {
	    		self.transitionToRoute('index');
	    	});
	    }
    },

    /* Select or deselect all lists to be included in master shopping list */
    includeAllLists: Ember.computed('selectableLists.@each.isActive', function(key, value) {
    	var lists = this.get('selectableLists'); // all but shopping list
		if (value === undefined) {
		    return !!lists.get('length') && lists.isEvery('isActive', true);
		} 
		else {
		    lists.setEach('isActive', value);
		    lists.invoke('save');
		    return value;
		}
    })
});