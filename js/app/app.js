import Resolver from 'ember/resolver';
import Bootstrap from 'js/initializers/bootstrap';

var App = Ember.Application.extend({
  modulePrefix: 'js',
  Resolver: Resolver['default']
});

Ember.Application.initializer(Bootstrap);

export default App;
