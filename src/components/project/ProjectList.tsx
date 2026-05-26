import {
  useDeleteProject,
  useGetProjects,
} from "../../lib/apis/ProjectServices/project.provider";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { data: projects = [], isLoading } = useGetProjects();

  const deleteMutation = useDeleteProject();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={() => deleteMutation.mutate(project.id)}
        />
      ))}
    </div>
  );
}
