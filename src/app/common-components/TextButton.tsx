import { Button } from '@mui/material'

type Props = {
    disabledState: boolean,
    label: string,
    handleSubmit: () => void,
}

export default function TextButton({ disabledState, label, handleSubmit }: Props) {
    return (
        <Button className='font-mono' variant="text" color="primary" disabled={disabledState} onClick={handleSubmit}>
            {label}
        </Button>
    )
}