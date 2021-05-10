import './style.css'

import dynamicImportPolyfill from 'dynamic-import-polyfill'
// This needs to be done before any dynamic imports are used.
dynamicImportPolyfill.initialize()

async function mount() {
  const { name } = await import('./name.js')
  document.querySelector('#app').innerHTML = `
    <h1>Hello ${name}!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `
}

mount()
