# sandbox

一个简单的运行Javascript字符串的沙箱

## 方法

```javascript
/**
 * @param {String} code - 需要执行的javascript代码字符串
 * @param {Object} data - 沙箱里可访问的变量对象
 * @return {*} - 根据代码逻辑可以返回任意类型的值
 * */
sandbox(code, [, data])
```

## 使用

#### 示例 1

```javascript
import sandbox from './sandbox'

const code = `return 1 + 1`

// 2
console.log(sandbox(code))
```

#### 示例 2

Process data returned from the interface。

```javascript
import sandbox from './sandbox'

// 从接口返回的数据
const data = [1, 2, 3]

const code = `return data.map(item => item * 2)`

// [2, 4, 6]
console.log(sandbox(code), { data })
```

你可以在沙箱中读取到你传递的数据data。

## 提示
你也可以设置沙箱里可以访问的白名单变量，例如：

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

