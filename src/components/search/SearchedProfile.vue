<template>
  <section >
    <div>
      <ul class="tier-badges">
        <li v-for="(tier, i) in tierBadges" :key="tier + i">
          <div class="tier-badge"><span >{{ tier }}</span></div>
        </li>
      </ul>
    </div>
    <div class="player-container">
      <div class="img-container">
        <img class="border-img" :src="profile.profileBorderImageUrl" />
        <img class="player-img" :src="profile.profileImageUrl" />
      </div>
      <div class="player-info">
        <div class="player-name">{{profile.name}}</div>
        <div><span>레더랭킹<strong v-if="profile.ladderRank">{{profile.ladderRank.rank}}</strong>위</span></div>
      </div>
    </div>
  </section>
</template>
<script>
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState({      
      profile: state => state.summoner.profile
    }),
    tierBadges() {
      return this.profile.previousTiers ? this.profile.previousTiers.map( tier => `${tier.shortString} ${tier.tier}`) : []
    },
  },
};
</script>
<style scoped>
section {
  width:300px;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 0 0 13px;
}
.tier-badges,
.player-container {
  margin-block-start: 0;
  padding-inline-start: 0;
  list-style: none;
  width: 300px;
  display: flex;
}
.tier-badges li {
  margin: 15px 0 6px 0;
}
.tier-badge{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin: 0 0 0 7px;
  padding:3px 4px 2px 4px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
}
.img-container {
  z-index: 99;
}
.player-info {
  margin: 11px 0 0 17px;
}
.player-img{
  width:100px;
  height:100px;margin: 10px;
}
.border-img{
    position: absolute;
      width: 120px;
  height: 120px
}
.player-name{
  font-size: 20px;
    letter-spacing: -0.77px;
  color: #242929;
}
</style>