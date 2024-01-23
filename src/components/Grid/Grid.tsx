import { GridType } from "src/types/grid.types";
import { ContainerBordered } from "../Container/Bordered";
import { GridHeader } from "./GridHeader";
import { GridItems } from "./GridItems";
import styles from './Grid.module.css'

export const Grid = (props:GridType) => {

    const className = `
        ${styles.grid}
        ${props.className}
        pb-0
    `

    return (
        <ContainerBordered className={className}>
            <GridHeader columns={props.columns} gridHeaderClassName={props.gridHeaderClassName}/>
            <GridItems {...props}/>
        </ContainerBordered>
    )    

}