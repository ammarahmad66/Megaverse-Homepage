import Image from "next/image";
import deskfoot from "../../assets/deskFoot.svg";
import logo from "../../assets/logo.svg";
import message from "../../assets/message.svg";
import location from "../../assets/location.svg";
import footerButton from "../../assets/footerButton.svg";
import CustomButton from "../CustomButton/CustomButton";

export default function Footer() {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${deskfoot.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col m-auto w-[80%]">
        <div className="pt-[120px] pl-[30px] ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="grid grid-cols-2 pt-[30.15px] pl-[30px] pb-[60px]">
          <div>
            <h1 className="text-[32px] text-white leading-[46px] h-[92px] w-[570px]">
              More than 10 years in the game and we're just getting started. 🤝
            </h1>
          </div>
          <div className="flex justify-end">
            <div className="pr-[20px]">
              <CustomButton
                text="Available for New Project"
                containerStyles="w-[290px] h-[70px] rounded-xl bg-[#30a8ff]"
                textStyles="text-white"
                icon={footerButton}
                divStyles="absolute z-10 top-0 left-0.25"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-black-100 mt-5 border-t border-[#113A5A] border-100">
          <div className="grid grid-cols-2 pt-8 pb-8">
            <div>
              <p className=" text-white text-[15px] leading-5">
                &copy; 2023 Megaverse Technologies 2023, All Rights Reserved
              </p>
            </div>
            <div className="flex flex-row justify-end text-[15px] leading-5 space-x-[55px]">
              <p className="text-white">Support</p>
              <p className="text-white">Privacy Policy</p>
              <p className="text-white">Terms and Conditions</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-black-100 border-t border-[#113A5A] border-100">
          <div className="grid grid-cols-2 pt-[50px] pb-[66px]">
            <div className="flex flex-row space-x-[10px]">
              <Image src={location} alt="location" width={22} height={22} />
              <p className="text-white text-[15px] leading-5 pr-[3px]">
                68 Aourangzaib Block New Garden Tow Lahore
              </p>
              <Image src={message} alt="message" width={22} height={22} />
              <p className="text-white text-[15px] leading-5">
                Support@megaverse.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
