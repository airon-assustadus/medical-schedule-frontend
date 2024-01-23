import { GridHeaderType } from "src/types/grid.types";
import styles from './Grid.module.css'

export const GridHeader = (props:GridHeaderType) => {
    let header

    if (props.columns && props.columns.length > 0) {
        const cells = props.columns.map(
            (column, index) => {
            const cursorPointer = column.header?.onClick ? 'cursor-pointer' : '';
            const className = `
                ${column.header?.className || ''}
                ${cursorPointer}
                ${column.isActionsHeader && 'pr-3 w-24' || ''}
                `.trim()
            const headerName = column.isActionsHeader ? 'Actions' : column.header?.name
            return (
                <div key={index}
                    className={className} 
                    onClick={() => column.header?.onClick && column.header?.onClick(column.header)}>
                    {headerName}
                </div>
            )
        })
        header = (
            <div className={`
                ${styles['grid-header']}
            `}>
                {cells}
            </div>
        )
    }

    return (
        header
    )
}