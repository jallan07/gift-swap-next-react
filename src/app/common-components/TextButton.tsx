import { Button } from '@mui/material'

type Props = {
    disabledState: boolean,
    label: string,
    handleClick: () => void,
}

export default function TextButton({ disabledState, label, handleClick }: Props) {
    return (
        <Button className='font-mono' variant="text" color="primary" disabled={disabledState} onClick={handleClick}>
            {label}
        </Button>
    )
}