import { Outlet } from "react-router-dom";
import { CallingFun } from "../notes/function-callingways/CallingFun";
import { Myprops } from "../notes/Myprops/Myprops";


export const MynotesRoutes={
    path:'/notes',
    element:(<><Outlet /></>),
    children:[
      {
        path:`function-callingways`,
        element:(<CallingFun/>)
      },
      {
        path:`Myprops`,
        element:(<Myprops/>)
      }
    ]

}

