import Image from "next/image";
import arrowtest from "../../assets/arrowtest.svg";
import testCard from "../../assets/testCard.svg";

export default function TestimonialCard() {
  return (
    <div className="w-full bg-[#0a273e] rounded-xl">
      <div className="flex flex-col m-auto w-full">
        <div className="grid grid-cols-2">
          <div className="pt-[70px] pl-[50px]">
            <p className="text-[#30A8FF] text-[17px]">Get Update</p>
            <h1 className="text-white font-bold text-[50px] leading-[67px] tracking-[-1.8px] w-[420px] pt-[20px]">
              Get latest updates and deals
            </h1>
            <div className="flex pt-[40px] pb-[60px]">
              <div className="w-[520px] h-[80px] bg-[#30A8FF] rounded-md">
                <div className="grid grid-cols-2 p-2 place-items-start">
                  <div>
                    <input
                      className="text-[12px] text-white leading-[26px] bg-[#30A8FF] placeholder-white pt-[18.5px] pl-4 place-items-center"
                      placeholder="Enter your mail"
                    ></input>
                  </div>
                  <div className=" pt-[-8px] pl-5">
                    <button className="flex fex-col justify-center place-items-center bg-[#0a273e] text-white w-[220px] h-[63px] rounded-lg">
                      Subscribe{" "}
                      <Image
                        src={arrowtest}
                        alt="arrow"
                        className="pl-2 pt-0.5"
                        width={23}
                        height={15.74}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image src={testCard} alt="testCard" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
