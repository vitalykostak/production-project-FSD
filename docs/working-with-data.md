### Data Management with Redux Toolkit

Our data management is facilitated by the Redux Toolkit. To optimize efficiency, we aim to normalize reused entities through the use of the [EntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)

Requests are handled by [axios](/src/shared/api/api.ts) and [rtk query](/src/shared/api/rtkApi.ts)

-   [axios example](/src/pages/ArticleDetailsPage/model/services/sendComment/sendComment.ts)
-   [rtk example](/src/features/articleRating/api/articleRatingApi/articleRatingApi.ts)

For asynchronous reducer addition, the project utilizes the [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx). This dynamic loading mechanism ensures flexibility and efficiency in handling async reducers.
