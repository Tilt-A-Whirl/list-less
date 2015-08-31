import Ember from 'ember';

/* Item quantity and delete buttons component */
export default Ember.Component.extend({

	/* Item quantity and delete actions */
	actions: {

		/* Delete list item */
		deleteItem: function(item) {
	    	item.deleteRecord(); // clears relationships
	    	item.save();
	    },

	    /* Increase item quantity by 1 */
	    increaseQuantity: function(item) {
	    	var quantity = item.get('quantity');
	    	quantity += 1;
	    	item.set('quantity', quantity);
	    	item.save();
	    },

	    /* Decrease item quantity by 1 */
	    decreaseQuantity: function(item) {
	    	var quantity = item.get('quantity');
	    	quantity -= 1;
	    	if (quantity < 1) {
	    		quantity = 1;
	    	}
	    	item.set('quantity', quantity);
	    	item.save();
	    }

	}
	
});
