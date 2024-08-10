import Courses from "@/features/Home/components/Courses";
import FeaturedPortfolio from "@/features/Home/components/FeaturedPortfolio";
import HeroBanner from "@/features/Home/components/HeroBanner";
import DefaultLayout from "@/features/Layouts/DefaultLayout";
import Footer from "@/features/common/modules/Footer";
import Navigation from "@/features/common/modules/Navigation";


export default function Home() {
  return (
    <>
<DefaultLayout >
  <HeroBanner/>

  <Courses/>
  <FeaturedPortfolio/>

</DefaultLayout>
    </>
  );
}
