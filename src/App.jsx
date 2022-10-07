import { useState } from 'react';
import Body from './Body';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#f3f8fd]">
       <Body/>
    
    </div>
  )
}

export default App
