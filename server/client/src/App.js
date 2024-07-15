import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import UserProtectedPage from './components/UserProtectedPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sistema de autenticação e autorização</p>
        <Register/>
        <hr />
        <Login />
        <hr />
        <Logout />
        <hr />
        <UserProtectedPage />
      </header>
    </div>
  );
}

export default App;
