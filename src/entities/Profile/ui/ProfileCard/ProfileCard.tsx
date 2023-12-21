import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import profileCardStyles from './ProfileCard.module.scss'
import {
  EllipsesLoader,
  Input,
  Text,
  TextAlign,
  TextTheme,
  Avatar,
  VStack,
  HStack
} from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'
import { type CURRENCY, CurrencySelect } from 'entities/Currency'
import { CountrySelect, type COUNTRY } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: CURRENCY) => void
  onChangeCountry?: (value: COUNTRY) => void
}

const ProfileCard: FC<ProfileCardProps> = memo((props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props

  const { t } = useTranslation(['translation', 'profile'])

  const mods = {
    [profileCardStyles.editing]: readonly
  }

  const additionsClasses = [className]

  if (isLoading) {
    return (
      <VStack
        className={classNames(profileCardStyles.ProfileCard, mods, [
          ...additionsClasses,
          profileCardStyles.loading
        ])}
        justify="center"
        align="center"
      >
        <EllipsesLoader />
      </VStack>
    )
  }

  if (error) {
    return (
      <VStack
        className={classNames(profileCardStyles.ProfileCard, mods, [
          ...additionsClasses,
          profileCardStyles.error
        ])}
        justify="center"
        align="center"
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('profile:error_during_fetching_profile')}
          text={t('translation:try_to_reload_page')}
          align={TextAlign.CENTER}
        />
      </VStack>
    )
  }

  return (
    <VStack
      className={classNames(
        profileCardStyles.ProfileCard,
        mods,
        additionsClasses
      )}
      gap="12"
    >
      <HStack>{data?.avatar && <Avatar src={data.avatar} />}</HStack>
      <Input
        value={data?.first}
        placeholder={t('profile:firstName')}
        className={profileCardStyles.input}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        value={data?.lastName}
        placeholder={t('profile:lastName')}
        className={profileCardStyles.input}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('profile:city')}
        className={profileCardStyles.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={String(data?.age)}
        placeholder={t('profile:age')}
        className={profileCardStyles.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('profile:username')}
        className={profileCardStyles.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={String(data?.avatar)}
        placeholder={t('profile:avatar')}
        className={profileCardStyles.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={profileCardStyles.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={profileCardStyles.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  )
})

export default ProfileCard
