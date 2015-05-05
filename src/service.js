'use strict';

angular.module('io.dennis.focusme')
  .service('FocusMe', FocusMe);

FocusMe.$inject = ['$timeout'];
function FocusMe($timeout) {
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

    var element = map[key];
    if (angular.isDefined(element)) {
      $timeout(focusElement);
    }

    function focusElement() {
      element = (angular.isElement(element)) ?
        element : element[0];
      element.focus();
    }
  }

}
