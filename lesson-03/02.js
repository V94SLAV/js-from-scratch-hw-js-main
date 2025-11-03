// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    let verification
    let even = number%2
    if (even === 0){
        verification = true
    } else {
        verification = false
    }
    return verification
}