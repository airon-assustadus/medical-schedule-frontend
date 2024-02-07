import { CancelIconButton } from "src/components/Button/CancelIconButton";
import { SaveIconButton } from "src/components/Button/SaveIconButton";
import { ContainerBordered } from "src/components/Container/Bordered";
import { PageFormType } from "src/types/container.types";

export const PageForm = (props: PageFormType) => {

    return (
        <div className="w-full px-3">
            <div className="title py-3 font-bold">{props.title}</div>

            {props.children}
            <ContainerBordered className="p-2">
                <div className="flex flex-row justify-between sm:justify-start items-center w-full gap-3">
                    <SaveIconButton onClick={() => props.saveClick && props.saveClick()}/>
                    {props.afterSaveButton}
                    <CancelIconButton onClick={() => props.cancelClick && props.cancelClick()}/>
                    {props.afterCancelButton}
                </div>
            </ContainerBordered>

        </div>
    );
}

export default PageForm;