import { AcheivementCardProps } from "@/types";
import Image from "next/image";

export default function AcheivementCard({
  icon,
  heading,
  para1,
  para2,
  sub,
}: AcheivementCardProps) {
  return (
    <div className="flex bg-white flex-row items-start space-x-10 p-5 m-auto rounded-xl">
      <Image
        src={icon}
        alt="icon"
        style={{ paddingTop: "62px", paddingLeft: "30px" }}
      />
      <div className="flex flex-col pr-4">
        <h1 className="text-[#292930] text-[32px] pt-16">{heading} </h1>
        <p className="text-[#8A90A2] text-[18px] pt-10">{para1}</p>
        <p className="text-[#8A90A2] text-[18px] pt-10">{para2}</p>
        <p className="text-[#292930] text-[18px] pt-12">{sub}</p>
        <p className="text-[#292930] text-[18px] font-bold pt-1">Learn More</p>
      </div>
    </div>
  );
}
