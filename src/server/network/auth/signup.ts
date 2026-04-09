import { z } from "zod";
import { httpAgent } from "../axios";

export type TSignupResponse = {
  token: string;
  id: string;
  name: string;
  email: string;
  role: string;
};

export type TSignupPayload = z.infer<typeof signupPayloadSchema>;

export const signupPayloadSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const signup = async (payload: TSignupPayload) => {
  const response = await httpAgent.post<TSignupResponse>(
    "/auth/signup",
    payload
  );
  return response.data;
};
