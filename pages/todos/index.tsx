import { NextPage } from "next";
import Layout from "../../components/Layout";
import { TodosCtxProvider } from "../../todos/context";
import MainSection from "../../todos/components/MainSection";

const About: NextPage = () => (
  <Layout>
    <TodosCtxProvider>
      <MainSection />
    </TodosCtxProvider>
  </Layout>
);

export default About;
