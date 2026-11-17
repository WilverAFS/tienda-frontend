<script setup>
import { ref, onMounted } from 'vue'

import ProductoForm from '@/components/ProductoForm.vue'
import ProductoTable from '@/components/ProductoTable.vue'
import AppAlert from '@/components/AppAlert.vue'

import productoService from '@/services/productoService'

const productos = ref([])
const productoSeleccionado = ref(null)

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

async function cargarProductos() {
  try {
    const response = await productoService.listar()

    productos.value = response.data
  } catch (error) {
    console.error(error)

    mostrarMensaje('No fue posible cargar los productos', 'error')
  }
}

async function guardarProducto(data) {
  try {
    if (productoSeleccionado.value) {
      await productoService.actualizar(productoSeleccionado.value.id, data)

      productoSeleccionado.value = null

      mostrarMensaje('Producto actualizado correctamente', 'success')
    } else {
      await productoService.crear(data)

      mostrarMensaje('Producto creado correctamente', 'success')
    }

    await cargarProductos()
  } catch (error) {
    console.error(error)

    const mensajeError = error.response?.data?.message ?? 'Error al guardar'

    mostrarMensaje(mensajeError, 'error')
  }
}

async function eliminarProducto(id) {
  if (!confirm('¿Eliminar producto?')) {
    return
  }

  try {
    await productoService.eliminar(id)

    await cargarProductos()

    mostrarMensaje('Producto eliminado correctamente', 'success')
  } catch (error) {
    console.error(error)

    const mensajeError = error.response?.data?.message ?? 'Error al eliminar'

    mostrarMensaje(mensajeError, 'error')
  }
}

function editarProducto(producto) {
  productoSeleccionado.value = producto
}

onMounted(() => {
  cargarProductos()
})
</script>

<template>
  <h2>Productos</h2>

  <AppAlert :mensaje="mensaje" :tipo="tipoMensaje" />

  <ProductoForm :producto="productoSeleccionado" @guardar="guardarProducto" />

  <br />

  <ProductoTable :productos="productos" @editar="editarProducto" @eliminar="eliminarProducto" />
</template>
