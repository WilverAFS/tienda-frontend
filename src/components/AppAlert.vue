<script setup>
defineProps({
  mensaje: {
    type: String,
    default: '',
  },

  tipo: {
    type: String,
    default: 'success',
  },
})
</script>

<template>
  <div v-if="mensaje" :class="['alerta', tipo === 'success' ? 'alerta-success' : 'alerta-error']">
    {{ mensaje }}
  </div>
</template>

<style scoped>
.alerta {
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  font-weight: 600;
}

.alerta-success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.alerta-error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}
</style>
