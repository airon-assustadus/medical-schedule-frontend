import { PageListType } from "src/types/container.types";
import { Grid } from "../Grid/Grid";
import { SearchBar } from "./SearchBar";

export const PageList = (props: PageListType) => {
    return (
        <div className="w-full px-3 entity-list">
            <div className="title py-3">{props.title}</div>
            {props.afterTitleSlot}
            <SearchBar {...props.searchBarProps}/>
            {props.children}
            <div className="entity-list-content">
                <Grid {...props.gridProps} className="sm:mt-2" />
            </div>
            {props.afterGridSlot}
        </div>
    );
}