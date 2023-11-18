"use client"
import { useEffect, useState } from "react"
import { useFetch } from "use-http"

export default function Page () {
    const [partners, setPartners] = useState<any[]>([])
    const {get} = useFetch('')

    useEffect(() => {
        (async () => {
            const result = await get('/api/partners/list')
            console.log(result)
            if (result)
            setPartners(result)
        })()
    }, [])

    return (
        <div>
            <h1>INFO</h1>
            {partners.map((p) => (
                <p key={p._id}>{p.nombre}</p>
            ))}
            <pre>
                <code>
                    {JSON.stringify(partners)}
                </code>
            </pre>
        </div>
    )
}