export default function Project() {
  return <wa-card with-image with-footer className="card-overview">
    <img slot='image' src='https://placehold.co/300x200' alt='some project' width='300px' height='200px' />
    <p>Descripcion del projecto</p>

    <div slot='footer'>
      <wa-button href='#'>Open</wa-button>
      <wa-button href='#'>Repo</wa-button>
    </div>
  </wa-card>
}
