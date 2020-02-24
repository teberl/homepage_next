import { NextPage } from "next";
import Layout from "../../components/Layout";
import { TodosCtxProvider } from "../../components/todos/context";
import MainSection from "../../components/todos/MainSection";

const About: NextPage = () => (
  <Layout>
    <TodosCtxProvider>
      <MainSection />
    </TodosCtxProvider>
  </Layout>
);

export default About;
