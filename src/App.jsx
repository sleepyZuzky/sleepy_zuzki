import './App.css'
import Header from "./components/header_component/Header.jsx";
import Projects from "./components/projects_component/projects.jsx";


function App() {
  return <wa-page>
    <Header/>

    <header id='avatar' slot='main-header' className={'avatar_container'}>
      <wa-avatar
        style={{'width': '400px', 'height': '400px'}}
        image='assets/img/zuzki_christmas.webp'
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
        <a href='https://x.com/sleepy_zuzki' id="twitter" className={'social social__twitter'}>
          <wa-icon family='brands' name='x-twitter' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>
        <a href='https://youtube.com/@sleepy_zuzki' id="youtube" className={'social social__youtube'}>
          <wa-icon family='brands' name='youtube' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>
        <a href='https://twitch.tv/sleepy_zuzki' id="twitch" className={'social social__twitch'}>
          <wa-icon family='brands' name='twitch' style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
        </a>
      </section>
    </main>

    <footer slot="main-footer">
      <section id='contact' style={{'maxWidth': '600px', 'margin': 'auto'}}>
        <form className="input-validation-required">
          <wa-input name='name' label='Nombre'></wa-input>
          <wa-input name='email' label='Correo'></wa-input>
          <wa-input name='message' label='Mensaje'></wa-input>
          <wa-button type='submit' variant='brand'>Enviar</wa-button>
        </form>
      </section>
    </footer>
  </wa-page>
}

export default App
