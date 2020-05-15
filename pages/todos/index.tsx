import { NextPage } from "next";
import Layout from "../../components/Layout";
import TodosMain from "../../components/todos/TodosMain";
import {} from "../../components/todos/context";

const Todos: NextPage = () => (
  <Layout>
    <TodosMain />
  </Layout>
);

export default Todos;
