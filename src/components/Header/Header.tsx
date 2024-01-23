import { useReducer } from "react";
import { headerReducer } from "src/reducers";
import { useAppContext } from "../app.provider";

export function Header() {
    const {state} = useAppContext()

    return (
        <header className="
            bg-primary-dark 
            text-primary-dark-text
            p-3">
            <h1 className="font-bold">Assustadus Medical Schedule</h1>
            <h3>{state.header.pageTitle}</h3>
        </header>
    )
}