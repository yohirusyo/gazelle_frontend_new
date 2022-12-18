import { CurrentUser, ICurrentUserDto } from "./current-user.model";

export class Customer extends CurrentUser implements ICustomerDto {

    constructor(customerDto: ICustomerDto) {
        super(customerDto);
        this.id = customerDto.id;
        this.fullname = customerDto.fullname;
        this.phoneNumber = customerDto.phoneNumber;
        this.subdivision = customerDto.subdivision;
    }

    id: number;
    fullname: string;
    phoneNumber: string;
    subdivision: string;
}

export interface ICustomerDto extends ICurrentUserDto {
    id: number;
    fullname: string;
    phoneNumber: string;
    subdivision: string;
}