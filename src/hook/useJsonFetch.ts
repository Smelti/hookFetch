import { useState, useEffect} from "react";

export default function useJsonFetch(url:string) {
    const [data, setData] = useState<null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        let isCancelled = false;
        setLoading(true)
        setError(null)

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                return new Error
            } return response.json()
        })
        .then((json) => {
            if(!isCancelled) {
                setData(json)
            }
        })
        .catch((error) => {
            if(!isCancelled) {
                setError(error.message)
            }
        })
        .finally(() => {
            if (!isCancelled) {
                setLoading(false)
            }
        }) 

        return () => {
            isCancelled = true
        }
    }, [url])

    return [data, loading, error] as const
}