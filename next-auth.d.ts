import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      type: "admin" | "student" | "faculty";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    type: "admin" | "student" | "faculty";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    type: "admin" | "student" | "faculty";
  }
}
