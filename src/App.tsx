import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Instagram, Pin, X } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1 className='account_name'>river_gnome_ 💚</h1>
        <p className="description">
          Doing art time to time<br/>
          Started drawing 2022-10-11<br/>
          Imagine not doing art in 2024 🤡👺
        </p>

        <a href="https://www.instagram.com/river_gnome_/">
          <div className="social_button">
            <Instagram className="social_icon"/> 
            <div className="account_name">@river_gnome_</div>
          </div>
        </a>

        <a href="https://x.com/river_gnome_">
          <div className="social_button" >
            <X className="social_icon"/>
            <div className="account_name">@river_gnome_</div>
          </div>
        </a>
      </div>
    </>
  )
}

export default App
