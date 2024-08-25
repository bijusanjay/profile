import {useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import icon from '../../assets/img2.jpg'
import {Button, Col, Row} from 'antd'
import withDefaultLayout from '../../hoc/root-layout'

const Home = () => {
  const [show, setShow] = useState(false)
  const auth = getAuth()
  const [user, setuser] = useState<any>(null)

  onAuthStateChanged(auth, (currentUser: any) => {
    setuser(currentUser)
  })

  let navigate = useNavigate()
  const createForm = () => {
    if (user) {
      navigate(`/profile/${user?.email}/edit`)
    } else {
      setShow(!show)
    }
  }

  return (
    <div
      className='content'
      style={{height: '100vh', padding: '0 50px 0px 50px', background: 'white'}}
    >
      <Row
        className='row'
        style={{
          height: '100vh',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Col className='column c1'>
          {/* <h4>Create a portfolio</h4> */}
          <h1>Create and Share Your Unique Profile in Minutes!</h1>
          <h3>
            Effortlessly build a simple profile and share it anywhere with a
            unique link.
          </h3>
          <br />
          {user ? (
            <Button type='primary' onClick={createForm}>
              {' '}
              Your Profile{' '}
            </Button>
          ) : (
            <Button type='primary' onClick={createForm}>
              {' '}
              Get Started{' '}
            </Button>
          )}
        </Col>

        <Col className='column c2'>
          <div className='image'>
            <img
              src={icon}
              alt='image'
              width='500'
              height='400'
              className='responsive-img'
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default withDefaultLayout(Home)
