
import "./App.css";
import HomePage from "./Components/HomePage";
import DataProvider from "./context/DataProvider";


function App() {

  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  )
}

export default App
