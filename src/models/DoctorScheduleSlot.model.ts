import { DoctorScheduleModel } from "./DoctorSchedule.model"
import { PatientModel } from "./Patient.model"
import { ServiceLocationModel } from "./ServiceLocation.model"
import { ServiceTypeModel } from "./ServiceType.model"
import { VisitReasonModel } from "./VisitReason.model"

export type DoctorScheduleSlotModel = {
    id: number
    doctorSchedule: DoctorScheduleModel
    doctorScheduleId: number
    startTime: Date | string
    endTime: Date | string
    patient: PatientModel
    patientId: number
    visitReason: VisitReasonModel
    visitReasonId: number
    serviceLocation: ServiceLocationModel
    serviceLocationId: number
    ServiceTypes: ServiceTypeModel[]
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