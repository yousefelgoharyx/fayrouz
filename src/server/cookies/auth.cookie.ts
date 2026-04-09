import { JWTCookie } from "./jwt.cookie";
import { ProfileCookie } from "./profile.cookie";

export const AuthCookie = {
  get() {
    const tokens = JWTCookie.get();
    const profile = ProfileCookie.get();
    if (tokens === null || profile === null) return null;
    return {
      tokens,
      profile,
    };
  },
  clear() {
    JWTCookie.clear();
    ProfileCookie.clear();
  },
};
