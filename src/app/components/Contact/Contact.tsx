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
  email: string;
  text: string;
};

type error = {
  name: string;
  company: string;
  email: string;
  text: string;
};

export default function Contact() {
  const pathname = usePathname();
  const [message, setMessage] = useState({
    name: "",
    company: "",
    email: "",
    text: "",
  } as message);
  const [messageError, setMessageError] = useState({} as error);
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let key = event.target.name;
    let value: string = event.target.value;

    // name validation //

    if (key === "name" && value.length >= 51) {
      setMessageError({
        ...messageError,
        name: "Name cannot be more than 50 chars.",
      });
      return;
    } else if (key === "name" && value.length < 3) {
      setMessageError({
        ...messageError,
        name: "Name cannot be less than 3 chars.",
      });
    } else if (key === "name" && value.length <= 50) {
      setMessageError({ ...messageError, name: "" });
    }
    // company validation //

    if (key === "company" && value.length >= 50) {
      setMessageError({
        ...messageError,
        company: "Company name cannot be more than 50 chars.",
      });
      return;
    } else if (key === "company") {
      setMessageError({ ...messageError, company: "" });
    }

    // email validation //
    if (key === "email" && value.length >= 90) {
      setMessageError({
        ...messageError,
        email: "Email cannot be more than 90 chars.",
      });
      return;
    } else if (
      key === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
      value.length > 0
    ) {
      setMessageError({
        ...messageError,
        email: "Email must be a valid email address.",
      });
    } else if (key === "email" && value.length === 0) {
      setMessageError({ ...messageError, email: "Email is required." });
    } else if (key === "email") {
      setMessageError({ ...messageError, email: "" });
    }

    // message validation //

    if (key === "text" && value.length >= 500) {
      setMessageError({
        ...messageError,
        text: "Message cannot be more than 500 chars.",
      });
      return;
    } else if (key === "text" && value.length < 10) {
      setMessageError({
        ...messageError,
        text: "Message cannot be less than 10 chars.",
      });
    } else if (key === "text") {
      setMessageError({ ...messageError, text: "" });
    }

    setMessage({ ...message, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessageLoading(true);
    e.preventDefault();

    if (!message || !message.name || !message.email || !message.text) return;

    let res = await sendTelegram(message);
    if (res.ok) {
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 2000);
    } else {
      setMessageFailed(true);
      console.log(res)
      setTimeout(() => {
        setMessageFailed(false);
      }, 2000);
    }

    setMessage({
      name: "",
      company: "",
      email: "",
      text: "",
    });

    setMessageError({
      name: "",
      company: "",
      email: "",
      text: "",
    });

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
          <input
            className={messageError.name ? styles.errorInput : ""}
            required
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={message.name}
          />
          <div className={styles.labelContainer}>
            <label htmlFor="company">Company</label>
            <p
              className={
                messageError.company ? styles.inlineError : styles.required
              }
            >
              {messageError.company ? messageError.company : "Optional"}
            </p>
          </div>
          <input
            className={messageError.company ? styles.errorInput : ""}
            onChange={handleChange}
            type="text"
            name="company"
            id="company"
            value={message.company}
          />
          <div className={styles.labelContainer}>
            <label htmlFor="email">Email</label>
            <p
              className={
                messageError.email ? styles.inlineError : styles.required
              }
            >
              {messageError.email ? messageError.email : "Required"}
            </p>
          </div>
          <input
            className={messageError.email ? styles.errorInput : ""}
            required
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={message.email}
          />
          <div className={styles.labelContainer}>
            <label htmlFor="text">Message</label>
            <p
              className={
                messageError.text ? styles.inlineError : styles.required
              }
            >
              {messageError.text ? messageError.text : "Required"}
            </p>
          </div>
          <textarea
            className={messageError.text ? styles.errorInput : ""}
            required
            onChange={handleChange}
            name="text"
            id="text"
            value={message.text}
          />
          <button
            className={styles.submit}
            disabled={
              messageLoading ||
              message?.name?.length === 0 ||
              message?.email?.length === 0 ||
              message?.text?.length === 0 ||
              messageError?.name?.length > 0 ||
              messageError?.email?.length > 0 ||
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
