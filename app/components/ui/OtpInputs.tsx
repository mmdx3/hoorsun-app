'use client'
import { Dispatch, SetStateAction } from 'react'
import OtpInputs from 'react-otp-input'

interface IInputProps {
  state: string
  setState: Dispatch<SetStateAction<string>>
}

const OtpInput = ({ state, setState }: IInputProps) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <OtpInputs
        inputStyle={{
          width: '48px',
          height: '62px',
          padding: '10px',
          fontSize: '24px',
          borderRadius: '8px',
          border: '1px solid #2B2B2B',
          textAlign: 'center',
          color: '#2B2B2B',
          margin: '0 10px'
        }}
        value={state}
        onChange={setState}
        numInputs={4}
        renderInput={props => (
          <input name={`otp:${props['aria-label'].split(' ')[4]}`} {...props} />
        )}
        shouldAutoFocus
      />
    </div>
  )
}

export default OtpInput
