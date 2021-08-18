<template>
  <div class="position-info">
    <div class="camp-img-box">
      <img
        class="position-img"
        :src="
          require(`../../../../assets/img/icon-mostposition-${position.id}.png`)
        "
      />
    </div>
    <div>
      <div class="position-name">{{ position.name }}</div>
      <strong class="position-play-rate p-blue">{{ position.posRate }}%</strong>
      <span>Win Rate</span>
      <strong class="position-win-rate">53%</strong>
    </div>
  </div>
</template>
<script>
import calcData from "../../../mixin/calcData";
export default {
  props: ["pos"],
  computed: {
    position() {
      const allGames = this.pos.stats.wins + this.pos.stats.losses;
      const winRate = this.calcWinRate(this.pos.pos.games, this.pos.pos.wins);
      const posRate = Math.floor((this.pos.pos.games * 100) / allGames);
      return {
        allGames,
        winRate,
        posRate,
        name: this.pos.pos.positionName,
        id: this.pos.pos.position.toLowerCase(),
      };
    },
  },
  mixins: [calcData],
};
</script>
<style scoped>
.position-info {
  display: flex;
  margin-bottom: 12px;
}
.position-img {
  margin: 8px;
}
.position-name {
  width: 13px;
  height: 16px;
  font-size: 14px;
  color: #333;
}
.position-play-rate {
  width: 23px;
  height: 13px;
  font-size: 11px;
  margin: 3px 6px 0 0;
}
.position-win-rate {
  color: #333333;
  font-size: 11px;
}
</style>