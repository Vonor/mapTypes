# mapTypes

When converting yaml to JavaScript objects you can't specify object types, as they turn into Strings. For example, the following yaml code turns into this JavaScript object.

```yaml
type: String
```

```js
{
    'type': 'String'
}
```

But we would expect something like this:

```js
{
    'type': String
}
```

This module maps the following object definitions into the corresponding objects.

```js
{
    "string": String,
    "object": Object,
    "number": Number,
    "array": Array,
    "boolean": Boolean,
    "bool": Boolean
}
```

## Usage

```shell
npm i vonor/mapTypes
```

```js
import mapTypes from 'mapTypes'

const schemaData = {
    'someDeclaration': {
        'type': 'Number'
    }
}
console.log(typeof schemaData.someDeclaration.type) // => String
let schema = mapTypes(schemaData, 'type')
console.log(typeof schemaData.someDeclaration.type) // => Number
```

Additionally it is possible to turns a String into a Regex

```js
import mapTypes from 'mapTypes'

const schemaData = {
    'someDeclaration': {
        'match': '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' // Match IP Address
    }
}
console.log(typeof schemaData.someDeclaration.match) // => String
let schema = mapTypes(schema, 'match', {regex: true})
console.log(typeof schemaData.someDeclaration.match) // => RegExp
```