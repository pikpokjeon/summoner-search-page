<template>
  <section>
    <ul class="tab-list">
      <li
        v-for="(tab, i) in tabInfo.items"
        :key="tab.name + i"
        :class="[tab.id === tabInfo.selected ? 'selected' : '', `tab-${i}`]"
      >
        <div @click="onSelectTab(tab.id)">{{ tab.name }}</div>
      </li>
    </ul>
    <div class="tab-contents">
      <ul class="camp-list">
        <li v-for="(data, i) of tabContentToShow" :key="data.id + i">
          <CampItem v-if="tabInfo.selected === 'champions'" v-bind:info="data"> </CampItem>
          <FinalRankItem v-else v-bind:info="data"> </FinalRankItem>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import CampItem from "./CampItem.vue";
import FinalRankItem from "./FinalRankItem.vue";
export default {
  components: { CampItem, FinalRankItem },
  data() {
    return {
      tabInfo: {
        items: [
          { name: "챔피언승률", id: "champions" },
          { name: "7일간 랭크 승률", id: "recentWinRate" },
        ],
        selected: "champions",
      },
    };
  },
  methods: {
    onSelectTab(id) {
      this.tabInfo.selected = id;
    },
  },
  computed: {
    ...mapState({ winRate: (state) => state.summoner.mostInfo }),
    tabContentToShow() {
      return this.winRate[this.tabInfo.selected];
    },
  },
};
</script>

<style scoped>
section {
  width: 300px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
}
.tab-list {
  display: flex;
  width: 100%;
}
.tab-list li {
  width: 150px;
  height: 44px;
  background-color: #f2f2f2;
  border-bottom: solid 1px #cdd2d2;
}
.tab-0 {
  border-right: solid 1px #cdd2d2;
}
.tab-list li div {
  margin: 15px 0;
  text-align: center;
  font-size: 12px;
}
.selected {
  color: #5e5e5e;
  font-weight: 700;
  background-color: #ededed !important;
  border-bottom: 0px !important;
}
.off-selected {
  color: #879292;
  background-color: #f2f2f2 !important;
}
.tab-contents {
  display: flex;
  width: 300px;
}
</style>