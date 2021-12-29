import React from "react";

interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

const List: React.FC<IProps> = ({ people }) => {
    return (
        <ul>
            {
                people.map(person => {
                    return (
                        <span>
                            {person.name}
                        </span>
                    )
                })
            }
        </ul>
    )
}

export default List