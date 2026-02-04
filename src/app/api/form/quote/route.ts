import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/app/service/mailService";
import { quoteFormSchema } from "../schema/form.schema";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const response: any = quoteFormSchema.safeParse(reqBody);
    if (!response.success) {
      const { errors } = response.error;

      return NextResponse.json(
        {
          message: "Invalid request",
          errors,
          success: false,
          status: 400,
        },
        {
          status: 400,
        }
      );
    }
    const { firstName, lastName, email, company, interestedIn, additional } =
      response.data;

    let context = {
      firstName,
      lastName,
      email,
      company,
      interestedIn,
      additional,
    };

    let isMailSent: any = await sendMail(
      "New Query",
      process.env.QUOTE_REQ_RECEIVER_EMAIL,
      "quotes-template.hbs",
      context
    );

    return NextResponse.json(
      {
        message: isMailSent
          ? "Mail send successfully"
          : "Mail not send successfully",
        success: true,
        data: null,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
