import {useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import icon from '../assets/img2.jpg'
import {Button, Col, Row} from 'antd'

const Home = () => {
  const [show, setShow] = useState(false)
  const auth = getAuth()
  const [user, setuser] = useState(null)

  onAuthStateChanged(auth, (currentUser: any) => {
    setuser(currentUser)
  })

  let history = useNavigate()
  const createForm = () => {
    if (user) {
      //   history.push('/create')
    } else {
      setShow(!show)
    }
  }

  return (
    <div className='content'>
      <div>
        <Row className='row'>
          <Col className='column c1'>
            <h4>Create a portfolio</h4>
            <br />
            <h5>
              You can make a simple <strong>portfolio</strong> here and share
              anywhere!
            </h5>
            <br />

            <Button type='primary' onClick={createForm}>
              {' '}
              Create a portfolio{' '}
            </Button>
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
    </div>
  )
}

export default Home
