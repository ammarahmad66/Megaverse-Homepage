import Image from "next/image";
import AcheivementCard from "../AcheivementCard/AcheivementCard";
import ach1 from "../../assets/ach1.svg";
import ach2 from "../../assets/ach2.svg";
import ach3 from "../../assets/ach3.svg";

export default function Acheivement() {
  return (
    <div className="w-full bg-[#f7f8fd]">
      <div className="flex flex-col m-auto w-[80%]">
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <p className="flex w-[122px]  text-[#8A90A2] text-[18px] pt-[35px]">
              What We Do?
            </p>
            <h1 className="text-[#292930]-700 text-[81px] leading-[82px] tracking[-2.43px] pt-[80px]">
              Experts in every aspect lifecycle{" "}
            </h1>
          </div>

          <div className="flex pl-2 pt-20">
            <AcheivementCard
              icon={ach1}
              heading="Mobile App Development"
              para1="At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast"
              para2="At Collax we specialize in designing, building, shipping and scaling..."
              sub="arrow-right"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 place-items-center pb-20">
          <div className="pt-8">
            <AcheivementCard
              icon={ach2}
              heading="UI/UX Design"
              para1="At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast"
              para2="At Collax we specialize in designing, building, shipping and scaling..."
              sub="arrow-right"
            />
          </div>
          <div className=" pt-8">
            <AcheivementCard
              icon={ach3}
              heading="Web Development"
              para1="At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast"
              para2="At Collax we specialize in designing, building, shipping and scaling..."
              sub="arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
