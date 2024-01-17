import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type CURRENCY, CurrencySelect } from '@/entities/Currency'
import { type COUNTRY, CountrySelect } from '@/entities/Country'
import { Avatar, Card, HStack, Input, VStack, Text, Skeleton } from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import ProfileCardDeprecated from '../ProfileCardDeprecated/ProfileCard'
import { type Profile } from '../../model/types/profile'

import profileCardRedesignedStyles from './ProfileCard.module.scss'

const ProfileCardRedesignedSkeleton: FC<{ className?: string }> = memo(props => {
    const { className } = props

    return (
        <Card cardPadding="24" className={className} max>
            <VStack gap="12" align="center">
                <HStack justify="center">
                    <Skeleton borderRadius="50%" width="100px" height="100px" />
                </HStack>
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                    </VStack>
                    <VStack gap="16" max>
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                        <Skeleton width="100%" height="38px" />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
})

const ProfileCardRedesignedError: FC<{ className?: string }> = memo(props => {
    const { className } = props
    const { t } = useTranslation(['translation', 'profile'])

    return (
        <VStack className={className} justify="center" align="center" max>
            <Text
                variant="error"
                title={t('profile:error_during_fetching_profile')}
                text={t('translation:try_to_reload_page')}
                align="center"
            />
        </VStack>
    )
})

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

const ProfileCardRedesigned: FC<ProfileCardProps> = memo(props => {
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
        onChangeCountry,
    } = props

    const { t } = useTranslation(['profile'])

    const mods = {
        [profileCardRedesignedStyles.editing]: readonly,
    }

    const additionsClasses = [className]

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton className={classNames('', mods, additionsClasses)} />
    }

    if (error) {
        return (
            <ProfileCardRedesignedError
                className={classNames('', mods, [
                    ...additionsClasses,
                    profileCardRedesignedStyles.error,
                ])}
            />
        )
    }

    return (
        <Card className={classNames('', mods, additionsClasses)} max cardPadding="24">
            <HStack max justify="center" className={profileCardRedesignedStyles.avatar}>
                {<Avatar src={data?.avatar} />}
            </HStack>
            <HStack gap="24" max>
                <VStack gap={'24'} max>
                    <Input
                        value={data?.first}
                        label={t('profile:firstName')}
                        data-testid="ProfileCard.firstNameInput"
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeFirstName}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.lastName}
                        label={t('profile:lastName')}
                        data-testid="ProfileCard.lastNameInput"
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeLastName}
                        readonly={readonly}
                    />
                    <Input
                        value={data?.city}
                        label={t('profile:city')}
                        data-testid="ProfileCard.cityInput"
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeCity}
                        readonly={readonly}
                    />
                    <Input
                        value={String(data?.age)}
                        label={t('profile:age')}
                        data-testid="ProfileCard.ageInput"
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeAge}
                        readonly={readonly}
                    />
                </VStack>
                <VStack gap={'24'} max>
                    <Input
                        value={data?.username}
                        label={t('profile:username')}
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeUsername}
                        readonly={readonly}
                    />
                    <Input
                        value={String(data?.avatar)}
                        label={t('profile:avatar')}
                        className={profileCardRedesignedStyles.input}
                        onChange={onChangeAvatar}
                        readonly={readonly}
                    />
                    <CurrencySelect
                        className={profileCardRedesignedStyles.input}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        className={profileCardRedesignedStyles.input}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </HStack>
        </Card>
    )
})

const ProfileCard: FC<ProfileCardProps> = memo(props => {
    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={<ProfileCardDeprecated {...props} />}
            onEnabled={<ProfileCardRedesigned {...props} />}
        />
    )
})

export default ProfileCard
