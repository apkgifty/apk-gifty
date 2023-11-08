// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);

  let data = JSON.stringify({
    ...body,
    lastname: "",
    password_confirmation: body.password,
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://test.apkxchange.com/api/register",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);

    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
      headers: error.response.header,
    });
  }
}
