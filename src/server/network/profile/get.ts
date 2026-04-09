import { httpAgent } from "../axios";

export type TProfileResponse = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const get = async () => {
  const response = await httpAgent.get<TProfileResponse>("/user");
  return response.data;
};
