import React,{useEffect,useState} from 'react'

export default function Fetch() {
    const [data,setData] = useState([])

    useEffect(() => {
        Fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
    })
  return[data];
}
