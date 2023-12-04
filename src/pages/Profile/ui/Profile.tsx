import {
  ProfileCard,
  fetchProfileData,
  profileReducer
} from 'entities/Profile'
import { useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default Profile
