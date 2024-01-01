// import type { Meta, StoryObj } from '@storybook/react'
// import ProfilePage from './Profile'
// import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
// import { Theme } from '@/app/providers/ThemeProvider'
// import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
// import { CURRENCY } from '@/entities/Currency'
// import { COUNTRY } from '@/entities/Country'
// import { type StateSchema } from '@/app/providers/StoreProvider'
// import AvatarTestImg from '@/shared/assets/tests/avatar-test-img.png'
// import { type Profile } from '@/entities/Profile'
// // import { ValidateProfileError } from '@/features/EditableProfileCard/model/types/profile'

// const meta = {
//   title: 'pages/Profile',
//   component: ProfilePage,
//   tags: ['autodocs']
// } satisfies Meta<typeof ProfilePage>

// export default meta
// type Story = StoryObj<typeof meta>

// const profile: Profile = {
//   username: 'Username',
//   age: 30,
//   avatar: AvatarTestImg,
//   lastName: 'Last name',
//   first: 'Firs name',
//   currency: CURRENCY.EUR,
//   country: COUNTRY.USA,
//   city: 'Night City'
// }

// const state: DeepPartial<StateSchema> = {
//   profile: {
//     readonly: true,
//     error: undefined,
//     form: profile,
//     data: profile,
//     validateError: undefined
//   }
// }

// export const Primary: Story = {
//   args: {},
//   decorators: [ReduxStoreDecorator(state)]
// }

// export const Dark: Story = {
//   args: {},
//   decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator(state)]
// }

// export const Editing: Story = {
//   args: {},
//   decorators: [
//     ReduxStoreDecorator({
//       ...state,
//       profile: { ...state.profile, readonly: false }
//     })
//   ]
// }

// export const EditingDark: Story = {
//   args: {},
//   decorators: [
//     ThemeDecorator(Theme.DARK),
//     ReduxStoreDecorator({
//       ...state,
//       profile: { ...state.profile, readonly: false }
//     })
//   ]
// }

// export const Loading: Story = {
//   args: {},
//   decorators: [
//     ReduxStoreDecorator({
//       ...state,
//       profile: { ...state.profile, isLoading: true, readonly: false }
//     })
//   ]
// }

// export const LoadingDark: Story = {
//   args: {},
//   decorators: [
//     ThemeDecorator(Theme.DARK),
//     ReduxStoreDecorator({
//       ...state,
//       profile: { ...state.profile, isLoading: true, readonly: false }
//     })
//   ]
// }
// export const ValidationErrors: Story = {
//   args: {},
//   decorators: [
//     ReduxStoreDecorator({
//       ...state,
//       profile: {
//         ...state.profile,
//         validateError: [
//           ValidateProfileError.INCORRECT_USER_DATA,
//           ValidateProfileError.INCORRECT_USER_AGE,
//           ValidateProfileError.INCORRECT_USER_CITY
//         ],
//         readonly: false
//       }
//     })
//   ]
// }

// export const ValidationErrorsDark: Story = {
//   args: {},
//   decorators: [
//     ThemeDecorator(Theme.DARK),
//     ReduxStoreDecorator({
//       ...state,
//       profile: {
//         ...state.profile,
//         validateError: [
//           ValidateProfileError.INCORRECT_USER_DATA,
//           ValidateProfileError.INCORRECT_USER_AGE,
//           ValidateProfileError.INCORRECT_USER_CITY
//         ],
//         readonly: false
//       }
//     })
//   ]
// }

// TODO
export default {}
