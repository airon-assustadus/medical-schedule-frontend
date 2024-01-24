import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { PrimaryButton } from "src/components/Button/PrimaryButton";
import { SearchIconButton } from "src/components/Button/SearchIconButton";
import { ContainerBordered } from "src/components/Container/Bordered";
import { Grid } from "src/components/Grid/Grid";
import { InputText } from "src/components/Input/Text";
import { SearchBar } from "src/components/SearchBar/SearchBar";
import { PatientModel } from "src/models/Patient.model";
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
        console.log('clicked on new button')
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

    const doSearch = (text:string) => {
        console.log('searching for', text)
    }

    return (
        <div className="w-full px-3">
            <div className="title py-3">Patients</div>

            <SearchBar onClickNewButton={onNewClick} onClickSearchButton={doSearch}/>
            <Grid {...gridType} className="mt-2" />

        </div>
    );
}

export default Patient;