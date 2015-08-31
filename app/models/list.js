import DS from 'ember-data';

/*global Ember*/

/* List model */
export default DS.Model.extend({

    /* Base model properties */
    title: DS.attr('string'),
    isActive: DS.attr('boolean', { defaultValue: false }),
    items: DS.hasMany('item'),

    /* Determines if current list is master shopping list */
    isShopping: Ember.computed('id', function(key, value) {
        if (this.get('id') == 0) {
            return true;
        }
        return false;
    }),

}).reopenClass({

    /* Fixture data */
    FIXTURES: [
        {
            id: 0,
            title: "Shopping List",
            isActive: true,
            items: []
        },
        {
            id: 1,
            title: "Smoky Roasted Sweet Potatoes",
            isActive: true,
            items: ["1", "2", "3", "4", "5", "6"]
        },
        {
            id: 2,
            title: "Grilled Asparagus and Scallions",
            isActive: false,
            items: ["7", "8", "9", "10", "11", "12", "13"]
        },
        {
            id: 3,
            title: "Blueberry Cinnamon Smoothie",
            isActive: false,
            items: ["14", "15", "16"]
        }
    ]
});
