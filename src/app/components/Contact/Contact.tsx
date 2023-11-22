"use client";
import React, { useState, useEffect } from "react";
import SharedNav from "../SharedNav/SharedNav";

import styles from "./Contact.module.scss";
import { usePathname } from "next/navigation";
import { sendTelegram } from "@/app/actions";
import LoadingSpinner from "../Icons/LoadingSpinner";

type message = {
  name: string;
  company: string;
  from: string;
  text: string;
};

type error = {
  name: string;
  company: string;
  from: string;
  text: string;
};

export default function Contact() {
  const pathname = usePathname();
  const [message, setMessage] = useState({} as message);
  const [messageError, setMessageError] = useState({} as error);
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.target.name) {
      case "name":
        switch (event.target.value) {
          case "":
            setMessageError({ ...messageError, name: "Name cannot be empty" });
            break;
          default:
            setMessageError({ ...messageError, name: "" });
            break;
        }
        break;
      case "Company":
        switch (event.target.value) {
          case "":
            setMessageError({
              ...messageError,
              company: "Company cannot be empty",
            });
            break;
          default:
            setMessageError({ ...messageError, company: "" });
            break;
        }
        break;
      case "email":
        switch (event.target.value) {
          case "":
            setMessageError({ ...messageError, from: "Email cannot be empty" });
            break;
          default:
            setMessageError({ ...messageError, from: "" });
            break;
        }
        setMessage({ ...message, from: event.target.value });
        break;
      case "message":
        switch (event.target.value) {
          case "":
            setMessageError({
              ...messageError,
              text: "Message cannot be empty",
            });
            break;
          default:
            setMessageError({ ...messageError, text: "" });
            break;
        }
        setMessage({ ...message, text: event.target.value });
        break;
    }
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessageLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    )
      return;

    const message: message = {
      name: formData.get("name") as string,
      company: formData.get("Company") as string,
      from: formData.get("email") as string,
      text: formData.get("message") as string,
    };

    let res = await sendTelegram(message);
    if (res.ok) {
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 2000);
    } else {
      setMessageFailed(true);
      setTimeout(() => {
        setMessageFailed(false);
      }, 2000);
    }
    setMessageLoading(false);
  };

  return (
    <section className={styles.contactContainer}>
      <SharedNav pathname={pathname} />
      <div className={styles.gridRight}>
        {messageSent && (
          <div className={styles.success}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z" />
            </svg>
            <p>Message sent!</p>
          </div>
        )}
        {messageFailed && (
          <div className={styles.error}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.323 12.667c.261.08.677.25.677.755 0 .336-.25.781-1.136.745-.614-.025-1.833.099-2.489.442.453 1.829.344 4.391-.844 4.391-.797 0-.948-.903-1.188-1.734-.859-2.985-2.577-3.532-4.343-3.802v-4.964c3.344 0 4.25-1.5 6.752-1.5 1.6 0 2.426.867 2.426 1.333 0 .167-.136.286-.479.312-.405.031-.367.406.016.477.634.117.913.457.913.771 0 .265-.198.511-.549.591-.418.095-.332.379.016.406.566.045.844.382.844.705 0 .282-.212.554-.63.61-.43.058-.29.368.014.462z" />
            </svg>
            <p>Message failed to send.</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.labelContainer}>
            <label htmlFor="name">Name</label>
            <p
              className={
                messageError.name ? styles.inlineError : styles.required
              }
            >
              {messageError.name ? messageError.name : "Required"}
            </p>
          </div>
          <input onChange={handleChange} type="text" name="name" id="name" />
          <label htmlFor="Company">Company</label>
          <input
            onChange={handleChange}
            type="text"
            name="Company"
            id="Company"
          />
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea onChange={handleChange} name="message" id="message" />
          <button
            className={styles.submit}
            disabled={
              messageLoading ||
              messageError?.name?.length > 0 ||
              messageError?.from?.length > 0 ||
              messageError?.text?.length > 0 ||
              messageError?.company?.length > 0
            }
            type="submit"
          >
            {!messageLoading ? (
              "Send"
            ) : (
              <LoadingSpinner className={styles.spinner} />
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
