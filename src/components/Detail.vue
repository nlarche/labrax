<template>
  <div class="item card" v-click-outside="hide">
    <div class="card-image">
      <figure class="image ">
        <img v-bind:src="'./static/species/' + item.id + '.jpg'" v-bind:alt="item.name" >
      </figure>
    </div>
     <div class="card-content">
    <div>{{item.name}}</div>
    <div>{{item.sp}}</div>
    <div>{{item.size}}</div>
     </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import getList from '@/service/species';
import { getRegion } from '@/service/region';

export default {
  name: 'detail',
  props: ['id'],
  data() {
    return {
      item: {},
    };
  },
  methods: {
    hide() {
      this.$router.push({ name: 'List' });
    },
  },
  async created() {
    const list = await getList(getRegion());
    this.item = list.filter(n => n.id === this.$route.params.id)[0];
  },
  mounted() {
    document.addEventListener('keyup', this.hide);
  },
  directives: {
    ClickOutside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
