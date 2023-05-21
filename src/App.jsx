import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addAmount } from './counterSlice';

function App() {
  const taskState = useSelector(state => state.counter)
  console.log(taskState)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{taskState}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addAmount(3))}>add 3</button>
    </div>
  );
}

export default App;
