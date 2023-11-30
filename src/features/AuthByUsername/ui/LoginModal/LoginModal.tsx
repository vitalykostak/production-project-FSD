import { type FC } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
