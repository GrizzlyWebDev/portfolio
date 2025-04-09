import type { Metadata } from "next";
import About from "../components/About/About";
export const metadata: Metadata = {
  title: "Phill Blake | About",
  description:
    "I'm Phill Blake, a full stack engineer. Explore my portfolio to see the possibilities of code and design.",
};

export default function page() {
  return <About />;
}
