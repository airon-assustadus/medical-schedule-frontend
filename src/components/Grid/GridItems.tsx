import { GridType } from "src/types/grid.types"
import { GridLine } from "./GridLine"

export const GridItems = (props: GridType) => {
    let items

    if (props.items && props.items.length > 0) {
        items = props.items.map(
            (item, index) => {
                return (
                    <GridLine
                        item={item}
                        columns={props.columns}
                        key={index}
                        onDeleteClick={props.onDeleteClick}
                        onEditClick={props.onEditClick}
                        onRowClick={props.onRowClick} />
                )
            }
        )
        items = 
            <tbody>{items}</tbody>
    }
    return (items)
}