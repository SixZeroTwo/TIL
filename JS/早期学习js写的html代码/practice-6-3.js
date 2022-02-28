function* NinjaGenerator(val) {
    val = yield val * 2;
    yield val;
}

var ninja = NinjaGenerator(2);
let a1 = ninja.next(3).value;
let a2 = ninja.next(5).value;

function Ninja() { }
let ninja = new Ninja();
ninja instanceof Ninja;