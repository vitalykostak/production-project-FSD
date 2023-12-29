import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Drawer.module.scss'
import { type ReactNode, type FC, useEffect, useCallback } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import Portal from '../Portal/Portal'
import Overlay from '../Overlay/Overlay'
import { useAnimationContext } from '@/shared/lib/components/AnimationProvider'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100

const DrawerContent: FC<DrawerProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { Spring, Gesture } = useAnimationContext()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))
  const { theme } = useTheme()

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [api, isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    })
  }

  const overlayClickHandler = () => close(0)

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  )

  const mods = {
    [styles.opened]: isOpen
  }

  // class of theme is needed for including current theme variables
  const additionsClasses = [className, theme]

  if (lazy) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <div className={classNames(styles.Drawer, mods, additionsClasses)}>
      <Overlay onClick={overlayClickHandler} />
      <Spring.a.div
        className={styles.sheet}
        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        {...bind()}
      >
        {children}
      </Spring.a.div>
    </div>
  )
}

const Drawer: FC<DrawerProps> = (props) => {
  const { isLoaded } = useAnimationContext()

  if (!isLoaded) {
    return null
  }

  return (
    <Portal>
      <DrawerContent {...props} />{' '}
    </Portal>
  )
}

export default Drawer
