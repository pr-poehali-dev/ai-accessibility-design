import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PopularCourses />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default Index;
