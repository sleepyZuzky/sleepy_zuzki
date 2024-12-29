import Link from "../link_component/Link.jsx";

export default function Header() {
  return <header slot='header' className='wa-body-s'>
    <section id='navbar' className="wa-split">
      <wa-icon family='duotone' name="code" style={{'fontSize': '2rem', 'verticalAlign': 'middle'}}></wa-icon>
      <h1 id="brand-name" className="wa-heading-s wa-desktop-only" style={{'display': 'inline-block', 'verticalAlign': 'middle'}}>
        Sleepy Zuzki
      </h1>

      <Link name={'Sobre Mi'} refName={'#avatar'}/>
      <Link name={'Projectos'} refName={'#projects'}/>
      <Link name={'Redes'} refName={'#socials'}/>
      <Link name={'Contacto'} refName={'#contact'}/>
    </section>
  </header>
}
