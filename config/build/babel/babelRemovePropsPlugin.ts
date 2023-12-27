import { type NodePath } from '@babel/core'

export default function () {
  return {
    visitor: {
      Program (path: NodePath, state: any) {
        const forbidden = state.opts.props

        path.traverse({
          JSXIdentifier (current) {
            const nodeName = current.node.name

            if (forbidden.includes(nodeName)) {
              current.parentPath.remove()
            }
          }
        })
      }
    }
  }
}
