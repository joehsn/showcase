import type { NextApiRequest, NextApiResponse } from "next";
import EmailTemplate from "../../components/EmailTemplate";
import { Resend } from "resend";
import { FormSchema } from "@/lib/FormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function Send(req: NextApiRequest, res: NextApiResponse) {
	const parsedData = FormSchema.parse(req.body);
	const { data, error } = await resend.emails.send({
		from: `Acme <youssef@joehsn.me>`,
		to: "joehsn@outlook.com",
		subject: `Message from ${parsedData.name}`,
		react: EmailTemplate({ ...parsedData }),
	});

	if (error) {
		return res.status(400).json(error);
	}

	return res.status(200).json(data);
}
