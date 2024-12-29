import Project from "./project/project.jsx";
import styles from "./projects.module.css";

export default function Projects() {
  return <section id='projects' className={styles.projects_container}>
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </section>
}
