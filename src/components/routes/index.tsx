import './App.css'
import './Portfolio.css'
import Home from '@screens/home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='profile' element={<Profile />} /> */}
        {/* <Route path='' element={<EditProfile />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
