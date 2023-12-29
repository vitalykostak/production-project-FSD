import { useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
  isOpen?: boolean
  onClose?: () => void
  animationDelay: number
}

export const useModal = (props: UseModalProps) => {
  const { animationDelay, isOpen, onClose } = props

  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

  const onCloseKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
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

  return {
    close,
    isMounted,
    isClosing
  }
}
