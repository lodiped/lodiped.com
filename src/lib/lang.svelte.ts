export let lang = $state({ val: '' })
export function getUserLanguage() {
    try {
        if (navigator.language) lang.val = navigator.language
    } catch (err) {
        console.error("Couldn't get Language: ", err)
        lang.val = 'en-US'
    }
}