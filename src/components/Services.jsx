import React from 'react'

const Services = () => {
  return (
    <div className='mx-32 mt-20 space-y-16'>
      <div className=''>
        <p className='font-primaryFont text-5xl font-semibold'>Services</p>
      </div>
      <hr className='' />

        <div className='flex space-x-6'>
            <div className='text-8xl flex items-center font-secondaryFont'>1</div>
      <div className=''>
        <p className='text-3xl font-tertiaryFont font-semibold'>Branding</p>
        <p className='font-tertiaryFont text-lg mt-4'>Revealing your brand's core with a meticulous mix of visuals and strategy.
             Crafting enduring identities that resonate.</p>
      </div>
      </div>
      <hr />

        <div className='flex space-x-6'>
        <div className='text-8xl flex items-center font-secondaryFont '>2</div>
      <div className=''>
         <p className='text-3xl font-tertiaryFont font-semibold'>Design</p>
         <p className='font-tertiaryFont text-lg mt-4'>Crafting engaging experiences from the initial click.
             Creating intuitive interfaces for seamless user interactions.</p>
      </div>
      </div>
      <hr />
        <div className='flex space-x-6'>
        <div className='text-8xl flex items-center font-secondaryFont'>3</div>
      <div className=''>
        <p className='text-3xl font-tertiaryFont font-semibold'>Development</p>
        <p className='font-tertiaryFont text-lg mt-4'>Transforming visions into dynamic digital realities.
             From responsive websites to interactive apps, propelling innovation.</p>
      </div>
      </div>
    </div>
  )
}

export default Services
