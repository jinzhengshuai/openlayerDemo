<template>
  <div>
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
  </div>
</template>

<script>


import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";

export default {
  data() {
    return {
      name: '111'
    }
  },
  created() {
    this.init();
  },
  methods : {
    init(){
      const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: 'map',
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
a.skiplink {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
a.skiplink:focus {
  clip: auto;
  height: auto;
  width: auto;
  background-color: #fff;
  padding: 0.3em;
}
#map:focus {
  outline: #4A74A8 solid 0.15em;
}
</style>
