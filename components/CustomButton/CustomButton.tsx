import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  text,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
  divStyles,
  icon,
  icon2,
  icon2DivStyles,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles} relative`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {icon && (
        <div className={divStyles}>
          <Image src={icon} alt="button icon" />
        </div>
      )}
      {icon2 && (
        <div className={icon2DivStyles}>
          <Image src={icon2} alt="icon2" />
        </div>
      )}
    </button>
  );
}
