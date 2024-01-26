import { GridType } from "src/types/grid.types";
import { ContainerBordered } from "../Container/Bordered";
import { GridHeader } from "./GridHeader";
import { GridItems } from "./GridItems";
import styles from './Grid.module.css'
import { useAppContext } from "../app.provider";
import { GridMobile } from "./GridMobile";

export const Grid = (props:GridType) => {

    const className = `
        ${styles.grid}
        ${props.className}
        pb-0
    `

    const noDataDiv = 
        (!props.items || !props.columns)
        &&
        (
            <ContainerBordered className={className}>
                {props.noDataMessage || 'No data found'}
            </ContainerBordered>
        )
        || undefined

    const {state: {interface: {isMobile}}} = useAppContext();

    return (
        noDataDiv || 
        (
            (isMobile && 
                <GridMobile {...props} />
            ) ||
        <table className={className}>
            <GridHeader columns={props.columns} gridHeaderClassName={props.gridHeaderClassName}/>
            <GridItems {...props}/>
        </table>
        )
    )    

}