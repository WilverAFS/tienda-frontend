<script setup>
import { ref, onMounted } from 'vue'
import productoService from '@/services/productoService'

const emit = defineEmits(['guardar'])

const productos = ref([])

const venta = ref({
  productoId: '',
  cantidad: 1,
})

async function cargarProductos() {
  const response = await productoService.listar()

  productos.value = response.data
}

function submit() {
  emit('guardar', {
    ...venta.value,
  })

  venta.value = {
    productoId: '',
    cantidad: 1,
  }
}

onMounted(() => {
  cargarProductos()
})
</script>

<template>
  <form @submit.prevent="submit">
    <select v-model="venta.productoId" required>
      <option value="">Seleccione un producto</option>

      <option v-for="producto in productos" :key="producto.id" :value="producto.id">
        {{ producto.nombre }}
        (Stock: {{ producto.stock }})
      </option>
    </select>

    <input v-model.number="venta.cantidad" type="number" min="1" required />

    <button type="submit">Registrar Venta</button>
  </form>
</template>
