<template>
  <article class="tooltip-container">
    <div class="tooltip-box">
      <p>
        평점은 0~10점을 기준으로 경기에 기여한 정도에 따라 차등 부여되며 탈주 등
        패배에 결정적인 영향을 끼친 경우 0점에 가까운 점수가 부여됩니다.
      </p>
    </div>
    <div class="edge"></div>
  </article>
</template>
<script>
export default {};
</script>
<style scoped>
.tooltip-container {
  display: flex;
  position: absolute;
  width: 300px;
  padding: 10px;
  background-color: #222727;
  align-items: center;
  justify-content: center;
}

.tooltip-box {
  width: 280px;
  height: 65px;
}
.tooltip-box p {
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  line-height: 1.36;
  color: #fff;
}
.edge {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 8px solid #222727;
  margin-top: 93px;
}
</style>