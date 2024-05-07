import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { InfoContext } from './context/infoContext'
import { useEffect, useState } from 'react'
import {getUserByToken} from './services/profile.service'






function App() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token && !info) {
    getUserByToken().then((result) => setInfo(result))
    }
    }, [])

  return (
    <InfoContext.Provider value={{info,setInfo}}>
      <RouterProvider router={router}/>
    </InfoContext.Provider>
  )
}

export default App
