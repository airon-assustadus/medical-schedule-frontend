import { mdiPencil } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryButton } from "./PrimaryButton";

export const EditIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiPencil
    }
    return (
        <PrimaryButton {...props} icon={icon}>
            Edit
        </PrimaryButton>
    )
}