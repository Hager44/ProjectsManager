import {
  CREATE_PROJECT_URL,
  DELETE_PROJECT_URL,
  GET_PROJECTS_URL,
  UPDATE_PROJECT_URL,
} from "../../clients/constants/project.constants";

import { get, post, put, remove } from "../../methods/httpMethods";
import type {
  CreateProjectRequest,
  CreateProjectResponse,
  DeleteProjectResponse,
  GetProjectsResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
} from "./project.types";

export const ProjectService = {
  getProjects: () => get<GetProjectsResponse>(GET_PROJECTS_URL),

  createProject: (payload: CreateProjectRequest) =>
    post<CreateProjectResponse, CreateProjectRequest>(
      CREATE_PROJECT_URL,
      payload,
    ),

  updateProject: (payload: UpdateProjectRequest) =>
    put<UpdateProjectResponse, UpdateProjectRequest>(
      `${UPDATE_PROJECT_URL}/${payload.id}`,
      payload,
    ),

  deleteProject: (id: number) =>
    remove<DeleteProjectResponse>(`${DELETE_PROJECT_URL}/${id}`),
};
