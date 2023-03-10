import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProfile from './components/CreateProfile/CreateProfile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Messenger from './components/Messenger/Messenger';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
import SearchAnswer from './components/SearchAnswer/SearchAnswer';
import UniqUserProfile from './components/UniqUserProfile/UniqUserProfile';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomeWrapper from './pages/HomeWrapper';
import { fetchUsers } from './store/slices/users/usersAPI';
import { selectUsers } from './store/slices/users/usersSlice';

function App() {
  const { usersData, currentUser } = useSelector(selectUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers())
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route
            path={currentUser?.profileIsAvailable ? 'update-profile' : 'create-profile'}
            element={<CreateProfile />}
          />
          <Route path=':id/uniq' element={<UniqUserProfile />} />
          <Route path='messenger' element={<Messenger />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/reg' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
