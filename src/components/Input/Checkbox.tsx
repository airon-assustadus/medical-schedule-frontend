import { CheckboxProps } from "src/types/input.types";
import styles from './Checkbox.module.css'
import Icon from "@mdi/react";
import { mdiCheck } from '@mdi/js'


export const Checkbox = (props:CheckboxProps) => {

    const result = !props.value ?
    <div 
        onClick={() => props.onChange && props.onChange(!props.value)} 
        className={`${styles['checkbox-unchecked']} ${props.className || ''}`}></div>
    :
    <div 
        onClick={() => props.onChange && props.onChange(!props.value)} 
        className={`${styles['checkbox-checked']} ${props.className || ''}`}>
        <Icon 
            path={mdiCheck}
            size={1}
            color="#63B77D"/>
    </div>
    

    return (
        result
    )


}