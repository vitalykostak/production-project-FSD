import { screen } from '@testing-library/react'
import renderComponent from 'shared/lib/tests/renderComponent/renderComponent'
import EditableProfileCard from './EditableProfileCard'
import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import { type Profile } from 'entities/Profile'
import userEvent from '@testing-library/user-event'
import { $api } from 'shared/api/api'

const profile: Profile = {
  id: '1',
  username: 'Username',
  age: 30,
  avatar: '',
  lastName: 'Last name',
  first: 'Firs name',
  currency: CURRENCY.EUR,
  country: COUNTRY.USA,
  city: 'Night City'
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
      isLoading: false,
      error: undefined
    },
    user: {
      authData: { id: '2' }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('features/EditableProfileCard/EditableProfileCard', () => {
  test('does not allow editing if no authentication or user.id !== profile.id', async () => {
    renderComponent(<EditableProfileCard id={'1'} />, options)

    expect(
      screen.queryByTestId('EditableProfileCardHeader.EditButton')
    ).not.toBeInTheDocument()
  })
  test('allows editing if profile and auth data are for the same user', async () => {
    renderComponent(<EditableProfileCard id={'1'} />, {
      ...options,
      initialState: {
        ...options.initialState,
        user: { ...options.initialState.user, authData: { ...options.initialState.user.authData, id: '1' } }
      }
    })
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    )
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument()
  })

  test('cancels editing and resets changes on cancel button click', async () => {
    renderComponent(<EditableProfileCard id={'1'} />, {
      ...options,
      initialState: {
        ...options.initialState,
        profile: { ...options.initialState.profile, readonly: false },
        user: { ...options.initialState.user, authData: { ...options.initialState.user.authData, id: '1' } }
      }
    })

    await userEvent.clear(screen.getByTestId('ProfileCard.firstNameInput'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastNameInput'))

    await userEvent.type(
      screen.getByTestId('ProfileCard.firstNameInput'),
      'New firstName value'
    )
    await userEvent.type(
      screen.getByTestId('ProfileCard.lastNameInput'),
      'New lastName value'
    )

    expect(screen.getByTestId('ProfileCard.firstNameInput')).toHaveValue(
      'New firstName value'
    )
    expect(screen.getByTestId('ProfileCard.lastNameInput')).toHaveValue(
      'New lastName value'
    )

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    )

    expect(screen.getByTestId('ProfileCard.firstNameInput')).toHaveValue(
      profile.first
    )
    expect(screen.getByTestId('ProfileCard.lastNameInput')).toHaveValue(
      profile.lastName
    )
  })

  test('displays validation error on save if required fields are empty', async () => {
    renderComponent(<EditableProfileCard id={'1'} />, {
      ...options,
      initialState: {
        ...options.initialState,
        profile: { ...options.initialState.profile, readonly: false },
        user: { ...options.initialState.user, authData: { ...options.initialState.user.authData, id: '1' } }
      }
    })

    await userEvent.clear(screen.getByTestId('ProfileCard.firstNameInput'))

    expect(screen.getByTestId('ProfileCard.firstNameInput')).toHaveValue(
      ''
    )

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(screen.getByTestId('EditableProfileCard.ValidationError.Text')).toBeInTheDocument()
  })

  test('saves changes and triggers API request on save button click', async () => {
    const mockRequest = jest.spyOn($api, 'put')

    renderComponent(<EditableProfileCard id={'1'} />, {
      ...options,
      initialState: {
        ...options.initialState,
        profile: { ...options.initialState.profile, readonly: false },
        user: { ...options.initialState.user, authData: { ...options.initialState.user.authData, id: '1' } }
      }
    })

    await userEvent.clear(screen.getByTestId('ProfileCard.firstNameInput'))
    await userEvent.type(screen.getByTestId('ProfileCard.firstNameInput'), 'New value')

    expect(screen.getByTestId('ProfileCard.firstNameInput')).toHaveValue(
      'New value'
    )

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    )

    expect(mockRequest).toHaveBeenCalled()
  })
})
