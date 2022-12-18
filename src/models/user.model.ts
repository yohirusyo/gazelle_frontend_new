import { ROLE } from "src/shared";
import { CurrentUser, ICurrentUserDto } from "./current-user.model";

export class User extends CurrentUser implements IUserDto {

    constructor(userDto: IUserDto) {
        super(userDto);
        this.name = userDto.name;
        this.surname = userDto.surname;
        this.middlename = userDto.middlename
        this.login = userDto.login;
        this.workingPhoneNumber = userDto.workingPhoneNumber;
        this.transportId = userDto.transportId;
        this.isOnDriverShift = userDto.isOnDriverShift;
    }

    name: string;
    surname: string;
    middlename: string;
    login: string;
    workingPhoneNumber: string;
    transportId?: number | undefined;
    isOnDriverShift: boolean;
}

export interface IUserDto extends ICurrentUserDto {
    name: string;
    surname: string;
    middlename: string;
    login: string;
    workingPhoneNumber: string;
    transportId?: number;
    isOnDriverShift: boolean;
}