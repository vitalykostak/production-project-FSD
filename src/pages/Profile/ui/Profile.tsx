import { EditableProfileCard } from 'features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'

const Profile = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  )
}

export default Profile
