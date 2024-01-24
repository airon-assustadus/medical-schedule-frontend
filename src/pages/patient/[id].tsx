import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CancelIconButton } from "src/components/Button/CancelIconButton";
import { PrimaryButton } from "src/components/Button/PrimaryButton";
import { PrimaryDarkButton } from "src/components/Button/PrimaryDarkButton";
import { SaveIconButton } from "src/components/Button/SaveIconButton";
import { ContainerBordered } from "src/components/Container/Bordered";
import { Checkbox } from "src/components/Input/Checkbox";
import { InputText } from "src/components/Input/Text";
import { useAppContext } from "src/components/app.provider";
import { PatientModel } from "src/models/Patient.model";
import { AppContextActionEnum } from "src/types/context.types";


const Patient: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const [name, setName] = useState('')

    const [active, setActive] = useState<boolean>(true)

    const { state: context, dispatch: dispatchContext } = useAppContext()

    useEffect(() => {
        return dispatchContext && dispatchContext({
            type: AppContextActionEnum.PAGE_TITLE_AND_MENU,
            value: {
                to: '/patient',
                pageTitle: isNaN(Number(id)) ? 'New Patient' : 'Changing Patient'
            }
        })
    }, [context.header.pageTitle])

    const cancelClick = () => {
        router.push('/patient')
    }

    const saveClick = () => {
        const patient: PatientModel = {
            name,
            active
        }
        console.log('patient', patient)
    }

    return (
        <div className="w-full px-3">
            <div className="title py-3 font-bold">Patient Form</div>

            <div className="flex flex-row justify-start items-center w-1/2">
                <span className="p-3">Name</span>
                <InputText
                    value={name}
                    onChange={(value) => setName(value)}
                />
            </div>
            <div className="flex flex-row justify-start items-center w-1/2">
                <span className="p-3">Active</span>
                <Checkbox value={active} onChange={(value) => setActive(value)} className="ml-2"/>
            </div>
            <ContainerBordered className="px-2">
                <div className="flex flex-row justify-start items-center w-1/2">
                    <SaveIconButton onClick={saveClick}/>
                </div>
                <div className="flex flex-row justify-end items-center w-1/2">
                    <CancelIconButton onClick={cancelClick}/>
                </div>
            </ContainerBordered>

        </div>
    );
}

export default Patient;