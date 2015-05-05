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
