import Link from "../link_component/Link.jsx";

export default function Header() {
  return <header slot='header' className='wa-body-s'>
    <section id='navbar' className="wa-split w-full flex flex-col items-center lg:flex-row shadow-sm">
      <div>
        <wa-icon family='duotone' name="code" class="text-4xl align-middle"></wa-icon>
        <h1 id="brand-name" className="wa-heading-s wa-desktop-only inline-block align-middle text-2xl font-bold">
          Sleepy Zuzki
        </h1>
      </div>

      <div className="text-sm md:text-lg">
        <Link name={'Sobre mi'} refName={'#avatar'}/>
        <Link name={'Proyectos'} refName={'#projects'}/>
      </div>
    </section>
  </header>
}
