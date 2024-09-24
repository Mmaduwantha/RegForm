import React from "react";
import UserForm from "./UserForm"; // Import UserForm component
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import ResultNo from "./ResultNo";
import ResultYes from "./ResultYes";



function App() {
  return (
    <BrowserRouter>
     <main>
       <Routes>
         <Route path='/' element={<UserForm/>}/>
         <Route path='/no' element={<ResultNo/>}/>
         <Route path='/yes' element={<ResultYes/>}/>
       </Routes>
     </main>
   </BrowserRouter>
   );
}

export default App;
