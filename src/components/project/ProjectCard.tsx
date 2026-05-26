import type { Project } from "../../lib/apis/ProjectServices/project.types";

interface Props {
  project: Project;

  onDelete: () => void;
}

export default function ProjectCard({ project, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">{project.name}</h2>

          <p className="text-gray-500 mt-2">{project.description}</p>

          <span className="inline-block mt-3 text-sm bg-gray-200 px-3 py-1 rounded">
            {project.status}
          </span>
        </div>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
