import { mdiMagnify } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryButton } from "./PrimaryButton";

export const SearchIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiMagnify
    }
    return (
        <PrimaryButton {...props} icon={icon}>
            Search
        </PrimaryButton>
    )
}