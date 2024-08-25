import {doc, onSnapshot} from 'firebase/firestore'
import {db} from 'firebase'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const Profile = () => {
  const [data, setData] = useState<any>([])
  //   const {id} = useParams()
  //   let year = new Date().getFullYear()

  const search = useLocation().search
  const user_id = new URLSearchParams(search).get('id')

  useEffect(() => {
    // onSnapshot(doc(db, 'users', user_id), (doc) => {
    //   setData(doc.data())
    //   //   setLoaded(true)
    // })
  }, [])

  useEffect(() => {
    if (data && data.length !== 0) {
      const lan = data.skills.split(',')
      const tech = data.tech.split(',')
      //   setSkilllist(lan)
      //   setTechlist(tech)
    }
  }, [data])

  return <>Portfolio</>
}

export default Profile
