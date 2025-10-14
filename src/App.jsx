import React from 'react'
import '../src/App.css'
import Nav from './component/Nav'
const App = () => {
  return (
    <>
   <header id="main-header">
        <div class="container" >
        <h1>Duolingo</h1> 
        </div>
    </header>
    <Nav/>

    

    <section id="showcase">
<div class="container">
<h1>
    ⚡ Epic stories. Endless adventures. Only on PlayStation.
</h1>
</div>
    </section>
    <div class="container">

        <h1>
            Welcome
        </h1>
        <p>
            🎯 Learn a new language — the fun way!
With Duolingo, you can learn Spanish, French, English, or even Japanese — just by playing quick, easy lessons every day!

💚 Cute characters
🔥 Daily streaks
🏆 Earn rewards as you learn

Download Duolingo today and start speaking a new language — for FREE!

📱 Duolingo — Learn languages the fun way!
        </p>

        <h2>Learn a language... or face the owl </h2>
        </div>
    
   
    <aside id="sidebar">
        <p>Play without limits</p>
    </aside>
    
    <footer id="main-footer">
        <p>copyright &copy; 2025 My Web🔥</p>
    </footer>
    </>
  )
}

export default App
