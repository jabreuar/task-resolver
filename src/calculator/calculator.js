function addition(left, right) {
    return Number(left) + Number(right);
}
function subtraction(left, right) {
    return Number(left) - Number(right);
}
function multiplication(left, right) {
    return Number(left) * Number(right);
}
function division(left, right) {
    return Number(left) / Number(right);
}
function remainder(left, right) {
    return Number(left) % Number(right);
}
module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    remainder
};