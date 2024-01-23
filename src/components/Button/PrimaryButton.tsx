import { PrimaryButtonProps } from "src/types/button.types";

export const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <div 
            onClick={() => props.onClick()}
            className={`
                border 
                border-primary-dark
                hover:border-primary
                bg-primary
                hover:bg-primary-dark
                text-primary-text
                hover:text-primary-dark-text
                rounded-3xl
                hover:cursor-pointer
                justify-center
                flex
                px-5
                py-1
                ${props.className || ''}`}
        >{props.label || props.children}</div>
    )
}