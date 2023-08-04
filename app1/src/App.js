import './App.css';
import logo from './bb.png'
import './style.css'


function App() {

  const divstyle={
    color:'red',
    backgroundColor:'powderblue',
    fontSize:'larger',
    padding:'3px'
  }

  return (
    <>
      <h2>Test External CSS</h2>
      <div className='title'>React & React Native</div>
    </>
  )

  return (
    <div style={divstyle} className="App">
      อะไรเอ่ยเทส divstyle
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>มังกรฟ้า</h3>

        <a
          className="App-link"
          href="https://www.tiktok.com/@nirvxsh"
          target="_blank"
          rel="noopener noreferrer"
        >
        Nirvash reach 300 follower NOW!!!
        คลิกเพื่อสนับสนุนเสฐนันท์ โมซาลียานนท์
        </a>
      </header>
    </div>
  );
}

export default App;
