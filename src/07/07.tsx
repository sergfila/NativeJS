import React from 'react'

export type LessonsType = {
    title: string,
    name?: string
}
export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    car: string
}

export const ManComponents: React.FC<PropsType> = ({title,man, ...props}) => { //или так

    // или так
    // const {title, man: {name}} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car}
            </div>
        </div>
    )
}