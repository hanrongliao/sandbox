/**
 * @param {String} code - Javascript code string
 * @returns {Function} - The function that can be executed after compilation
 * */
function compile(code) {
  const securityCode = `with (context) {
    function execute() {
      "use strict";
      ${code}
    }

    return execute()

  }`

  /** generate an executable function that has a parameter named context */
  const fn = new Function('context', securityCode)

  return function (context) {
    /** As running context */
    const contextProxy = new Proxy(context, {
      has() {
        return true
      },
      get(target, key) {
        if (key === Symbol.unscopables) return undefined
        return target[key]
      },
    })
    return fn(contextProxy)
  }
}

/**
 * @param {String} code - Javascript code string
 * @param {Object} data - Data that can be accessed during code execution。
 * @returns {*}
 * */
function sandbox (code, data = {}) {
  try {
    return compile(code)({ ...data })
  } catch (e) {
    console.log(e)
  }
}

export default sandbox
