export class OrderStats implements IOrderStatsDto {

    constructor(orderStatsDto: IOrderStatsDto) {
        this.id = orderStatsDto.id;
        this.orderId = orderStatsDto.orderId;
        this.acceptedAt = orderStatsDto.acceptedAt;
        this.entryToCustomerFact = orderStatsDto.entryToCustomerFact;
        this.exitToDestinationFact = orderStatsDto.exitToDestinationFact;
        this.entryToDestinationFact = orderStatsDto.entryToDestinationFact;
        this.doneAt = orderStatsDto.doneAt;
        this.timeBetweenOrders = orderStatsDto.timeBetweenOrders;
        this.timeBeforeAccepted = orderStatsDto.timeBeforeAccepted;
        this.timeEntryToCustomer = orderStatsDto.timeEntryToCustomer;
        this.loadingTime = orderStatsDto.loadingTime;
        this.driveTime = orderStatsDto.driveTime;
        this.unloadingTime = orderStatsDto.unloadingTime;
        this.placeId = orderStatsDto.placeId;
        this.transportNumber = orderStatsDto.transportNumber;
        this.transportType = orderStatsDto.transportType;
        this.driverFullname = orderStatsDto.driverFullname;
        this.driverPhoneNumber = orderStatsDto.driverPhoneNumber;
        this.operatorFullname = orderStatsDto.operatorFullname;
    }

    id: number;
    orderId: number;
    acceptedAt?: Date | undefined;
    entryToCustomerFact?: Date | undefined;
    exitToDestinationFact?: Date | undefined;
    entryToDestinationFact?: Date | undefined;
    doneAt?: Date | undefined;
    timeBetweenOrders?: number | undefined;
    timeBeforeAccepted?: number | undefined;
    timeEntryToCustomer?: number | undefined;
    loadingTime?: number | undefined;
    driveTime?: number | undefined;
    unloadingTime?: number | undefined;
    placeId?: number | undefined;
    transportNumber: string;
    transportType: string;
    driverFullname: string;
    driverPhoneNumber: string;
    operatorFullname?: string | undefined;

}

export interface IOrderStatsDto {
    id: number;
    orderId: number;
    acceptedAt?: Date;
    entryToCustomerFact?: Date;
    exitToDestinationFact?: Date;
    entryToDestinationFact?: Date;
    doneAt?: Date;
    timeBetweenOrders?: number;
    timeBeforeAccepted?: number;
    timeEntryToCustomer?: number;
    loadingTime?: number;
    driveTime?: number;
    unloadingTime?: number;
    placeId?: number;
    transportNumber: string;
    transportType: string;
    driverFullname: string;
    driverPhoneNumber: string;
    operatorFullname?: string;
}