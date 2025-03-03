"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

function TrafficChange() {

  //массив состояний цветов светофора
  let [states, setState] = useState(["red", "gray", "gray"])
 //функция изменения цветов
  function changeState()
  {
    if(states[0]=="red"){
    setState(["gray", "yellow", "gray"])
    }
    if(states[1]=="yellow"){
    setState(["gray", "gray", "green"])
    }
    if(states[2]=="green"){
    setState(["red", "gray", "gray"])
    }
  }

//стили
 let trafficLight = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "120px",
    height: "350px",
    backgroundColor: "lightgray"
  };
 let light = {
    width: "100px",
    height: "100px",
    border: "1px solid",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "100px"
  };
 let redLight = {
   backgroundColor: states[0]
 }
 let yellowLight = {
  backgroundColor: states[1]
 }
let greenLight = {
  backgroundColor: states[2]
 }

  return(
<div style={trafficLight}>
        <div style={{...light, ...redLight}} onClick={changeState}></div>
        <div style={{...light, ...yellowLight}} onClick={changeState}></div>
        <div style={{...light, ...greenLight}} onClick={changeState}></div>
      </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
     <TrafficChange/>
    </div>
  );
}
