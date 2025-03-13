import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Component() {
  return (
    <Footer className="h-full bg-[#F4F4F4]" container>
      <div className="h-full w-full">
        <div className="flex h-full w-full sm:flex sm:justify-between md:flex md:grid-cols-1 xl:justify-evenly">
          <div className="h-full w-fit">
            <div className="mt-[90px] flex">
              <img
                src="/images/logo.svg"
                className="mr-2 h-5 sm:h-9 xl:mr-3 xl:h-6"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-[15px] font-normal text-[#000000] xl:text-[18px]">
                Lasles<span className="font-semibold">VPN</span>
              </span>
            </div>
            <p className="mr-[30px] mt-[20px] w-[150px] font-sans text-[10px] font-normal text-[#5A5A5A] xl:mr-[0px] xl:w-[340px] xl:text-[15px]">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
              arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>
            <div className="mt-[20px] w-full sm:flex sm:items-center sm:justify-between">
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <div className="rounded-[100px] xl:bg-red-300 xl:p-[10px]">
                  <FooterBrand
                    className="h-[20px] w-[20px]"
                    href="https://flowbite.com"
                    src="/images/facebook.svg"
                    alt="Flowbite Logo"
                  />
                </div>
                <div className="rounded-[100px] xl:bg-red-300 xl:p-[10px]">
                  <FooterBrand
                    className="h-[20px] w-[20px]"
                    href="https://flowbite.com"
                    src="/images/whatsapp.svg"
                    alt="Flowbite Logo"
                  />
                </div>
                <div className="rounded-[100px] xl:bg-red-300 xl:p-[10px]">
                  <FooterBrand
                    className="h-[20px] w-[20px]"
                    href="https://flowbite.com"
                    src="/images/youtube.svg"
                    alt="Flowbite Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-[60px] sm:mt-4 sm:grid-cols-3 sm:gap-6 xl:gap-8">
            <div>
              <FooterTitle
                className="font-serif text-[10px] font-normal text-[#151515] xl:text-[16px] xl:font-semibold"
                title="Product"
              />
              <FooterLinkGroup col>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Download
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Pricing
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Locations
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Server
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Countries
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                className="font-serif text-[10px] font-semibold text-[#151515] xl:text-[16px]"
                title="Engage"
              />
              <FooterLinkGroup col>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  LaslesVPN?
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  FAQ
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Tutorials
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  About us
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Privacy policy
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Terms of service
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                className="font-serif text-[10px] font-semibold text-[#151515] xl:text-[16px]"
                title="Earn money"
              />
              <FooterLinkGroup col>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Become partner
                </FooterLink>
                <FooterLink
                  className="font-serif text-[9px] font-normal text-[#646464] xl:text-[15px]"
                  href="#"
                >
                  Affilite
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
