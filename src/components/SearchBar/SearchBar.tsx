import { useState } from "react";
import { ContainerBordered } from "../Container/Bordered"
import { InputText } from "../Input/Text"
import { SearchIconButton } from "../Button/SearchIconButton";
import { SearchBarProps } from "src/types/searchbar.types";
import { NewIconButton } from "../Button/NewIconButton";
import { useAppContext } from "../app.provider";


export const SearchBar = (props: SearchBarProps) => {

    const [searchText, setSearchText] = useState('');

    const {state: {interface: {isMobile}}} = useAppContext()

    return (
        <ContainerBordered className="flex-col pr-2">
            <div className="flex flex-row justify-start items-center w-full sm:w-2/3">
                <InputText
                    value={searchText}
                    onChange={(value) => setSearchText(value)}
                />
                <SearchIconButton hideText={isMobile} onClick={() => props.onClickSearchButton && props.onClickSearchButton(searchText)}>Search</SearchIconButton>
            </div>
            <div className="flex flex-row justify-start sm:justify-end pt-2 sm:pt-2 items-center w-full sm:w-1/3 sm:pl-2 pl-3">
                <NewIconButton onClick={() => props.onClickNewButton && props.onClickNewButton() } />
            </div>
        </ContainerBordered>
    )
}