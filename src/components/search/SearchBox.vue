<template>
  <section>
    <div class="search-container">
      <div class="search-box">
        <div class="search-c">
          <input
            class="search-input"
            type="text"
            placeholder="소환사명, 챔피언..."
            v-model="keyword"
            @keyup="searchKeyword(keyword)"
            @click="toShowSearchHelper(1)"
            @blur="toShowSearchHelper(0)"
          />
          <div class="search-button"></div>
        </div>
      </div>
      <SearchList v-if="hasSearchHelper" v-bind:isOn="isTyping"></SearchList>
    </div>
  </section>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import SearchList from "./SearchList.vue";
export default {
  components: { SearchList },
  data: () => {
    return {
      typedPrev: -1,
      keyword: "Hide on bush",
      isTyping: false,
      hasSearchHelper: false,
      currentDate: Math.floor(Date.now() / 1000),
    };
  },
  methods: {
    ...mapActions(["fetchKeyword", "fetchMatches", "fetchMostInfo"]),
    ...mapMutations(["SET_GAME_LISTS"]),
    toShowSearchHelper(b) {
      this.hasSearchHelper = b;
    },
    searchKeyword(typing) {
      const { keyword, isTyping, typedPrev } = this;
      if (!isTyping) {
        if (typedPrev !== typing) {
          this.isTyping = true;
          setTimeout(() => {
            this.isTyping = keyword === typing ? false : true;
            this.fetchData(this.keyword);
            this.SET_GAME_LISTS({ action: "init" });
          }, 1000);
        }
        this.typedPrev = typing;
      }
    },
    fetchData(keyword) {
      this.currentDate = Math.floor(Date.now() / 1000);
      this.fetchKeyword({ topic: "summoner", keyword });
      this.fetchMostInfo({ keyword });
      this.fetchMatches({ keyword, lastMatch: this.currentDate });
    },
  },
  created() {
    this.fetchData(this.keyword);
  },
};
</script>
<style scoped>
section {
  padding: 53px 0 0 0;
  display: flex;
  flex-direction: row-reverse;
  width: 1000px;
}
.search-input {
  border: none;
  height: 15px;
  width: 80%;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  color: #727272;
}
.search-c {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  border-radius: 2px;
  background-color: #fff;
  padding: 9px 12px 8px 14px;
}
.search-container {
  border: 0;
  display: flex;
  flex-direction: column;
}
.search-button {
  background: url(https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 42px;
  height: 13px;
  border: none;
}
</style>