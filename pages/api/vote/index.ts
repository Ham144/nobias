import { NextApiRequest, NextApiResponse } from "next";
import { getSession, useSession } from "next-auth/react";
import { prisma } from "../../../lib/prisma";

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req });
	if (!session) {
		return res.status(404).json({ error: "You should Login first" });
	}

	if (req.method === "POST") {
		const result = await prisma.votes.create({
			data: {
				title: req.body.title,
				startDateTime: req.body.startDateTime,
				endDateTime: req.body.endDateTime,
				publisher: req.body.publisher,
				code: req.body.code,
			},
		});
	}

	return res.status(200).json({ data: "Hello world" });
}
