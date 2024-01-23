import { HeaderReducerState } from "src/types/header.types";
import { DefaultAction } from ".";

export const headerReducer = (state: HeaderReducerState, action: DefaultAction): HeaderReducerState => {
    if (!action || !action.type) {
        throw Error('Unknown action.')
    }
    switch(action.type) {
        case 'pageTitle' : {
            return {
                ...state,
                pageTitle: action.args
            }
        }
        default: {
            throw Error('Unknown action.')
        }
    }
}