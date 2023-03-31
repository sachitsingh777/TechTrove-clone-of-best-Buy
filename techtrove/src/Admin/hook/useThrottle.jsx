import React from 'react' 
import {useState,useEffect} from "react"
const useThrottle = (value,delay) => {
    const [throttleValue,setThrottleValue]=useState(value)


    useEffect(()=>{
   setTimeout(()=>{
        setThrottleValue(value)
     },delay)
   
    },[value,delay])
   
     return throttleValue
}

export default useThrottle;