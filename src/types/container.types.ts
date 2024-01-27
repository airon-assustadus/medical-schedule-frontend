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