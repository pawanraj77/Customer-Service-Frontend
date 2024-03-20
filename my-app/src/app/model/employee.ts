export class Employee {
    constructor(
        public cdsId?: number,
        public firstName?: string,
        public lastName?: string,
        public phoneNo?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public city?: string
    ) {}
}
