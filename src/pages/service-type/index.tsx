import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { PageList } from "src/components/Container";
import { useAppContext } from "src/components/app.provider";
import { ServiceTypeModel } from "src/models/ServiceType.model";
import { PageListType, PaginatorType } from "src/types/container.types";
import { AppContextActionEnum } from "src/types/context.types";
import { GridColumnType, GridType } from "src/types/grid.types";
import { SearchBarClickSearchButton, SearchBarProps } from "src/types/searchbar.types";


const itemList: ServiceTypeModel[] = [
    {
        id: 1,
        name: 'Behavior Therapy',
        active: true
    },
    {
        id: 2,
        name: 'Massage Therapy',
        active: true
    },
    {
        id: 3,
        name: 'Psycho Therapy',
        active: false
    }
]

const columns: GridColumnType[] = [
    {
        header: {
            name: '#',
        },
        item: {
            field: 'id',
        }
    },
    {
        header: {
            name: 'Name',
        },
        item: {
            field: 'name',
        }
    },
    {
        header: {
            name: 'Active',
            type: 'boolean',
        },
        item: {
            field: 'active',
        }
    },
    {
        isActionsHeader: true
    },
]

const ServiceType: NextPage = () => {

    const router = useRouter()

    const [searchText, setSearchText] = useState('');
    const [items, setItems] = useState<ServiceTypeModel[]>(itemList);

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
                to: '/service-type',
                pageTitle: 'New Service Type'
            }
        })
        router.push('/service-type/new')
    }

    const [paginator, setPaginator] = useState<PaginatorType>({
        currentPage: 3,
        totalPages: 5
    })

    const [gridType, setGridType] = useState<GridType>({
        items: items,
        columns,
        onEditClick,
        onDeleteClick,
        onRowClick,
        isLoading: false
    })

    const doSearch = (text:SearchBarClickSearchButton) => {
        console.log('searching for', text)
    }

    const [searchBarProps, setSearchBarProps] = useState<SearchBarProps>({
        paginator,
        onClickNewButton: onNewClick,
        onClickSearchButton: doSearch
    })

    const pageListProps:PageListType = {
        gridProps: gridType,
        searchBarProps,
        title: "Service Types"        
    }

    return (
        <PageList {...pageListProps}/>
    );
}

export default ServiceType;