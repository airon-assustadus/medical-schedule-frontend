import { GridType } from "./grid.types"

export type ContainerBorderedType = {
    children?: any,
    className?: any
}

export type PageListType = {
    pageTitle?: string
    onNewClick?: () => void
    onClickSearchButton?: (searchText:string) => void
    gridType?: GridType
}