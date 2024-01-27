import { mdiArrowCollapseLeft, mdiArrowCollapseRight, mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { fullTailwindConfig } from "../app.provider";
import { PaginatorType } from "src/types/container.types";


export const Paginator = (props:PaginatorType) => {

    const primaryColor = `${fullTailwindConfig.theme?.colors && fullTailwindConfig.theme?.colors['primary-dark'] || ''}`

    const onClickChangePage = (newSelectedPage: number) => {
        props.changePageEvent && props.changePageEvent(newSelectedPage)
    }

    const previewPageButton = 
        props.currentPage 
        && props.currentPage > 1
        &&
        <div onClick={() => onClickChangePage(props.currentPage && props.currentPage - 1 || 0)}>
            <Icon path={mdiArrowLeft}
            className="paginator-icon paginator-preview-icon"
            size={1}
            color={primaryColor}
            />
        </div>
        || undefined

    const firstPageButton = 
        props.currentPage 
        && props.currentPage > 2
        &&
        <div onClick={() => onClickChangePage(1)}>
            <Icon path={mdiArrowCollapseLeft}
            className="paginator-icon paginator-first-page-icon"
            size={1}
            color={primaryColor}/>
        </div>
        || undefined


    const nextPageButton = 
    props.currentPage 
    && props.totalPages 
    && props.currentPage < props.totalPages
        &&
        <div onClick={() => onClickChangePage(props.currentPage && props.currentPage + 1 || 0)}>
        <Icon path={mdiArrowRight}
        className="paginator-icon paginator-next-icon"
        size={1}
        color={primaryColor}/>
        </div>
        || undefined

    const lastPageButton = 
        props.currentPage 
        && props.totalPages 
        && props.currentPage < props.totalPages - 1
            &&
            <div onClick={() => onClickChangePage(props.totalPages || 0)}>
                <Icon path={mdiArrowCollapseRight}
                className="paginator-icon paginator-last-page-icon"
                size={1}
                color={primaryColor}/>
            </div>
            || undefined

    const currentPage = 
        (props.currentPage || props.totalPages)
        &&
        <span className="paginator-current-page">{props.currentPage} of {props.totalPages}</span>
        ||
        undefined

    return (
        <div className="paginator">
            {firstPageButton}
            {previewPageButton}
            {currentPage}
            {nextPageButton}
            {lastPageButton}
        </div>
    )
}