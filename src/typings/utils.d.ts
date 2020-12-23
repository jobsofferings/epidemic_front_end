import { SelectProps } from 'antd/lib/select'

declare namespace OPUtils {
  type Key = string | number

  type StringMap = Map<string, string>

  type InputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void

  type Maybe<T> = null | undefined | T

  type Record<K extends string | number | symbol = any, T = any> = {
    [P in K]: T
  }

  type onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void

  type listToOptions = (
    list: Maybe<Record<Key, any>>,
    valueKey?: Key,
    labelKey?: Key,
  ) => SelectProps<any>['options']

  interface DeviceInfo {
    device_id: string
    device_type: string
    status: number
    [k: string]: any
  }

  interface RouterParams {
    id?: string
  }
}
