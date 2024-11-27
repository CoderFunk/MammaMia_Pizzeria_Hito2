// import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



// import Register from './pages/Register';
import Login from './pages/Login';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  return (
    <>
      <NavBar />


      <Login></Login>
      {/* <Register></Register> */}



      {/* <Home></Home> */}
      <Footer />

    </>
  )
}
export default App;