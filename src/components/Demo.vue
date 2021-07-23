<template>
  <div>
  <div id="map" class="map"></div>
  <form class="form-inline">
    <label for="type">Geometry type &nbsp;</label>
    <select id="type">
      <option value="Point">Point</option>
      <option value="LineString">LineString</option>
      <option value="Polygon">Polygon</option>
      <option value="Circle">Circle</option>
    </select>
  </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      name: '111'
    }
  },
  created() {

  },
  methods : {


  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height:400px;
}
</style>
