import FatFun from "./FAT_ARROW/fat_arrow_default";
import { Fun1, Fun3 } from "./FAT_ARROW/fat_arrow_without_defalut";
import WithDef, { WithDef2 } from "./FAT_ARROW/fat_default_normal";


function App() {
  return (
    <div className="App">
      <FatFun/>
      <Fun1/>
      <Fun3/>
      <WithDef/>
      <WithDef2/>
    </div>
  );
}

export default App;
