
export class Value {
     static IntValue = class {

        val: number;

        constructor(val: number) {
            this.val = val;
        }

        toString(): string {
            return "IntValue{" + "val=" + this.val + '}';
        }

    }

    static BoolValue = class {

        val: boolean;

        constructor(val: boolean) {
            this.val = val;
        }


        toString(): string {
            return "BoolValue{" + "valbool=" + this.val + '}';
        }
    }

} /*
/*
export class IntValue  {
    val: number;

    constructor(val: number) {
        this.val = val;
    }

    toString(): string {
        return "IntValue{" + "val=" + this.val + '}';
    }
} */

