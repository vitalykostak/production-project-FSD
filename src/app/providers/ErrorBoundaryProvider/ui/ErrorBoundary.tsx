import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react'

import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface StateType {
  hasError: boolean
}

// TODO global styles are not included in ErrorBoundaryProps

class ErrorBoundary extends Component<ErrorBoundaryProps, StateType> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.info(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
