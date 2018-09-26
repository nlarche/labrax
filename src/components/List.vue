<template>
  <div class="list">
    <div class="columns is-multiline section">
        <item class="column is-one-quarter" v-for="item in list" v-bind:key="item.id" v-bind:item="item"></item>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item';
import getList from '@/service/species';
import { getRegion } from '@/service/region';

export default {
  name: 'list',
  components: {
    Item,
  },
  data() {
    return {
      list: [],
    };
  },
  async created() {
    this.list = await getList(getRegion());
  },
  async updated() {
    this.list = await getList(getRegion());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
