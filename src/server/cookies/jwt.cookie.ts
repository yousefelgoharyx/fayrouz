import { cookies } from "next/headers";

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const JWTCookie = {
  set(tokens: Tokens) {
    cookies().set("accessToken", tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    cookies().set("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  },

  get(): Tokens | null {
    const accessToken = cookies().get("accessToken")?.value;
    const refreshToken = cookies().get("refreshToken")?.value;
    if (!accessToken || !refreshToken) {
      return null;
    }

    return { accessToken, refreshToken };
  },

  clear() {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
  },
};
