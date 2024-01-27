import { ChangeEventHandler } from "react";

export type InputTextProps = {
    value?: string | number | undefined
    onChange?: (value:string ) => void | undefined
    id?: string
    name?: string
    className?: string
    placeholder?: string
}

export type CheckboxProps = {
    value?: boolean
    className?: string
    onChange?: (value:boolean ) => void | undefined
}

export type TrueFalseIconProps = {
    value?: boolean
}