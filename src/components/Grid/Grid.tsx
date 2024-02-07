import { GridType } from "src/types/grid.types";
import { ContainerBordered } from "../Container/Bordered";
import { GridHeader } from "./GridHeader";
import { GridItems } from "./GridItems";
import styles from './Grid.module.css'
import { useAppContext } from "../app.provider";
import { GridMobile } from "./GridMobile";
import { Loading } from "../Container/Loading";

export const Grid = (props:GridType) => {

    const className = `
        ${styles.grid}
        ${props.className}
        pb-0
    `

    const noDataDiv = 
        (!props.items || (!props.columns && !props.hideHeader))
        &&
        (
            <ContainerBordered className={className}>
                {props.noDataMessage || 'No data found'}
            </ContainerBordered>
        )
        || undefined

    const loading = props.isLoading
    && <Loading />
    || undefined

    const {state: {interface: {isMobile}}} = useAppContext();

    return (
        noDataDiv || 
        loading ||
        (
            (isMobile && 
                <GridMobile {...props} />
            ) ||
        <table className={className} border={1}>
            <GridHeader columns={props.columns} gridHeaderClassName={props.gridHeaderClassName}/>
            <GridItems {...props}/>
        </table>
        )
    )    

}