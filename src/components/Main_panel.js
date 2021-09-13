import React, { useState } from "react";
import Options from "./options"

export default function Main_panel() {

    const [fromValue , setFromValue] = useState(0.0000000000);
    const [toValue , setToValue] = useState(0.0000000000);


    function handleFromChange(event){
        let value = event.target.value;
        value = fromValue / toValue ;
        setFromValue(value);
    }
    function handleToChange(event){
        let value = event.target.value;
        value = toValue / fromValue;
        setFromValue(value);
    }



    async function fetchData(){

        //let data = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e3154eff7e406f71ab0bdfc3348ae7ae");
        //let rates = await data.json();
        //console.log(rates.rates);
    }
    fetchData();
    return (
        <div className="col-sm ">
                <div className="input-group mb-2 mr-sm-2 center">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                    <select className="form-control form-control-md">
                    <Options/>
                    </select>
                    </div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" onChange={handleFromChange} value={fromValue}/>
                </div>

                <div className="input-group mb-2 mr-sm-2 center">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                    <select className="form-control form-control-md">
                    <Options/>
                    </select>
                    </div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" onChange={handleToChange} value={toValue}/>
                </div>
        </div>
    )
}
