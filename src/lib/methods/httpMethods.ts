import { axiosClient } from "../clients/axios";

export const get = async <T>(url: string): Promise<T> => {
  const response = await axiosClient.get<T>(url);

  return response.data;
};

export const post = async <T, P>(url: string, payload: P): Promise<T> => {
  const response = await axiosClient.post<T>(url, payload);

  return response.data;
};

export const put = async <T, P>(url: string, payload: P): Promise<T> => {
  const response = await axiosClient.put<T>(url, payload);

  return response.data;
};

export const remove = async <T>(url: string): Promise<T> => {
  const response = await axiosClient.delete<T>(url);

  return response.data;
};
