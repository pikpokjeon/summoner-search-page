export default {
    SET_SEARCHED_TARGET(state, { topic, data }) {
        state.search.keyword = data[topic].name
        state.search.history.push({
            name: data[topic].name,
            level: data[topic].level,
            img: data[topic].profileImageUrl
        })
        state[topic].profile = data[topic]

    },
    SET_SUMMONER_INFO(state, data) {
        state.summoner.profile = data
    },
    SET_MOST_INFO(state, data) {
        state.summoner.mostInfo = data
    },
    SET_GAME_LISTS(state, data) {
        console.log(data)
        if (data.action === 'init') state.matchLists = []
        else state.matchLists.push(data)
    },
    SET_PLAY_SUMMARY(state, data) {
        state.playSummary = data
    },
    SET_PLAYERS(state, data) {
        state.matchPlayers.push(data)
    },
    SET_ITEM_LIST(state, data) {
        state.items = data
    }
}