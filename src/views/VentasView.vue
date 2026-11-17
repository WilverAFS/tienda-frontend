<script setup>
import { ref, onMounted } from 'vue'

import AppAlert from '@/components/AppAlert.vue'
import VentaForm from '@/components/VentaForm.vue'
import VentaTable from '@/components/VentaTable.vue'

import ventaService from '@/services/ventaService'

const ventas = ref([])

const mensaje = ref('')
const tipoMensaje = ref('')

function mostrarMensaje(texto, tipo) {
  mensaje.value = texto
  tipoMensaje.value = tipo

  setTimeout(() => {
    mensaje.value = ''
    tipoMensaje.value = ''
  }, 3000)
}

async function cargarVentas() {
  try {
    const response = await ventaService.listar()

    ventas.value = response.data
  } catch (error) {
    console.error(error)

    mostrarMensaje('No fue posible cargar las ventas', 'error')
  }
}

async function registrarVenta(data) {
  try {
    await ventaService.crear(data)

    await cargarVentas()

    mostrarMensaje('Venta registrada correctamente', 'success')
  } catch (error) {
    console.error(error)

    const mensajeError = error.response?.data?.message ?? 'Error al registrar la venta'

    mostrarMensaje(mensajeError, 'error')
  }
}

onMounted(() => {
  cargarVentas()
})
</script>

<template>
  <h2>Ventas</h2>

  <AppAlert :mensaje="mensaje" :tipo="tipoMensaje" />

  <VentaForm @guardar="registrarVenta" />

  <br />

  <VentaTable :ventas="ventas" />
</template>
