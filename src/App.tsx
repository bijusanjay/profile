import {AppContextInterface, AppCtxProvider} from '../src/context/app-context'
import AppRoutes from '../src/components/routes'
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth'
import {auth} from './firebase'
import {useState} from 'react'

const App = () => {
  const provider = new GoogleAuthProvider()

  const [user, setuser] = useState<any>({})

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
  })

  const signUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token.
        const credential: any = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.

        // console.log(auth.currentUser.email)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful')
        // history.push('/')
      })
      .catch((error) => {
        // An error happened.
      })
  }

  const initialState: AppContextInterface = {
    userProfile: user,
    signUp: signUp,
    logOut: logOut,
  }

  return (
    <AppCtxProvider initialState={initialState}>
      <AppRoutes />
    </AppCtxProvider>
  )
}

export default App
