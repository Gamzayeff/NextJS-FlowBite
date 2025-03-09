import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

export default function CustomerReviews() {
  return (
    <div className="mt-6 w-full max-w-4xl">
      <Carousel slideInterval={4000}>
        <Card className="border border-red-500 p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="/avatar1.jpg"
              className="h-12 w-12 rounded-full"
              alt="User Avatar"
            />
            <div>
              <h5 className="font-semibold">Brooklyn Simmons</h5>
              <p className="text-sm text-gray-500">Warsaw, Poland</p>
            </div>
            <span className="ml-auto font-bold text-yellow-500">4.5 ⭐</span>
          </div>
          <p className="text-sm text-gray-600">
            "Wow, I am very happy to use this VPN! It turned out to be more than
            my expectations and so far there have been no problems. LaslesVPN
            always the best."
          </p>
        </Card>

        <Card className="border border-red-500 p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="/avatar2.jpg"
              className="h-12 w-12 rounded-full"
              alt="User Avatar"
            />
            <div>
              <h5 className="font-semibold">Darlene Robertson</h5>
              <p className="text-sm text-gray-500">Warsaw, Poland</p>
            </div>
            <span className="ml-auto font-bold text-yellow-500">4.5 ⭐</span>
          </div>
          <p className="text-sm text-gray-600">
            "Wow, I am very happy to use this VPN! It turned out to be more than
            my expectations and so far there have been no problems. LaslesVPN
            always the best."
          </p>
        </Card>

        <Card className="border border-red-500 p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="/avatar3.jpg"
              className="h-12 w-12 rounded-full"
              alt="User Avatar"
            />
            <div>
              <h5 className="font-semibold">Darrell Steward</h5>
              <p className="text-sm text-gray-500">Warsaw, Poland</p>
            </div>
            <span className="ml-auto font-bold text-yellow-500">4.5 ⭐</span>
          </div>
          <p className="text-sm text-gray-600">
            "Wow, I am very happy to use this VPN! It turned out to be more than
            my expectations and so far there have been no problems. LaslesVPN
            always the best."
          </p>
        </Card>
      </Carousel>
    </div>
  );
}
