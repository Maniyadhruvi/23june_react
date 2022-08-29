import './App.css';
import Home from './Component/Style/Home';
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';

// import Products from './Component/Module-5 React-Styling & Advance React/Products';
// import Home from './Component/Module-5 React-Styling & Advance React/Home';

// import Listview from './Component/Module-3 ReactJs/Listview';
// import IncreDecreState from './Component/Module-3 ReactJs/IncreDecreState';
import Product from './Component/Style/Product';
import Header from './Component/Style/Header';
import About from './Component/Style/About';
import Single from './Component/Style/Single';
import Addproduct from './Component/Style/Addproduct';
import Contact from './Component/Style/Contact';
import Login from './Component/Style/Login';
import Signup from './Component/Style/Signup';


// import CallHook from './Component/Hooks/CustomHook/CallHook';
// import External from './Component/Style/External';
// import ClassComp from './Component/ClassComp';
// import CompinCom from './Component/CompinCom';
// import ConstructComp from './Component/ConstructComp';
// import PropsComp from './Component/PropsComp';
// import LyfCycle from './Component/LyfCycle';
// import FunctionComp from './Component/FunctionComp';
// import StateMng from './Component/StateMng';
// import UseState from './Component/Hooks/UseState';
// import UseEffect from './Component/Hooks/UseEffect';
// import UseReducer from './Component/Hooks/UseReducer';
// import Form from './Component/Form';
// import A from './Component/Hooks/UseContext/A';
// import ConditionRender from './Component/ConditionRender';
// import List1 from './Component/List/List1';




function App() {
  return (
    // <ClassComp/>
    // <CompinCom/>
    // <ConstructComp/>
    // <PropsComp/>
    // <LyfCycle/>
    // <FunctionComp/>
    // <StateMng/>
    // <UseState/>
    // <UseEffect/>
    // <UseReducer/>
    // <Form/>
    // <A/>
    // <ConditionRender/>
    // <List1/>
    // <External/>
    // <CallHook/>
    // <IncreDecreState/>
    // <Listview/>



    <>
    {/* <MemoryRouter> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Single />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/update/:id" element={<Addproduct />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>

      </BrowserRouter>
      {/* </MemoryRouter> */}
    </>


    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home/>} />
    //       <Route path="product" element={<Products/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </>



  );
}
export default App;