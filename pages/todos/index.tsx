import { NextPage } from "next";
import { Provider as TodosCtxProvider } from "./todos-context";
import Layout from "../../components/Layout";
import MainSection from "./components/MainSection";

const About: NextPage = () => (
  <Layout>
    <TodosCtxProvider>
      <MainSection />
    </TodosCtxProvider>
  </Layout>
);

export default About;
