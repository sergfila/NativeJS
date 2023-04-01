type AddressType = {
    street: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    country: string
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType,
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: "Sergey",
    age: 34,
    isActive: true,
    address: {
        street: 'Energostroiteley',
        city: {
            title: 'Lipetsk',
            country: 'Russia'
        }
    },

    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
}

console.log(student.id);
console.log(student.address.city.title);
console.log(student.technologies[1].id);