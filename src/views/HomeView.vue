<template>
  <form @submit.prevent="getPeliculasList()">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label for="buscarPelicula" class="col-form-label">Buscar por T&iacute;tulo</label>
      </div>
      <div class="col-auto">
        <input type="search" v-model="search" @search="getPeliculasList()" class="form-control" placeholder="Ingrese Título" >
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary">
            Buscar
        </button>
      </div>
    </div>
  </form>
  <div style="height: 35px;"></div>
  <div v-if="peliculas.Response != 'False'" class="contenedor">
      <div v-for="pelicula in peliculas.Search" class="item">
        <Card v-bind="pelicula" />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'HomeView',
  data(){
    const api = process.env.VUE_APP_API;
    return {
      api,
      peliculas:[],
      search: '',
    }
  },
  methods: {
    getPeliculasList(){
      this.axios({
        method: 'get',
        url: this.api + '&s=' + this.search
      }).
      then((response)=>{
        this.peliculas = response.data;
      }).
      catch((error)=>{
        console.log(error);
      })
    },
  },
  components: {
    Card
  },
  mounted(){
    this.getPeliculasList();
  }
}
</script>
