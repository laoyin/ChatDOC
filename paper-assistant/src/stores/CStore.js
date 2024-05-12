import { defineStore } from 'pinia'

let cStore = window?.chrome?.webview?.hostObjects?.sync?.cStore

const setCStore = () => {
  if (!cStore) cStore = window?.chrome?.webview?.hostObjects?.sync?.cStore
  if (!cStore) {
    console.warn("window?.chrome?.webview?.hostObjects?.sync?.cStore", window?.chrome?.webview?.hostObjects?.sync?.cStore)
    return
  }
}
// c# 类提供的方法 变量store
export const useCStore = defineStore('CStore', () => {
  setCStore();
  function getOoxml() {
    return cStore.getOoxml();
  }

  return { getOoxml }
})
