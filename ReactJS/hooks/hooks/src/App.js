import logo from './logo.svg';
import './App.css';
import Counter from './Components/useState';
import { Hook1 } from './Components/hook1';
import Timer from './Components/useeffect';
import ExpensiveCalculation from './Components/useMemo';
import FocusInput from './Components/useRef';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Hook1/>
      <Timer/>
      <ExpensiveCalculation/>
      <FocusInput/>
      <FocusEvent/>
    </div>
  );
}

export default App;
