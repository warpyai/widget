import type { DefineComponent } from "vue"

declare const Widget: DefineComponent<{
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
}>

export { Widget }
export default Widget
