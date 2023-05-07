export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type CompanyType = {
    company: Array<{id: number, title: string}>
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}


export const makeHairstyle = (u: UserType, power: number) => {
    const copy = {...u}
    copy.hair = u.hair / power

    return copy
}
export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {...u, address: {...u.address, city: city}}
}
export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {...u, laptop: {...u.laptop, title: laptop}}
}
export const addNewBooksUser = (u: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {
    return {...u, books: [...u.books, ...books]}
}
export const updateBookUser = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    // return {...u, books: [newBook, ...u.books.filter(el => el !== oldBook)]}
    return {...u, books: u.books.map(el => el === oldBook ? newBook : el)}
}
export const removeUserBook = (u: UserWithBooksType & UserWithLaptopType, deleteBook: string) => {
    return {...u, books: u.books.filter(el => el !== deleteBook)}
}
export const updateUserCompany = (u: UserWithLaptopType & CompanyType, newCompany: {id: number, title: string}) => {
    return {...u, company: [newCompany, ...u.company]}
}
