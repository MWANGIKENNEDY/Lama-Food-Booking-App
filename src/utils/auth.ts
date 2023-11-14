import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getToken } from "next-auth/jwt";

declare module "next-auth"{
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}

declare module "next-auth/jwt"{
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  //callbacks make changes to the existing user sessions and tokens
  callbacks: {

    //make changes to existing user session
    async session({ session, token, user }) {

      console.log('session cb has been invoked',session)
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
//make changes to existing user token
    async jwt({ token }) {
      console.log('token cb has been invoked',token)
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },
  },
};

//getting user sessions from server components

export const getAuthSession = () => getServerSession(authOptions);
