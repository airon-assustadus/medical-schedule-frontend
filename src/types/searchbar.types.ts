import { PaginatorType } from "./container.types"

export type SearchBarProps = {
    onClickNewButton?: () => void
    onClickSearchButton?: (param:SearchBarClickSearchButton) => void
    paginator?: PaginatorType
    listRowsPerPage?: string[]
    children?: JSX.Element | JSX.Element[]
    beforeActionsSlot?: JSX.Element | JSX.Element[]
    afterActionsSlot?: JSX.Element | JSX.Element[]
    actionsSlot?: JSX.Element | JSX.Element[]
    filtersSlot?: JSX.Element | JSX.Element[]

}

export type SearchBarClickSearchButton = {
    searchText?: string
    rowsPerPage?: number | string
    pageToSearch?: number
}