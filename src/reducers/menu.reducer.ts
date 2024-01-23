import { MenuItemProps, MenuReducerState } from "src/types/menu.types";
import { DefaultAction } from ".";

export const defaultMenus: MenuItemProps[] = [
    {
        isSelected: true,
        label: 'Home',
        to: '/'
    },
    {
        isSelected: false,
        label: 'Patient',
        to: '/patient'
    },
    {
        isSelected: false,
        label: 'Service Location',
        to: '/ServiceLocation'
    },
    {
        isSelected: false,
        label: 'Service Type',
        to: '/ServiceType'
    },
    {
        isSelected: false,
        label: 'Visit Reason',
        to: '/VisitReason'
    },
    {
        isSelected: false,
        label: 'Doctor',
        to: '/Doctor'
    },
    {
        isSelected: false,
        label: 'Doctor Schedule',
        to: '/DoctorSchedule'
    },
    {
        isSelected: false,
        label: 'Doctor Appointments',
        to: '/DoctorAppointments'
    }
]

export const menuReducer = (state: MenuReducerState, action: DefaultAction): MenuReducerState => {
    if (!action || !action.type) {
        throw Error('Unknown action.')
    }
    switch(action.type) {
        case 'active' : {
            const list = state.menus.map(
                menu => {
                    return {
                        ...menu,
                        isSelected: menu.to === action.args
                    }
                }
            )
            return {
                menus: list
            }
        }
        default: {
            throw Error('Unknown action.')
        }
    }
}