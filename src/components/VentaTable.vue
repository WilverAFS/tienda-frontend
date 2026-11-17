<script setup>
defineProps({
  ventas: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>Total</th>
        <th>Fecha</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="venta in ventas" :key="venta.id">
        <td>{{ venta.id }}</td>

        <td>{{ venta.producto }}</td>

        <td>{{ venta.cantidad }}</td>

        <td>{{ venta.precioUnitario }}</td>

        <td>{{ venta.total }}</td>

        <td>{{ venta.fechaVenta }}</td>
      </tr>
    </tbody>
  </table>
</template>
