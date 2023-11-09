import type { Metadata } from "next";
import About from "../components/About/About";
export const metadata: Metadata = {
  title: "Phill Blake | About",
  description:
    "I'm Phill Blake, a freelance front-end developer ready to bring your web vision to life. Explore my portfolio to see the possibilities of code and design.",
};

export default function page() {
  return (
    <main>
      <About />
    </main>
  );
}
