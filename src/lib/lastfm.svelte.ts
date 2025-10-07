
export const lastfm = $state({ val: {} })

export async function getLastfm() {
    try {
        const url = "https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=lodiped&period=1month&limit=5&api_key=168757da26cde4a4dc7bdf80909e26d2&format=json"
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('lastfm Fetch error')
        }
        lastfm.val = await res.json()
    } catch (err) {
        console.error(err)
    }
}