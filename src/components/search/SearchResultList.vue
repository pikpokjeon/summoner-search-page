<template>
  <section>
    <div>
      <ul class="tier-badges">
        <li v-for="(tier, i) in search" :key="tier + i">
          <span>{{ tier }}</span>
        </li>
      </ul>
    </div>
    <div class="player-info">
      <div class="img-container">img</div>
      <div>
        <h3>playerid</h3>
        <div>레더랭킹<span>123123</span>위</div>
      </div>
    </div>
  </section>
</template>
<script>
import {  mapState } from "vuex";
export default {
  computed: {
    ...mapState(["search"]),
    tierBadges() {
      return new Array(6).fill("s# Bronxe");
    },
  },
};
</script>
<style scoped>
section {
  width: 31vw;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.tier-badges,
.player-info {
  margin-block-start: 0;
  padding-inline-start: 0;
  list-style: none;
  width: 30vw;
  display: flex;
}
.tier-badges li {
  float: left;
  width: 5vw;
  white-space: nowrap;
  font-size: 0.7vh;
  font-size: 0.7vw;
}
.img-container {
  background: yellow;
  width: 40%;
}
</style>