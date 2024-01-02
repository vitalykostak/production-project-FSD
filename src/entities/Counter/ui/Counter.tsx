import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

const Counter: FC = () => {
  const { t } = useTranslation()

  const count = useSelector(getCounterValue)
  const dispatch = useAppDispatch()

  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  const increment = () => {
    dispatch(counterActions.increment())
  }

  return (
    <div>
      <h1 data-testid="value-title">{count}</h1>
      <Button onClick={decrement} data-testid="decrement-button">
        {t('decrement')}
      </Button>
      <Button onClick={increment} data-testid="increment-button">
        {t('increment')}
      </Button>
    </div>
  )
}

export default Counter
