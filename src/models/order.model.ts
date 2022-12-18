export class Order implements IOrderDto {

    constructor(orderDto: IOrderDto) {
        this.id = orderDto.id;
        this.orderedAt = orderDto.orderedAt;
        this.orderTime = orderDto.orderTime;
        this.departurePointId = orderDto.departurePointId;
        this.destinationId = orderDto.destinationId;
        this.isEmergency = orderDto.isEmergency;
        this.passengerCount = orderDto.passengerCount;
        this.weight = orderDto.weight;
        this.length = orderDto.length;
        this.width = orderDto.width;
        this.height = orderDto.height;
        this.isDone = orderDto.isDone;
        this.isDeleted = orderDto.isDeleted;
        this.isRequest = orderDto.isRequest;
        this.isApproved = orderDto.isApproved;
        this.isDeclined = orderDto.isDeclined;
        this.name = orderDto.name;
        this.description = orderDto.description;
        this.customerId = orderDto.customerId;
        this.contactId = orderDto.contactId;
        this.transportId = orderDto.transportId;
        this.statusId = orderDto.statusId;
        this.statusChangedAt = orderDto.statusChangedAt;
        this.priority = orderDto.priority;
    }
    
    id: number;
    orderedAt?: Date | undefined;
    orderTime?: Date | undefined;
    departurePointId?: number | undefined;
    destinationId?: number | undefined;
    isEmergency: boolean;
    passengerCount: number;
    weight: number;
    length: number;
    width: number;
    height: number;
    isDone: boolean;
    isDeleted: boolean;
    isRequest: boolean;
    isApproved: boolean;
    isDeclined: boolean;
    name: string;
    description?: string | undefined;
    customerId: number;
    contactId?: number | undefined;
    transportId?: number | undefined;
    statusId?: number | undefined;
    statusChangedAt?: Date | undefined;
    priority?: number | undefined;
}

export interface IOrderDto {
    id: number;
    orderedAt?: Date;
    orderTime?: Date;
    departurePointId?: number;
    destinationId?: number;
    isEmergency: boolean;
    passengerCount: number;
    weight: number;
    length: number;
    width: number;
    height: number;
    isDone: boolean;
    isDeleted: boolean;
    isRequest: boolean;
    isApproved: boolean;
    isDeclined: boolean;
    name: string;
    description?: string;
    customerId: number;
    contactId?: number;
    transportId?: number;
    statusId?: number;
    statusChangedAt?: Date;
    priority?: number;
}