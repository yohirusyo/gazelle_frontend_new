export class Contact implements IContactDto {

    constructor(contactDto: IContactDto) {
        this.id = contactDto.id;
        this.fullname = contactDto.fullname;
        this.phoneNumber = contactDto.phoneNumber;
    }

    id: number;
    fullname: string;
    phoneNumber: string;
}

export interface IContactDto {
    id: number;
    fullname: string;
    phoneNumber: string;
}