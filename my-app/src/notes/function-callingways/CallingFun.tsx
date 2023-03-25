import { Nameh3 } from "./Nameh3"



export const CallingFun=()=>{
  return <div>
    <p>normal way calling function </p>
    <h1>hello im h1</h1>
    <h2>hello im h2</h2>

    <p>second way calling function</p>
    <h1/>
    <h1></h1>

    <p>calling fun-----</p>
    <Nameh3/>

  </div>

  const Ourh1=()=>{
    return <h1>im another way of ourh1</h1>
  }
  const Ourh2=()=>{
    return <h1>im another way of ourh3</h1>
  }
}