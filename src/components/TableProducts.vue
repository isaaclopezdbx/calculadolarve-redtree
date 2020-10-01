<template>
  <div>
    <div>
      <v-container v-if="showControl">
        <h4 class="white--text">Tabla de productos</h4>
      </v-container>
      <v-container>
        <v-card
          color="primary mb-2"
          dark
          v-for="(item, index) in productList"
          :key="index"
          @click="deleteProductOnList(index), ShowAction()"
        >
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="2" >
                <h4>{{ `${index + 1}` }}</h4>
              </v-col>
              <v-col cols="4">
                <h4>{{ `$. ${item.DL.toFixed(2)}` }}</h4>
              </v-col>
              <v-col cols="6">
                <h4>Bs.{{ item.BS | currency }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...Vuex.mapState(["productList", "showControl"]),
  },
  methods: {
    ...Vuex.mapMutations(["deleteProductOnList", "ShowAction"]),
  },
};
</script>
