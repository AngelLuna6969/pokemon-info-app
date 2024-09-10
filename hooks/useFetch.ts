import { useEffect, useState } from "react"


export const useFetch = (url: string) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFecth();
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFecth = async () => {
        setLoadingState();
        const response = await fetch(url);

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }
        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}