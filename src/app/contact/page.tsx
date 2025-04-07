import type { Metadata } from "next";
import Contact from "../components/Contact/Contact";

export const metadata: Metadata = {
  title: "Phill Blake | Contact",
  description:
    "I'm Phill Blake, a full stack engineer. Explore my portfolio to see the possibilities of code and design.",
};

export default function page() {
  return <Contact />;
}
