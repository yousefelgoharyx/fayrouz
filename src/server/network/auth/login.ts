import { z } from "zod";
import { httpAgent } from "../axios";

export type TLoginResponse = {
  token: string;
  id: string;
  name: string;
  email: string;
  role: string;
};

export type TLoginPayload = z.infer<typeof loginPayloadSchema>;

export const loginPayloadSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const login = async (payload: TLoginPayload) => {
  const response = await httpAgent.post<TLoginResponse>("/auth/login", payload);
  return response.data;
};
