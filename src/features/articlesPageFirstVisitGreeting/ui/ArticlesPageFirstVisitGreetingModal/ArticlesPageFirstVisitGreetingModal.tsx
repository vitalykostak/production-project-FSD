import { memo, type FC, useState, useCallback, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import { Drawer, Modal, Text } from '@/shared/ui'
import { updateUserJsonSetting, useUserJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks'

const ArticlesPageFirstVisitGreetingModal: FC = memo(() => {
    const dispatch = useAppDispatch()
    const { hasArticlesPageBeenOpened } = useUserJsonSettings()

    const [isOpen, setOpen] = useState<boolean>(false)
    const onClose = useCallback(() => setOpen(false), [])

    useEffect(() => {
        if (hasArticlesPageBeenOpened) {
            return
        }

        setOpen(true)
        void dispatch(updateUserJsonSetting({ hasArticlesPageBeenOpened: true }))
    }, [hasArticlesPageBeenOpened, dispatch])

    const content = <Text text="Articles Page first visit greeting"></Text>

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                {content}
            </Drawer>
        )
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {content}
        </Modal>
    )
})

export default ArticlesPageFirstVisitGreetingModal
