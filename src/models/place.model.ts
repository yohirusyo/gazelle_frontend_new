export class Place implements IPlaceDto {
    constructor(placeDto: IPlaceDto) {
        this.id = placeDto.id;
        this.name = placeDto.name;
        this.latitude = placeDto.latitude;
        this.longitude = placeDto.longitude;
    }
    
    id: number;
    name: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
}

export interface IPlaceDto {
    id: number;
    name: string;
    latitude?: number;
    longitude?: number;
}
