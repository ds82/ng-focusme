# ng-focusme

angular module to (auto-)focus form elements

# install

```
npm install ng-focusme
```

# howto use

 * download or install via npm
 * include JS file in your code base
 * add module dependency to your app
```js
angular.module('app', ['io.dennis.focusme']);
```

## autofocus

If you just want to use the autofocus feature, just add the directive to
your HTML and pass it a truthy arguments:


 ```html
 <input type="text" name="some" value="blubb" focusme="true" />
 ```

## activate input via function

Sometimes you need to focus an element after an event or explicit via a function call. To achieve this, this package contains a service that can focus any registered element (*without* traversing the DOM):

 ```html
 <input type="text" name="some" value="blubb" focusme />
 ```

 ```js
angular.module('app').controller('SomeCtrl', SomeCtrl);
SomeCtrl.$inject = ['FocusMe'];
function SomeCtrl($focusme) {
...
  $focusme.focus('some');
...
}
 ```

The parameter passed to `$focusme.focus()` is the focusme-id of the element. You can explicit define a focusme-id using the focusme-id attribute:

 ```html
 <input type="text" name="some" value="blubb" focusme focusme-id="bob" />
 ```

If you don't define it, **focusme** uses the elements ID or name (id before name).


# license

MIT
