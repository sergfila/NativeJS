export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Sergey Filippov', age: 34},
    {name: 'Alina Kazanskaya', age: 32},
    {name: 'Alexander Filippov', age: 36},
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'ts', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})


const devs = [
    {
        stack: ['css', 'html', 'js', 'ts', 'react'],
        firstName: 'Sergey', lastName: 'Filippov'
    },
    {
        stack: ['css', 'html', 'js', 'ts', 'react'],
        firstName: 'Alina', lastName: 'Kazanskaya'
    },
    {
        stack: ['css', 'html', 'js', 'ts', 'react'],
        firstName: 'Alexander', lastName: 'Filippov'
    }
]

let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(el => ({
    stack: ['css', 'html', 'js', 'ts', 'react'],
    firstName: el.name.split(' ')[0],
    lastName: el.name.split(' ')[1]
}))

let messages = people.map(el => `Privet ${el.name.split(' ')[0]}`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map(el => `Privet ${el.name.split(' ')[0]}`)
}

