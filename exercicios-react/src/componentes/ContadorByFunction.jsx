import React, {useState, useEffect} from 'react'

export default () => {
    const [status, setStatus] = useState('Par')
    const [value, setValue] = useState(100)

    useEffect(() => {
        (value % 2 === 0) ? setStatus('Par') : setStatus('Impar')
    })

    return <div>
        <h1>{value} : {status}</h1>
        <button onClick={() => setValue(value-1)}>Dec</button>
        <button onClick={() => setValue(value+1)}>Inc</button>
    </div>
}