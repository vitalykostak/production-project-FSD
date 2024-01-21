import { memo, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/redesigned'
import { getArticleEditRoute } from '@/shared/consts/router'

interface EditArticleButtonProps {
    className?: string
    articleId: string
}

const EditArticleButton: FC<EditArticleButtonProps> = memo(props => {
    const { className, articleId } = props
    const { t } = useTranslation(['translation'])
    const navigate = useNavigate()

    const onClick = useCallback(
        () => navigate(getArticleEditRoute(articleId)),
        [navigate, articleId],
    )

    return (
        <Button variant="outline" className={className} onClick={onClick}>
            {t('translation:edit')}
        </Button>
    )
})

export default EditArticleButton
