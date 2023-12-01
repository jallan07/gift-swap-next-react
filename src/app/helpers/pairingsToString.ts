export const pairingsToString = (pairs: { sender: string; receiver: string; }[]): string => {
    const res = pairs.map(p => `${p.sender.toUpperCase()} is assigned to give a gift to ${p.receiver.toUpperCase()}`).join('\n');
    return res;
}