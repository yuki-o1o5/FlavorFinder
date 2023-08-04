import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // providers: [Google, cledential, github],
  providers: [
    CredentialsProvider({
      name: "email and password",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "hoge@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        //verify if a user exist our database
        const user = {
          id: "1",
          name: "hoge",
          email: "hoge@gmail.com",
        };
        return user;
      },
    }),
  ],
};
