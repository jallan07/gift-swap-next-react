export const pairingsToString = (pairs: { sender: string; receiver: string; }[]): string => {
    const res = pairs.map(p => `${p.sender} -> ${p.receiver}`).join('\n');
    return res;
}