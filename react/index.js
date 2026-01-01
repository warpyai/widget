import { useEffect } from "react"
import { mountWidget } from "../core/mountWidget.js"

export const Widget = ({ agentId, baseUrl, scriptSrc, containerId }) => {
  useEffect(() => {
    const widget = mountWidget({ agentId, baseUrl, scriptSrc, containerId })
    return () => widget?.unmount()
  }, [agentId, baseUrl, scriptSrc, containerId])

  return null
}
