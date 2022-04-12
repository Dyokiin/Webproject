  
const getChampData = async function () {

    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/fr_FR/champion.json") 

    if (response.status == 200) {
        const data = await response.json()
        console.log(await response.json())
        return data
    }

    else {
        new Error(response.statusText)
    }
}

export default getChampData