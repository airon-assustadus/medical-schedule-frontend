import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Grid } from "src/components/Grid/Grid";
import { SearchBar } from "src/components/Container/SearchBar";
import { useAppContext } from "src/components/app.provider";
import { PatientModel } from "src/models/Patient.model";
import { AppContextActionEnum } from "src/types/context.types";
import { GridColumnType, GridType } from "src/types/grid.types";
import { PaginatorType } from "src/types/container.types";
import { SearchBarClickSearchButton, SearchBarProps } from "src/types/searchbar.types";


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
            // className: 'sm:w-10 sm:pl-2'
        },
        item: {
            field: 'id',
            // className: 'sm:w-10 sm:justify-center'
        }
    },
    {
        header: {
            name: 'Name',
            // className: 'sm:w-full'
        },
        item: {
            field: 'name',
            // className: 'sm:w-full'
        }
    },
    {
        header: {
            name: 'Active',
            type: 'boolean',
            // className: 'sm:w-24'
        },
        item: {
            field: 'active',
            // className: 'sm:justify-center sm:w-24'
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

    const { dispatch: dispatchContext } = useAppContext()

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
        dispatchContext && dispatchContext({
            type: AppContextActionEnum.PAGE_TITLE_AND_MENU,
            value: {
                to: '/patient',
                pageTitle: 'New Patient'
            }
        })
        router.push('/patient/new')
    }

    const [paginator, setPaginator] = useState<PaginatorType>({
        currentPage: 3,
        totalPages: 5
    })

    const [gridType, setGridType] = useState<GridType>({
        items: patients,
        columns: patientColumns,
        onEditClick,
        onDeleteClick,
        onRowClick,
        noDataMessage,
        isLoading: false
    })

    const [searchBarProps, setSearchBarProps] = useState<SearchBarProps>({
        paginator
    })

    const doSearch = (text:SearchBarClickSearchButton) => {
        console.log('searching for', text)
    }

    return (
        <div className="w-full px-3 entity-list">
            <div className="title py-3">Patients</div>

            <SearchBar {...searchBarProps} onClickNewButton={onNewClick} onClickSearchButton={doSearch}/>
            <div className="entity-list-content">
                <Grid {...gridType} className="sm:mt-2" />
            </div>
        </div>
    );
}

export default Patient;