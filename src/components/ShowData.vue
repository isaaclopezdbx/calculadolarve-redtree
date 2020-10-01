<template>
  <div>
    <v-row dense>
      <v-col cols="6">
        <v-card :class="{'primary': ShowColorControl, 'error': !ShowColorControl}" dark>
            <h4 class="pa-2">$ {{ dollarAvailable.toFixed(2) }}</h4>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card :class="{'primary': ShowColorControl, 'error': !ShowColorControl}" dark>
            <h4 class="pa-2">Bs {{ bolivarsAvailable | currency}}</h4>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vuex from "vuex";
import { mapState, mapMutations, } from "vuex";
export default {
  computed: {
    ...mapState(["bolivarsAvailable", "dollarAvailable", "showControl", "ShowColorControl"]),
  },
};
</script>
<style scoped>
.v-card__title{
  padding: 8px;
}
</style>