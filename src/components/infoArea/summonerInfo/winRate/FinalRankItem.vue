<template>
  <div class="champ-container">
    <div class="champ-img-box">
      <img class="champ-img circle" :src="info.imageUrl" />
    </div>
    <div class="stats-box">
      <span class="accent truncate champ-name">{{ info.name }}</span>
      <span
        :class="[
          'accent',
          calcWinRate(info.wins + info.losses, info.wins).color,
        ]"
        >{{ calcWinRate(info.wins + info.losses, info.wins).rate }}%</span
      >
      <horizontalBarChart v-bind:stats="info"></horizontalBarChart>
      <div class="win-loss-counts-box">
        <span>{{ info.wins }}승</span>
        <span v-if="info.losses">{{ info.losses }}패</span>
      </div>
    </div>
  </div>
</template>
<script>
import calcData from "../../../mixin/calcData";
import horizontalBarChart from "../../../chart/HorizontalBarChart.vue";
export default {
  components: { horizontalBarChart },
  props: ["info"],
  mixins: [calcData],
};
</script>
<style scoped>
.champ-container {
  display: flex;
  border-bottom: 1px solid #cdd2d2;
  padding: 4px 16px 3px 0px;
}
.champ-img-box {
  width: 60px;
}
.champ-img {
  width: 32px;
  height: 32px;
  margin: 4px 10px 0px 15px;
}
.accent {
  color: #5e5e5e;
  font-size: 13px;
  font-weight: 700;
}
.champ-name {
  display: inline-block;
  width: 70px;
}
.stats-box {
  display: flex;
  align-items: center;
}
.win-loss-counts-box {
  display: flex;
  position: absolute;
  margin: 2px 0 0 116px;
  width: 109px;
  justify-content: space-between;
}
.win-loss-counts-box {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}
</style>