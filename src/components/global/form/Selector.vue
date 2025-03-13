<template>
    <div class="flex flex-col">
      <label v-if="label" :for="id" class="mb-1 text-sm font-medium text-gray-700">{{ label }}</label>
      <select
        :id="id"
        v-model="model"
        :disabled="disabled"
        :class="selectClasses"
      >
        <option value="" disabled selected hidden>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    modelValue: [String, Number], // Permite valores string ou numéricos
    label: String,
    placeholder: {
      type: String,
      default: 'Selecione uma opção',
    },
    options: {
      type: Array,
      required: true, // O select precisa receber opções
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: String,
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
  
  const selectClasses = computed(() => {
    const base = "w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 transition";
    const states = props.disabled ? "bg-gray-200 cursor-not-allowed" : "focus:ring-blue-500";
    const errorState = props.error ? "border-red-500 focus:ring-red-500" : "border-gray-300";
  
    return `${base} ${states} ${errorState}`;
  });
  </script>
  