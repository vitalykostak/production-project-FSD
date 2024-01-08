export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
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
export const getForbiddenRoute = () => '/forbidden'
export const getNotFoundRoute = () => '*'
