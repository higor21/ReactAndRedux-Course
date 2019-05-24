import React from 'react'

export default () => {
    const names = ["Higor", "Felype", "da", "Silva","Carvalho"]

    const geratorLIs = (lis) => {
        return lis.map(li => {
            return <li>{li}</li>
        })
    }

    return (
        <ul>
            {geratorLIs(names)}
        </ul>
    )
}