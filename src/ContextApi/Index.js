import React, { createContext, useState, useEffect } from "react";
import { getApi } from "../services/GetApi";

// Creating context for get api
export const GetApiContext = createContext();


// Creating provider for get api
export const GetApiProvider = ({ children }) => {

    const [data, setData] = useState("");


    useEffect(() => {
        fetchApiData()
    }, [])

    const fetchApiData = async () => {
        try {
            const response = await getApi()
            // console.log('response :', response?.data);
            setData(response?.data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GetApiContext.Provider value={{ data }}>
            {children}
        </GetApiContext.Provider>
    );
};