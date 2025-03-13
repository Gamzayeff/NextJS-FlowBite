import { Footer } from "flowbite-react";
import Navbar from "../companents/Navbar.jxs"; //+
import FooterSection from "../companents/FooterSection"; //+
import SubscriptionBox from "../companents/SubscriptionBox"; //+
import CustomerReviews from "../companents/CustomerReviews"; //+
import GetStarted from "../companents/GetStarted"; //+
import Info from "../companents/Info"; //+
import Feautures from "../companents/Feauters"; //+
import Plan from "../companents/Plan"; //+
import SponsorLogos from "../companents/SponsorLogos"; //+
import Vector from "../companents/Vector"; //+
import Network from "../companents/Network"; //+
import Cards from "../companents/Cards"; //+
import Carousel from "../companents/Carousel"; //+
import Arrow from "../companents/Arrow"; //+

export default function Home() {
  return (
    <main className="h-screen w-full bg-white pt-[30px]">
      <div className="mx-[20px] xl:mx-[150px]">
        <Navbar />
      </div>
      <div className="mx-[20px] xl:mx-[150px]">
        <GetStarted />
      </div>
      <div className="mx-[20px] flex xl:mx-[0px] xl:justify-center">
        <Info />
      </div>
      <div className="mx-[20px] xl:mx-[150px]">
        <Feautures />
      </div>

      <Plan />

      <div className="mx-[10px] xl:mx-[170px]">
        <Cards />
      </div>

      <Network />

      <div className="mx-[20px] xl:mx-[150px]">
        <Vector />
      </div>

      <div className="mx-[20px] xl:mx-[150px]">
        <SponsorLogos />
      </div>
      <CustomerReviews />
      <div className="mx-[20px] xl:mx-[150px]">
        <Carousel />
      </div>
      <div className="mx-[20px] xl:mx-[150px]">
        <Arrow />
      </div>
      <div className="h-60"></div>
      <div className="relative">
        <div className="absolute top-[-160px] z-10 w-full px-[20px] xl:px-[150px]">
          <SubscriptionBox />
        </div>
        <div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
