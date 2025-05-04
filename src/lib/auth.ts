import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
      }, 
      async authorize (credentials) {

        if(!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password")
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if(!user) {
            throw new Error("No user found")
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);

          if(!isValid) throw new Error("Invalid passsword")

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name
          }

        } catch (error) {
          throw error
        }
      }
    })
  ],

  callbacks: {
    async jwt({user, token}){
      if(user) {
        token.id = user.id
      }
      return token
    },

    async session({session, token}) {

      if(session.user) {
        session.user.id = token.id as string
      }
      
      return session
    }
  },
  pages: {
    signIn: "/login",
    error: "/login"
  },

  session: {
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60
  }, 
  secret: process.env.NEXTAUTH_SECRET
}