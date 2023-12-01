export const shuffleArr = (array: string[]) => {
    const crypto = window.crypto || window.Crypto;

    for (let i = 0; i < array.length; i++) {
        const j = crypto.getRandomValues(new Uint32Array(1))[0] % array.length;
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}