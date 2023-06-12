import { store } from './redux/store'
import { Provider } from 'react-redux'
import { AppContext } from './context'
import WelcomeScreen from "./components/organism/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <Provider store={store}>
      <AppContext.Provider value={{ text: 'I am from context.' }}>
        <div className="App">
         <WelcomeScreen />
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
