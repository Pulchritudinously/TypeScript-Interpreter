
import { Environment } from "./Environment";
import {Expression, Interpreter, Operation} from "./Interpreter";
import { Name } from "./name";

let p: Object[] = [];
/*  p1
p.push(Expression.INT_CONST);
p.push(474); */

// p2 testing binop 400 + 74
/*
let r: Object[] = [];
r.push(Expression.INT_CONST);
r.push(400);

let l: Object[] = [];
l.push(Expression.INT_CONST);
l.push(74);

p.push(Expression.BIN_OP);c
p.push(Operation.TIMES);
p.push(r);
p.push(l);  */

// testing 400 + (70 + 4);
/*
p.push(Expression.BIN_OP);
p.push(Operation.PLUS);

let x: Object[] = [];
x.push(Expression.INT_CONST);
x.push(400);

let q: Object[] =[];
q.push(Expression.INT_CONST);
q.push(32);

let w: Object[] = [];
w.push(Expression.INT_CONST);
w.push(4);

let r: Object[] = [];
r.push(Expression.BIN_OP);
r.push(Operation.PLUS);
r.push(w);
r.push(q);

p.push(x);
p.push(r);  */

// testing p4 equiv
/*
p.push(Expression.LET);

p.push(new Name("var"));

let val: Object[] = [];
val.push(Expression.BIN_OP);
val.push(Operation.PLUS);

let add1: Object[] = [];
add1.push(Expression.INT_CONST);
add1.push(400);

let add2: Object[] = [];
add2.push(Expression.INT_CONST);
add2.push(70);

val.push(add1);
val.push(add2);

p.push(val);

let body: Object[] = [];
body.push(Expression.BIN_OP);
body.push(Operation.PLUS);

let body2: Object[] = [];
body2.push(Expression.VAR);
body2.push(new Name("var"));

let body3: Object[] = [];
body3.push(Expression.INT_CONST);
body3.push(4);

body.push(body2);
body.push(body3);

p.push(body);   */
/*p8 equal
p.push(Expression.LET);

p.push(new Name("divisor"));

let intC: Object[] = [];
intC.push(Expression.INT_CONST);
intC.push(1); 
p.push(intC);

let eq: Object[] = [];
eq.push(Expression.EQ);

let eq1: Object[] = [];
eq1.push(Expression.VAR);
eq1.push(new Name("divisor"));

eq.push(eq1);

let eq2: Object[] = [];
eq2.push(Expression.INT_CONST);
eq2.push(7);

eq.push(eq2); 

p.push(eq); */

// p9 
p.push(Expression.LET);
p.push(new Name("dividend"));

let intC1: Object[] = [];
intC1.push(Expression.INT_CONST);
intC1.push(474);
p.push(intC1);

let letEX2: Object[] = [];
letEX2.push(Expression.LET);
letEX2.push(new Name("divisor"));

let intC2: Object[] = [];
intC2.push(Expression.INT_CONST);
intC2.push(2);
letEX2.push(intC2);

let ifEX: Object[] = [];
ifEX.push(Expression.IF);

let eqIF1: Object[] = [];
eqIF1.push(Expression.EQ);

let varInEQ: Object[] = [];
varInEQ.push(Expression.VAR);
varInEQ.push(new Name("divisor"));
eqIF1.push(varInEQ);

let intInEQ: Object[] = [];
intInEQ.push(Expression.INT_CONST);
intInEQ.push(0);
eqIF1.push(intInEQ);

ifEX.push(eqIF1);

let intC3: Object[] = [];
intC3.push(Expression.INT_CONST);
intC3.push(0);

let binOP: Object[] = [];
binOP.push(Expression.BIN_OP);
binOP.push(Operation.DIV);

let varInBin1: Object[] = [];
varInBin1.push(Expression.VAR);
varInBin1.push(new Name("dividend"));

let varInBin2: Object[] = [];
varInBin2.push(Expression.VAR);
varInBin2.push(new Name("divisor"));
binOP.push(varInBin1);
binOP.push(varInBin2);

ifEX.push(intC3);
ifEX.push(binOP);

letEX2.push(ifEX);

p.push(letEX2);




let environ: Environment = Environment.EMPTY;
console.log(new Interpreter().eval3(p, environ));
