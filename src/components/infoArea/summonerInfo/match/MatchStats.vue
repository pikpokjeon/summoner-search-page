<template>
  <div v-if="stats" class="Summar-stats-box">
    <span class="Summar-stats"
      >{{ stats.wins + stats.losses }}전 {{ stats.wins }}승
      {{ stats.losses }}패</span
    >
    <div>
      <div class="Summar-stats-details">
        <div class="Summar-donut-graph">
          <DonutChart
            v-bind:win-rate="
              calcWinRate(stats.wins + stats.losses, stats.wins).rate
            "
          ></DonutChart>
        </div>
        <div class="kda-box">
          <div class="kda-count">
            <span>{{ stats.kills }}</span> /
            <span class="p-red">{{ stats.deaths }}</span> /
            <span>{{ stats.assists }}</span>
          </div>
          <div>
            <span class="kda-rate p-green accent">{{
              calcKDA(stats.kills, stats.assists, stats.deaths).kda
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DonutChart from "../../../chart/DonutChart.vue";
import calcData from "../../../mixin/calcData";

export default {
  components: { DonutChart },
  props: ["stats"],
  mixins: [calcData],
};
</script>
<style scoped>
.Summar-stats-box div {
  display: flex;
  align-items: center;
}
.kda-count {
  color: #999999;
}
.kda-count span {
  font-weight: 700;
  color: #333333;
}

.Summar-stats {
  margin: 14px 33px;
}
.Summar-stats-details {
  display: flex;
  text-align: center;
}
.Summar-donut-graph {
  width: 90px;
  height: 90px;
}
.kda-box {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
.kda-box div {
  width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.kda-count {
  font-size: 11px;
  height: 13px;
}
.kda-rate {
  font-size: 16px;
  margin: 0 35px;
  height: 19px;
}
</style>