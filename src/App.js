// import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.scss';
import BasicExample from './routerDemo'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.REACT_APP_SECRET_CODE}</p>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* Logo 是一个实际的 React 组件 */}
        <Logo className="App-logo" />
        <h4>react-router-dom</h4>
        <BasicExample />
        <h4>react-redux</h4>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
