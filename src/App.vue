<script setup lang="ts">
import { vMaska } from 'maska'
import { importedOptions } from './masks'

const localOptions = {
  preProcess: (val: string) => val.replace(/[$,]/g, ""),
  postProcess: (val: string) => {
    if (!val) return "";

    const sub = 3 - (val.includes(".") ? val.length - val.indexOf(".") : 0);

    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    })
      .format(val as any)
      .slice(0, sub ? -sub : undefined);
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <main>
    <input
      v-maska:[importedOptions]
      data-maska="0.99"
      data-maska-tokens="0:\d:multiple|9:\d:optional"
      placeholder="importedOptions"
    />

    <input
      v-maska:[localOptions]
      data-maska="0.99"
      data-maska-tokens="0:\d:multiple|9:\d:optional"
      placeholder="localOptions"
    />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

main {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
