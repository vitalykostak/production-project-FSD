In project used `eslint` for checking typescript code and `stylelint` from checking styles files (.scss)
Also there is implemented custom eslint rules to follow [Feature-Sliced Design](https://feature-sliced.design/) principles strictly

-   `feature-sliced-plugin-custom/path-checker` - Within one slice, all paths must be relative.
-   `feature-sliced-plugin-custom/public-api-imports-checker` - For better encapsulation impots from other slice should be only from public api
-   `feature-sliced-plugin-custom/layer-imports` - imports between layers must respect hierarchy (app <-- pages <-- widgets <-- features <-- entities <-- shared)
