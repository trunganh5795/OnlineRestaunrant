import './App.css';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { history } from './models/history';
import { lazy, Suspense } from 'react';
import jwt from 'jsonwebtoken'
import { deleteToken } from './actions/courseAction';
const UserRoutesCompnent = lazy(() => {
  console.log("loading user route");
  return import('./Routes/UserRoutesComponent')
})
const AdminRoutesComponent = lazy(() => {
  console.log("loading admin router");
  return import('./Routes/AdminRouteComponent').then(console.log(123456))
})
function App() {
  // console.log("App")
  // let token = localStorage.getItem('accessToken')
  // if (token) {
  //   let tokenDecode = jwt.decode(token)
  //   if (tokenDecode.exp < Date.now() / 1000) {
  //     deleteToken()
  //   }
  // }
  return (
    <Router history={history}>
      <Suspense fallback={""}>
        <Switch>
          <Route path='/admin' component={AdminRoutesComponent} />
          <Route path='/' component={UserRoutesCompnent}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
