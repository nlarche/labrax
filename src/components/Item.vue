<template>
  <router-link :to="{ name: 'Detail', params: { id: item.id } }" >
    <div class="item card" >
      <div class="card-image">
        <figure class="image ">
          <img v-bind:src="'./static/species/' + item.id + '.jpg'" v-bind:alt="item.name" >
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
         <div class="media-content">
            <p class="title is-4">{{item.name}}</p>
            <p class="subtitle is-6"><em>{{item.sp}}</em></p>
          <div class="content">
            <div>Maille: {{item.size}} cm.</div>
          </div>
          </div>
        </div>
      </div>
      </div>
  </router-link>
</template>

<script>
export default {
  name: 'item',
  props: ['item'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
