import Image from "next/image";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="bg-white">
      <nav className="flex items-center justify-between px-12 py-6">
        <h1 className="text-lg font-bold">LaslesVPN</h1>
        <ul className="flex space-x-6 text-gray-600">
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonial</li>
          <li>Help</li>
        </ul>
        <div className="flex space-x-4">
          <button className="text-gray-600">Sign in</button>
          <Button color="red">Sign up</Button>
        </div>
      </nav>

      <header className="mt-12 text-center">
        <h2 className="text-4xl font-bold">
          Want anything to be easy with{" "}
          <span className="text-red-500">LaslesVPN</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper.
        </p>
        <Button className="mt-6 bg-red-500">
          Get Started
        </Button>
      </header>

      <section className="mx-12 mt-12 flex items-center justify-center gap-10 rounded-lg bg-gray-100 p-6 shadow-md">
        <div className="text-center">
          <p className="text-xl font-bold">90+</p>
          <p className="text-gray-500">Users</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">30+</p>
          <p className="text-gray-500">Locations</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold">50+</p>
          <p className="text-gray-500">Servers</p>
        </div>
      </section>

      <section className="mt-12 px-12">
        <h3 className="text-2xl font-bold">
          We provide many features you can use
        </h3>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            ✅{" "}
            <span className="ml-2 font-semibold">
              Powerful online protection
            </span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2 font-semibold">Internet with borders</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2 font-semibold">Supercharged VPN</span>
          </li>
          <li className="flex items-center">
            ✅{" "}
            <span className="ml-2 font-semibold">No specific time limits</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
