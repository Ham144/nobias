import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token, user }: any) {
			session.user.id = token?.sub;
			return session;
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
	debug: true, // Enable debug mode
});
