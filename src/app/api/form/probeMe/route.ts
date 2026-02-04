import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/app/service/mailService";
import { probeMeFormSchema } from "../schema/form.schema";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const response: any = probeMeFormSchema.safeParse(reqBody);
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
    const { name, email, company, phone } = response.data;

    let context = {
      name,
      email,
      company,
      phone,
    };

    let isMailSent: any = await sendMail(
      "ProbeMe Query",
      process.env.QUOTE_REQ_RECEIVER_EMAIL,
      "promeMeAi.hbs",
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
