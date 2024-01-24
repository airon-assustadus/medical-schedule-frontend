import { mdiCancel } from '@mdi/js';
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";
import { PrimaryDarkButton } from './PrimaryDarkButton';

export const CancelIconButton = (props: PrimaryButtonProps) => {

    const icon: IconProps = {
        path: mdiCancel
    }
    return (
        <PrimaryDarkButton {...props} icon={icon}>
            Cancel
        </PrimaryDarkButton>
    )
}