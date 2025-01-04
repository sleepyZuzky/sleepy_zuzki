import './App.css'
import Header from "./components/header_component/Header.jsx";
import Projects from "./components/projects_component/projects.jsx";
import { Analytics } from "@vercel/analytics/react"


function App() {
  return <wa-page mobile-breakpoint="1">
    <Analytics/>
    <Header/>

    <header id='avatar' slot='main-header' className={'avatar_container'}>
      <wa-avatar
        class='avatar'
        image='https://assets.zuzki.dev/zuzki_christmas.webp'
        label='Zuzki'></wa-avatar>

      <section id='about' className={'about_container'}>
        <p>Soy un desarrollador apasionado por la creación de aplicaciones web innovadoras y funcionales.</p>
        <p>Siempre busco nuevas formas de mejorar mis habilidades y actualmente estoy explorando el emocionante mundo
          del diseño de interfaces para las transmisiones en vivo.</p>
        <p>Mi enfoque actual se centra en combinar creatividad y tecnología para ofrecer soluciones que marquen la
          diferencia.</p>
      </section>
    </header>

    <main className="wa-body-l" style={{'textAlign': 'center'}}>
      <Projects/>

      <section id='socials'>
        <wa-tooltip for='twitter'>X (Formely Twitter)</wa-tooltip>
        <a href='https://x.com/sleepy_zuzki' id="twitter" aria-label='X (Formely Twitter)'
           className={'social social__twitter'} target='_blank'>
          <wa-icon family='brands' name='x-twitter' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>

        <wa-tooltip for='youtube'>Youtube Channel</wa-tooltip>
        <a href='https://youtube.com/@sleepy_zuzki' id="youtube" aria-label='Youtube Channel'
           className={'social social__youtube'} target='_blank'>
          <wa-icon family='brands' name='youtube' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>

        <wa-tooltip for='twitch'>Twitch Channel</wa-tooltip>
        <a href='https://twitch.tv/sleepy_zuzki' id="twitch" aria-label='Twitch Channel'
           className={'social social__twitch'} target='_blank'>
          <wa-icon family='brands' name='twitch' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>
      </section>
    </main>
  </wa-page>
}

export default App
