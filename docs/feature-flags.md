### Feature Flags

FeaturesFlags are fetched from BE and implements `FeatureFlags` interface

```javascript
// Example
export interface FeatureFlags {
    isCounterEnabled: boolean
}
```

---

use `toggleFeature` function from `@/shared/lib/featureFlags` to handle feature flags

Example:

```javascript
import { toggleFeature } from '@/shared/lib/featureFlags'
const value = toggleFeature({
    featureFlag: 'isCounterEnabled',
    onEnabled: () => 'enabled',
    onDisabled: () => 'disabled',
})
```

`toggleFeature` func checks if `isCounterEnabled` is `true` or `false` and depend on it, executes `onEnabled || onDisabled` and return executed function result

if `true` `value === 'enabled'` otherwise `value === 'disabled'`

---

use `ToggleFeature` function from `@/shared/lib/featureFlags` to handle feature flags in jsx components

Example:

```javascript
import { ToggleFeature } from '@/shared/lib/featureFlags'
....

<ToggleFeature
     featureFlag="isCounterEnabled"
     onEnabled={<span>Counter Enabled</span>}
     onDisabled={<span>Counter Disabled</span>}
/>
```

---

In case you need to remove flag from app, there is implemented node script `/scripts/removeToggleFeature/removeToggleFeature.mjs`

_usage by package.json script_

`npm run remove-feature-flag -- [featureFlagName] [requiredFlagState]`

---

Example
Yo have file `Main.tsx` with content:

```javascript
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'

const Main = () => {
    const { t } = useTranslation('main')

    const x = toggleFeature({
        featureFlag: 'isCounterEnabled',
        onEnabled: () => 'Counter Enabled',
        onDisabled: () => 'Counter Disabled',
    })

    return (
        <Page data-testid="MainPage">
            {t('main_page')}
            <div>
                <ToggleFeature
                    featureFlag="isCounterEnabled"
                    onEnabled={<span>Counter Enabled</span>}
                    onDisabled={<span>Counter Disabled</span>}
                />
            </div>
        </Page>
    )
}

export default Main
```

---

after running `npm run remove-feature-flag -- isCounterEnabled disable` file's content will be

```javascript
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'

const Main = () => {
    const { t } = useTranslation('main')

    const x = 'Counter Disabled'

    return (
        <Page data-testid="MainPage">
            {t('main_page')}
            <div>
                <span>Counter Disabled</span>
            </div>
        </Page>
    )
}

export default Main
```

---

after running `npm run remove-feature-flag -- isCounterEnabled enable` file's content will be

```javascript
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'

const Main = () => {
    const { t } = useTranslation('main')

    const x = 'Counter Enabled'

    return (
        <Page data-testid="MainPage">
            {t('main_page')}
            <div>
                <span>Counter Enabled</span>
            </div>
        </Page>
    )
}

export default Main
```
