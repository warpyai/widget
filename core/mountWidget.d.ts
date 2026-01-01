export type MountWidgetOptions = {
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
}

export type MountedWidget = {
  unmount: () => void
}

export declare const mountWidget: (options: MountWidgetOptions) => MountedWidget
