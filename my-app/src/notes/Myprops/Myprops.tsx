let Ish1=(a:any)=>{
  return <h1>{a}</h1>
}

let Ish2:React.FC<{shiva:string}>=(props)=>{
  return <h1>{props.shiva}</h1>
}

export const Myprops=()=>{
  return <div>
    <h1>hello goodmorning</h1>

    {Ish1('im props passed a any')}
    <Ish2 shiva={'this is mydiv'}/>
  </div>
}