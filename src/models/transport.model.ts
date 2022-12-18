export class Transport implements ITransportDto {

    constructor(transportDto: ITransportDto) {
        this.id = transportDto.id;
        this.type = transportDto.type;
        this.transportNumber = transportDto.transportNumber;
        this.latitude = transportDto.latitude;
        this.longitude = transportDto.longitude;
        this.statusId = transportDto.statusId;
        this.placeId = transportDto.placeId;
        this.driverId = transportDto.driverId;
        this.statusChangedAt = transportDto.statusChangedAt;
        this.lastCustomerSubdivision = transportDto.lastCustomerSubdivision;
        this.lastCustomerPhoneNumber = transportDto.lastCustomerPhoneNumber;
        this.isDeleted = transportDto.isDeleted;
        this.coordinatesChangedAt = transportDto.coordinatesChangedAt;
    }
    
    id: number;
    type: string;
    transportNumber: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
    statusId: number;
    placeId?: number | undefined;
    driverId?: number | undefined;
    statusChangedAt: Date;
    lastCustomerSubdivision?: string | undefined;
    lastCustomerPhoneNumber?: string | undefined;
    isDeleted: boolean;
    coordinatesChangedAt?: Date | undefined;
}

export interface ITransportDto {
    id: number;
    type: string;
    transportNumber: string;
    latitude?: number;
    longitude?: number;
    statusId: number;
    placeId?: number;
    driverId?: number;
    statusChangedAt: Date;
    lastCustomerSubdivision?: string;
    lastCustomerPhoneNumber?: string;
    isDeleted: boolean;
    coordinatesChangedAt?: Date;
}