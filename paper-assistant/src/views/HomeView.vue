<script setup>
import { useCStore } from "@/stores/CStore"
import { useChatStore } from "@/stores/ChatStore"
const { getOoxml } = useCStore();
const { sendMsg } = useChatStore();
import ChatMsg from "@/components/ChatMsg.vue"
import { ref } from "vue";
import { sendOoxml } from "@/api/document"
import { onMounted } from "vue";

//onLaunch();

// 使用onMounted钩子来替代onLaunch
onMounted(async () => {
  let documentooxml = await getCurrentDocx();
  sendOoxml({"content": documentooxml}).then(response => {
    console.log(response.data);
  });
});

/** 页面入口函数 */
async function onLaunch() {
  
  let documentooxml = await getCurrentDocx();

  sendOoxml({"content": documentooxml}).then(response => {
    console.log(response.data);
  })

}

/** 获取当前文档ooxml内容 */
async function getCurrentDocx() {
  const res = await getOoxml()
  console.log("🚀 ~ getCurrentDocx ~ res:", res)
  return res
  // return await getOoxml()

}
const inputText = ref('')
async function handleSendMsg(){
  sendMsg(inputText.value)
  inputText.value = ''
}

</script>

<template>
  <main class="h-full bg-slate-200 flex flex-col px-4">
    <section class="flex-1">
      <ChatMsg/>
    </section>
    <span class="mb-12 flex">
      <textarea v-model="inputText" class="flex-1 rounded-md  p-2 transition-opacity shadow-lg" type="text" />
      <button @click="handleSendMsg" class="rounded-lg bg-white  px-4 py-1 border ml-2  shadow-lg">send</button>
    </span>
  </main>
</template>
