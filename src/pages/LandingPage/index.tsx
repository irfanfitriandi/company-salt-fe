import Layout from "components/Layout";
import Hero from "./Hero";
import About from "./About";
import Values from "./Values";
import Speciality from "./Speciality";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Values />
      <Speciality />
      <Footer />
    </Layout>
  );
};

export default LandingPage;
