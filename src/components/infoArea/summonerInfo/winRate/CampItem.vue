<template>
  <div class="champ-container">
    <div class="champ-img-box">
      <img class="champ-img circle" :src="info.imageUrl" />
    </div>
    <ul>
      <li class="champ-info">
        <span class="accent truncate champ-name">{{ info.name }}</span>
        <span>CS {{ info.cs }}(2.3)</span>
      </li>
      <li class="personal-kda">
        <span
          :class="[
            'accent',
            calcKDA(info.kills, info.assists, info.deaths).color,
          ]"
          >{{ calcKDA(info.kills, info.assists, info.deaths).kda }} 평점</span
        >
        <span
          >{{ calcEachKDA(info.kills, info.games) }}/
          {{ calcEachKDA(info.assists, info.games) }}/
          {{ calcEachKDA(info.deaths, info.games) }}</span
        >
      </li>
      <li class="champ-played">
        <span :class="['accent', calcWinRate(info.games, info.wins).color]"
          >{{ calcWinRate(info.games, info.wins).rate }}%</span
        >
        <span>{{ info.games }}게임</span>
      </li>
    </ul>
  </div>
</template>
<script>
import calcData from "../../../mixin/calcData";
export default {
  props: ["info"],
  mixins: [calcData],
};
</script>
<style scoped>
.champ-container {
  display: flex;
  border-bottom: 1px solid #cdd2d2;
  padding: 4px 16px 3px 0px;
}
ul {
  display: flex;
}
ul li {
  display: flex;
  flex-wrap: wrap;
  color: #879292;
}
.champ-list li {
  display: flex;
}
.champ-img-box {
  width: 60px;
}
.champ-img {
  width: 32px;
  height: 32px;
  margin: 4px 10px 4px 15px;
}
.accent {
  color: #5e5e5e;
  font-size: 13px;
  font-weight: 700;
}
.champ-info {
  width: 85px;
  text-align: left;
  vertical-align: middle;
  padding-left: 10px;
  margin: 5px 0 3px 0;
}
.champ-name {
  display: inline-block;
  width: 60px;
}
.personal-kda {
  line-height: 1.8;
  vertical-align: middle;
  width: 75px;
}
.champ-played {
  width: 70px;
  line-height: 1.8;
  vertical-align: middle;
}
.champ-played span {
  width: 70px;
  text-align: center;
}
</style>