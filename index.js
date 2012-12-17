module.exports = function use (proto) {
  if (typeof proto == 'function') {
    var fn = proto
    var hasEnumerables = false
    for (var key in fn.prototype) {
      this[key] = fn.prototype[key]
      hasEnumerables = true
    }
    if (!hasEnumerables) {
      proto = this
      fn.apply(this, arguments)
    }
  } else {
    for (var key in proto) {
      this[key] = proto[key]
    }
  }
  return this
}
