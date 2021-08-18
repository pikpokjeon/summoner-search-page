<template>
  <svg
    width="125"
    height="25"
    viewBox="0 0 90 30"
    class="bar"
    overflow="visible"
  >
    <g class="bar-group">
      <rect
        class="win-bar"
        x="0"
        y="4"
        :width="widthFomular(gamePlayRates.win)"
        height="24"
        fill="#1f8ecd"
      />
      <rect
        class="loss-bar"
        :x="widthFomular(gamePlayRates.win)"
        y="4"
        :width="widthFomular(gamePlayRates.loss)"
        height="24"
        fill="#ee5a52"
      />
    </g>
  </svg>
</template>
<script>
import calcData from "../mixin/calcData";
export default {
  props: ["stats"],
  data: () => {
    return {
      totalBarWidth: 145,
    };
  },
  computed: {
    gamePlayRates() {
      const winRate = this.calcWinRate(
        this.stats.wins + this.stats.losses,
        this.stats.wins
      ).rate;
      return {
        win: winRate,
        loss: 100 - winRate,
      };
    },
    widthFomular() {
      return rate => (this.totalBarWidth * rate) / 100;
    },
  },
  mixins: [calcData],
};
</script>
<style scoped>
.bar{
      margin-left: -10px;
}
</style>