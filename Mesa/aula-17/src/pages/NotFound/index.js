import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const NotFound = () => {

    const [timer, setTimer] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(timer - 1)
        }, 1000);

        if (timer === 0) {
            navigate('/')
        }

        // CLEAN UP
        return () => {
            clearInterval(timerId);
        }
    })

    return (
        <>
            <h1>Nada por aqui - Error 404</h1>
            <p>{`Redirecionando em: ${timer}`}</p>
        </>
    )
}

export default NotFound;