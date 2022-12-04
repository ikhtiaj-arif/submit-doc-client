import './App.css';
import { RouterProvider } from "react-router-dom";
import router from './Routes/Router';

function App() {
  return (
    
    <div className="md:w-3/4 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
