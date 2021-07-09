import {useCallback, useState} from "react";

export const useHttp = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            setLoading(false)

            const response = await fetch(url, {method, body, headers})
            const data  = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong')
            }

            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }


    }, [])

    const clearError = () => setError(null)

    return {
        request, loading, error, clearError
    }
}