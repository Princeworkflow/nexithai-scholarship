import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ValueCards from "@/components/home/ValueCards";
import Programs from "@/components/home/Programs";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValueCards />
      <Programs />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
