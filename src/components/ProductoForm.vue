<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  producto: Object,
})

const emit = defineEmits(['guardar'])

const form = reactive({
  nombre: '',
  descripcion: '',
  precio: 0,
  stock: 0,
})

watch(
  () => props.producto,
  (nuevo) => {
    if (!nuevo) return

    form.nombre = nuevo.nombre
    form.descripcion = nuevo.descripcion
    form.precio = nuevo.precio
    form.stock = nuevo.stock
  },
  { immediate: true },
)

function submit() {
  emit('guardar', { ...form })

  form.nombre = ''
  form.descripcion = ''
  form.precio = 0
  form.stock = 0
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="form.nombre" placeholder="Nombre" required />

    <input v-model="form.descripcion" placeholder="Descripción" />

    <input v-model.number="form.precio" type="number" step="0.01" placeholder="Precio" required />

    <input v-model.number="form.stock" type="number" placeholder="Stock" required />

    <button type="submit">Guardar</button>
  </form>
</template>
