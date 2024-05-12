import { defineStore } from 'pinia'
import { ref } from "vue"

// 消息发送的角色
const ROLE = {
  // 系统
  SYSTEM: 0,
  // 用户
  USER: 1
}
// 消息类型
const MSG_TYPE = {
  // 文字
  TEXT: 0
}
/** chat record */
export const useChatStore = defineStore('ChatStore', () => {
  const messages = ref([
    // role 0 system 1 user
    { role: ROLE.SYSTEM, content: "hello, how can i assist you today", type: MSG_TYPE.TEXT },
    { role: ROLE.USER, content: "解析这篇论文的内容，并给大致的总结", type: MSG_TYPE.TEXT },
  ])

  function sendMsg(content) {
    messages.value.push({ role: ROLE.USER, content, type: MSG_TYPE.TEXT },
    )
  }

  return { messages, sendMsg, ENUM: { ROLE, MSG_TYPE } }
})
