import { type FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

const Counter: FC = () => {
  const { t } = useTranslation()

  const count = useSelector(getCounterValue)
  const dispatch = useDispatch()

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
