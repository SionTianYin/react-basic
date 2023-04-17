// // 1.识别常规的变量
// const name = 'ELise'
// // 2.原生js调用
// const getAge = () =>{
//   return 24
// }
// // 3.三元运算符
// const flag = true

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       {getAge()}
//       {flag ? 'nice': 'ass'}
//       {console.log('hello world')}
//       <MyButton />
//     </div>
//   );
// }

// 列表渲染：map songs.map(item => <li>{item.name}</li>
// 重复渲染的是哪个模板，就return谁
// const songs = [
//   { id: 1, name: '痴心绝对' },
//   { id: 2, name: '像我这样的人' },
//   { id: 3, name: '南山南' }
// ]

// function App() {
//   return (
//     <div className="App">
//       <ul>
//         {
//           songs.map(song => <li key={song.id}>{song.name}/</li>)
//         }
//       </ul>
//     </div>
//   )
// }


// // export default App
// // 来个布尔值
// const flag = true
// function App() {
//   return (
//     <div className="App">
//       {/* 条件渲染字符串 */}
//       {flag ? 'react真有趣' : 'vue真有趣'}
//       {/* 条件渲染标签/组件 */}
//       {flag ? (
//         <div>
//           <span>this is span</span>
//         </div>) : null}
//     </div>
//   )
// }
// export default App 

// const getHtag = (type) =>{
//   if(type === 1){
//     return <h1>this is h1</h1>
//   }
//   if(type === 2){
//     return <h2>this is h2</h2>
//   }
//   if(type === 3){
//     return <h3>this is h3</h3>
//   }
// } 

// function App(){
//   return(
//     <div classname = "App">
//       {getHtag(1)}
//       {getHtag(2)}
//       {getHtag(3)}
//     </div>
//   )
// }

// export default App

// const style1 ={
//   color:'red',
//   fontSize:'30px'
// }
// const style2 ={
//   color:'green',
// }
import { click } from "@testing-library/user-event/dist/click"
import React from "react"

function Hello () {
  const clickHandler = (e, msg) => {
    // e.preventDefault()
    console.log('triggered click handler', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is a msg')}>113</div>
}

class HelloComponent extends React.Component {
  clickHandler = () => {
    console.log('triggered click handler')
  }
  render () {
    return <div onClick={this.clickHandler}>this is a class Component</div>
  }
}



function App () {
  return (
    <div className="App">
      {
        <>
          <Hello />
          <Hello></Hello>
          <HelloComponent></HelloComponent>
        </>
      }
    </div>
  )
}

export default App

// 面向对象语言中 this 表示当前对象的一个引用。

// 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

// 在方法中，this 表示该方法所属的对象。
// 如果单独使用，this 表示全局对象。
// 在函数中，this 表示全局对象。
// 在函数中，在严格模式下，this 是未定义的(undefined)。
// 在事件中，this 表示接收事件的元素。
// 类似 call() 和 apply() 方法可以将 this 引用到任何对象。