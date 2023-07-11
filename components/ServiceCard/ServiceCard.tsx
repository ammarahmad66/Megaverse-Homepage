import { ServiceCardProps } from "@/types";
import Image from "next/image";
import serviceImage from "../../assets/serviceImage.svg";

export default function ServiceCard({
  icon,
  heading,
  headingStyles,
  divStyles,
  textStyles,
  text,
}: ServiceCardProps) {
  return (
    <div className={divStyles}>
      <Image src={icon} alt="icon" />
      <div className={`flex flex-col p-5 items-start ${textStyles}`}>
        <h1 className={`text-[#292930] ${headingStyles}`}>{heading}</h1>
        <p className="text-[#8A90A2] text-[17px] leading-[30px] pt-5">{text}</p>
        <Image
          src={serviceImage}
          alt="serviceImage"
          style={{ paddingTop: "2.5rem" }}
        />
      </div>
    </div>
  );
}
