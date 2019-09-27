import React, { useState } from 'react'
import data from './data'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <h1>Que linda aplicación hecha en React.js :)</h1>
      <video src={video} width={360} controls poster={logo} />
      <p>
        <img src={logo} alt="" width={40}/>
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App