import Ember from 'ember';

/* An item is considered editable (has quantity and delete
buttons) if the item is displayed under its parent list only. 
For example, an item from an included saved list will not be 
shown as editable on the master shopping list, but items added
to the shopping list itself will be. All items on a saved list
are editable while viewing the saved list only. This returns
the class name 'hidden' if an item is not considered editable.
This is only used in the item-buttons component. */
export function editableItem(params/*, hash*/) {
	var list_id = params[0];
	var item_list_id = params[1];
	if (list_id == item_list_id) {
		return '';
	}
  	return 'hidden';
}

export default Ember.Helper.helper(editableItem);
