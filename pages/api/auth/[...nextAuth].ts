import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	pages: {
		signIn: "/login",
	},
	providers: [
		GoogleProvider({
			clientId: String(process.env.GOOGLE_ID),
			clientSecret: String(process.env.GOOGLE_SECRET),
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		jwt: true,
	},
	callbacks: {
		async session({ session, user }: any) {
			session.user.id = user.id;
			return session;
		},
	},
};

export default NextAuth(authOptions);
