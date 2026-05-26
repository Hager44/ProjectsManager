import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { ProjectService } from "./project.service";
import type {
  CreateProjectRequest,
  CreateProjectResponse,
  GetProjectsResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
} from "./project.types";

export function useGetProjects() {
  return useQuery<GetProjectsResponse, Error>({
    queryKey: ["projects"],

    queryFn: () => ProjectService.getProjects(),
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation<CreateProjectResponse, Error, CreateProjectRequest>({
    mutationFn: (payload) => ProjectService.createProject(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation<UpdateProjectResponse, Error, UpdateProjectRequest>({
    mutationFn: (payload) => ProjectService.updateProject(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => ProjectService.deleteProject(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });
}
