export class Contact{

    constructor(init?: Partial<Contact>){
        Object.assign(this, init);
    }

    id: number;
    fullName: string;
    address: string;
    phone: number;
    birthdate: Date;
}