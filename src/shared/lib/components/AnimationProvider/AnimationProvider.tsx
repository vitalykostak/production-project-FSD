/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  type ReactNode,
  createContext,
  useMemo,
  useRef,
  type FC,
  useEffect,
  useState,
  useContext
} from 'react'

type SpringLibraryType = typeof import('@react-spring/web')
type GestureLibraryType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Spring?: SpringLibraryType
  Gesture?: GestureLibraryType
  isLoaded?: boolean
}

interface AnimationProviderProps {
  children: ReactNode
}

const fetchAsyncAnimationLibraries = async () => {
  return Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react')
  ])
}

const AnimationContext = createContext<AnimationContextPayload>({})

export const useAnimationContext = () => useContext(AnimationContext) as Required<AnimationContextPayload>

const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const springLibraryRef = useRef<SpringLibraryType>()
  const gestureLibraryRef = useRef<GestureLibraryType>()

  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    void fetchAsyncAnimationLibraries().then(([SpringLibrary, GestureLibrary]) => {
      springLibraryRef.current = SpringLibrary
      gestureLibraryRef.current = GestureLibrary
      setLoaded(true)
    })
  }, [])

  const value = useMemo<AnimationContextPayload>(
    () => ({
      Spring: springLibraryRef.current,
      Gesture: gestureLibraryRef.current,
      isLoaded
    }),
    [isLoaded]
  )

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}

export default AnimationProvider
