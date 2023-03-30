import Form from "./components/Form";
import { StyleSheet, ScrollView } from 'react-native';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ScrollView>
      <Form/>
      </ScrollView>
      </header>
    </div>
  );
}

export default App;
