"use strict";
exports.__esModule = true;
exports.Interpreter = exports.Expression = exports.Operation = void 0;
var Value_1 = require("./Value");
var Operation;
(function (Operation) {
    Operation[Operation["PLUS"] = 0] = "PLUS";
    Operation[Operation["MINUS"] = 1] = "MINUS";
    Operation[Operation["TIMES"] = 2] = "TIMES";
    Operation[Operation["DIV"] = 3] = "DIV";
})(Operation = exports.Operation || (exports.Operation = {}));
var Expression;
(function (Expression) {
    Expression[Expression["INT_CONST"] = 0] = "INT_CONST";
    Expression[Expression["BIN_OP"] = 1] = "BIN_OP";
    Expression[Expression["LET"] = 2] = "LET";
    Expression[Expression["VAR"] = 3] = "VAR";
    Expression[Expression["EQ"] = 4] = "EQ";
    Expression[Expression["IF"] = 5] = "IF";
})(Expression = exports.Expression || (exports.Expression = {}));
var Interpreter = /** @class */ (function () {
    function Interpreter() {
    }
    Interpreter.prototype.eval3 = function (c, d) {
        var e = c[0];
        console.log("This is e:" + e);
        // let e = <Expression> c[0];
        switch (e) {
            case Expression.INT_CONST: {
                var value = c[1];
                //let value = <number> c[1];
                return new Value_1.Value.IntValue(value);
            }
            case Expression.BIN_OP: {
                var op = c[1];
                var left = this.eval3(c[2], d);
                var right = this.eval3(c[3], d);
                switch (op) {
                    case Operation.PLUS:
                        return new Value_1.Value.IntValue(left.val + right.val);
                    case Operation.MINUS:
                        return new Value_1.Value.IntValue(left.val - right.val);
                    case Operation.TIMES:
                        return new Value_1.Value.IntValue(left.val * right.val);
                    case Operation.DIV:
                        return new Value_1.Value.IntValue(left.val / right.val);
                }
            }
            case Expression.LET: {
                var l = c[1]; // Name
                console.log("Name: " + l.theName);
                var val = this.eval3(c[2], d); // Value
                console.log("Value: " + val);
                var newE = d.bind(l, val);
                return this.eval3(c[3], newE); //Return the body
            }
            case Expression.VAR: {
                var v = c[1];
                return d.lookup(v);
            }
            case Expression.EQ: {
                var eq = c[1];
                console.log("eq: " + eq);
                var left = this.eval3(c[1], d);
                var right = this.eval3(c[2], d);
                var res = (left.val === right.val);
                return new Value_1.Value.BoolValue(res);
                // return "test";
            }
            case Expression.IF: {
                var ife = c[1];
                console.log("c1 " + c[1]);
                var cond = this.eval3(c[1], d);
                if (cond) {
                    return this.eval3(c[3], d);
                }
                else {
                    return this.eval3(c[2], d);
                }
            }
            default:
                throw new Error("I don't know the expression");
        }
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
