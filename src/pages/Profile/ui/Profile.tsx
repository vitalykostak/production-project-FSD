import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { ProfileRating } from '@/features/profileRating'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/shared/ui'

const Profile = () => {
  const { id } = useParams<{ id: string }>()

  const { t } = useTranslation(['profile'])

  if (!id) {
    return <Page>{t('profile:no_id')}</Page>
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  )
}

export default Profile
