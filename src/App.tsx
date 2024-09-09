import './App.css'
import { Instagram, X } from 'lucide-react'

function App() {
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

        <a href="https://www.tiktok.com/@river_gnome_">
          <div className="social_button" >
            <div className="social_icon" >TikTok</div>
            <div className="account_name">@river_gnome_</div>
          </div>
        </a>
      </div>
    </>
  )
}

export default App
