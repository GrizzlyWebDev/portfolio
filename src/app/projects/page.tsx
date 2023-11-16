import type { Metadata } from "next";
import Projects from "../components/Projects/Projects";

export const metadata: Metadata = {
  title: "Phill Blake | Projects",
  description:
    "I'm Phill Blake, a freelance front-end developer ready to bring your web vision to life. Explore my portfolio to see the possibilities of code and design.",
};

export default function page() {
  return <Projects />;
}
