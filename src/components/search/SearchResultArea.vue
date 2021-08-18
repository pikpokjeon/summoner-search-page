<template>
  <section class="search-result-area">
    <div class="top-side">
      <SearchedProfile></SearchedProfile>
    </div>
    <div class="main-content">
      <div class="left-side">
        <CurrentRanks></CurrentRanks>
        <WinRateList></WinRateList>
      </div>
      <div class="right-side">
        <MatchSummary
          v-bind:info="playInfo"
          v-on:filter-match="setMatchToShow"
        ></MatchSummary>
        <MatchList v-bind:list="matchList"></MatchList>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import SearchedProfile from "./SearchedProfile.vue";
import CurrentRanks from "../infoArea/summonerInfo/CurrentRanks.vue";
import WinRateList from "../infoArea/summonerInfo/winRate/WinRateList.vue";
import MatchSummary from "../infoArea/summonerInfo/match/MatchSummary.vue";
import MatchList from "../infoArea/summonerInfo/match/MatchList.vue";
export default {
  components: {
    SearchedProfile,
    CurrentRanks,
    WinRateList,
    MatchSummary,
    MatchList,
  },
  data: () => {
    return {
      matchList: [],
    };
  },
  methods: {
    ...mapMutations(["SET_GAME_LISTS"]),

    setMatchToShow(id) {
      this.matchList =
        id !== "all"
          ? this.allMatchLists.filter((match) => match.game.gameType === id)
          : this.allMatchLists;
    },
  },
  computed: {
    ...mapState({
      allMatchLists: (state) => state.matchLists,
      playInfo: (state) => state.summoner.playSummary,
    }),
  },
  created() {
    this.matchList = this.allMatchLists;
  },
};
</script>
<style>
body {
  width: 100vw;
}
main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main-content {
  display: flex;
  width: 1000px;
}
nav {
  width: 1000px;
}
section {
  margin: auto;
}
.top-side {
  width: 1000px;
  display: flex;
}
.right-side {
  width: 690px;
}
.left-side {
  width: 300px;
}
.search-result-area {
  margin: 0 auto;
}
</style>