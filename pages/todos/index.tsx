import { NextPage } from "next";
import Layout from "../../components/Layout";
import TodosSection from "../../components/todos/TodosSection";
import { TodosCtxProvider } from "../../components/todos/context";

const About: NextPage = () => (
  <Layout>
    <TodosCtxProvider>
      <TodosSection />
    </TodosCtxProvider>
  </Layout>
);

export default About;
