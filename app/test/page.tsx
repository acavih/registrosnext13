"use client"
import { useEffect, useState } from "react"
import { useFetch } from "use-http"

export default function Page () {
    const {data: partners = []} = useFetch('/api/partners/list', [])
    
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