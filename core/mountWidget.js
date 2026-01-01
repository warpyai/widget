export const mountWidget = ({ agentId, baseUrl, scriptSrc, containerId } = {}) => {
  if (typeof document === "undefined") {
    return { unmount: () => {} }
  }
  if (!agentId || !baseUrl || !scriptSrc) {
    return { unmount: () => {} }
  }

  const existing = containerId
    ? document.getElementById(containerId)
    : document.querySelector('[data-warpy-widget-root="true"]')
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing)
  }

  const container = document.createElement("div")
  container.setAttribute("data-warpy-widget-root", "true")
  if (containerId) {
    container.id = containerId
  }
  document.body.appendChild(container)

  const script = document.createElement("script")
  script.setAttribute("data-warpy-widget-script", "true")
  script.async = true
  script.src = scriptSrc
  script.dataset.agentId = agentId
  script.dataset.baseUrl = baseUrl
  container.appendChild(script)

  return {
    unmount: () => {
      container.remove()
    }
  }
}
