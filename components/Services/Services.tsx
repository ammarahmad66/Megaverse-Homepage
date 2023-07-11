import Image from "next/image";
import ServiceCard from "../ServiceCard/ServiceCard";
import CustomButton from "../CustomButton/CustomButton";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import serviceButton from "../../assets/serviceButton.svg";
import arrow from "../../assets/arrow.svg";

export default function Services() {
  return (
    <div className="w-full">
      <div className="flex flex-col m-auto w-[80%]">
        <div className="pt-[100px]">
          <p className="flex w-[122px]  text-[#8A90A2] text-[18px] pl-4">
            Our Project
          </p>
          <div className="flex flex-row w-full pt-[25px]">
            <div className="w-[35%]">
              <h1 className="text-[#292930] text-[55px] tracking[-1.8px] font-bold">
                Creative Work.
              </h1>
            </div>
            <div className="flex w-[65%] pt-[35px] pl-[100px] space-x-10 text-[#8A90A2] text-[18px] text-500">
              <p>All</p>
              <span className="text-[#292930]">NodeJS</span>
              <p>RoR</p>
              <p>React Native</p>
              <p>Python</p>
              <p>Flutter</p>
              <p>iOS</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 place-items-center pt-[50px] pb-[83px]">
          <div>
            <ServiceCard
              icon={service1}
              text="Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and salable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."
              heading="Hosting Website Design"
              headingStyles="text-[35px] pt-7"
              divStyles="flex flex-col rounded-xl bg-[#F7F8FD] place-items-center p-5 m-auto"
            />
          </div>
          <div className="grid grid-rows-2 gap-3 place-items-center">
            <div>
              <ServiceCard
                icon={service2}
                text="Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and salable network applications. "
                heading="Medical Website"
                headingStyles="text-[25px] pt-2"
                textStyles="pl-7"
                divStyles="flex flex-row rounded-xl bg-[#F7F8FD] place-items-center p-6 m-auto"
              />
            </div>
            <div>
              <ServiceCard
                icon={service3}
                text="Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and salable network applications. "
                heading="Pet Care Website"
                headingStyles="text-[25px] pt-2"
                textStyles="pl-7"
                divStyles="flex flex-row rounded-xl bg-[#F7F8FD] place-items-center p-6 m-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start pb-[100px]">
          <CustomButton
            text="View All"
            containerStyles="w-[207px] h-[70px] rounded-xl bg-[#30a8ff]"
            textStyles="text-white pr-3"
            icon={serviceButton}
            divStyles="absolute z-10 top-0 left-0.25"
            icon2={arrow}
            icon2DivStyles="absolute z-10 top-[23.5px] left-[8.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
