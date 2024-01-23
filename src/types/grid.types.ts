
export type GridColumnHeaderType = {
    name?: string
    children?: any
    onClick?: (column:GridColumnHeaderType) => void
    className?: string
    type?: string
}

export type GridColumnItemType = {
    field?: string
    children?: any
    onClick?: Function
    className?: string
}

export type GridColumnType = {
    header?: GridColumnHeaderType
    item?: GridColumnItemType
    isActionsHeader?: boolean
}

export type GridItemsType = {
    items?: any[]
    columns?: GridColumnType[]
}

export type GridType = {
    items?: any[]
    columns?: GridColumnType[]
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
    onRowClick?: (value:any, index:number) => void
    noDataMessage?: string
    className?: string
    gridHeaderClassName?: string
}

export type GridLineType = {
    item: any
    columns?: GridColumnType[]
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
    onRowClick?: (value:any, index:number) => void
}

export type GridHeaderType = {
    columns?: GridColumnType[]
    gridHeaderClassName?: string
}