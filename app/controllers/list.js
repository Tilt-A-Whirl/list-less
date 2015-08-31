import Ember from 'ember';

export default Ember.Controller.extend({

	/* Sort items alphabetically */
    sortPropsAlpha: ['isCompleted', 'title'],
    sortedItemsAlpha: Ember.computed.sort('model.items', 'sortPropsAlpha'),

    /* Sort items by parent list title */
    sortPropsList: ['isCompleted', 'list.title'],
	sortedItemsList: Ember.computed.sort('model.items', 'sortPropsList'),
    
    /* Sort items by list title, but make sure shopping list items always 
    come first */
    sortedItemsListShoppingFirst: Ember.computed('sortedItemsList', 
    											 function(key, value) {
    	var shoppingItems = this.get('sortedItemsList').filterBy('list.id', '0');
    	return shoppingItems.addObjects(this.get('sortedItemsList').rejectBy('list.id', '0'));
    }),

    /* Sort flag default=true */
    alphaSort: true,

    /* Change sort based on sort flag */
    sortedItems: Ember.computed('alphaSort', 
    							'sortedItemsAlpha', 
    							'sortedItemsList', 
    							function(key, value) {
    	if (this.get('alphaSort')) {
    		return this.get('sortedItemsAlpha');
    	}
    	return this.get('sortedItemsListShoppingFirst');
    }),

    /* Check if current list is empty. Only used for shopping list 
    so message can be displayed when empty. */
    isListEmpty: Ember.computed('model.items.@each.isIncluded', 
    							function(key, value){
    	var items = this.get('model.items').filterBy('isIncluded', true);
		if (items.get('length') > 0) {
			return false;
		}
		return true;
    }),

    /* Checkbox and button actions */
	actions: {

	    /* Clear all shopping list only items (not from saved lists) */
	    clearAddedItems: function(list) {
	    	if (list.get('id') !== '0') {
	    		return;
	    	}
	    	var items = list.get('items');
	    	items.invoke('deleteRecord');
	    	items.invoke('save');
	    },
	    
	    /* Toggle the sort flag */
	    toggleAlphaSort: function() {
	    	this.set('alphaSort', !this.get('alphaSort'));
	    }
	},

	/* Mark all items complete or incomplete */
	completeAllItems: Ember.computed('model.items.@each.isCompleted', 
									 function(key, value) {
		var items = this.get('model.items');
		if (value === undefined) {
		    return !!items.get('length') && items.isEvery('isCompleted', true);
		} 
		else {
		    items.setEach('isCompleted', value);
		    items.invoke('save');
		    return value;
		}
    })
});