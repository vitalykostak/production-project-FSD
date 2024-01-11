import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ProfileCard } from '@/entities/Profile'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { type CURRENCY } from '@/entities/Currency'
import { type COUNTRY } from '@/entities/Country'
import { Text, TextTheme, VStack } from '@/shared/ui/deprecated'

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const EditableProfileCard: FC<EditableProfileCardProps> = memo(props => {
    const { className, id } = props

    const dispatch = useAppDispatch()

    const profileError = useSelector(getProfileError)
    const profileForm = useSelector(getProfileForm)
    const profileLoading = useSelector(getProfileLoading)
    const profileReadonly = useSelector(getProfileReadonly)
    const profileValidationErrors = useSelector(getProfileValidationErrors)

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ first: value }))
        },
        [dispatch],
    )

    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastName: value }))
        },
        [dispatch],
    )

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value: string) => {
            // TODO Add number validation
            dispatch(profileActions.updateProfile({ age: Number(value) }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (value: CURRENCY) => {
            dispatch(profileActions.updateProfile({ currency: value }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (value: COUNTRY) => {
            dispatch(profileActions.updateProfile({ country: value }))
        },
        [dispatch],
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
            <VStack className={classNames('', mods, additionsClasses)} max>
                <EditableProfileCardHeader id={id} />
                {profileValidationErrors?.map(e => (
                    <Text
                        key={e}
                        theme={TextTheme.ERROR}
                        text={e}
                        data-testid="EditableProfileCard.ValidationError"
                    />
                ))}
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
            </VStack>
        </DynamicModuleLoader>
    )
})

export default EditableProfileCard
