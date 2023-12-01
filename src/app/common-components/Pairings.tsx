type Props = {
    giftSwapState: { sender: string; receiver: string; }[] | []
}

export default function Pairings({ giftSwapState }: Props) {
    return (

        <div className="place-items-center mt-3">
            <h3 className='mx-2 my-4 font-mono font-bold'>randomized pairings for your gift exchange:</h3>
            <ul className="mx-2 my-4">
                {giftSwapState.map(({ sender, receiver }, index) => (
                    <li key={index}><span className='font-bold'>{sender.toUpperCase()}</span> {'==>'} is assigned to give a gift to {'==>'} <span className='font-bold'>{receiver.toUpperCase()}</span></li>
                ))}
            </ul>
        </div>

    );
}