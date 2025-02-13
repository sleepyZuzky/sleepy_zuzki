import Link from "../link_component/Link.jsx";

export default function Header() {
  return <header slot='header' className='wa-body-s shadow-sm'>
    <section id='navbar' className="wa-split w-full flex flex-col items-center lg:flex-row">
      <a href='/' className='wa-split-item'>
        <wa-icon family='duotone' name="code" class="text-4xl align-middle"></wa-icon>
        <h1 id="brand-name" className="wa-heading-s wa-desktop-only inline-block align-middle text-2xl font-bold">
          Sleepy Zuzki
        </h1>
      </a>

      <div className="text-sm md:text-lg">
        <Link name={'Sobre mi'} refName={'#avatar'}/>
        <Link name={'Proyectos'} refName={'#projects'}/>
        <Link name={'Overlays'} refName={'https://overlays.zuzki.dev'}/>
      </div>
    </section>
  </header>
}
