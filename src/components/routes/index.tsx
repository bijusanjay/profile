import EditProfile from '../../screens/profile/edit'
import Home from '../../screens/home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='profile' element={<Profile />} /> */}
        <Route path='/profile/:id/edit' element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
