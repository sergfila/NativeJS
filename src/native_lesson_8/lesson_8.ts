// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    // вариант 1
    // let result = 0
    // for (let el of nums) {
    //     result += el
    // }
    // return result
    // В return стоит "заглушка", чтоб typescript не ругался
    // вариант 2
    return nums.reduce((acc, el) => acc + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    //...здесь пишем код.
    // вариант 1 (мой тупой вариант с условиями)
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "00";
    }
    if (a === b && b === c) {
        return "10";
    }
    if (a === b || b === c || c === a) {
        return "01";
    }
    return "11";

    // Вариант 2 (версия бота)
    //   const arr = [a, b, c].sort();
    //   if (arr[0] + arr[1] <= arr[2]) return "00";
    //   return ((a === b && b === c) && "10") || ((a === b || a === c || b === c) && "01") || "11";
    // В return стоит "заглушка", чтоб typescript не ругался
    // return ""
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split('').reduce((acc, el) => acc + Number(el), 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let odd = arr.filter((el, index) => index % 2 === 0)
        .reduce((acc, el) => acc + el, 0)
    let even = arr.filter((el, index) => index % 2 !== 0)
        .reduce((acc, el) => acc + el, 0)
    // В return стоит "заглушка", чтоб typescript не ругался
    return odd > even
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el % 1 === 0 && el > 0).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let result = 0;
    for (let i = 0; i <= N; i++) {
        result += i
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let result = [];

    for (let i = 0; i < banknotes.length; i++) {
        for (let j = amountOfMoney; j >= banknotes[i]; j -= banknotes[i]) {
            result.push(banknotes[i]);
            amountOfMoney -= banknotes[i];
        }
    }

    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}