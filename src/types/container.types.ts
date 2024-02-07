import { GridType } from "./grid.types"
import { SearchBarProps } from "./searchbar.types"

export type ContainerBorderedType = {
    children?: any,
    className?: any
}

export type PageListType = {
    searchBarProps: SearchBarProps
    gridProps: GridType
    title: string
    children?: any
    afterTitleSlot?: any
    afterGridSlot?: any
}

export type PaginatorType = {
    currentPage?: number
    totalPages?: number
    linesPerPage?: number
    totalLines?: number
    changePageEvent?: (newPage:number) => void
    hidePaginator?: boolean
}

export type SkeletonType = {
    children?: any
    className?: string
}

export type PageFormType = {
    title: string,
    children?: JSX.Element
    afterSaveButton?: JSX.Element
    afterCancelButton?: JSX.Element
    saveClick?: () => void
    cancelClick?: () => void
}