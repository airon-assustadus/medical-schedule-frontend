import { ServiceTypeModel } from "./ServiceType.model"

export type VisitReasonModel = {
    id: number,
    name: string,
    active: boolean,
    serviceTypeId: number,
    serviceType?: ServiceTypeModel
}