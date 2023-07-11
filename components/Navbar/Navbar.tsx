import Image from "next/image";
import headerImage from "../../assets/headerImage.svg";
import logo from "../../assets/logo.svg";
import Link from "next/link";
import CustomButton from "../CustomButton/CustomButton";
import navHome from "../../assets/nav_home.svg";
import navReal from "../../assets/nav_real.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full">
      <Image
        src={logo}
        alt="logo"
        className=" pt-[70px] pl-[70px] absolute z-10"
        objectFit="cover"
      />
      <Image src={headerImage} alt="Nav" objectFit="cover" />
      <div className="flex justify-between w-1/2">
        <div className="flex pt-[73px] pl-[78px]">
          <Link href="/home">Home</Link>
          <Link href="/about" className="pl-[35px]">
            Contact Us
          </Link>
        </div>
        <Image
          src={navHome}
          alt="NavHome"
          className="absolute top-[-168px] right-[-170px]"
          objectFit="cover"
        />
        <div className="items-center w-1/2 pt-[61px]">
          <CustomButton
            text="Let's Talk"
            containerStyles="absolute  w-[173px] h-[55px] rounded-2xl border-2 border-blue-900"
            textStyles="relative z-10 text-[#0A273E]-500 z-10"
          />
        </div>
      </div>
    </div>
  );
}
