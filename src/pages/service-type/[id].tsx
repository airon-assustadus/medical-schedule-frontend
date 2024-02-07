import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { PageForm } from "src/components/Container/PageForm";
import { Checkbox } from "src/components/Input/Checkbox";
import { InputText } from "src/components/Input/Text";
import { useAppContext } from "src/components/app.provider";
import { PatientModel } from "src/models/Patient.model";
import { PageFormType } from "src/types/container.types";
import { AppContextActionEnum } from "src/types/context.types";


const VisitReasonPage: NextPage = () => {

    const router = useRouter();

    const { id } = router.query;

    const [name, setName] = useState('')

    const [active, setActive] = useState<boolean>(true)

    const { dispatch: dispatchContext } = useAppContext()

    const cancelClick = () => {
        dispatchContext && dispatchContext({
            type: AppContextActionEnum.PAGE_TITLE_AND_MENU,
            value: {
                to: '/service-type',
                pageTitle: 'Service Types'
            }
        })
        router.push('/service-type')
    }

    const saveClick = () => {
        const patient: PatientModel = {
            name,
            active
        }
        console.log('service-type', patient)
    }

    const pageFormProps:PageFormType = {
        title: 'new' !== id ? 'Editing Service Type ID: ' + id : 'New Service Type',
        cancelClick,
        saveClick
    }

    return (
        <PageForm {...pageFormProps}>

            <div className="row">
                <div className="flex flex-row justify-start items-center w-full sm:w-1/2">
                    <span className="p-3">Name</span>
                    <InputText
                        value={name}
                        onChange={(value) => setName(value)}
                        />
                </div>
                <div className="flex flex-row justify-start items-center w-full sm:w-1/2">
                    <span className="p-3">Active</span>
                    <Checkbox value={active} onChange={(value) => setActive(value)} className="ml-2"/>
                </div>
            </div>

        </PageForm>
    );
}

export default VisitReasonPage;