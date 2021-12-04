"use strict";
exports.__esModule = true;
exports.Environment = void 0;
var Binding_1 = require("./Binding");
var Environment = /** @class */ (function () {
    function Environment(binding, referencingEnvironment) {
        this.binding = binding;
        this.referencingEnvironment = referencingEnvironment;
    }
    Environment.prototype.bind = function (name, value) {
        return new Environment(new Binding_1.Binding(name, value), this);
    };
    Environment.prototype.lookup = function (name) {
        if (this == Environment.EMPTY) {
            throw new Error("test");
        }
        if (this.binding.name.theName == name.theName) {
            console.log("names are equal -> binding value: " + this.binding.value);
            return this.binding.value;
        }
        return this.referencingEnvironment.lookup(name);
    };
    Environment.EMPTY = new Environment(null, null);
    return Environment;
}());
exports.Environment = Environment;
