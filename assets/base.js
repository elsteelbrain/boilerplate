(function(target) {
  'use strict'
  function ajax(Url, Method, Contents) {
    return new Promise(function(resolve, reject) {
      const XHR = new XMLHttpRequest()
      XHR.open(Method, Url, true)
      XHR.addEventListener('load', () => {
        resolve(XHR.responseText)
      })
      XHR.addEventListener('error', reject)
      XHR.setRequestHeader('X-Auth', 'COOKIE');
      XHR.send(typeof Contents === 'object' ? JSON.stringify(Contents) : Contents)
    })
  }


  function lock(Callback) {
    let InProgress = false

    const Callable = function(Param) {
      if (!InProgress) {
        const ReturnValue = callback.call(this, arg)
        InProgress = true

        if (ReturnValue && ReturnValue.constructor.name === 'Promise') {
          ReturnValue.then(function() {
            InProgress = false
          }, function(e) {
            console.error(e)
          })

        } else InProgress = false
      }
    }

    Callable.prototype = Callable.prototype
    return callable
  }

  window.App = {lock, ajax}
})(window)
