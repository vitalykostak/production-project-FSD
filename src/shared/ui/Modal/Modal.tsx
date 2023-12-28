import { classNames } from 'shared/lib/classNames/classNames'
import modalStyles from './Modal.module.scss'
import {
  type ReactNode,
  type FC,
  useRef,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import Portal from '../Portal/Portal'
import Overlay from '../Overlay/Overlay'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { theme } = useTheme()

  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onCloseKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onCloseKeydown)
    }

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [onCloseKeydown, isOpen])

  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true)
    }
  }, [isOpen, isMounted])

  const mods = {
    [modalStyles.opened]: isOpen,
    [modalStyles.closing]: isClosing
  }

  // class of theme is needed for including current theme variables
  const additionsClasses = [className, theme]

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(modalStyles.Modal, mods, additionsClasses)}>
        <Overlay onClick={closeHandler} />
        <div className={modalStyles.content}>{children}</div>
      </div>
    </Portal>
  )
}

export default Modal
