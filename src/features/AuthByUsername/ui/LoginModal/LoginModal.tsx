import { Suspense, type FC } from 'react'
import LoginFormAsync from '../LoginForm/LoginFormAsync'
import { EllipsesLoader, Modal } from '@/shared/ui'

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
