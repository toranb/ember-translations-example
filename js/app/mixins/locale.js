var LocaleMixin = Ember.Object.extend({
    language: function() {
        var locale = window.navigator.languages ? window.navigator.languages[0] : null;
        locale = locale || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (locale.indexOf('-') !== -1) {
            locale = locale.split('-')[0];
        }
        if (locale.indexOf('_') !== -1) {
            locale = locale.split('_')[0];
        }
        return locale;
    }
});

export default LocaleMixin;
