import './App.css'
import Card from '.Component/card.jsx';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar content1="Abes" content2="About" content3="contact" />
      <br/>
      <Card name="Raj" edu="Pursueing Btech"/>
      <br/>
      <Card name="Rahul" edu="B.tech"/>
      <br/>
      <Card name="Ravi" edu="M.tech"/>
    </div>
  );
}
export default App;