import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PrimaryButton } from "src/components/Button/PrimaryButton";
import { ContainerBordered } from "src/components/Container/Bordered";
import { Grid } from "src/components/Grid/Grid";
import { InputText } from "src/components/Input/Text";
import { useAppContext } from "src/components/app.provider";
import { PatientModel } from "src/models/Patient.model";
import { AppContextActionEnum } from "src/types/context.types";
import { GridColumnType, GridType } from "src/types/grid.types";


const patientsList: PatientModel[] = [
    {
        id: 1,
        name: 'SomeOne',
        active: true
    },
    {
        id: 2,
        name: 'SomeOne 2',
        active: false
    },
    {
        id: 3,
        name: 'Someone 3',
        active: true
    }
]

const patientColumns: GridColumnType[] = [
    {
        header: {
            name: '#',
            className: 'w-10 pl-2'
        },
        item: {
            field: 'id',
            className: 'w-10 justify-center'
        }
    },
    {
        header: {
            name: 'Name',
            className: 'w-full'
        },
        item: {
            field: 'name',
            className: 'w-full'
        }
    },
    {
        header: {
            name: 'Active',
            type: 'boolean',
            className: 'w-24'
        },
        item: {
            field: 'active',
            className: 'justify-center w-24'
        }
    },
    {
        isActionsHeader: true
    },
]

const noDataMessage = 'No Data found'

const Patient: NextPage = () => {

    const router = useRouter()

    const [searchText, setSearchText] = useState('');
    const [patients, setPatients] = useState<PatientModel[]>(patientsList);

    const { state, dispatch } = useAppContext()

    const onEditClick = (value: any) => {
        console.log('Editing item', value)
    }

    const onDeleteClick = (value: any) => {
        console.log('Deleting item', value)
    }

    const onRowClick = (value: any) => {
        console.log('Row item clicking', value)
    }

    const onNewClick = () => {
        router.push('/patient/new')
    }

    const [gridType, setGridType] = useState<GridType>({
        items: patients,
        columns: patientColumns,
        onEditClick,
        onDeleteClick,
        onRowClick,
        noDataMessage
    })

    useEffect(() => {
        return dispatch && dispatch({
            type: AppContextActionEnum.PAGE_TITLE,
            value: 'Patients'
        })
    }, [state.header.pageTitle])

    const doSearch = () => {
        setSearchText('searched')
    }

    return (
        <div className="w-full px-3">
            <div className="title py-3">Patients</div>

            <ContainerBordered>
                <div className="flex flex-row justify-start items-center w-2/3">
                    <span className="p-3">Text</span>
                    <InputText
                        value={searchText}
                        onChange={(value) => setSearchText(value)}
                    />
                    <PrimaryButton label="Search" onClick={doSearch} />
                </div>
                <div className="flex flex-row justify-end items-center w-1/3 pr-3">
                    <PrimaryButton label="New" onClick={onNewClick} />
                </div>
            </ContainerBordered>
            <Grid {...gridType} className="mt-2" />

        </div>
    );
}

export default Patient;