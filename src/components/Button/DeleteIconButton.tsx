import { mdiTrashCan } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryButton } from "./PrimaryButton";

export const DeleteIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiTrashCan
    }
    return (
        <PrimaryButton {...props} icon={icon}>
            Delete
        </PrimaryButton>
    )
}