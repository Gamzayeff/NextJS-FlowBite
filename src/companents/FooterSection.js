import { Footer } from "flowbite-react";

export default function FooterSection() {
  return (
    <Footer container className="mt-10">
      <div className="flex w-full flex-wrap justify-between">
        <div>
          <h3 className="text-xl font-bold">LaslesVPN</h3>
          <p className="max-w-sm text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>
          <div className="mt-2 flex gap-3">
            <span className="text-lg text-gray-500">🔵</span>
            <span className="text-lg text-gray-500">🔴</span>
            <span className="text-lg text-gray-500">🟡</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="text-sm text-gray-500">
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Engage</h4>
          <ul className="text-sm text-gray-500">
            <li>LaslesVPN</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Earn Money</h4>
          <ul className="text-sm text-gray-500">
            <li>Become partner</li>
            <li>Affiliate</li>
          </ul>
        </div>
      </div>
    </Footer>
  );
}
