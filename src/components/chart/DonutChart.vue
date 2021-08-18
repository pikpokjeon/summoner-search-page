<template>
  <svg
    width="90"
    height="90"
    viewBox="0 0 40 40"
    class="donut"
    overflow="visible"
  >
    <circle
      class="donut-hole"
      cx="21"
      cy="21"
      r="16.91549430918954"
      fill="#ededed"
    ></circle>
    <circle
      class="donut-ring"
      cx="21"
      cy="21"
      r="16.91549430918954"
      fill="transparent"
      stroke="#1f8ecd"
      stroke-width="10"
    ></circle>
    <circle
      class="donut-segment"
      cx="21"
      cy="21"
      r="16.91549430918954"
      fill="transparent"
      stroke="#ee5a52"
      stroke-width="10"
      :stroke-dasharray="`${100 - winRate} ${winRate}`"
      :stroke-dashoffset="calcStrokeDashOffset(winRate)"
    ></circle>
    <g class="chart-text">
      <text
        x="15"
        y="23"
        class="chart-number"
        style="font-size: 6px; font-weight: 700"
      >
        {{ winRate }}%
      </text>
    </g>
  </svg>
</template>
<script>
export default {
  props: ["winRate"],
  data: () => {
    return {
      circumference: 2 * Math.PI * 60,
    };
  },
  methods: {
    calcStrokeDashOffset(dataVal) {
      const strokeDiff = dataVal * this.circumference;
      return this.circumference - strokeDiff - 10;
    },
  },
};
</script>
<style scoped>
.donut {
  margin: 7px 24px 0 24px;
}
</style>