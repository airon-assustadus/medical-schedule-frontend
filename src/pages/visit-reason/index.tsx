import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { PageList } from "src/components/Container";
import { useAppContext } from "src/components/app.provider";
import { VisitReasonModel } from "src/models";
import { PageListType, PaginatorType } from "src/types/container.types";
import { AppContextActionEnum } from "src/types/context.types";
import { GridColumnType, GridType } from "src/types/grid.types";
import { SearchBarClickSearchButton, SearchBarProps } from "src/types/searchbar.types";


export const itemList: VisitReasonModel[] = [
    {
        id: 1,
        name: 'Swedish Massage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 2,
        name: 'Sports Massage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 3,
        name: 'Trigger Point Massage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 4,
        name: 'Myofascial Release',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 5,
        name: 'Structural Integration',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 6,
        name: 'Trauma Touch Therapy',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 7,
        name: 'Prenatal',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 8,
        name: 'Manual Lymphatic Drainage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 9,
        name: 'Craniosacral',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 10,
        name: 'Neuromuscular',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 11,
        name: 'Cupping',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 12,
        name: 'Thai Massage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 13,
        name: 'Hot Stone Massage',
        active: true,
        serviceTypeId: 2,
        serviceType: {
            id: 2,
            name: 'Massage Therapy',
            active: true
        }
    },
    {
        id: 14,
        name: 'Functional Behavioral Assessment',
        active: true,
        serviceTypeId: 1,
        serviceType: {
            id: 1,
            name: 'Behavior Therapy',
            active: true
        }
    },
    {
        id: 15,
        name: 'Behavior intervention Plan',
        active: true,
        serviceTypeId: 1,
        serviceType: {
            id: 1,
            name: 'Behavior Therapy',
            active: true
        }
    },
    {
        id: 16,
        name: 'ABA Therapy',
        active: true,
        serviceTypeId: 1,
        serviceType: {
            id: 1,
            name: 'Behavior Therapy',
            active: true
        }
    },
    {
        id: 17,
        name: 'Parent Consultation',
        active: false,
        serviceTypeId: 1,
        serviceType: {
            id: 1,
            name: 'Behavior Therapy',
            active: true
        }
    },
    {
        id: 18,
        name: 'Electric shock',
        active: true,
        serviceTypeId: 3,
        serviceType: {
            id: 3,
            name: 'Psycho Therapy',
            active: false
        }
    },
    {
        id: 19,
        name: 'Persuasion',
        active: true,
        serviceTypeId: 3,
        serviceType: {
            id: 3,
            name: 'Psycho Therapy',
            active: false
        }
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
            name: 'Service Type',
        },
        item: {
            field: 'serviceTypeName',
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

const VisitReasonList: NextPage = () => {

    const router = useRouter()

    const [searchText, setSearchText] = useState('');
    const [items, setItems] = useState<VisitReasonModel[]>(itemList);

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
        items: items.map(visit => {
            return {
                ...visit,
                serviceTypeName: visit.serviceType?.name
            }
        }),
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

export default VisitReasonList;