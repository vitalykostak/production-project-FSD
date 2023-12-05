import { routePaths } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItems: SidebarItemType[] = [
  {
    path: routePaths.main,
    Icon: MainIcon,
    text: 'main:main'
  },
  {
    path: routePaths.about,
    Icon: AboutIcon,
    text: 'about:about'
  },
  {
    path: routePaths.profile,
    Icon: ProfileIcon,
    text: 'profile:profile',
    authOnly: true
  }
]
