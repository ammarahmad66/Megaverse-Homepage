import Image from "next/image";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testimonial1 from "../../assets/testimonial1.svg";
import testimonial2 from "../../assets/testimonial2.svg";
import testimonial3 from "../../assets/testimonial3.svg";
import testimonial4 from "../../assets/testimonial4.svg";
import testimonial5 from "../../assets/testimonial5.svg";
import testimonial6 from "../../assets/testimonial6.svg";

export default function Testimonial() {
  return (
    <div className="w-full">
      <div className="flex flex-col m-auto w-[90%]">
        <div className="flex justify-center pt-[80px]">
          <h1 className="text-[#292930] text-[18px] leading-[103px]">
            We are Already Build Solution for...
          </h1>
        </div>
        <div className="flex felx-col justify-center p-3 space-x-[80px]">
          <Image src={testimonial1} alt="testimonial1" width={89} height={33} />
          <Image
            src={testimonial2}
            alt="testimonial2"
            width={110}
            height={48}
          />
          <Image
            src={testimonial3}
            alt="testimonial3"
            width={109}
            height={27}
          />
          <Image src={testimonial4} alt="testimonial4" width={92} height={28} />
          <Image
            src={testimonial5}
            alt="testimonial5"
            width={138}
            height={39}
          />
          <Image
            src={testimonial6}
            alt="testimonial6"
            width={125}
            height={36}
          />
        </div>
        <div className="flex justify-center">
          <div className="pb-[100px] w-[85%] pt-[80px]">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
}
