import {Value} from './Value'
import { Name } from './name';

export class Binding {
    name: Name;
    value: Value;

    constructor(name: Name, value: Value) {
        this.name = name;
        this.value = value;
    }

}