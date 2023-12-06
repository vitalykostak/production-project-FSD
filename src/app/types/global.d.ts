import { type ExecutionEnvironment } from '../../../config/build/types/config'

declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare global {
  const IS_DEV: boolean
  const API_URL: string
  const EXECUTION_ENVIRONMENT: ExecutionEnvironment

  type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  } : T
}
