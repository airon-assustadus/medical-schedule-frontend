import { SkeletonType } from "src/types/container.types"

export const Skeleton = (props: SkeletonType) => {
    return (
    <div className={`skeleton ${props.className || ''}`.trim()}>
        {props.children}
    </div>
    )
}