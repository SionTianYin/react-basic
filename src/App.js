import { useState } from "react"

function App () {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  console.log(count)
  function test () {
    setCount(count + 1)
    setFlag(false)
    setList([1, 2, 3])
  }
  return (
    // <div>
    //   <button onClick={() => setCount(count + 1)}>{count}</button>
    // </div>
    <div>
      count:{count}
      <br></br>
      flag:{flag ? '1' : '0'}
      <br></br>
      list:{list.join('-')}
      <br></br>
      <button onCLick={test}>+</button>
    </div>
  )
}

export default App