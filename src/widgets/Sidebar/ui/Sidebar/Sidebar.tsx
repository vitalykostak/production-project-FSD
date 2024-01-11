import { type FC, useState, memo } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLogo, Button, ButtonTheme, VStack } from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import SidebarItem from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'

import sidebarDeprecatedStyles from './SidebarDeprecated.module.scss'
import sidebarRedesignedStyles from './SidebarRedesigned.module.scss'

interface SidebarProps {
    className?: string
}

const SidebarDeprecated: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const SidebarItems = useSelector(getSidebarItems)

    const toggleSidebar = () => setCollapsed(prev => !prev)

    return (
        <aside
            data-testid={'sidebar'}
            className={classNames(
                sidebarDeprecatedStyles.Sidebar,
                {
                    [sidebarDeprecatedStyles.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button
                onClick={toggleSidebar}
                data-testid="toggle-button"
                className={sidebarDeprecatedStyles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap={'8'} className={sidebarDeprecatedStyles.items}>
                {SidebarItems.map(item => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </VStack>
            <div className={sidebarDeprecatedStyles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    className={classNames(sidebarDeprecatedStyles.languageSwitcherContainer)}
                    short={collapsed}
                />
            </div>
        </aside>
    )
})

const SidebarRedesigned: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleSidebar = () => setCollapsed(prev => !prev)

    return (
        <aside
            data-testid={'sidebar'}
            className={classNames(
                sidebarRedesignedStyles.Sidebar,
                {
                    [sidebarRedesignedStyles.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button
                onClick={toggleSidebar}
                data-testid="toggle-button"
                className={sidebarRedesignedStyles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <AppLogo />
        </aside>
    )
})

const Sidebar: FC<SidebarProps> = memo(props => {
    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={<SidebarDeprecated {...props} />}
            onEnabled={<SidebarRedesigned {...props} />}
        />
    )
})

export default Sidebar
