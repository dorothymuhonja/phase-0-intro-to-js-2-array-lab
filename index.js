// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.push()

function destructivelyAppendCat() {
    return cats.push("Ralph");
    
}
destructivelyAppendCat();

function destructivelyPrependCat() {
    return cats.unshift("Bob");
    
}
destructivelyPrependCat();

function destructivelyRemoveLastCat() {
    return cats.pop();
    
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return cats.shift();
    
}
destructivelyRemoveFirstCat();

function appendCat() {
    const newCat = [...cats, "Broom"]
    return newCat

}
appendCat()

function prependCat() {
    const newCat = ["Arnold", ...cats]
    return newCat

}
prependCat()

function removeLastCat() {
    const removeCat = cats.slice(0, 2);
    return removeCat
}
removeLastCat()

function removeFirstCat() {
    const removeNeko = cats.slice(1);
    return removeNeko
}
removeFirstCat()