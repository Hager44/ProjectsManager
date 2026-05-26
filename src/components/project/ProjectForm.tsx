import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  projectSchema,
  type ProjectSchema,
} from "../../schemas/project.schema";
import { useCreateProject } from "../../lib/apis/ProjectServices/project.provider";

export default function ProjectForm() {
  const mutation = useCreateProject();

  const { register, handleSubmit } = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = (data: ProjectSchema) => {
    mutation.mutate({
      ...data,
      status: "active",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full border p-2 rounded"
      />

      <textarea
        {...register("description")}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Create
      </button>
    </form>
  );
}
