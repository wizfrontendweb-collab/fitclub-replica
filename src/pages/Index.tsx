import { lazy, Suspense } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components for code splitting
const Services = lazy(() => import("@/components/Services"));
const GoogleReview = lazy(() => import("@/components/GoogleReview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const About = lazy(() => import("@/components/About"));
const Plans = lazy(() => import("@/components/Plans"));
const Trainers = lazy(() => import("@/components/Trainers"));
const Experience = lazy(() => import("@/components/Experience"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <GoogleReview />
        <Testimonials />
        <About />
        <Plans />
        <Trainers />
        <Experience />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
      <WhatsAppButton />
    </Suspense>
  </>
);

export default Index;
