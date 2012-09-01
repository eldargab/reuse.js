module.exports = function use (proto) {
    if (typeof proto == 'function') {
        var protoHasEnumerables = false
        for (var key in proto.prototype) {
            this[key] = proto.prototype[key]
            protoHasEnumerables = true
        }
        if (!protoHasEnumerables)
            proto.apply(this, [].slice.call(arguments, 1))
    } else {
        for (var key in proto) {
            this[key] = proto[key]
        }
    }
    return this
}