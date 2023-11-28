import { useCallback, type FC, useState } from 'react'
import navbarStyles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme, Modal } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  const [isAuthModal, setisAuthModal] = useState<boolean>(false)
  const toggleAuthModal = useCallback(
    () => setisAuthModal((prev: boolean) => !prev),
    []
  )

  return (
    <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuthModal}>
          {t('sign_in')}
        </Button>
        {/* eslint-disable-next-line */}
        <Modal isOpen={isAuthModal} onClose={toggleAuthModal}>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Modal>
      </div>
    </nav>
  )
}

export default Navbar
