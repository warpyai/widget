import type { OnChanges, OnDestroy, SimpleChanges } from "@angular/core"

export type WidgetComponentInputs = {
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
}

export declare class WidgetComponent implements OnChanges, OnDestroy {
  widget: { unmount: () => void } | null
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
  ngOnChanges(changes: SimpleChanges): void
  ngOnDestroy(): void
}
