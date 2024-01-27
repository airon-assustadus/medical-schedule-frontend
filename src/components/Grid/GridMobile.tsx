import { GridType } from "src/types/grid.types";
import { TrueFalseIcon } from "../Input/TrueFalseIcon";
import { GridActionColumnMobile } from "./GridActionColumnMobile";

export const GridMobile = (props: GridType) => {
    const cursorPointer = props.onRowClick ? 'cursor-pointer' : ''

    let items = props.items && props.items.map(
        (item, index) => {
            const fields = props.columns.map(
                (column, index) => {
                    if (column.isActionsHeader) {
                        return (
                            <GridActionColumnMobile 
                            onEditClick={props.onEditClick}
                            onDeleteClick={props.onDeleteClick}
                            item={item}
                            key={index}
                            />
                        )
                    }
                    const columnClassName = 
                        `grid-mobile-line-title ${column.header?.className || ''}`
                    const valueClassName = `
                        grid-mobile-line-value ${column.item?.className || ''}
                        ${column.item?.onClick && 'cursor-pointer' || ''}`.trim()
                    const field = column.item?.field || undefined
                    const isTrueFalse = column.header?.type === 'boolean'
                    const value = 
                        field && (
                            (isTrueFalse && 
                                <TrueFalseIcon value={item[field]} />)
                                || (item[field])) || undefined
                    const label = column.header?.name || undefined
                    return (
                        <div className="grid-mobile-line" key={index}
                            onClick={() => props.onRowClick && props.onRowClick(item, index)}>
                            {label &&
                            <div className={columnClassName}>
                                {label}
                            </div>
                            || undefined
                            }
                            {value &&
                            <div className={valueClassName}>
                                {value}
                            </div>
                            || undefined
                            }
                        </div>
                    )
                }
            )

            return (
                <div key={index} className={`grid-mobile-item
                ${cursorPointer}
                ${props.className || ''}
                `.trim()}>
                    {fields}
                </div>
            )
        }
    )
    return items
}