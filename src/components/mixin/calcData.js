const calcData = {
    methods: {
        calcWinRate(total, wins) {
            const rate = Math.floor(wins * 100 / total)
            return ({
                rate,
                color: rate >= 60 ? 'p-red' : 'p-gray'
            })
        },
        calcKDA(kills, assists, deaths) {
            const kda = (kills + assists) / deaths
            return ({
                kda: `${(kda).toFixed(2)} : 1`,
                color: kda >= 5
                    ? 'p-yellow' : kda >= 4
                        ? 'p-blue' : kda >= 3
                            ? 'p-green' : 'p-gray'
            })
        },
        calcEachKDA(data,games) {
            return (data/games).toFixed(1)
        }
    }

}

export default calcData