import { httpAgent } from "../axios";

export type TSong = {
  id: string;
  name: string;
  url: string;
  image: string;
  size: number;
  duration: number;
  created_at: string;
  upadted_at: string;
};
export const get = async () => {
  const response = await httpAgent.get<TSong[]>("/song");
  return response.data;
};
