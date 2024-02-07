
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
    showDataSlot?: (column: GridColumnItemType, item:any) => JSX.Element
}

export type GridColumnType = {
    header?: GridColumnHeaderType
    item?: GridColumnItemType
    isActionsHeader?: boolean
}

export type GridItemsType = {
    items?: any[]
    columns?: GridColumnType[]
    onRowClick?: (value:any, index:number) => void
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
}

export type GridLineType = {
    item: any
    columns?: GridColumnType[]
    onRowClick?: (value:any, index:number) => void
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
}

export type GridType = {
    items?: any[]
    columns: GridColumnType[]
    hideHeader?: boolean
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
    onRowClick?: (value:any, index:number) => void
    noDataMessage?: string
    className?: string
    gridHeaderClassName?: string
    isLoading?: boolean
}


export type GridActionColumnType = {
    onEditClick?: (value:any) => void
    onDeleteClick?: (value:any) => void
    item?: any
}

export type GridHeaderType = {
    columns?: GridColumnType[]
    gridHeaderClassName?: string
}