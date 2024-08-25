import React from 'react'
import {Layout} from 'antd'
import Navbar from '../ui/navbar'

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({children}) => {
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  )
}

export default DefaultLayout
