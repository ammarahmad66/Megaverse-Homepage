import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    text: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    icon?: string;
    icon2?: string;
    icon2DivStyles?: string;
    divStyles?: string;
}

export interface CardProps{
    icon: string;
    cardClass: string;
    heading1: string;
    heading2: string;
    paddingLeft?: string;
}

export interface AcheivementCardProps{
    icon: string;
    heading: string;
    para1: string;
    para2: string;
    sub: string;
}

export interface ServiceCardProps{
    icon: string;
    text: string;
    heading: string;
    headingStyles?: string;
    divStyles?: string;
    textStyles?: string;
}