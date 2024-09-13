import styles from "./ProjectsStyles.module.css";
import todo from "../../assets/viberr.png";
import spms from "../../assets/spms.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link={"https://github.com/rtmyc/reactjs-todolist"}
          h3={"Kimar Has To-dos"}
          p={"To-do List App."}
        />

        <ProjectCard
          src={spms}
          link={"https://github.com/rtmyc/eg"}
          h3={"SPMS"}
          p={"Student Project Management System."}
        />
      </div>
    </section>
  );
}

export default Projects;
