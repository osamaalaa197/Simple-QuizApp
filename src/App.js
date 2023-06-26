import logo from './logo.svg';
import './App.css';
import UserForm from './Component/UserForm';
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Question from './Component/Question';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  >
        <Route
        index
          element={<UserForm />}  

        />
        <Route
          element={<Question />}
        path='/Question'
        />,

      </Route>
    )
  );
  return (
          <RouterProvider router={router} />

  );
}

export default App;
