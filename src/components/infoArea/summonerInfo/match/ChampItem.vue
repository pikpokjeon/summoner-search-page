<template>
  <div class="champ-info">
    <div class="camp-img-box ">
      <img class="champ-img circle" :src="champ.imageUrl" />
      </div>
    <div>
      <div class="champ-name"><span >{{champ.name}}</span></div>
      <strong :class="['champ-rate',
      calcWinRate(champ.games,champ.wins).color
      ]">{{ calcWinRate(champ.games,champ.wins).rate}}%</strong>
      <span class="champ-stats">({{champ.wins}}승{{champ.losses}}패)</span>
      <strong :class="['champ-kda'
      ,  calcKDA(champ.kills,champ.assists,champ.deaths).color
      ]">{{ calcKDA(champ.kills,champ.assists,champ.deaths).kda}}평점</strong>
    </div>
  </div>
</template>
<script>
import calcData from '../../../mixin/calcData'
export default {
  props:['champ'],
  mixins:[calcData]
};
</script>
<style scoped>

.champ-info {
  display: flex;
  height:34px;
  padding: 6px 8px;
}
.camp-img-box img{
  width:34px;
  height:34px;
  margin:0 8px
}
.champ-name{
height: 16px; 
}
.champ-name span{
font-size: 14px;  color: #333;
height: 16px; 
}
strong{
  font-size: 11px;
}
</style>