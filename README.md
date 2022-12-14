# sandbox

A simply sandbox for run javascript code securely. 

## method

```javascript
/**
 * @param {String} code - The javascript code string that need to execude.
 * @param {Object} data - The variables that can be accessed during code execution.
 * @return {*} - any return in your code logic
 * */
sandbox(code, [, data])
```

## Usage

#### example 1

```javascript
import sandbox from './sandbox'

const code = `return 1 + 1`

// 2
console.log(sandbox(code))
```

#### example 2

Process data returned from the interface。

```javascript
import sandbox from './sandbox'

// get from interface
const data = [1, 2, 3]

const code = `return data.map(item => item * 2)`

// [2, 4, 6]
console.log(sandbox(code), { data })
```

You can read the passing data when the code is executed。

## Tip
You can also set whitelist variables in the sandbox, for example:

```javascript
import sandbox from './sandbox'

function mySandbox(code) {
    const whitelist = {
        Array,
        Object,
    }
    
    return sandbox(code, whitelist)
}
```

