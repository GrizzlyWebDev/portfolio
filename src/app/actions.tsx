"use server";

import { GithubRepoResponseObject, message } from "./types";

const BOT_TOKEN = process.env.NEXT_BOT_TOKEN;
const USER_ID = process.env.NEXT_USER_ID;

export async function sendTelegram(message: message): Promise<{
  ok: boolean;
  message: string;
}> {
  let text = `*New Message From Portfolio!*\n*Name: ${message.name}*\n*Company: ${message.company}*\n*Email: ${message.email}*\n*Message: ${message.text}*`;
  text = text.replace(/[$^!.+?{}()[\]\\|]/g, (match) => `\\${match}`);
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

export async function fetchGithubRepos(): Promise<GithubRepoResponseObject[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/GrizzlyWebDev/repos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
