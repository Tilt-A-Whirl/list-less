import DS from 'ember-data';

/*global Ember*/

/* List item model */
export default DS.Model.extend({

    /* Base model properties */
    title: DS.attr('string'),
    quantity: DS.attr('number'),
    isCompleted: DS.attr('boolean', { defaultValue: false }),
    list: DS.belongsTo('list', { async: true }),

    /* Computed property based on isActive property of parent list */
    isIncluded: Ember.computed.alias('list.isActive')

}).reopenClass({

    /* Fixture data */
    FIXTURES: [
        {
            id: 1,
            title: "Sweet potatoes",
            quantity: 3,
            isCompleted: false,
            list: "1"
        },
        {
            id: 2,
            title: "Bacon",
            quantity: 1,
            isCompleted: false,
            list: "1"
        },
        {
            id: 3,
            title: "Chili powder",
            quantity: 1,
            isCompleted: false,
            list: "1"
        },
        {
            id: 4,
            title: "Sea salt",
            quantity: 1,
            isCompleted: false,
            list: "1"
        },
        {
            id: 5,
            title: "Cinnamon",
            quantity: 1,
            isCompleted: false,
            list: "1"
        },
        {
            id: 6,
            title: "Cayenne pepper",
            quantity: 1,
            isCompleted: false,
            list: "1"
        },
        {
            id: 7,
            title: "Asparagus bunch",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 8,
            title: "Scallions bunch",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 9,
            title: "Sesame oil",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 10,
            title: "Sea salt",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 11,
            title: "Minced garlic",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 12,
            title: "Ginger",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 13,
            title: "Cracked black pepper",
            quantity: 1,
            isCompleted: false,
            list: "2"
        },
        {
            id: 14,
            title: "Frozen blueberries",
            quantity: 1,
            isCompleted: false,
            list: "3"
        },
        {
            id: 15,
            title: "Coconut milk",
            quantity: 1,
            isCompleted: false,
            list: "3"
        },
        {
            id: 16,
            title: "Cinnamon",
            quantity: 1,
            isCompleted: false,
            list: "3"
        },
        {
            id: 17, 
            title: "Paper towels",
            quantity: 1,
            isCompleted: false,
            list: "0"
        }
    ]
});