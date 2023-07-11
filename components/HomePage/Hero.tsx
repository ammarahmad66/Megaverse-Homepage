import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Group from "../../assets/Group.svg";
import CustomButton from "../CustomButton/CustomButton";
import buttonIcon from "../../assets/buttonIcon.svg";
import arrowIcon from "../../assets/arrowIcon.svg";
import node from "../../assets/node.svg";
import react from "../../assets/react.svg";
import js from "../../assets/js.svg";
import python from "../../assets/python.svg";
import php from "../../assets/php.svg";
import django from "../../assets/django.svg";
import flask from "../../assets/flask.svg";
import next from "../../assets/next.svg";
import firstFooter from "../../assets/firstFooter.svg";
import homeRectangle from "../../assets/homeRectangle1.svg";
import homeEllipse from "../../assets/homeEllipse.svg";
import card2 from "../../assets/card2.svg";
import card1 from "../../assets/card1.svg";
import card3 from "../../assets/card3.svg";
import Card from "../Card/Card";
import servicesEllipse from "../../assets/servicesEllipse.svg";
import AcheivementCard from "../AcheivementCard/AcheivementCard";
import ach1 from "../../assets/ach1.svg";
import ach2 from "../../assets/ach2.svg";
import ach3 from "../../assets/ach3.svg";
import service from "../../assets/service.svg";
import ServiceCard from "../ServiceCard/ServiceCard";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import serviceButton from "../../assets/serviceButton.svg";
import arrow from "../../assets/arrow.svg";
import testimonial1 from "../../assets/testimonial1.svg";
import testimonial2 from "../../assets/testimonial2.svg";
import testimonial3 from "../../assets/testimonial3.svg";
import testimonial4 from "../../assets/testimonial4.svg";
import testimonial5 from "../../assets/testimonial5.svg";
import testimonial6 from "../../assets/testimonial6.svg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const fontDM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "400"],
});
export default function HeroSection() {
  return (
    <div className={fontDM_Sans.className}>
      <div className="flex w-full">
        <div className="flex justify-between w-1/2">
          <div className="pt-[61px] pl-[200px] z-10">
            <h1 className="xl:text-[67.5px] sm:text-[64px] leading-[77.25px] font-bold text-black-700 font-dm-sans w-[566.25px] h-[132.75px]">
              We make things look good
            </h1>
            <p className=" pl-[7px] pt-[55px] w-[568px] text-[#8A90A2] font-thin h-[60px] leading-[30px]">
              We provide robust best web development solutions and services on
              demand according to need of our clients.
            </p>
            <div className="pt-[88px] pl-[7px] space-x-8 py-8">
              <CustomButton
                text="Visit Case Studies"
                containerStyles="w-[240px] h-[70px] rounded-xl bg-[#30a8ff]"
                textStyles="text-white"
                icon={buttonIcon}
                divStyles="absolute z-10 top-0 left-0.25"
              />
              <CustomButton
                text="About Megaverse"
                containerStyles="w-[247px] h-[69px] rounded-xl bg-white border border-blue-900  items-center"
                textStyles=" text-black pr-[20px]"
                icon={arrowIcon}
                divStyles="absolute z-10 top-[26.5px] left-[12rem]"
              />
            </div>
            <div className="flex pt-[35px] pl-[7px] space-x-[61.4px]">
              <Image src={node} alt="node" width={91.226} height={57.893} />
              <Image src={react} alt="react" width={55.903} height={63.157} />
              <Image src={js} alt="js" width={52.63} height={52.63} />
              <Image src={python} alt="python" width={59.21} height={59.21} />
              <Image src={next} alt="next" width={93.02} height={56.14} />
            </div>
            <div className="flex pt-[35px] pl-[7px] space-x-[61px]">
              <Image src={flask} alt="flask" width={36} height={46} />
              <Image src={django} alt="django" width={53} height={54} />
              <Image src={php} alt="php" width={74} height={39} />
            </div>
          </div>
        </div>
        <div className=" flex justify-end  w-[50%] -mt-60">
          <Image
            src={Group}
            alt="Group"
            className="z-10 w-[90%] pl-20 pr-[40px]"
          />
        </div>
      </div>

      {/* Project Component

      <div
        style={{
          backgroundImage: `url(${homeRectangle.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col m-auto w-[80%] pb-[128px] pt-[175.25px]">
          <h1 className="flex xl:text-[41px] text-white-700 font-bold text-center text-white">
            We deploy world-class Web Development on demand. that can design
            build, ship and scale your vision in the most efficient way.
          </h1>
          <div className="grid grid-cols-3 gap-12 pt-[175px] ">
            <Card
              icon={card1}
              cardClass="flex w-full flex-row justify-center bg-[#FFDC60] w-[339px] h-[125px] rounded-xl"
              heading1="100%"
              heading2="Client Satisfaction"
              paddingLeft="40px"
            />

            <Card
              icon={card2}
              cardClass="flex w-full flex-row justify-center bg-[#82CEFD] w-[339px] h-[125px] rounded-xl"
              heading1="1200+"
              heading2="Complete Project   "
              paddingLeft="43px"
            />

            <Card
              icon={card3}
              cardClass="flex w-full flex-row justify-center bg-[#FFADAD] w-[339px] h-[125px] rounded-xl"
              heading1="1800+"
              heading2="Development Resource"
              paddingLeft="33px"
            />
          </div>
        </div>
      </div> */}

      {/* Acheivement Component*/}
      {/* <div className="w-full bg-[#f7f8fd]">
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
      </div> */}

      {/* Service Component */}

      {/* <div className="w-full">
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
      </div> */}

      {/* Feedback Component */}
      {/* <div className="w-full bg-[#0a273e] ">
        <div className="flex flex-col m-auto w-[80%]">Hi</div>
      </div> */}
      {/* Testimonial Component */}

      {/* <div className="w-full">
        <div className="flex flex-col m-auto w-[90%]">
          <div className="flex justify-center pt-[80px]">
            <h1 className="text-[#292930] text-[18px] leading-[103px]">
              We are Already Build Solution for...
            </h1>
          </div>
          <div className="flex felx-col justify-center p-3 space-x-[80px]">
            <Image
              src={testimonial1}
              alt="testimonial1"
              width={89}
              height={33}
            />
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
            <Image
              src={testimonial4}
              alt="testimonial4"
              width={92}
              height={28}
            />
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
      </div> */}
    </div>
  );
}
