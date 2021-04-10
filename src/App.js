// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact';

function App() {
  let data = '= the helping hand of thethis is a data passing';
  return (
    <div>
      <h1> Hello World</h1>
      <About param_data={data} />
      <Contact class_data={data}/>
    </div>
  );
}

export default App;
