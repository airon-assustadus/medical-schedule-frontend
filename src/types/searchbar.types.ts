import { PaginatorType } from "./container.types"

export type SearchBarProps = {
    onClickNewButton?: () => void
    onClickSearchButton?: (param:SearchBarClickSearchButton) => void
    paginator?: PaginatorType
    hideParams?: boolean
    listRowsPerPage?: string[]
}

export type SearchBarClickSearchButton = {
    searchText?: string
    rowsPerPage?: number | string
    pageToSearch?: number
}