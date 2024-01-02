import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18n from '@/shared/config/i18n/i18nTesting'

interface RenderComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const renderComponent = (
  component: ReactNode,
  options: RenderComponentOptions = {}
) => {
  const { route = '/', initialState = {}, asyncReducers = {} } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState as StateSchema}
      >
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export default renderComponent
