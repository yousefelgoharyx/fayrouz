import { cookies } from "next/headers";
import { ProfileAPI } from "../network/profile";

export const ProfileCookie = {
  set: (profile: ProfileAPI.TProfileResponse) => {
    cookies().set("profile", JSON.stringify(profile), {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
  },
  get: () => {
    try {
      const profileCookie = cookies().get("profile")?.value;
      if (profileCookie)
        return JSON.parse("profile") as ProfileAPI.TProfileResponse;
      return null;
    } catch {
      return null;
    }
  },
  clear: () => {
    cookies().delete("profile");
  },
};
