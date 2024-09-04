import Courses from "@/features/Home/components/Courses";
import FeaturedPortfolio from "@/features/Home/components/FeaturedPortfolio";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Testimonials from "@/features/Home/components/Testimonials";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import Footer from "@/features/common/modules/Footer";
import Navigation from "@/features/common/modules/Navigation";

export const metadata = {
  title: {
    default: 'Engrave Tattoo School',
    template: "%s- Engrave Tattoo School"
  },
  description: 'Welcome to Engrave Tattoo School',
};

export default function Home({portfolios}) {
  return (
    <>
<DefaultLayout >
  <HeroBanner/>

  <Courses/>
  <FeaturedPortfolio portfolios={portfolios}/>
  <MeetTheTeam/>
  <Testimonials/>
</DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("@/features/data/portfolio");
  return {
    props:{ portfolios: hits.slice(0,5)}
  }
}