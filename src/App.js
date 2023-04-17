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
import React from "react"

function Hello () {
  return <div>hello</div>
}

class HelloComponent extends React.Component {
  render () {
    return <div>this is a class Component</div>
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