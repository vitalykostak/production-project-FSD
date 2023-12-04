import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = () => {
  const { t } = useTranslation('profile')

  return <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout><div>{t('profile_page')}</div></DynamicModuleLoader>
}

export default Profile
