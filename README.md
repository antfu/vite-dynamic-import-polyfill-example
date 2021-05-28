[DEPRECATED] See https://github.com/vitejs/vite/pull/3434

---

# vite-dynamic-import-polyfill-example

This is an example repo demosturates the configurations of [GoogleChromeLabs/dynamic-import-polyfill](https://github.com/GoogleChromeLabs/dynamic-import-polyfill) with [Vite v2.3.x](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#230-2021-05-11)

## Procedures

You can follow this setup to install it manually in your project:

Install [dynamic-import-polyfill](https://github.com/GoogleChromeLabs/dynamic-import-polyfill)

```bash
$ npm install dynamic-import-polyfill
```

Or

```bash
$ yarn add dynamic-import-polyfill
```

Then, add the following code in your main entry, before using any dynamic imports usage:

```js
// main.js
import dynamicImportPolyfill from 'dynamic-import-polyfill'

// This needs to be done before any dynamic imports are used.
dynamicImportPolyfill.initialize()
```

Add a plugin in your `vite.config.js` telling rollup to transform your dynamic imports.

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'dynamic-import-polyfill',
      renderDynamicImport() {
        return {
          left: '__import__(',
          right: ', import.meta.url)'
        }
      }
    }
  ]
})
```

And that's all. Run `vite build` and verify if the dynamic imports are properly polyfilled.
