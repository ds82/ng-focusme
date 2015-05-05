(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ngFocusme = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

angular.module('io.dennis.focusme')
  .directive('focusme', focusMe);

focusMe.$inject = ['FocusMe', '$timeout'];
function focusMe($focus, $timeout) {
  return {
    restrict: 'A',
    link: link,
    scope: {
      focusme: '='
    }
  };

  function link(scope, element, attrs) {
    var id = attrs.focusmeId || attrs.id || attrs.name;
    $focus.register(id, element);

    $timeout(function() {
      scope.$watch('focusme', onFocus);
    });

    function onFocus(shouldFocus) {

      if (angular.isDefined(shouldFocus)) {
        var event = (!shouldFocus || shouldFocus === 'false') ?
          'blur' : 'focus';
        element[0][event]();
      }
    }
  }
}

},{}],2:[function(_dereq_,module,exports){
'use strict';

angular.module('io.dennis.focusme', []);

_dereq_('./service');
_dereq_('./directive');

},{"./directive":1,"./service":3}],3:[function(_dereq_,module,exports){
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

},{}]},{},[2])(2)
});
