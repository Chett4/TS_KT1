class User {
    private static count: number = 0;

    private _name: string;
    private _login: string;
    private _password: string;
    private _grade: number;

    constructor(name: string, login: string, password: string, grade: number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return '********';
    }

    showInfo(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }

    eq(user: User): boolean {
        return this._grade === user._grade;
    }

    lt(user: User): boolean {
        return this._grade < user._grade;
    }

    gt(user: User): boolean {
        return this._grade > user._grade;
    }
}

class SuperUser extends User {
    private _role: string;

    constructor(name: string, login: string, password: string, role: string, grade: number) {
        super(name, login, password, grade);
        this._role = role;
    }

    get role(): string {
        return this._role;
    }

    set role(role: string) {
        this._role = role;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
    }
}