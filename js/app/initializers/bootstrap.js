import LocaleMixin from 'js/mixins/locale';
import PromiseMixin from 'js/mixins/promise';

var initializer = {
  name: "bootstrap",
  initialize: function(container, application) {
      application.deferReadiness();
      var locale = LocaleMixin.create();
      var promise = PromiseMixin.create();
      var endpoint = '/api/translations?locale=%@'.fmt(locale.language());
      promise.xhr(endpoint, 'GET').then(function(response) {
          Ember.I18n.translations = response;
          application.advanceReadiness();
      }, function(error) {
          window.alert("an error occurred loading the application");
      });
  }
}

export default initializer;
