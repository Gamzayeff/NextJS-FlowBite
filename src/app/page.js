import SponsorLogos from "../companents/SponsorLogos";
import HeaderSection from "../companents/HeaderSection";
import CustomerReviews from "../companents/CustomerReviews";
import SubscriptionBox from "../companents/SubscriptionBox";
import FooterSection from "../companents/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SponsorLogos />
      <HeaderSection />
      <CustomerReviews />
      <SubscriptionBox />
      <FooterSection />
    </div>
  );
}
