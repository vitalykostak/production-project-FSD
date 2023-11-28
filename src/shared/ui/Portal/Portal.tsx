import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  destinationElement?: HTMLElement
}

const Portal: FC<PortalProps> = (props) => {
  const { children, destinationElement = document.body } = props

  return createPortal(children, destinationElement)
}

export default Portal
