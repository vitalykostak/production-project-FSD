'use strict'
import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import {
    Button as ButtonDeprecated,
    ButtonTheme,
    Text as TextDeprecated,
} from '@/shared/ui/deprecated'
import { Button, Text, Card, HStack } from '@/shared/ui/redesigned'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

import styles from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
    className?: string
    id: string
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo(props => {
    const { className, id } = props

    const { t } = useTranslation(['translation', 'profile'])
    const dispatch = useAppDispatch()

    const authData = useSelector(getUserAuthData)
    const profileReadonly = useSelector(getProfileReadonly)
    const profileData = useSelector(getProfileData)

    const canEdit = authData?.id && profileData?.id && authData?.id === profileData?.id

    const mods = {}

    const additionsClasses = [className]

    const onEdit = useCallback(() => dispatch(profileActions.setReadonly(false)), [dispatch])

    const onCancelEdit = useCallback(() => dispatch(profileActions.cancelUpdate()), [dispatch])

    const onSave = useCallback(async () => {
        if (id) {
            void dispatch(updateProfileData(id))
        }
    }, [dispatch, id])

    return (
        <HStack
            justify="between"
            className={classNames(styles.EditableProfileCardHeader, mods, additionsClasses)}
            max
        >
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={
                    <>
                        <TextDeprecated title={t('profile:profile')}></TextDeprecated>
                        {canEdit && (
                            <>
                                {profileReadonly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        className={styles.editBtn}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('translation:edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack align="end" gap="12">
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('translation:cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            className={styles.saveBtn}
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('translation:save')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </>
                        )}
                    </>
                }
                onEnabled={
                    <Card max cardPadding="24" cardBorder="borderRoundPartial">
                        <HStack max justify="between" align="center">
                            <Text title={t('profile:profile')}></Text>
                            {canEdit && (
                                <>
                                    {profileReadonly ? (
                                        <Button
                                            variant="outline"
                                            className={styles.editBtn}
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('translation:edit')}
                                        </Button>
                                    ) : (
                                        <HStack align="end" gap="12">
                                            <Button
                                                variant="outline"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                            >
                                                {t('translation:cancel')}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className={styles.saveBtn}
                                                onClick={onSave}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                            >
                                                {t('translation:save')}
                                            </Button>
                                        </HStack>
                                    )}
                                </>
                            )}
                        </HStack>
                    </Card>
                }
            />
        </HStack>
    )
})

export default EditableProfileCardHeader
