import type { Metadata } from "next";
import Projects from "../components/Projects/Projects";
import { fetchGithubRepos } from "../actions";

export const metadata: Metadata = {
  title: "Phill Blake | Projects",
  description:
    "I'm Phill Blake, a full stack engineer. Explore my portfolio to see the possibilities of code and design.",
};

export default async function page() {
  const repos = await fetchGithubRepos();
  return <Projects />;
}
