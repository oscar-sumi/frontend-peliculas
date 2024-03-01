<template>
    <div class="card">
        <h5 class="card-title">{{ pelicula.Title }}</h5>
        <img :src="pelicula.Poster" class="card-img-top" :alt="pelicula.Title">
        <div class="card-body">
        <a href="#" class="btn btn-primary">Ver m&aacute;s</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    pelicula: Object
  }
}
</script>