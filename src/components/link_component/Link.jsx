import PropTypes from "prop-types";
import styles from './link.module.css'

export default function Link({name, refName}) {
  return <a className={styles.link_container} href={refName}>
      <span className={styles.link}>
          {name}
      </span>
    </a>
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  refName: PropTypes.string
}
