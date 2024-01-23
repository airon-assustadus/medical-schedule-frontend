import { ContainerBorderedType } from "src/types/container.types"

export const ContainerBordered = (props?: ContainerBorderedType) => {
    return (
        <div className={`
                search-box
                flex
                flex-row
                justify-start
                items-center
                py-3
                border-2
                border-primary
                ${props?.className}
                `}>
                {props?.children}
        </div>
    )
}
