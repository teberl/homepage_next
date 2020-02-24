import { NextPage } from "next";
import { Provider as TodosCtxProvider } from "./todos-context";
import Layout from "../../components/Layout";
import MainSection from "./components/MainSection";

const About: NextPage = () => (
  <Layout>
    <TodosCtxProvider>
      <h1 className="my-32">Todos - MVC</h1>
      <MainSection />
    </TodosCtxProvider>
  </Layout>
);

export default About;
