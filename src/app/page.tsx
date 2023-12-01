'use client'
import { giftSwap } from './helpers/giftSwap'
import { useEffect, useState } from 'react'
import { Box, Divider, TextField } from '@mui/material'
import TextButton from './common-components/TextButton'
import Pairings from './common-components/Pairings'

export default function Home() {

  const [inputState, setInputState] = useState<string>('')
  const [giftSwapState, setGiftSwapState] = useState<{ sender: string; receiver: string; }[] | []>([])

  const handleSubmit = async () => {
    // split input into array using new lines or commas as delimiters
    const inputArray = inputState.trim().split(/[\n,]+/);
    const giftSwapArr = await giftSwap(inputArray)
    setGiftSwapState(giftSwapArr)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          gift swap randomizer
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            by{' '}
            <span className="font-mono justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">josh<code className="font-mono font-bold"> allan</code></span>
          </div>
        </div>
      </div>

      <div className="place-items-center mt-24">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', },
          }}
          noValidate
          autoComplete="off"
        >
          <h3 className='mx-2 my-4 font-mono font-bold'>add names separated by commas and/or new lines:</h3>
          <TextField
            id="outlined-multiline-flexible"
            label="Participants"
            multiline
            rows={10}
            onBlur={(e) => setInputState(e.target.value)}
          />
        </Box>
        <TextButton disabledState={!inputState} handleSubmit={() => handleSubmit()} label="Submit" />
      </div>

      {giftSwapState && giftSwapState.length > 0 && (
        <>
          <Divider className="my-5" variant="fullWidth" />
          <Pairings giftSwapState={giftSwapState} />
        </>
      )}

    </main>
  )
}
