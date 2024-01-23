export type DoctorSchedule = {
    id: number
    startDate: Date | string
    endDate: Date | string
    consultationTimeInMinutes: number
    weekdays: string
}