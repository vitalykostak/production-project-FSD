import { type FC } from 'react'

import Flex, { type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

/**
 * @deprecated
 */
const VStack: FC<VStackProps> = props => {
    return <Flex direction="column" {...props} />
}

export default VStack
