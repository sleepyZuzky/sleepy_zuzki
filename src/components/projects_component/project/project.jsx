import PropTypes from "prop-types";

export default function Project({techs, source, pageLink, pageRepo}) {

  const techsIcons = techs.map(tech =>  <>
      <wa-tooltip for={tech.key}>{tech.label}</wa-tooltip>
      <wa-icon key={tech.key} id={tech.key} family='brands' name={tech.key ?? 'font-awesome'} style={{'fontSize': '2rem', 'verticalAlign': 'middle', 'color': tech.color ?? '#ffffff'}}></wa-icon>
    </>)

  return <wa-card with-image with-footer class="card-overview w-full md:w-2/5 lg:w-1/3">
    <img slot='image' src={source} alt='some project' width='300px' height='200px'/>
    <p>Projecto realizado con</p>
    {techsIcons}

    <div slot='footer'>
      <wa-button href={pageLink} target='_blank'>
        <wa-icon slot='prefix' name='arrow-up-right-from-square' variant='duotone'></wa-icon>
        Ir
      </wa-button>
      <wa-button href={pageRepo} target='_blank'>
        <wa-icon slot='prefix' name='github' family='brands'></wa-icon>
        Repo
      </wa-button>
    </div>
  </wa-card>
}

Project.propTypes = {
  techs: PropTypes.array.isRequired,
  source: PropTypes.string.isRequired,
  pageLink: PropTypes.string,
  pageRepo: PropTypes.string,
}
