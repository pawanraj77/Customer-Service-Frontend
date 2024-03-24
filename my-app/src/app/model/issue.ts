export class Issue {
  
    constructor(public issueId?: number,
        public issueType?: string,
        public description?: string,
        public solution?: Solution,
        public employee?: Employee,
        public operator?: Operator) {}

  
}
