import React from 'react'

export default function main_panel() {
    return (
        <div className="col-sm ">
                <div class="input-group mb-2 mr-sm-2 center">
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                    <select className="form-control form-control-md">
                    <option>EUR</option>
                    </select>
                    </div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="0.0000000000"/>
                </div>

                <div class="input-group mb-2 mr-sm-2 center">
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                    <select className="form-control form-control-md">
                    <option>INR</option>
                    </select>
                    </div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="0.0000000000"/>
                </div>
        </div>
    )
}
