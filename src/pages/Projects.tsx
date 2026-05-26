import ProjectForm from "../components/project/ProjectForm";
import ProjectList from "../components/project/ProjectList";

export default function Projects() {
  return (
    <div className="space-y-6">
      <ProjectForm />
      <ProjectList />
    </div>
  );
}
