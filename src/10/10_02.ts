export type Numbers = number
export type ManType = {
    name: string
    age: number
}
export type MotherType = {
    mother: {
        name: string
        age: number
    }
}
export type Man2Type = {
    name: string
    age: number
    friends: string[]
}
export type PeopleType = {
    name: string
    age: number
}
export type Man3Type = {
    name: string
    age: number
    friends: Array<{name: string, age: number}>
}
export type Man4Type = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        }
    }
}
export type Man5Type = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        },
        parents: Array<{name: string, age: number}>
    }
}
export type Man6Type = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        },
        parents: Array<{
            name: string
            age: number
            favoriteDish: {
                title: string
            }
        }>
    }
}
export type Man7Type = {
    name: string
    age: number
    mother: {
        name: string
        age: number
        work: {
            position: string
            experience: number
        },
        parents: Array<{
            name: string
            age: number
            favoriteDish: {
                title: string
                ingredients: Array<{
                    title: string
                    amount: number
                }>
            }
        }>
    }
}