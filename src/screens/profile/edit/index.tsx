import {useState} from 'react'
import {db} from '../../../firebase'
import {doc, setDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import withDefaultLayout from '../../../hoc/root-layout'

const EditProfile = () => {
  const auth = getAuth()
  const location = useLocation()
  console.log(location?.pathname?.split('/')?.[2])

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email) {
        const userDocRef = doc(db, 'users', currentUser.email)
        onSnapshot(userDocRef, (doc) => {
          // setUserData(doc.data())
          console.log(doc.data())
        })
      }
    })

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe()
  }, [auth])

  // File upload
  //   const onFileChange = async (e) => {
  //     const storage = getStorage()
  //     const file = e.target.files[0]
  //     const fname = file.name
  //     setFilename(fname)
  //     const storageRef = ref(storage, `${file.name}`)
  //     await uploadBytesResumable(storageRef, file)
  //     console.log(name)
  //     await getDownloadURL(ref(storage, storageRef)).then((url) => {
  //       setFileUrl(url)
  //     })
  //   }

  //Firestore
  const handleSubmit = async (e: any) => {
    //    TODO: handle submit form
    // await setDoc(doc(db, 'users', auth.currentUser.email), data)
    //   .then((result) => {
    //     // update states
    //   })
    //   .catch((error) => {
    //     console.log('Error')
    //   })
  }

  const removeFunc = async () => {
    // await deleteDoc(doc(db, 'users', auth.currentUser.email))
    //   .then((result) => {
    //     //    TODO: handle clear form
    //   })
    //   .catch((error) => {
    //     console.log('error')
    //   })
  }

  return <div></div>
}

export default withDefaultLayout(EditProfile)
