var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let newMix = []

for (let i = 0; i < mix.length; i++) {
    newMix.push(typeof mix[i])
}

console.log(newMix)
//your code here
