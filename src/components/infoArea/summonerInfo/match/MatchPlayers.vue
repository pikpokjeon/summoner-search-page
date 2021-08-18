<template>
  <div class="players-list">
    <div v-for="team of teams" :key="team.teamId">
      <ul v-for="player of team.players" :key="player.summonerId">
        <li>
          <img class="champ-img" :src="player.champion.imageUrl" />
          <span class="truncate">{{ player.summonerName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: ["teams"],
  computed: {
    ...mapState(["search", "matchPlayers"]),
  },
};
</script>
<style scoped>
.players-list {
  display: flex;
}
.players-list ul {
  width: 80px;
}
.players-list ul li {
  font-size: 11px;
  letter-spacing: -0.42px;
}
.champ-img {
  width: 16px;
  height: 16px;
}
span {
  display: inline-block;
  width: 46px;
  height: 13px;
}
</style>