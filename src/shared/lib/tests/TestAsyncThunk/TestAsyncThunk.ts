import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import axios, { type AxiosStatic } from 'axios'

type ActionCreator<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<
Return,
Arg,
{
  rejectValue: RejectedValue
}
>
jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  public dispatch: jest.MockedFn<any>
  public api: jest.MockedFunctionDeep<AxiosStatic>
  public navigate: jest.MockedFunction<any>
  private readonly getState: () => StateSchema
  private readonly actionCreator: ActionCreator<Return, Arg, RejectedValue>

  constructor (
    actionCreator: ActionCreator<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.actionCreator = actionCreator
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate
    })
    return result
  }
}
