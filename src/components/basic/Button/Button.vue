<template>
  <button :class="clsStr"><slot /></button>
</template>

<script lang="ts" setup>
import { color2Class, size2Class, mapper } from "@/utils/style-tools";
import { computed, reactive, ref } from "vue";
interface ButtonProps {
  type?: "primary" | "warning" | "error" | "plain" | "text" | "outline";
  dark?: boolean;
  size?: "large" | "regular" | "small" | "tiny";
  fill?: boolean;
  width?: number | string;
  color?: string;
  shape: "circle" | "square" | "rounded";
}

const props = defineProps<ButtonProps>();

const config = reactive({
  type: props.type || "primary",
  dark: props.dark || false,
  width: props.width || "",
  fill: props.fill || false,
  size: props.size || "regular",
  color: props.color || "",
  shape: props.shape || "circle",
});

const clsStr = computed(() =>
  [
    "a-button ",
    `${config.width ? "w" + size2Class(config.width) : ""}`, // get width class and set min-width
    `${config.fill ? "w-full " : ""}`, // fill
    `${config.type}`,
    `${config.color === "" ? "" : "bg-" + color2Class(config.color)}`,
    `${config.size}`,
    `${config.shape}`,
  ].join(" ")
); // color
// return `w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10`;
// 'bg-primary-800'
</script>

<style lang="postcss" scoped>
.primary {
  @apply bg-primary-500 text-slate-50;
}
.warning {
  @apply bg-warning-500;
}
.error {
  @apply bg-error-500;
}
.success {
  @apply bg-success-500;
}
.a-button {
  @apply border text-base font-semibold rounded-lg text-center border-transparent shadow-md;
}
.large {
  @apply px-8 py-2 text-lg;
}
.regular {
  @apply px-6 py-1 text-base;
}
.small {
  @apply px-4 py-1 text-sm;
}
.tiny {
  @apply px-2 py-1 text-xs;
}
.rounded {
  @apply rounded-lg;
}
.circle {
  @apply rounded-full;
}
.square {
  @apply rounded-none;
}
.outline {
  @apply border-4 border-primary-500;
}
</style>
