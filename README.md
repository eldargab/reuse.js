# reuse.js

Funky way to extend your objects

## usage

``` javascript
obj.use = require('reuse')

// mix some properties
obj.use({
  root: 'public'
})

// or
function root (that, dir) {
  that.root = dir
}
obj.use(root, 'public')

// in both cases
obj.should.have.property('root').equal('public')
```

There is also a weird thing. Passing in a function with enumerable properties on
prototype is the same as `.use(fn.protototype)`

``` javascript
function Klass () {
  this.a = 'a'
}

Klass.prototype.foo = 'foo'

obj.use(Klass)

obj.should.have.property('foo').equal('foo')
obj.should.not.have.property('a')
```

## Installation

Via npm

```
npm install reuse
```

To run tests install dev dependecies and run `npm test` command

```
npm install -d
npm test
```

## License

MIT
