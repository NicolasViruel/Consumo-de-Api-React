import { useState, useEffect  } from 'react';

const useFetch = (url, options) => {

const [loading, setLoading] = useState(true)
const [result, setResult] = useState("")
const [error, setError] = useState("")

const getData = async () =>{
    try{
        const result = await fetch(url, options)
        const data = await result.json();

        setResult(data)
        setLoading(false)

    }catch (error){
        setError(error)
        setLoading(false)
    }

}

useEffect (() =>{

    getData()


}, [])


return(
    {loading, result, error}
    )
}

export default useFetch