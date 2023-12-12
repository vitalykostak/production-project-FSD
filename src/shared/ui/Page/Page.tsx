import { useRef, type FC, type ReactNode, type MutableRefObject } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks'

interface PageProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    containerRef,
    triggerRef,
    onIntersection: onScrollEnd
  })

  const mods = {}

  const additionsClasses = [className]

  return (
    <main className={classNames(styles.Page, mods, additionsClasses)} ref={containerRef}>
      {children}
      <div ref={triggerRef}/>
    </main>
  )
}

export default Page
