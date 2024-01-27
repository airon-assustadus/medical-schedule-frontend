import { ContainerBorderedType } from "src/types/container.types"

export const ContainerBordered = (props?: ContainerBorderedType) => {
    return (
        <div className={`container-bordered
                ${props?.className}
                `}>
                {props?.children}
        </div>
    )
}
