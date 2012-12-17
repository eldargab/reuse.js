require('should')
var use = require('..')

describe('reuse(proto)', function () {
  var obj

  beforeEach(function () {
    obj = {}
  })

  it('test extending with object', function () {
    use.call(obj, {
      a: 'a'
    }).should.equal(obj)
    obj.should.have.property('a').equal('a')
  })

  it('test extending with function', function () {
    use.call(obj, function (that, arg1, arg2) {
      that.arg1 = arg1
      that.arg2 = arg2
      that.should.equal(obj)
      this.should.equal(obj)
    }, 10, 20).should.equal(obj)
    obj.should.eql({
      arg1: 10,
      arg2: 20
    })
  })

  it('test extending with function prototype', function () {
    function Klass () {
      this.a = 'a'
    }
    Klass.prototype = {
      foo: 'foo'
    }
    use.call(obj, Klass).should.equal(obj)
    obj.should.have.property('foo').equal('foo')
    obj.should.not.have.property('a')
  })
})
