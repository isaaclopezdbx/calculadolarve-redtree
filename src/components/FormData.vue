<template>
  <v-container grid-list-xs class="secondary">
    <!--  -->
    <v-form ref="form" v-if="showControl">
      <h4 class="white--text">Precio Dolar: {{ dollarPrice | currency }}</h4>
      <v-text-field v-model="dollarPrice" type="number"></v-text-field>
    </v-form>
    <!--  -->
    <v-form ref="form" v-if="showControl">
      <h4 class="white--text">
        Cantidad Disponible: {{ dollarAmount | currency }}
      </h4>
      <v-text-field v-model="dollarAmount" type="number" @keyup.enter="calculate"></v-text-field>
    </v-form>
    <!--  -->
    <v-form ref="form" v-if="!showControl">
      <h4 class="white--text">
        Introducir producto: {{ productCost | currency }}
      </h4>
      <v-text-field v-model="productCost" type="number" @keyup.enter="introProductsList"></v-text-field>
    </v-form>
    <!--  -->
    <!-- Show Data -->
    <ShowData v-if="!showControl" />
    <!-- Show Data -->
    <v-btn block class="primary" dark @click="calculate" v-if="showControl"
      >CALCULAR</v-btn
    >
    <v-btn
      block
      class="primary mt-1"
      dark
      @click="introProductsList"
      v-if="!showControl"
      >INTRODUCIR</v-btn
    >
    <v-btn block class="error mt-2" dark @click="reset" v-if="!showControl"
      >RESETEAR</v-btn
    >
  </v-container>
</template>

<script>
import Vuex from "vuex";
import { mapState, mapMutations, state, Store } from "vuex";
import ShowData from "./ShowData.vue";
export default {
  components: {
    ShowData,
  },
  data() {
    return {
      dollarPrice: null,
      dollarAmount: null,
      productCost: null,
    };
  },
  methods: {
    ...Vuex.mapMutations([
      "introBolivarStore",
      "introDollarStore",
      "ChangeShow",
      "introList",
      "ShowAction",
      "deleteList",
    ]),
    /*  */
    calculate() {
      if (this.dollarPrice != null && this.dollarAmount != null) {
        let oneValue = parseFloat(this.dollarPrice);
        let towValue = parseFloat(this.dollarAmount);
        let result = oneValue * towValue;
        this.ChangeShow();
        this.introBolivarStore(result);
        this.introDollarStore(towValue);
      }
    },
    /*  */
    reset() {
      this.ChangeShow();
      this.introBolivarStore(null);
      this.introDollarStore(null);
      this.dollarPrice = null;
      this.dollarAmount = null;
      this.deleteList();
    },
    /*  */
    introProductsList() {
      let CostProductBS = parseFloat(this.productCost);
      let CostProductDL = parseFloat(this.productCost);

      if (CostProductBS > 0 && CostProductBS < this.bolivarsAvailable + 1) {
        let dolaPrice = parseFloat(this.dollarPrice);
        let resultOfDiv = CostProductDL / dolaPrice;
        let costProducts = {
          BS: CostProductBS,
          DL: resultOfDiv,
        };
        this.introList(costProducts);
        this.ShowAction();
        this.productCost = null;
      }
    },
  },
  computed: {
    ...mapState(["showControl", "dollarAvailable", "bolivarsAvailable"]),
  },
};
</script>
