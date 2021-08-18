<template>
  <div class="search-history-container">
    <ul class="search-list-container">
      <li
        v-for="(keyword, i) of history"
        :key="keyword + i"
        class="search-list-item"
      >
        <img class="profile-img" :src="keyword.img" />
        <div>
          <span>{{ keyword.name }}</span
          ><span>{{ keyword.level }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["isOn"],
  computed: {
    ...mapState({
      history: (state) => state.search.history,
    }),
  },
};
</script>
<style scoped>
.search-list-item {
  display: flex;
  border: none;
  color: #727272;
  padding: 7px 17px;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.search-history-container{
  z-index: 999;
}
.search-list-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 260px;
  border-radius: 2px;
  background-color: #fff;
  padding: 9px 12px 8px 14px;
}
.profile-img {
  width: 36px;
  height: 36px;
  margin-right: 14px;
  border-radius: 50%;
}
</style>