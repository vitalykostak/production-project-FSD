import { Suspense, type FC } from 'react'

import { EllipsesLoader, Modal } from '@/shared/ui'

import LoginFormAsync from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal onClose={onClose} isOpen={isOpen} lazy>
      <Suspense fallback={<EllipsesLoader />}>
        <LoginFormAsync onSuccessLogin={onClose}/>
      </Suspense>
    </Modal>
  )
}

export default LoginModal
