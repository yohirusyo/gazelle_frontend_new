import { ROLE } from "src/shared";

export class CurrentUser implements ICurrentUserDto {

    constructor(currentUserDto: ICurrentUserDto) {
        this.id = currentUserDto.id;
        this.phoneNumber = currentUserDto.phoneNumber;
        this.role = currentUserDto.role;
        this.fcmToken = currentUserDto.fcmToken;
        this.version = currentUserDto.version;
        this.isDefaultPassword = currentUserDto.isDefaultPassword;
    }

    id: number;
    phoneNumber: string;
    role: ROLE;
    fcmToken?: string | undefined;
    version?: string | undefined;
    isDefaultPassword: boolean;

    get isCustomer(): boolean {
        return this.role == ROLE.CUSTOMER;
    };

    roleNot(...roles: ROLE[]): boolean {
        return !roles.includes(this.role);
    }

    roleIs(...roles: ROLE[]): boolean {
        return roles.includes(this.role);
    }
}

export interface ICurrentUserDto {
    id: number,
    phoneNumber: string;
    role: ROLE;
    fcmToken?: string;
    version?: string;
    isDefaultPassword: boolean;
}