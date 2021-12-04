"use strict";
exports.__esModule = true;
exports.Value = void 0;
var Value = /** @class */ (function () {
    function Value() {
    }
    Value.IntValue = /** @class */ (function () {
        function class_1(val) {
            this.val = val;
        }
        class_1.prototype.toString = function () {
            return "IntValue{" + "val=" + this.val + '}';
        };
        return class_1;
    }());
    Value.BoolValue = /** @class */ (function () {
        function class_2(val) {
            this.val = val;
        }
        class_2.prototype.toString = function () {
            return "BoolValue{" + "valbool=" + this.val + '}';
        };
        return class_2;
    }());
    return Value;
}()); /*
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
exports.Value = Value;
