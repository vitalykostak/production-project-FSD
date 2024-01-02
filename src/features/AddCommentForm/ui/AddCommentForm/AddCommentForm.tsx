import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonTheme, Input } from '@/shared/ui'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'

import {
  addCommentFormActions,
  addCommentFormReducer
} from '../../model/slice/addCommentFormSlice'

import styles from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  text?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
  const { className, text, onSendComment } = props

  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  // const error = useSelector(getAddCommentFormError)

  const changeHandler = useCallback(
    (value: string) => dispatch(addCommentFormActions.setText(value)),
    [dispatch]
  )

  const sendCommentHandler = useCallback(() => {
    onSendComment(text || '')
    changeHandler('')
  }, [text, onSendComment, changeHandler])

  const mods = {}

  const additionsClasses = [className]

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <div
        className={classNames(styles.AddCommentForm, mods, additionsClasses)}
      >
        <Input
        className={styles.input}
          value={text}
          placeholder={t('input_comment')}
          onChange={changeHandler}
        />
        <Button onClick={sendCommentHandler} theme={ButtonTheme.OUTLINE}>{t('send')}</Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
