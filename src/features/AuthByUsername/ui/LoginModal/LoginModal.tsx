import { Suspense, type FC } from 'react'

import { EllipsesLoader } from '@/shared/ui/deprecated'
import { Modal } from '@/shared/ui/redesigned'

import LoginFormAsync from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal: FC<LoginModalProps> = props => {
    const { isOpen, onClose } = props

    return (
        <Modal onClose={onClose} isOpen={isOpen} lazy>
            <Suspense fallback={<EllipsesLoader />}>
                <LoginFormAsync onSuccessLogin={onClose} />
            </Suspense>
        </Modal>
    )
}

export default LoginModal
