function foreach(list, func) {
    for (let i = 0; i < list.length; i++) {
        func.call(list[i], i);
    }
}

var weapon = [{ type: '1' }, { type: '2' }, { type: '3' }];
foreach(weapon, function (index) {
    if (this == weapon[index]) {
        console.log("got expected type" + weapon[index].type);
    };
});