import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Profile() {
    const [principal, setPrincipal] = useState({})

    useEffect(() => {
        axios({
            baseURL: 'http://localhost:3000/userinfo'
        })
            .then(res => setPrincipal(res.data))
    }, [])

    return (
        <div>
            <a href="/resource">Acessar recurso protegido</a>
            <p>{principal.token}</p>
            <p>{principal.clientName}</p>
            {principal && principal.userAttributes && Object.entries(principal.userAttributes)
                .map(([key, value]) => (
                    <li key={key}>
                        <span>{key}: </span>
                        <span>{value}</span>
                    </li>
                ))
            }
        </div>
    )

}

export default Profile