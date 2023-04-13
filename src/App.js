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
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          songs.map(item => <li>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App