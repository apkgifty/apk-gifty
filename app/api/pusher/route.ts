import Pusher from "pusher";

import axiosInstance from "@/utils/axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const pusher = new Pusher({
    appId: "1630971",
    key: "e597b63b0a16d6c4a2c6",
    secret: "9213167c7ce619f23cb5",
    cluster: "mt1",
    useTLS: true,
  });
  const { message, sender, userId } = await req.json();

  console.log(message, sender);

  try {
    const response = await pusher.trigger(
      `private-chatify.${userId}`,
      "messaging",
      {
        from_id: userId,
        to_id: "1",
        message,
      }
    );

    NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
  }

  //   try {
  //     const response = await pusher.trigger(
  //       `private-chatify.1`,
  //       "client-contactItem",
  //       { from: "2", to: "1", update: true }
  //     );

  //     NextResponse.json({ message: "success" });
  //   } catch (error) {
  //     console.log(error);
  //   }
}
