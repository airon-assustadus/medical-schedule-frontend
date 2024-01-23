import { InputTextProps } from "src/types/input.types";
import styles from './Text.module.css'

export const InputText = (props: InputTextProps) => {
    return (
        <div className={styles['input-text']}>
            <div>
                <input
                    type="text"
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    onChange={(e) => props.onChange && props.onChange(e.target.value)} 
                    />
            </div>
        </div>
    )
}