import { FunName } from "./Normal_Function/function_basci";
import OneDefault from "./Normal_Function/function_defalut_export";
import { OneFun , TwoFun } from "./Normal_Function/function_having_more _exports";
import UseDefault, { NormalExport1, NormalExport2 } from "./Normal_Function/function_with_defalut_normal_export";

function App() {
  return (
    <div className="App">
     <FunName/>
     <OneFun/>
     <TwoFun/>
     <OneDefault/>
     <UseDefault/>,<NormalExport1/>,<NormalExport2/>
    </div>
  );
}

export default App;
