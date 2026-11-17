<template>
  <div class="container">
    <h1>Sistema de Tienda</h1>

    <nav>
      <RouterLink to="/productos"> Productos </RouterLink>

      |

      <RouterLink to="/ventas"> Ventas </RouterLink>
    </nav>

    <hr />

    <RouterView />
  </div>
</template>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

nav {
  margin-bottom: 20px;
}

a {
  margin-right: 10px;
  text-decoration: none;
}
</style>
