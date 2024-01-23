import { GridLineType } from "src/types/grid.types";
import { PrimaryButton } from "../Button/PrimaryButton";
import styles from './Grid.module.css'
import { TrueFalseIcon } from "../Input/TrueFalseIcon";


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
                ${styles['grid-line-cell']}
                ${column.item?.className || ''}
                `.trim()
                if (column.isActionsHeader) {
                    return (
                        <div
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
                        </div>
                    )
                } 
                if (!column.item || !column.item.field) {
                    return <></>
                }
                const itemField = column.item.field
                if (column.header?.type == 'boolean') {
                    return (
                        <div
                            className={className}
                            key={index}>
                            <TrueFalseIcon key={index} value={props.item[itemField]} />
                        </div>
                    )
                }
                return (
                    <div onClick={() => props.onRowClick && props.onRowClick(props.item, index)}
                        className={className}
                        key={index}
                    >
                        {props.item[itemField]}
                    </div>
                )
            }
        )
        line = (
            <div className={lineClassName}>
                {cells}
            </div>
        )
    }
    return line
}