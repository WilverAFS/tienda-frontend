import api from './api'

export default {
  listar() {
    return api.get('/ventas')
  },

  obtener(id) {
    return api.get(`/ventas/${id}`)
  },

  crear(venta) {
    return api.post('/ventas', venta)
  },
}
