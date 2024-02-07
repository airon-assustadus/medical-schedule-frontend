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
        label: 'Service Type',
        to: '/service-type'
    },
    {
        isSelected: false,
        label: 'Visit Reason',
        to: '/visit-reason'
    },
    {
        isSelected: false,
        label: 'Service Location',
        to: '/ServiceLocation'
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
