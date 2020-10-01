<template>
<div>
  <TableProducts v-if="!showControl" />
  <FormData/>
</div>
</template>

<script>
import { mapState, mapMutations, } from "vuex";
import FormData from "./FormData.vue"
import TableProducts from "./TableProducts.vue"

export default {
  components:{
    FormData,
    TableProducts,
    
  },
  computed: {
    ...mapState(["showControl"]),
  },

}
</script>

