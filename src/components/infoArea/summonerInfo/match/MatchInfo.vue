<template>
  <div>
    <ul>
      <li class="match-stats">
        <div class="match-type">{{ info.gameType }}</div>
        <div class="time-stamp">{{ info.createDate }}</div>
        <div class="match-result">{{ info.isWin }}</div>
        <div class="match-length">{{ info.gameLength }}</div>
      </li>
      <li class="champ-img-container">
        <div class="img-box">
          <img class="champ-img circle" :src="info.champion.imageUrl" />
          <div class="img-wrap">
            <img
              v-for="(spell, i) of info.spells"
              :key="'spell' + i"
              class="spell-img img-s"
              :src="spell.imageUrl"
            />
            <img
              v-for="(p, i) of info.peak"
              :key="'p' + i"
              :class="[i === 0 ? 'peak-img ' : '', 'circle', 'img-s']"
              :src="p"
            />
          </div>
        </div>
        <div class="champ-name">
          <span>{{ champName(info.champion.imageUrl) }}</span>
        </div>
      </li>
      <li class="kda-container">
        <div>
          <span
            v-for="([statName, value], i) of Object.entries(
              generalStats(info.stats.general).kda
            )"
            :key="statName"
            :class="statName"
          >
            {{ value }}{{ i === 2 ? "" : " /" }}
          </span>
        </div>
        <div class="kdaRatio">
          <span class="accent">{{ info.stats.general.kdaString }}</span>
        </div>
        <div class="badges-container">
          <div
            v-for="[badge, value] of Object.entries(
              generalStats(info.stats.general).badges
            )"
            :key="badge"
            :class="[
              'badge',
              value !== 'ACE' ? (value ? 'multi-badge' : 'none') : 'ace-badge',
            ]"
          >
            <span>{{ value }}</span>
          </div>
        </div>
      </li>
      <li class="stats-container">
        <div class="level">
          <span>레벨{{ info.champion.level }}</span>
        </div>
        <div>
          <span> {{ info.stats.general.cs }}CS </span>
        <span> ({{ info.stats.general.csPerMin }}) </span></div>
        <div><span class="p-red accent">
          킬관여{{ info.stats.general.contributionForKillRate }}
        </span></div>
      </li>
      <li class="items-container">
        <img
          class="img-s"
          v-for="(item, i) of info.items"
          :key="'item' + i"
          :src="item.imageUrl"
        />
        <div
          :class="[
            info.isWin ? 'empty-box-win' : 'empty-box-loss',
            'empty-box',
          ]"
          v-for="(_, i) of Array(calcEmptySlot(info.items.length).left)"
          :key="'empty' + i"
        ></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["info"],
  computed: {
    calcEmptySlot() {
      return (count) => ({
        left: count < 8 ? 8 - count : 0,
        hasEmpty: count < 8 ? true : false,
      });
    },
    champName() {
      return (url) => url.toString().split("champion/")[1].split(".png")[0];
    },
    generalStats() {
      return (data) => ({
        kda: {
          kill: data.kill,
          death: data.death,
          assist: data.assist,
        },
        kdaRatio: data.kdaString,
        badges: {
          kill: data.largestMultiKillString,
          score: data.opScoreBadge,
        },
        stats: {
          cs: data.cs,
          csPerMin: data.csPerMin,
          killRate: data.contributionForKillRate,
        },
      });
    },
  },
};
</script>
<style scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul li {
  display: flex;
  flex-wrap: wrap;
}
.match-stats {
  flex-wrap: wrap;
  width: 70px;
  margin: 0 10px 0 16px;
}
.match-stats div {
  width: 70px;
  text-align: center;
  font-size: 11px;
  letter-spacing: -0.42px;
}
.champ-img-container {
  width: 114px;
  display: flex;
  flex-wrap: wrap;
}
.champ-name {
  width: 114px;
  text-align: center;
}
.img-box {
  display: flex;
  text-align: center;
}
.peak-img {
  background: #000;
}
.champ-img {
  width: 46px;
  height: 46px;
  margin: 3px;
}
.img-wrap {
  margin: 3px;
  width: 52px;
  height: 52px;
}
.img-s {
  width: 22px;
  height: 22px;
  margin: 1px;
}
.badges-container {
  display: flex;
  justify-content: center;
    margin-top: 7px;
}
.badge {
  letter-spacing: -0.38px;
  color: #fff;
  font-size: 10px;
  padding: 3px 5px;
  border-radius: 9px;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  margin: 2px;
}
.multi-badge {
  border: solid 1px #bf3b36;
  background-color: #ec4f48;
  width: 50px !important;
}
.ace-badge {
  border: solid 1px #7f3590;
  background-color: #8c51c5;
  width: 31px !important;
}
.kda-container {
  display: flex;
  width: 96px;
}
.kda-container div {
  width: 96px;
  text-align: center;
}
.stats-container {
  width: 90px;
}
.stats-container div {
  width: 90px;
  text-align: center;
}
.items-container {
  width: 113px;
}
.empty-box {
  width: 20px;
  height: 20px;
  margin: 1px;
}
.empty-box-win {
  border: solid 1px #a1b8cd;
  background-color: #7aa5c3;
}
.empty-box-loss {
  border: solid 1px #c0aba8;
  background-color: #cb9e9a;
}
</style>