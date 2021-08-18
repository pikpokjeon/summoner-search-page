<template>
  <section>
    <ul class="tab-list">
      <li
        v-for="tab in tabInfo.items"
        :key="tab.id"
        :class="[tabInfo.selected === tab.id ? 'active' : '', 'clickable']"
      >
        <div class="tab-title" @click="onSelectTab(tab.id)">{{ tab.name }}</div>
      </li>
    </ul>
    <article class="tab-contents">
      <div class="Summar-stats-box">
        <MatchStats :stats="playInfo.summary"></MatchStats>
      </div>
      <ul class="champ-list">
        <li v-for="(data, i) of playInfo.champions" :key="i">
          <ChampItem v-bind:champ="data"> </ChampItem>
        </li>
      </ul>
      <ul class="position-list">
        <li><div class="position-preference-title">선호 포지션 (랭크)</div></li>
        <li v-for="(pos, i) of playInfo.positions" :key="i">
          <MatchPosition v-bind:pos="{ pos: pos, stats: playInfo.summary }">
          </MatchPosition>
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
import { mapState } from "vuex";
import ChampItem from "./ChampItem.vue";
import MatchPosition from "./MatchPosition.vue";
import MatchStats from "./MatchStats.vue";

export default {
  components: { ChampItem, MatchPosition, MatchStats },
  props: ["info"],
  data() {
    return {
      tabInfo: {
        items: [
          { name: "전체", id: "all" },
          { name: "솔로랭크", id: "솔랭" },
          { name: "자유랭크", id: "자유 5:5 랭크" },
        ],
        selected: "all",
      },
    };
  },
  methods: {
    onSelectTab(id) {
      this.tabInfo.selected = id;
      this.$emit("filter-match", id);
    },
    fetchPlayData() {
      this.fetchMatches({ keyword: this.keyword, lastMatch: 0 });
    },
  },
  computed: {
    ...mapState({
      playInfo: (state) => state.playSummary,
      keyword: (state) => state.search.keyword,
    }),
  },
};
</script>
<style scoped>
section {
  width: 690px;
  height: 194px;
  margin: 10px 62px 16px 6px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
}
.tab-list {
  width: 100%;
  display: flex;
  height: 36px;
  border-bottom: solid 1px #cdd2d2;
  background-color: #f2f2f2;
}
.tab-list li {
  text-align: center;
  width: 50px;
  margin: 10px 12px 0;
}
.tab-title {
  height: 14px;
  font-family: NanumBarunGothicOTF;
  font-size: 12px;
  white-space: nowrap;
}
.active {
  border-bottom: 2px solid #1f8ecd;
  color: #1f8ecd;
  font-weight: bold;
}
.tab-contents {
  display: flex;
}
.Summar-stats-box {
  width: 276px;
}
.Summar-stats-box div {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.Summar-stats-details {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.Summar-donut-graph {
  width: 90px;
  height: 90px;
  margin: 23px;
}
.champ-list {
  width: 228px;
  padding-top: 8px;
  border-left: 1px solid#cdd2d2;
  border-right: 1px solid#cdd2d2;
}
.position-list {
  width: 14vw;
  margin-left: 16px;
}
.position-preference-title {
  font-size: 12px;
  color: #666666;
  padding: 8px;
  margin-bottom: 14px;
}
</style>