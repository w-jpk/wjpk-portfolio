<template>
  <div class="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
    <div class="flex-shrink-0 text-5xl text-green-500 drop-shadow-md">
      <font-awesome-icon :icon="icon" />
    </div>
    <div>
      <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ title }}</h3>
      <p class="text-sm text-primary-600 font-semibold mb-2">{{ years }}</p>
      <p class="text-base text-gray-600 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: [Array, String], required: true },
    title: { type: String, required: true },
    years: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>
