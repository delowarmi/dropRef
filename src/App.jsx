
import { useRef } from 'react'
import './App.css'
import Container from './components/Container'


function App() {
  let dropRef= useRef(null)
  let handleDrop=()=>{
    // console.log(dropRef.current) 

    if(dropRef.current.style.display=="block"){
      dropRef.current.style.display="none"
    }
    else{
      dropRef.current.style.display="block"
    }
  }
  return (
    <>
     <Container>
      <div onClick={handleDrop}>
        <button className='click_btn bg-red-600 p-2 rounded-lg'>Click</button>
        <div className='bg-green-700 text-center hidden ' ref={dropRef}>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
     </Container>
    </>
  )
}

export default App
