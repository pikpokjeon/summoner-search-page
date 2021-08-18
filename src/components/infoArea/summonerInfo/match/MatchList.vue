<template>
  <div>
    <ul>
      <li
        v-for="(item, i) of list"
        :key="item.gameId"
        :class="[item.game.isWin ? 'win-item' : 'loss-item', 'item-box']"
        @mouseover="handleTooltip(1, i)"
        @mouseleave="handleTooltip(0, i)"
      >
        <MatchTooltip
          :class="['tooltip-position',idToShowTooltip !== i ? 'none' : '']"
        ></MatchTooltip>
        <MatchInfo v-bind:info="item.game"></MatchInfo>
        <MatchPlayers
          class="players-container"
          v-bind:teams="item.teams"
        ></MatchPlayers>
        <div
          :class="[
            item.game.isWin ? 'win-item-darken' : 'loss-item-darken',
            'expand-side-button',
          ]"
        >
          <span class="expand-arrow"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import MatchInfo from "./MatchInfo.vue";
import MatchPlayers from "./MatchPlayers.vue";
import MatchTooltip from "./MatchTooltip.vue";

export default {
  components: { MatchInfo, MatchPlayers, MatchTooltip },
  props: ["list"],
  data: () => {
    return {
      idToShowTooltip: -1,
    };
  },
  methods: {
    ...mapActions(["fetchMatcheDetail"]),
    handleTooltip(b, id) {
      this.idToShowTooltip = !b ? -1 : id;
    },
  },
  computed: {
    ...mapState(["matchLists"]),
  },
};
</script>
<style scoped>
ul {
  width: 690px;
}
ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.players-container {
}
.item-box {
  width: 690px;
  height: 96px;
  margin: 8px 5px;
}
.win-item {
  border: solid 1px #a1b8cd;
  background-color: #b0ceea;
}
.loss-item {
  border: solid 1px #c0aba8;
  background-color: #d6b5b2;
}
.expand-side-button {
  width: 30px;
  height: 94px;
  display: block;
  width: 30px;
  position: relative;
  cursor: pointer;
}
.win-item-darken {
  border: solid 1px #549dc7;
  background-color: #7fb0e1;
}
.loss-item-darken {
  border: solid 1px #c8817c;
  background-color: #e89c95;
}
.tooltip-position{
    margin-top: -94px;
    margin-left: 200px;
}
</style>