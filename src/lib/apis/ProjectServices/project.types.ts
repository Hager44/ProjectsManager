export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
}

export type GetProjectsResponse = Project[];

export interface CreateProjectRequest {
  name: string;
  description: string;
  status: string;
}

export interface CreateProjectResponse {
  id: number;
  name: string;
  description: string;
  status: string;
}

export interface UpdateProjectRequest {
  id: number;
  name: string;
  description: string;
  status: string;
}

export interface UpdateProjectResponse {
  success: boolean;
}

export interface DeleteProjectResponse {
  success: boolean;
}
