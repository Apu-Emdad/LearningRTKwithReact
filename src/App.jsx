import "./App.css";
import CakeView from "./Features/cake/CakeView";
import IcecreamView from "./Features/icecream/IcecreamView";
import UserView from "./Features/users/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
