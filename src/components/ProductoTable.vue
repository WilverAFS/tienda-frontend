<script setup>
defineProps({
  productos: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['editar', 'eliminar'])
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="producto in productos" :key="producto.id">
        <td>{{ producto.id }}</td>
        <td>{{ producto.nombre }}</td>
        <td>{{ producto.descripcion }}</td>
        <td>{{ producto.precio }}</td>
        <td>{{ producto.stock }}</td>

        <td>
          <button @click="$emit('editar', producto)">Editar</button>

          <button @click="$emit('eliminar', producto.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
