export class Hero {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string   // this parameter is optinal, we marked the parameter with ? to make it optional
    ){}
}