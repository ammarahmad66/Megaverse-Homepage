import Image from "next/image";
import Card from "../Card/Card";
import homeRectangle from "../../assets/homeRectangle1.svg";
import card2 from "../../assets/card2.svg";
import card1 from "../../assets/card1.svg";
import card3 from "../../assets/card3.svg";

export default function Project() {
  return (
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
    </div>
  );
}
