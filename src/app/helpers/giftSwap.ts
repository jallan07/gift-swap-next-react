import { shuffleArr } from './shuffleArr'

export const giftSwap = function (items: string[]) {
    const shuffledItems = shuffleArr([...items]);

    const pairs = [];

    for (let i = 0; i < shuffledItems.length; i++) {
        const sender = shuffledItems[i];
        const receiver = shuffledItems[(i + 1) % shuffledItems.length];
        pairs.push({ sender, receiver });
    }
    return pairs.sort((a, b) => a.sender.localeCompare(b.sender));
};