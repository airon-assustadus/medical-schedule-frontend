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
                `.trim()
            const headerName = column.isActionsHeader ? 'Actions' : column.header?.name
            return (
                <th key={index}
                    className={className} 
                    onClick={() => column.header?.onClick && column.header?.onClick(column.header)}>
                    {headerName}
                </th>
            )
        })
        header = (
            <thead className={`
                ${styles['grid-header']}
            `}>
                <tr>
                    {cells}
                </tr>
            </thead>
        )
    }

    return (
        header
    )
}