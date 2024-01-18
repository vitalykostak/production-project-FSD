import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { APP_HTML_ELEMENT_ID } from '@/shared/consts/app'

interface PortalProps {
    children: ReactNode
    destinationElement?: HTMLElement
}

const Portal: FC<PortalProps> = props => {
    const {
        children,
        destinationElement = document?.getElementById?.(APP_HTML_ELEMENT_ID) || document.body,
    } = props

    return createPortal(children, destinationElement)
}

export default Portal
