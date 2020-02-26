import { NextPage } from "next";
import Layout from "../../components/Layout";
import TodosMain from "../../components/todos/TodosMain";
import {} from "../../components/todos/context";

const About: NextPage = () => (
  <Layout>
    <TodosMain />
  </Layout>
);

export default About;
