import { UserBase } from './user-base-data.model';

export class UserForCreation extends UserBase {

    constructor(firstName: string, lastName: string, email: string, password: string){
        super();
        firstName = firstName,
        lastName = lastName,
        email = email,
        password = password
    }
}