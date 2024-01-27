import { useState } from "react";
import { ContainerBordered } from "./Bordered"
import { InputText } from "../Input/Text"
import { SearchIconButton } from "../Button/SearchIconButton";
import { SearchBarClickSearchButton, SearchBarProps } from "src/types/searchbar.types";
import { NewIconButton } from "../Button/NewIconButton";
import { useAppContext } from "../app.provider";
import { Paginator } from "./Paginator";
import { PrimaryButton } from "../Button/PrimaryButton";
import { mdiMagnifyExpand, mdiMagnifyRemoveCursor } from "@mdi/js";

const listRowsPerPage = [
    "5",
    "20",
    "50",
    "100",
    "All"
]

export const SearchBar = (props: SearchBarProps) => {

    const [searchText, setSearchText] = useState('');
    const [lastSearchText, setLastSearchText] = useState('');

    const [rowsPerPage, setRowPerPage] = useState<Array<string>>(props.listRowsPerPage || listRowsPerPage)
    const [selectedRowsPerPage, setSelectedRowsPerPage] = useState(rowsPerPage[0])

    const {state: {interface: {isMobile}}} = useAppContext()

    const [hideFilter, setHideFilter] = useState(false)

    const onClickSearchButton = () => {
        if (props.onClickSearchButton) {
            setLastSearchText(searchText);
            const param: SearchBarClickSearchButton = {
                searchText,
                pageToSearch: 1,
                rowsPerPage: selectedRowsPerPage
            }
            props.onClickSearchButton(param)
            setHideFilter(true);
        }
    }

    const onChangeRowsPerPage = (newRowsPerPage: string) => {
        setSelectedRowsPerPage(newRowsPerPage);
        if (props.onClickSearchButton && lastSearchText) {
            const param: SearchBarClickSearchButton = {
                searchText: lastSearchText,
                pageToSearch: 1,
                rowsPerPage: newRowsPerPage
            }
            props.onClickSearchButton(param)
        }
    }

    const onChangePage = (newPage: number) => {
        if (props.onClickSearchButton && lastSearchText) {
            const param: SearchBarClickSearchButton = {
                searchText: lastSearchText,
                pageToSearch: newPage,
                rowsPerPage: selectedRowsPerPage
            }
            props.onClickSearchButton(param)
        }
    }

    const showPaginatorSection = !props.paginator?.hidePaginator

    const showPaginator = showPaginatorSection
        && props.paginator?.currentPage
        && props.paginator?.currentPage > 0
    

    return (
        <ContainerBordered className="search-bar">
            {
            !hideFilter &&
            <div className="search-bar-filter-bar">
                {
                    props.filtersSlot || 
                    <div className="search-bar-filter-bar-filters">
                        <InputText
                            value={searchText}
                            onChange={(value) => setSearchText(value)}
                            />
                        {props.children}
                        <SearchIconButton hideText={isMobile} onClick={() => onClickSearchButton()}>Search</SearchIconButton>
                    </div>
                }
                {
                    props.actionsSlot ||
                    <div className="search-bar-filter-bar-actions">
                        {props.beforeActionsSlot}
                        <NewIconButton onClick={() => props.onClickNewButton && props.onClickNewButton() } />
                        <PrimaryButton onClick={() => setHideFilter(true) } icon={mdiMagnifyRemoveCursor} >
                            Hide
                        </PrimaryButton>
                        {props.afterActionsSlot}
                    </div>
                }
            </div>
            || undefined
            }
            {
                hideFilter &&
                (props.actionsSlot || 
                <div className="search-bar-filter-bar-hide">
                    {props.beforeActionsSlot}
                    <NewIconButton onClick={() => props.onClickNewButton && props.onClickNewButton() } hideText={isMobile}/>
                    <PrimaryButton onClick={() => setHideFilter(false) } icon={mdiMagnifyExpand} hideText={isMobile}>
                        Show Filters
                    </PrimaryButton>
                    {props.afterActionsSlot}
                </div>
                )
            }
            {
                showPaginatorSection &&
                <div className="paginator-section">
                    <Paginator changePageEvent={onChangePage} {...props.paginator} hidePaginator={!showPaginator} />
                    <div className="rows-per-page">
                        50 rows
                    </div>
                </div>
            }
        </ContainerBordered>
    )
}