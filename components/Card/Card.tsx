import { CardProps } from "@/types";
import Image from "next/image";

export default function Card({
  icon,
  cardClass,
  heading1,
  heading2,
  paddingLeft,
}: CardProps) {
  return (
    <div className={cardClass}>
      <Image src={icon} alt="card icon" />
      <div className={`flex flex-col items-center ${paddingLeft}`}>
        <h1 className="text-[#0A273E] text-[45px]">{heading1} </h1>
        <p className="text-[#292930] text-[18px] pl-[43px]">{heading2}</p>
      </div>
    </div>
  );
}
