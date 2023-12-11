import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  profileReducer
} from 'entities/Profile'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import { type CURRENCY } from 'entities/Currency'
import { type COUNTRY } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = () => {
  const dispatch = useAppDispatch()

  const profileError = useSelector(getProfileError)
  const profileForm = useSelector(getProfileForm)
  const profileLoading = useSelector(getProfileLoading)
  const profileReadonly = useSelector(getProfileReadonly)
  const profileValidationErrors = useSelector(getProfileValidationErrors)

  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ first: value }))
  }, [dispatch])

  const onChangeLastName = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }))
  }, [dispatch])

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    // TODO Add number validation
    dispatch(profileActions.updateProfile({ age: Number(value) }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((value: CURRENCY) => {
    dispatch(profileActions.updateProfile({ currency: value }))
  }, [dispatch])

  const onChangeCountry = useCallback((value: COUNTRY) => {
    dispatch(profileActions.updateProfile({ country: value }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <div>
        <ProfilePageHeader/>
        {profileValidationErrors?.map(e => (<Text key={e} theme={TextTheme.ERROR} text={e}/>))}
        <ProfileCard
          data={profileForm}
          isLoading={profileLoading}
          error={profileError}
          readonly={profileReadonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default Profile
