import {useState} from 'react'
import {db} from '@clients/firebase'
import {doc, setDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useEffect} from 'react'

const EditProfile = () => {
  const auth = getAuth()

  const [userData, setUserData] = useState([])

  useEffect(() => {
    // onAuthStateChanged(auth, (currentUser) => {
    //   onSnapshot(doc(db, 'users', auth.currentUser.email), (doc) => {
    //     // setUserData(doc.data())
    //     console.log(doc.data())
    //   })
    // })
  }, [])

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

  return <></>
}

export default EditProfile
