export class UserModel { //propiedades de la
    id: number;
    userName: string;
    password: string;

    constructor(id: number, userName: string, password: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }
    public get _id() {
        return this.id
    }

    public get _userName() {
        return this.userName
    }

    public get _password() {
        return this.password
    }
}
