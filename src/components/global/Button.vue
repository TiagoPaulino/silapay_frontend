<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps({
        type:{
            type: String,
            default:"primary",
            validator: (value:string) => ['primary', 'secondary', 'danger', 'outline'].includes(value)
        }, 
        size:{
            type: String,
            default:"md",
            validator: (value:string) => ['sm', 'md'].includes(value)
        }, 
        disabled:{
            type: Boolean,
            default: false
        }
    })

    const buttonClasses = computed(() => {
        const base = "rounded font-semibold transition flex items-center justify-center"

        const variants:{[key:string]:string} = {
            primary: "bg-blue-500 hover:bg-blue-600 text-white",
            secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
            danger: "bg-red-500 hover:bg-red-600 text-white",
            outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        }

        const sizes:{[key:string]:string} = {
            sm: "px-2 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        }

        return `${base} ${variants[props.type]} ${sizes[props.size]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
    })
</script>
<template>
    <button :disabled="disabled" :class="buttonClasses">
        <slot></slot>
    </button>
</template>

<style scoped></style>
