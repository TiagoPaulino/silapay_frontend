<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    error: String,
    id: String,
    type: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})
const imputClasses = computed(() => {
    const base = "w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 transition";
    const states = props.disabled ? "bg-gray-200 cursor-not-allowed" : "focus:ring-blue-500";
    const errorState = props.error ? "border-red-500 focus:ring-red-500" : "border-gray-300";
    const iconPadding = props.icon ? "pl-10" : ""; // Ajusta padding se houver ícone

    return `${base} ${states} ${errorState} ${iconPadding}`;
})
</script>

<template>
    <div class="flex flex-col">
    <label v-if="label" :for="id" class="mb-1 text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative">
      <span v-if="icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <slot name="icon" />
      </span>
      <input
        :id="id"
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="imputClasses"
      />
    </div>
    <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>

</template>