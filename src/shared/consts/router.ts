export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    SETTINGS = 'settings',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found',
}

export const getMainRoute = () => '/'
export const getAboutRoute = () => '/about'
export const getProfileRoute = (profileId: string) => '/profile/' + profileId
export const getArticlesRoute = () => '/articles'
export const getArticleDetailsRoute = (articleId: string) => '/articles/' + articleId
export const getArticleCreateRoute = () => '/article_create'
export const getArticleEditRoute = (articleId: string) => '/articles/' + articleId + '/edit'
export const getAdminPanelRoute = () => '/admin_panel'
export const getSettingsRoute = () => '/settings'
export const getForbiddenRoute = () => '/forbidden'
export const getNotFoundRoute = () => '*'

export const routeEnumMapByPath: Record<string, AppRoutes> = {
    [getMainRoute()]: AppRoutes.MAIN,
    [getAboutRoute()]: AppRoutes.ABOUT,
    [getProfileRoute(':id')]: AppRoutes.PROFILE,
    [getArticlesRoute()]: AppRoutes.ARTICLES,
    [getArticleDetailsRoute(':id')]: AppRoutes.ARTICLES_DETAILS,
    [getArticleCreateRoute()]: AppRoutes.ARTICLE_CREATE,
    [getArticleEditRoute(':id')]: AppRoutes.ARTICLE_EDIT,
    [getAdminPanelRoute()]: AppRoutes.ADMIN_PANEL,
    [getSettingsRoute()]: AppRoutes.SETTINGS,
    [getForbiddenRoute()]: AppRoutes.FORBIDDEN,
    [getNotFoundRoute()]: AppRoutes.NOT_FOUND,
}
