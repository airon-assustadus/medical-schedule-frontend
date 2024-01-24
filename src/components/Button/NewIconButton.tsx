import { mdiPlus } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryButton } from "./PrimaryButton";

export const NewIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiPlus
    }
    return (
        <PrimaryButton {...props} icon={icon}>
            New
        </PrimaryButton>
    )
}