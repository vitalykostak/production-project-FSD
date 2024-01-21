import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import {
    Button as ButtonDeprecated,
    ButtonTheme,
    Input as InputDeprecated,
} from '@/shared/ui/deprecated'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { type TestProps } from '@/shared/types'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Button, Input, Card, HStack } from '@/shared/ui/redesigned'

import {
    addCommentFormReducer,
    useAddCommentFormActions,
} from '../../model/slice/addCommentFormSlice'

import styles from './AddCommentForm.module.scss'

export interface AddCommentFormProps extends TestProps {
    className?: string
    text?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = memo(props => {
    const { className, text, onSendComment, 'data-testid': dataTestId } = props

    const { t } = useTranslation()

    const { setText } = useAddCommentFormActions()

    const changeHandler = useCallback((value: string) => setText(value), [setText])

    const sendCommentHandler = useCallback(() => {
        onSendComment(text || '')
        changeHandler('')
    }, [text, onSendComment, changeHandler])

    const mods = {}

    const additionsClasses = [className]

    return (
        <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={
                    <div
                        className={classNames(styles.AddCommentForm, mods, additionsClasses)}
                        data-testid={dataTestId}
                    >
                        <InputDeprecated
                            className={styles.input}
                            value={text}
                            placeholder={t('input_comment')}
                            onChange={changeHandler}
                            data-testid={`${dataTestId}.Input`}
                        />
                        <ButtonDeprecated
                            onClick={sendCommentHandler}
                            theme={ButtonTheme.OUTLINE}
                            data-testid={`${dataTestId}.SendButton`}
                        >
                            {t('send')}
                        </ButtonDeprecated>
                    </div>
                }
                onEnabled={
                    <Card cardPadding="24" cardBorder="borderRound">
                        <HStack
                            gap="8"
                            className={classNames('', mods, additionsClasses)}
                            data-testid={dataTestId}
                        >
                            <Input
                                className={styles.input}
                                value={text}
                                placeholder={t('input_comment')}
                                onChange={changeHandler}
                                data-testid={`${dataTestId}.Input`}
                            />
                            <Button
                                onClick={sendCommentHandler}
                                variant="outline"
                                data-testid={`${dataTestId}.SendButton`}
                            >
                                {t('send')}
                            </Button>
                        </HStack>
                    </Card>
                }
            />
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
