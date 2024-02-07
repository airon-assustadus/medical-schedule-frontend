import { GridLineType } from "src/types/grid.types";
import { PrimaryButton } from "../Button/PrimaryButton";
import { TrueFalseIcon } from "../Input/TrueFalseIcon";
import styles from './Grid.module.css';


export const GridLine = (props: GridLineType) => {
    let line
    if (props.columns && props.columns.length > 0) {
        const cursorPointer = props.onRowClick ? 'cursor-pointer' : ''

        const lineClassName = `
            ${styles['grid-line']}
            ${cursorPointer}
        `

        let cells = props.columns.map(
            (column, index) => {
                const className = `
                grid-line-cell
                ${column.item?.className || ''}
                `.trim()
                if (column.isActionsHeader) {
                    return (
                        <td
                            className="w-24 pr-3"
                            key={index}>
                            <PrimaryButton
                                onClick={
                                    () => props.onEditClick
                                        && props.onEditClick(props.item)
                                }>
                                Edit
                            </PrimaryButton>
                            <PrimaryButton
                                onClick={
                                    () => props.onDeleteClick
                                        && props.onDeleteClick(props.item)
                                }
                                className="mt-2">
                                Delete
                            </PrimaryButton>
                        </td>
                    )
                } 
                if (!column.item || (!column.item.field && !column.item.children && !column.item.showDataSlot)) {
                    return <></>
                }
                if (!column.item.field) {
                    const itemField = column.item.field || ''
                    if (column.header?.type == 'boolean') {
                        return (
                            <td
                                className={`${className} text-center`}
                                key={index}>
                                <TrueFalseIcon key={index} value={props.item[itemField]} />
                            </td>
                        )
                    }
                    return (
                        <td onClick={() => props.onRowClick && props.onRowClick(props.item, index)}
                            className={className}
                            key={index}
                        >
                            <div>
                                {props.item[itemField]}
                            </div>
                        </td>
                    )
                } else if (!column.item.children) {
                    return column.item.children
                } else {
                    return column.item.showDataSlot && column.item.showDataSlot(column.item, props.item) || undefined;
                }
            }
        )
        line = (
            <tr className={lineClassName}>
                {cells}
            </tr>
        )
    }
    return line
}