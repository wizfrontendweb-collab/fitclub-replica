import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GoogleReview from "@/components/GoogleReview";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Plans from "@/components/Plans";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      <Hero />
      <Services />
      <GoogleReview />
      <Testimonials />
      <About />
      <Plans />
      <Trainers />
      <Experience />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
