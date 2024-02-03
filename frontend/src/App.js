import './App.css';
import Nav from './components/Nav'
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
        <Route path='/' element={<h1>Product Listing Component</h1>}></Route>
        <Route path='/add' element={<h1>Add Product Listing Component</h1>}></Route>
        <Route path='/update' element={<h1>Update Product Listing Component</h1>}></Route>
        <Route path='/logout' element={<h1>logout Component</h1>}></Route>
        <Route path='/profile' element={<h1> profile Component</h1>}></Route> 
        </Route>
        
        <Route path='/signup' element={<SignUp/>}/>
      
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;