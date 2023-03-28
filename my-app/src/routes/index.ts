import { useRoutes } from "react-router-dom";
import {MynotesRoutes} from "./MynotesRoutes";

function MyRoutesProvider(){
  return useRoutes([MynotesRoutes])
}
export default MyRoutesProvider