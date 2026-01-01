import { SvelteComponent } from "svelte"

declare class Widget extends SvelteComponent<{
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
}> {}

export { Widget }
export default Widget
