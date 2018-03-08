var Page = require('./Page');

var ProxyDialog = Object.create(Page, {
  useProxy: { get: function() { return browser.element('#subscription-proxy-use');}},
  location: { get: function() { return browser.element('#subscription-proxy-server');}},
  username: { get: function() { return browser.element('#subscription-proxy-user');}},
  password: { get: function() { return browser.element('#subscription-proxy-password');}},
  org: { get: function() { return browser.element('#subscription-register-org');}},
  activationKey: { get: function() { return browser.element('#subscription-register-key');}},
  mainFrame: { get: function() {
    return browser.element('iframe[name="cockpit1:localhost/subscriptions"][data-loaded="1"]');
  }},
  registerButton: { get: function(){
    return browser.element('div.modal-footer button.btn-primary'); 
  }},

  wait: { value: function() {
    this.username.waitForVisible();
    this.password.waitForVisible();
    return this;
  }},
  setNoAuthProxy: { value: function (location){
    this.location.setValue(location);
    return this;
  }}
});

module.exports = ProxyDialog;
