import React, { useState, useEffect } from "react";
import Options from "./options"


export default function Main_panel() {
    let rates;
    useEffect(() => {
        fetchData();
    }, )
    const [fromValue , setFromValue] = useState(0);
    const [toValue , setToValue] = useState(0);
    const [from_country, setFrom_country] = useState("AED");
    const [to_country, setTo_country] = useState("AED");
    const [fromCountryCurrencyValue, setFromCountryCurrencyValue] = useState(1.0);
    const [toCountryCurrencyValue, setToCountryCurrencyValue] = useState(1.00);

    function getSelectedCountry(){
    const value1 = document.getElementById("fromValue").value;
    const value2 = document.getElementById("toValue").value;
    setFrom_country(value1);
    setTo_country(value2);
    if(typeof(rates) !== "undefined"){
        setFromCountryCurrencyValue(parseFloat(rates[value1]));
        setToCountryCurrencyValue(parseFloat(rates[value2]));
        setFromValue(0);
        setToValue(0);
    }else{
        setFromValue(0);
        setToValue(0);
    }
    }
    

    function handleFromChange(event){
        const value = parseFloat(event.target.value);
        if(!isNaN(value)){      
        const convertedValue = (toCountryCurrencyValue / fromCountryCurrencyValue) * value;
        setToValue(convertedValue);
        }else{
        setToValue("");
        }
        setFromValue(value);    
    }
    function handleToChange(event){
        const value = parseFloat(event.target.value);
        if(!isNaN(value)){ 
        const convertedValue = (fromCountryCurrencyValue / toCountryCurrencyValue) * value;
        setFromValue(convertedValue);
        }else{
            setFromValue("");
            }
        setToValue(value);
    }

    async function fetchData(){
        let data = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_ACCESS_KEY}`);
        let parsedData = await data.json();
        rates = parsedData.rates;  
    }

    return (
        <div className="col-sm ">
                <div className="input-group mb-2 mr-sm-2 center">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                    <select id="fromValue"  className="form-control form-control-md" onChange={getSelectedCountry}>
                    <Options/>
                    </select>
                    </div>
                    </div>
                    <input type="number" className="form-control" id="inlineFormInputGroupUsername2" onChange={handleFromChange} value={fromValue.toString()}/>
                </div>
                <div className="input-group mb-2 mr-sm-2 center">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                    <select id="toValue"  className="form-control form-control-md" onChange={getSelectedCountry}>
                    <Options/>
                    </select>
                    </div>
                    </div>
                    <input type="number" className="form-control" id="inlineFormInputGroupUsername2" onChange={handleToChange} value={toValue.toString()}/>
                </div>
                 
                <h4>Converting From {from_country} to {to_country}</h4>
        </div>
    )
}
