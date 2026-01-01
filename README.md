# `@warpy-ai/widget`

Tiny, framework-agnostic loader for the Warpy embeddable widget.

This package **does not bundle the widget UI**. It simply injects the Warpy widget `<script>` (`widget.js`) and passes configuration via `data-*` attributes.

## Install

```bash
npm i @warpy-ai/widget
# or
pnpm add @warpy-ai/widget
# or
yarn add @warpy-ai/widget
```

## Quick start (vanilla)

```ts
import { mountWidget } from "@warpy-ai/widget"

const widget = mountWidget({
  agentId: "YOUR_AGENT_UUID",
  baseUrl: "https://YOUR_DASHBOARD_BASE_URL/",
  scriptSrc: "https://cdn.warpy.ai/widget.js"
})

// later
widget.unmount()
```

## React

```tsx
import { Widget } from "@warpy-ai/widget/react"

export function App() {
  return (
    <Widget
      agentId="YOUR_AGENT_UUID"
      baseUrl="https://YOUR_DASHBOARD_BASE_URL/"
      scriptSrc="https://cdn.warpy.ai/widget.js"
    />
  )
}
```

## Vue

```vue
<script setup lang="ts">
import { Widget } from "@warpy-ai/widget/vue"
</script>

<template>
  <Widget
    agentId="YOUR_AGENT_UUID"
    baseUrl="https://YOUR_DASHBOARD_BASE_URL/"
    scriptSrc="https://cdn.warpy.ai/widget.js"
  />
</template>
```

## Svelte

```svelte
<script>
  import Widget from "@warpy-ai/widget/svelte"
</script>

<Widget
  agentId="YOUR_AGENT_UUID"
  baseUrl="https://YOUR_DASHBOARD_BASE_URL/"
  scriptSrc="https://cdn.warpy.ai/widget.js"
/>
```

## Script tag (no package)

```html
<script
  src="https://cdn.warpy.ai/widget.js"
  data-agent-id="YOUR_AGENT_UUID"
  data-base-url="https://YOUR_DASHBOARD_BASE_URL/"
></script>
```

## API

### `mountWidget(options)`

`options`:

- `agentId` (required): Warpy agent UUID
- `baseUrl` (required): your dashboard base URL (used by the widget for tool calls)
- `scriptSrc` (required): URL to `widget.js` (e.g. `https://cdn.warpy.ai/widget.js`)
- `containerId` (optional): DOM id for the injected widget container

Returns:

- `{ unmount() }`: removes the injected container + script

## License

MIT
