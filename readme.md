### Store

### Dynamic module import

### Testing

-   Unit

-   Screenshot testing

-   e2e testing

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

`toggleFeature` func checks if `isCounterEnabled` is `true` or `false` and depend on it executes `onEnabled || onDisabled` and return executed function result

if `true` `value === 'enabled'` otherwise `value === 'disabled'`

---

In case you need to remove flag from app, there is implemented node script `/scripts/removeToggleFeature/removeToggleFeature.mjs`

` node ./scripts/removeToggleFeature/removeToggleFeature.mjs [featureFlagName] [requiredFlagState]`

---

Example
Yo have file `example.ts` with content:

```javascript
import { toggleFeature } from '@/shared/lib/featureFlags'
const value = toggleFeature({
    featureFlag: 'isCounterEnabled',
    onEnabled: () => 'enabled',
    onDisabled: () => 'disabled',
})
```

---

after running `node ./scripts/removeToggleFeature/removeToggleFeature.mjs isCounterEnabled disable` file's content will be

```javascript
import { toggleFeature } from '@/shared/lib/featureFlags'
const value = 'disabled'
```

---

after running `node ./scripts/removeToggleFeature/removeToggleFeature.mjs isCounterEnabled enable` file's content will be

```javascript
import { toggleFeature } from '@/shared/lib/featureFlags'
const value = 'enabled'
```
