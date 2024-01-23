import { DoctorSchedule } from "./DoctorSchedule.model"
import { PatientModel } from "./Patient.model"
import { ServiceLocation } from "./ServiceLocation.model"
import { ServiceType } from "./ServiceType.model"
import { VisitReason } from "./VisitReason.model"

export type DoctorScheduleSlot = {
    id: number
    doctorSchedule: DoctorSchedule
    doctorScheduleId: number
    startTime: Date | string
    endTime: Date | string
    patient: PatientModel
    patientId: number
    visitReason: VisitReason
    visitReasonId: number
    serviceLocation: ServiceLocation
    serviceLocationId: number
    ServiceTypes: ServiceType[]
}

export type AvailableSlotsRequest = {
    doctorId: number
    startDate: Date | string
    endDate: Date | string
}

export type AvailableSlotsResponse = {
    dates?: Array<{
        day: String,
        slots?: Array<{
            doctorScheduleSlotId: number,
            time: string
        }>
    }>
}