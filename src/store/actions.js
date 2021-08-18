import axios from 'axios'
import {API} from '../api'
import {lang} from '../config.js'

const SummonerAPI = (keyword) => API(lang.ko).summoner(encodeURI(keyword))
export default {
    async fetchKeyword({commit},{topic,keyword}){
        const {data} = await axios.get(`${SummonerAPI(keyword).getSummoner}`)
        commit('SET_SEARCHED_TARGET',{topic,data})
        return keyword
    },
    async fetchMatches({commit},{keyword,lastMatch})  {
        const {data} = await axios.get(`${SummonerAPI(keyword).getMatches(lastMatch)}`)
        commit('SET_PLAY_SUMMARY',{champions:data.champions,positions:data.positions,summary:data.summary})
        data.games.forEach( game => {
         axios.get(`${SummonerAPI(keyword).getMatchDetail(game.gameId)}`).then(
             detail => commit('SET_GAME_LISTS',{action:'set',game,teams:detail.data.teams})
         )
        })
    },
    async fetchMatcheDetail({commit},{keyword,gameId})  {
        const {data} = await axios.get(`${SummonerAPI(keyword).getMatchDetail(gameId)}`)
        commit('SET_PLAYERS',data)
        return data

    },
    async fetchMostInfo({commit},{keyword}){
        const {data} = await axios.get(`${SummonerAPI(keyword).getMostInfo}`)
        commit('SET_MOST_INFO',data)
    },
}

