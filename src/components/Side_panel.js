import React from 'react'
import Coin from "./img/coin.png"
import GirlThinking from "./img/girl thinking.png"
import plantMoney from "./img/plant-money.png"

export default function Side_panel() {
    return (
  <div className="col-sm" style={{textAlign : "center"}} >
      <img src={Coin} alt="coin-img"  width="40%" height="35%"/>
      <hr width="50%" />
      <img src={GirlThinking} alt="girl-thinking-img" width="40%" height="30%"/>
      <hr width="50%" />
      <img src={plantMoney} alt="plant-money-img"  width="40%" height="30%"/>
  </div>

    )
}
