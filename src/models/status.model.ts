export class Status implements IStatusDto {
    constructor(statusDto: IStatusDto) {
        this.id = statusDto.id;
        this.code = statusDto.code;
        this.description = statusDto.description;
        this.isBusy = statusDto.isBusy;
        this.order = statusDto.order;
        this.orderNext = statusDto.orderNext;
    }

    id: number;
    code: string;
    description: string;
    isBusy: boolean;
    order: number;
    orderNext?: number | undefined;
}

export interface IStatusDto {
    id: number;
    code: string;
    description: string;
    isBusy: boolean;
    order: number;
    orderNext?: number;
}