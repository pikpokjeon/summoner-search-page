<template>
  <main>
    <header><SearchBox class="search-section"></SearchBox></header>
    <section class="search-result-section">
      <SearchResultArea></SearchResultArea>
    </section>
  </main>
</template>
<script>
import SearchResultArea from "./components/search/SearchResultArea.vue";
import SearchBox from "./components/search/SearchBox.vue";
export default {
  components: {
    SearchResultArea,
    SearchBox,
  },
};
</script>
<style>
body {
  margin: 0;
  width: 100vw;
  background: #eaeaea;
}
header {
  width: 100vw;
  height: 97px;
  background: #1ea1f7;
}
h1,
h2,
h3,
h4,
h5 {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.p-green {
  color: #2daf7f !important;
}
.p-blue {
  color: #1f8ecd !important;
}
.p-yellow {
  color: #e19205 !important;
}
.p-red {
  color: #c6443e !important;
}
.accent {
  font-weight: 700;
}
ul {
  list-style: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
div {
}
span {
  font-size: 11px;
  letter-spacing: -0.42px;
  white-space: nowrap;
}
main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.none {
  display: none !important;
}
.circle {
  border-radius: 50%;
}
nav {
  width: 100vw;
}
section {
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.clickable {
  cursor: pointer;
}
</style>