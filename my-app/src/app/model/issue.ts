import { Employee } from "./employee";
import { Operator } from "./operator";
import { Solution } from "./solution";

export class Issue {
    // private Integer issueId;
    // private String issueType;
    // private String description;

    // @OneToOne
    // private Solution solution;

    // @ManyToOne
    // private Employee employee;

    // @ManyToOne
    // private Operator operator;
    constructor(public issueId?: number,
        public issueType?: string,
        public description?: string,
        public solution?: Solution,
        public employee?: Employee,
        public operator?: Operator) { }

  
}
