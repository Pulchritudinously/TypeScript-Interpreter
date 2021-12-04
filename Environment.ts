import {Binding} from './Binding'
import {Name} from './Name'
import {Value} from './Value'

export class Environment {

    binding: Binding;
    referencingEnvironment: Environment;

    constructor(binding: Binding, referencingEnvironment: Environment) {
        this.binding = binding;
        this.referencingEnvironment = referencingEnvironment;
    }

    static EMPTY: Environment = new Environment(null, null);

    bind(name: Name, value: Value): Environment {
        return new Environment(new Binding(name, value), this);
    }
    
    lookup(name: Name): Value {

        if (this == Environment.EMPTY) {
            throw new Error("test");
        }
        if(this.binding.name.theName == name.theName) {
            console.log("names are equal -> binding value: " + this.binding.value);

            return this.binding.value;
        }

        return this.referencingEnvironment.lookup(name);
    }
}