import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', function() {
    this.route('list', { path: '/:list_id', resetNamespace: true }, function() {});
    this.route('missing', { path: "/:*path" });
  });
  this.route('about');
  this.route('missing', { path: "*path" });
});

export default Router;
