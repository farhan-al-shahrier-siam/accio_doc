import Banner from "@/components/home/Banner";
import Testimonials from "@/components/home/Testimonials";
import TopThreeDoctors from "@/components/home/TopThreeDoctors";
import WhyHowSection from "@/components/home/WhyHowSection";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopThreeDoctors></TopThreeDoctors>
      <WhyHowSection></WhyHowSection>
      <Testimonials></Testimonials>
    </div>
  );
}
