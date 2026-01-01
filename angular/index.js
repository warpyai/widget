import { Component, Input } from "@angular/core"
import { mountWidget } from "../core/mountWidget.js"

export class WidgetComponent {
  widget = null
  agentId
  baseUrl
  scriptSrc
  containerId

  ngOnChanges(_changes) {
    if (this.widget) {
      this.widget.unmount()
      this.widget = null
    }
    if (!this.agentId || !this.baseUrl || !this.scriptSrc) {
      return
    }
    this.widget = mountWidget({
      agentId: this.agentId,
      baseUrl: this.baseUrl,
      scriptSrc: this.scriptSrc,
      containerId: this.containerId
    })
  }

  ngOnDestroy() {
    if (this.widget) {
      this.widget.unmount()
      this.widget = null
    }
  }
}

Component({ selector: "warpy-widget", template: "" })(WidgetComponent)
Input()(WidgetComponent.prototype, "agentId")
Input()(WidgetComponent.prototype, "baseUrl")
Input()(WidgetComponent.prototype, "scriptSrc")
Input()(WidgetComponent.prototype, "containerId")
