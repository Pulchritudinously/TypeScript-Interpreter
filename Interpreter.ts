import { Value } from "./Value"
import {Environment} from './Environment'
import { Name } from "./name";

export enum Operation {
    PLUS,
    MINUS,
    TIMES,
    DIV
}

export enum Expression {
    INT_CONST,
    BIN_OP,
    LET,
    VAR,
    EQ,
    IF,
}

export class Interpreter {


    eval3(c: Object, d: Environment): Value {
        let e: any = c[0];
        console.log("This is e:" + e);
       // let e = <Expression> c[0];
        switch(e) {
            case Expression.INT_CONST: {
                let value: any = c[1];
                //let value = <number> c[1];
                return new Value.IntValue(value);
            }
            case Expression.BIN_OP: {
               let op: any = c[1];
               let left: any = this.eval3(c[2], d);
               let right: any = this.eval3(c[3], d);
               switch(op) {
                   case Operation.PLUS: 
                        return new Value.IntValue(left.val + right.val);
                   case Operation.MINUS:
                       return new Value.IntValue(left.val - right.val);
                    case Operation.TIMES:
                        return new Value.IntValue(left.val * right.val);
                    case Operation.DIV:
                        return new Value.IntValue(left.val / right.val);
               }
                
            }
            
            case Expression.LET: {
                let l: Name = c[1]; // Name
                console.log("Name: " + l.theName);
                let val: Value = this.eval3(c[2], d); // Value
                console.log("Value: " + val);

                let newE: Environment = d.bind(l, val);
            
                return this.eval3(c[3], newE);  //Return the body
                
            } 
            case Expression.VAR: {
                let v: Name = c[1];
                return d.lookup(v);
            }

            case Expression.EQ: {
                let eq: any = c[1];
                console.log("eq: " + eq);

                let left: any = this.eval3(c[1], d);

                let right: any = this.eval3(c[2], d);

                 let res: boolean = (left.val === right.val);
                return new Value.BoolValue(res);
              // return "test";
            }

            case Expression.IF: {
                let ife: any = c[1];
                console.log("c1 " + c[1]);
                let cond: Value = this.eval3(c[1], d);

                
                if(cond) {
                    return this.eval3(c[3], d);
                }
                else {
                    return this.eval3(c[2] ,d ); 
                }

            }

            default:
                throw new Error("I don't know the expression");
        }
    } 
}