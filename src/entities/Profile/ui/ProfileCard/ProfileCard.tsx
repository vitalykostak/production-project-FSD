import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import profileCardStyles from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
// import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { Button, ButtonTheme, Input, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface ProfileCardProps {
  className?: string
}

const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['translation', 'profile'])

  const data = useSelector(getProfileData)
  // const isLoading = useSelector(getProfileLoading)
  // const error = useSelector(getProfileError)

  const mods = {}

  const additionsClasses = [className]

  return (
    <div
      className={classNames(
        profileCardStyles.ProfileCard,
        mods,
        additionsClasses
      )}
    >
      <div className={profileCardStyles.header}>
        <Text title={t('profile:profile')}></Text>
        <Button theme={ButtonTheme.OUTLINE} className={profileCardStyles.editBtn}>{t('translation:edit')}</Button>
      </div>
      <div className={profileCardStyles.data}>
        <Input
          value={data?.first}
          placeholder={t('profile:firstName')}
          className={profileCardStyles.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('profile:lastName')}
          className={profileCardStyles.input}
        />
      </div>
    </div>
  )
})

export default ProfileCard
