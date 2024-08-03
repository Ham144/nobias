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
	callbacks: {
		async session({ session, token, user }: any) {
			// Add custom logic if needed
			session.user.id = token.sub;
			return session;
		},
	},
};

export default NextAuth(authOptions);
