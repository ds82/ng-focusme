'use strict';

angular.module('io.dennis.focusme')
  .service('FocusMe', FocusMe);

function FocusMe() {
  var pub = this;
  var map = {};

  pub.register = register;
  pub.focus = focus;

  function register(key, element) {

    if (key && element) {
      map[key] = element;
    }
  }

  function focus(key) {

    if (map[key]) {
      map[key][0].focus();
    }
  }
}
