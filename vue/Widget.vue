<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from "vue"
import { mountWidget, type MountedWidget } from "../core/mountWidget"

const props = defineProps<{
  agentId: string
  baseUrl: string
  scriptSrc: string
  containerId?: string
}>()

let widget: MountedWidget | null = null

const mount = () => {
  widget?.unmount()
  widget = mountWidget({
    agentId: props.agentId,
    baseUrl: props.baseUrl,
    scriptSrc: props.scriptSrc,
    containerId: props.containerId
  })
}

onMounted(mount)

watch(
  () => [props.agentId, props.baseUrl, props.scriptSrc, props.containerId],
  () => mount()
)

onBeforeUnmount(() => {
  widget?.unmount()
  widget = null
})
</script>
