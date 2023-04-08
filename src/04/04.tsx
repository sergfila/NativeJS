import {stringify} from "querystring";

const ages = [18, 20, 1, 100, 85, 90, 13]

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];


type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150}
]

const chipPredicate = (courses: CoursesType) => {
    return courses.price < 160;
}

