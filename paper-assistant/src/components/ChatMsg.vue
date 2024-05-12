<script setup>
import { useChatStore } from "@/stores/ChatStore"
const { messages } = useChatStore()
function getMsgAlign(msg) {
  const isUser = msg.role === 1
  return isUser ? 'right' : 'left'
}
</script>
<template>
  <div v-for="msg in messages" class="bg-white rounded-lg mt-2 py-2 px-4 w-fit -white shadow-md transition-transform duration-500 transform translate-y-full" :class="[getMsgAlign(msg)]">
    {{ msg.content }}
  </div>
</template>

<style scoped>
.left {
  @apply text-left
}
.right {
  @apply text-right ml-auto
}
</style>
