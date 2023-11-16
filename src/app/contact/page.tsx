import type { Metadata } from "next";
import Contact from "../components/Contact/Contact";

export const metadata: Metadata = {
  title: "Phill Blake | Contact",
  description:
    "I'm Phill Blake, a freelance front-end developer ready to bring your web vision to life. Explore my portfolio to see the possibilities of code and design.",
};

export default function page() {
  return <Contact />;
}
