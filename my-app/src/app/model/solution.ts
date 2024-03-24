import { Issue } from "./issue";



export class Solution {
    constructor(
        public solutionId?: number, 
        public description?:string,
        public date?:Date, 
        public issue?:Issue,
    ){}
}
