### Launch project

`npm ci` - Install project dependencies.
`npm run start:dev` - Start the project in the development environment using webpack.
`npm run start:vite:dev` - Start the project in the development environment using vite.(fastest HMR)

### Architecture

Feature-Sliced Design (FSD)
Our project follows the Feature-Sliced Design (FSD) architecture. Check out the FSD documentation for key principles that make collaboration and development more straightforward and efficient.

[Feature-Sliced Design](https://feature-sliced.design/)

### Scripts

[Scripts documentation](./docs/scripts.md)

### Working with data

[Working with data documentation](./docs/working-with-data.md)

### Testing

[Testing documentation](./docs/testing.md)

### Linting

[Linting documentation](./docs/linting.md)

### Feature Flags

[Feature flags documentation](./docs/feature-flags.md)

### CI, pre-commit, pre-push

CI workflow is located in `.github/workflows/github-actions.yml`

-   first job: build prod -> build storybook -> screenshot tests
-   seconde job: lint ts, lint scss, unit tests

### Translations

In project for comfortable work with translations used `i18next` - [i18next-doc](https://www.i18next.com/)
Translations are located in `public/locales`

### Entities

-   [Article](./src/entities/Articles/readme.md)
-   [Comment](./src/entities/Comment/readme.md)
-   [Counter](./src/entities/Counter/readme.md)
-   [Country](./src/entities/Country/readme.md)
-   [Currency](./src/entities/Currency/readme.md)
-   [Notification](./src/entities/Notification/readme.md)
-   [Profile](./src/entities/Profile/readme.md)
-   [Rating](./src/entities/Rating/readme.md)
-   [User](./src/entities/User/readme.md)

### Features

-   [articleRating](./src/features/articleRating/readme.md)
-   [articlesPageFirstVisitGreeting](./src/features/articlesPageFirstVisitGreeting/readme.md)
-   [avatarButton](./src/features/avatarButton/readme.md)
-   [notificationButton](./src/features/notificationButton/readme.md)
-   [profileRating](./src/features/profileRating/readme.md)
-   [scrollToTopButton](./src/features/scrollToTopButton/readme.md)
-   [uiDesignSwitcher](./src/features/uiDesignSwitcher/readme.md)
-   [addCommentForm](./src/features/AddCommentForm/readme.md)
-   [articleRecommendationsList](./src/features/ArticleRecommendationsList/readme.md)
-   [authByUsername](./src/features/AuthByUsername/readme.md)
-   [editableProfileCard](./src/features/EditableProfileCard/readme.md)
-   [editArticleButton](./src/features/EditArticleButton/readme.md)
-   [languageSwitcher](./src/features/LanguageSwitcher/readme.md)
-   [saveScrollPosition](./src/features/SaveScrollPosition/readme.md)
-   [themeSwitcher](./src/features/ThemeSwitcher/readme.md)
