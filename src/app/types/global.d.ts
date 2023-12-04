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

declare const IS_DEV: boolean
declare const API_URL: string
