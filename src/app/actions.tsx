"use server";

import { match } from "assert";

const BOT_TOKEN = process.env.NEXT_BOT_TOKEN;
const USER_ID = process.env.NEXT_USER_ID;

type message = {
  name: string;
  company: string;
  from: string;
  text: string;
};

export async function sendTelegram(message: message) {
  let text = `*New Message From Portfolio!*\n*Name: ${message.name}*\n*Company: ${message.company}*\n*Email: ${message.from}*\n*Message: ${message.text}*`;
  text = text.replace(/[$^!.+?{}()[\]\\|]/g, (match) => `\\${match}`);
  console.log(text);
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: USER_ID,
          parse_mode: "MarkdownV2",
          text: text,
        }),
      }
    );
    const data = await res.json();

    if (data.ok) {
      return { ok: true, message: "Message sent successfully" };
    } else {
      return { ok: false, message: "Message failed to send" };
    }
  } catch (error) {
    return { ok: false, message: "Message failed to send" };
  }
}
