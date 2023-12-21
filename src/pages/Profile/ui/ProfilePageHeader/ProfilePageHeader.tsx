import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import profilePageHeaderStyles from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme, HStack, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from 'shared/lib/hooks'
import {
  getProfileData,
  profileActions,
  updateProfileData
} from 'entities/Profile'
import { useParams } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['translation', 'profile'])
  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileReadonly = useSelector(getProfileReadonly)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const { id } = useParams<{ id: 'string' }>()

  const mods = {}

  const additionsClasses = [className]

  const onEdit = useCallback(
    () => dispatch(profileActions.setReadonly(false)),
    [dispatch]
  )

  const onCancelEdit = useCallback(
    () => dispatch(profileActions.cancelUpdate()),
    [dispatch]
  )

  const onSave = useCallback(async () => {
    if (id) {
      void dispatch(updateProfileData(id))
    }
  }, [dispatch, id])

  return (
    <HStack
      justify="between"
      className={classNames(
        profilePageHeaderStyles.ProfilePageHeader,
        mods,
        additionsClasses
      )}
    >
      <Text title={t('profile:profile')}></Text>
      {canEdit && (
        <>
          {profileReadonly
            ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              className={profilePageHeaderStyles.editBtn}
              onClick={onEdit}
            >
              {t('translation:edit')}
            </Button>
              )
            : (
            <HStack align="end" gap="12">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('translation:cancel')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={profilePageHeaderStyles.saveBtn}
                onClick={onSave}
              >
                {t('translation:save')}
              </Button>
            </HStack>
              )}
        </>
      )}
    </HStack>
  )
})

export default ProfilePageHeader
