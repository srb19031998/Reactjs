
import { CallingFun } from "./notes/function-callingways/CallingFun"
import TestComp from "./notes/intro-components/testcomp"
import { Myprops } from "./notes/Myprops/Myprops"
import { Parenthise } from "./notes/paranthices/Parenthise"

export const App=()=>{
  return <div>

    <h1>-----------intro-components------------</h1>
    <TestComp/>

    <h1>-----Myprops-------</h1>
    <Myprops/>

    <h1>-------paranthices-------</h1>
    <Parenthise/>

    <h1>----way of calling function-----</h1>
    <CallingFun/>
  </div>
}