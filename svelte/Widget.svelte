<script>
  import { onDestroy, onMount } from "svelte"
  import { mountWidget } from "../core/mountWidget.js"

  export let agentId
  export let baseUrl
  export let scriptSrc
  export let containerId

  let widget = null
  let mounted = false

  const unmount = () => {
    if (widget) {
      widget.unmount()
      widget = null
    }
  }

  onMount(() => {
    mounted = true
  })

  $: if (mounted) {
    unmount()
    if (agentId && baseUrl && scriptSrc) {
      widget = mountWidget({ agentId, baseUrl, scriptSrc, containerId })
    }
  }

  onDestroy(() => {
    unmount()
  })
</script>
