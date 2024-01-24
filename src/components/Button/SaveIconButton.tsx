import { mdiContentSave, mdiPlus } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryButton } from "./PrimaryButton";

export const SaveIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiContentSave
    }
    return (
        <PrimaryButton {...props} icon={icon}>
            Save
        </PrimaryButton>
    )
}