import { NextPage } from "next";
import Nav from "../components/nav";

const About: NextPage = () => (
  <>
    <Nav />
    <div role="main" className="w-full text-center">
      <h1 className="my-32">This is the about page</h1>
    </div>
    <footer className="mb-2 text-center text-xs text-gray-600 hover:text-gray-800">
      <strong>v1</strong> Munich 2020
    </footer>
  </>
);

export default About;
