<template>
  <section v-if="tierRanks">
    <div v-for="tierRank of calcTierRanks(tierRanks)" :key="tierRank.name">
      <div v-if="true" class="league-box">
        <div class="img-box">
          <img :src="tierRank.imageUrl" />
        </div>
        <aside class="league-info">
          <ul class="league-items">
            <li class="name">
              <span>{{ tierRank.name }}</span>
            </li>
            <li class="total">
              <strong>탑</strong>(총 <span>{{ tierRank.playCounts.total }}</span
              >게임)
            </li>
            <li class="tier p-blue">
              {{ tierRank.tierDivision }}{{ tierRank.division }}
            </li>
            <li class="lp">
              <strong>{{ tierRank.lp }}LP</strong
              ><span>{{ tierRank.playCounts.wins }}승</span>/<span
                >{{ tierRank.playCounts.losses }}패</span
              >
            </li>
            <li>
              <span :class="tierRank.winRate.color"
                >승률{{ tierRank.winRate.rate }}%</span
              >
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import calcData from "../../mixin/calcData";
export default {
  computed: {
    ...mapState({
      tierRanks: (state) => state.summoner.profile.leagues,
    }),
    calcTierRanks() {
      return (leagues) => {
        return leagues.map((league) => {
          const tName = league?.tierRank?.name;
          const totalGames = league.wins + league.losses;
          const tierRankDetails = league.tierRank;
          return {
            name: tName,
            playCounts: {
              total: totalGames,
              wins: league.wins,
              losses: league.losses,
            },
            winRate: {
              rate: this.calcWinRate(totalGames, league.wins).rate,
              color: this.calcWinRate(totalGames, league.wins).color,
            },
            hasResults: league.hasResults,
            ...tierRankDetails,
          };
        });
      };
    },
  },
  mixins: [calcData],
};
</script>
<style scoped>
section {
  width: 300px;
}
.league-box {
  height: 124px;
  padding: 10px 0px 10px 0px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
}
.img-box img {
  width: 104px;
  height: 104px;
  margin: 10px 8px;
}
.league-items {
  display: flex;
  flex-direction: column;
  height: 104px;
  margin-block-start: 0;
  padding-inline-start: 0;
  list-style: none;
}
.league-items li {
  height: 2.5vh;
}
p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.name {
  color: #879292;
}
.total {
  font-size: 12px;
  color: #353a3a;
}
.tier {
  font-size: 15px;
  font-weight: 700;
}
.lp {
  font-size: 12px;
}
.lp strong {
  color: #555e5e;
}
.lp span {
  color: #879292;
}
</style>