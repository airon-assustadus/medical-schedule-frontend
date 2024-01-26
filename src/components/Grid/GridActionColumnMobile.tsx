import { GridActionColumnPropsType } from "src/types/grid.types";
import { EditIconButton } from "../Button/EditIconButton";
import { DeleteIconButton } from "../Button/DeleteIconButton";

export const GridActionColumnMobile = (props: GridActionColumnPropsType) => {

    return (
        <div className="grid-action-column-mobile">
            <EditIconButton onClick={
                () =>
                    props.onEditClick
                    && props.onEditClick(props.item)} />
            <DeleteIconButton onClick={
                () =>
                    props.onDeleteClick
                    && props.onDeleteClick(props.item)} />
        </div>
    )

}