import logo from '../../../assets/logo-fav.png'
import icon from '../../../assets/google-icon.png'
import {Avatar, Layout, Menu} from 'antd'
import styled from 'styled-components'
import {useAppContext} from '../../../context/app-context'
import Title from 'antd/es/typography/Title'

const {Header} = Layout

const Container = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: white;
  z-index: 1;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Navbar = () => {
  const {userProfile, logOut, signUp} = useAppContext()

  return (
    <Container>
      <LogoContainer>
        <Title
          level={4}
          style={{marginTop: '0px', marginBottom: '0px', marginRight: '10px'}}
        >
          PROFILE
        </Title>
        <Avatar src={logo} />
      </LogoContainer>
      <Menu
        mode='horizontal'
        style={{
          lineHeight: '62px',
          margin: '0 0px',
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}
      ></Menu>

      <div
        className='me-auto-end'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {userProfile?.displayName ? (
          <div className='googleIcon'>
            <img
              alt='icon'
              src={icon}
              width='23'
              height='23'
              className='d-inline-block align-top'
              style={{display: 'flex', cursor: 'pointer'}}
            />
          </div>
        ) : (
          <div className='googleIcon' onClick={signUp}>
            <img
              alt='icon'
              src={icon}
              width='23'
              height='23'
              className='d-inline-block align-top'
              style={{display: 'flex'}}
            />
          </div>
        )}
        <span style={{marginLeft: '10px'}}>{userProfile?.displayName}</span>
        {userProfile && (
          <div style={{marginLeft: '20px'}}>
            <a className='navbar n1' href='/' onClick={logOut}>
              Sign-out
            </a>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Navbar
