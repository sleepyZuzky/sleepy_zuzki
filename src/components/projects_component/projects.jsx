import Project from "./project/project.jsx";
import styles from "./projects.module.css";

export default function Projects() {
  return <section id='projects' className={styles.projects_container}>
    <Project
      techs={[
        {label: 'React', key: 'react', color:'#00d8ff'},
        {label: 'Web Awesome', key:'web-awesome', color:'#f36944'},
      ]}
      source='/assets/img/portfolio_page.webp'
      pageRepo='https://github.com/sleepyZuzky/sleepy_zuzki'
      pageLink='https://www.zuzki.dev'
    />
  </section>
}
