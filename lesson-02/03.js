/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
const MAX_A = 100
const MIN_A = 90
const MAX_B = 89
const MIN_B = 80
const MAX_C = 79
const MIN_C = 70
const MAX_D = 69
const MIN_D = 50
const MAX_F = 49
const MIN_F = 0
let grade
if (score>=MIN_A && score <=MAX_A){
    grade = 'A'
} else if (score>=MIN_B && score <=MAX_B){
    grade = 'B'
} else if (score>=MIN_C && score <=MAX_C){
    grade = 'C'
} else if (score>=MIN_D && score <=MAX_D){
    grade = 'D'
} else if (score>=MIN_F && score <=MAX_F){
    grade = 'F'
    }
console.log(grade)
