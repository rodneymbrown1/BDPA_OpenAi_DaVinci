'use client'
 
import { useCompletion } from 'ai/react';


export default function Home() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();
  return (
<div>
  <h1 className='text-3xl'> BDPA Chat GPT3.5 Bootstrap Demo</h1>

  <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
      </form>
      <div className="whitespace-pre-wrap my-6">{completion}</div>
    </div>
    
</div>
  )
}
