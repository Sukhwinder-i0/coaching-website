import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from 'bcrypt'
import type { User } from "next-auth";

 
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
      
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });
      
          if (!user) {
            return null;
          }
      
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            return null;
          }
      
          return {
            id: user.id.toString(),
            email: user.email
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null; // ⭐ REQUIRED
        }
      }
      
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },

  pages: {
    signIn: "/login",
    error: "/login"
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },

  secret: process.env.NEXTAUTH_SECRET
};
