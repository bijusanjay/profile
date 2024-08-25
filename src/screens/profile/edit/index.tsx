import {useState} from 'react'
import {db} from '../../../firebase'
import {doc, setDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import withDefaultLayout from '../../../hoc/root-layout'
import {Form, Input, Button} from 'antd'

const EditProfile = () => {
  const auth = getAuth()
  const location = useLocation()
  const [form] = Form.useForm()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email) {
        const userDocRef = doc(db, 'users', currentUser.email)
        onSnapshot(userDocRef, (doc) => {
          form.setFieldsValue(doc.data())
          console.log(doc.data())
        })
      }
    })

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe()
  }, [auth, form])

  const onFinish = (values: any) => {
    console.log('Form Values:', values)
  }

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

  return (
    <Form form={form} layout='vertical' onFinish={onFinish}>
      <Form.Item label='Name' name='name'>
        <Input />
      </Form.Item>
      <Form.Item label='Email' name='email'>
        <Input />
      </Form.Item>
      <Form.Item label='LinkedIn' name='linkedin'>
        <Input />
      </Form.Item>
      <Form.Item label='Headline' name='headline'>
        <Input />
      </Form.Item>
      <Form.Item label='College' name='college'>
        <Input />
      </Form.Item>
      <Form.Item label='About' name='about'>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label='Tech Stack' name='tech'>
        <Input />
      </Form.Item>
      <Form.Item label='Skills' name='skills'>
        <Input />
      </Form.Item>
      <Form.Item label='Degree' name='degree'>
        <Input />
      </Form.Item>
      <Form.List name='experience'>
        {(fields) => (
          <>
            {fields.map(({key, name, fieldKey, ...restField}) => (
              <div key={key}>
                <Form.Item
                  {...restField}
                  label='Company'
                  name={[name, 'company']}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...restField} label='Role' name={[name, 'role']}>
                  <Input />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label='Job Description'
                  name={[name, 'job_desc']}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
            ))}
          </>
        )}
      </Form.List>
      <Form.List name='inputList'>
        {(fields) => (
          <>
            {fields.map(({key, name, fieldKey, ...restField}) => (
              <div key={key}>
                <Form.Item
                  {...restField}
                  label='Project Title'
                  name={[name, 'project_title']}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  {...restField}
                  label='Project Description'
                  name={[name, 'project_desc']}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
            ))}
          </>
        )}
      </Form.List>
      <Form.Item label='GitHub' name='github'>
        <Input />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default withDefaultLayout(EditProfile)
