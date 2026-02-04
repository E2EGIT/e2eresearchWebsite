import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/app/service/mailService";
import { demoFormSchema } from "../schema/form.schema";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const response: any = demoFormSchema.safeParse(reqBody);
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
    const {
      firstName,
      lastName,
      email,
      company,
      subject,
      interestedIn,
      phone,
      productName,
    } = response.data;

    let context = {
      firstName,
      lastName,
      email,
      company,
      interestedIn,
      phone,
      productName,
      subject
    };

    let isMailSent: any = await sendMail(
      `New demo request - ${productName}`,
      process.env.DEMO_REQ_RECEIVER_EMAIL,
      "demo-form-template.hbs",
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
