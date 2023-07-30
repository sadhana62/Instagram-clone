import { useDispatch, useSelector } from 'react-redux';
import {useEffect, userEffect} from 'react';
import './App.css';
import Authentication from './Authentication/Authentication';
import Home from './Home';
import {auth} from './firebase';
import { loginUser, setLoading } from "./features/userSlice";
function App() {
 
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged((authUser)=>{
     if(authUser) {
      dispatch(
        loginUser({
        uid: authUser.uid,
        username: authUser.displayName,
        email: authUser.email
       })
      );
      dispatch(setLoading(false));
     } else {
      dispatch(setLoading(false));
      console.log("user is not logged in");
     }
    })

  },[]);


  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Home /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
