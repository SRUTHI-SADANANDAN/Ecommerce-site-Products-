
import './App.css';
import CategoryList from './Components/CategoryList';
import CategoryAdd from './Components/CategoryAdd';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home';
import CategoryEdit from './Components/CategoryEdit';


function App() {
  return (
    <Router>
      <div className="App">
         
      

        <Routes>

        <Route path="/" element={<Home />} />
          <Route path="/category/list/" element={<CategoryList />} />
          <Route path='/category/add/' element={<CategoryAdd />} />
          <Route path='/category/category_id/edit' element={<CategoryEdit/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
