import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { EditableProfileCard } from '@/features/EditableProfileCard'
import { Page } from '@/widgets/Page'
import { ProfileRating } from '@/features/profileRating'
import { VStack } from '@/shared/ui/redesigned'

const Profile = () => {
    const { id } = useParams<{ id: string }>()

    const { t } = useTranslation(['profile'])

    if (!id) {
        return <Page>{t('profile:no_id')}</Page>
    }

    return (
        <Page data-testid="ProfilePage">
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    )
}

export default Profile
