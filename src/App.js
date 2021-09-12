import React from 'react'
import Title from "./components/Title"
import MainPanel from "./components/Main_panel"
import SidePanel from "./components/Side_panel"
import MiddlePanel from "./components/Middle_panel"


export default function App() {
  return (
    <>
    <Title/>
    <div className="row" >
    <MainPanel/>
    <MiddlePanel/>
    <SidePanel/>
    </div>
    </>
  )
}

