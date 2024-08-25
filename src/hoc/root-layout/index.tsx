import Layout from '../../components/layout'

interface WithLayoutProps {}

const withDefaultLayout = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithDefaultLayout: React.FC<P & WithLayoutProps> = (props) => {
    // const {userProfile, monetisationRoles, userRoles} = useAppContext()

    return (
      <Layout>
        <Component {...(props as P)} />
      </Layout>
    )
  }
  return WithDefaultLayout
}

export default withDefaultLayout
