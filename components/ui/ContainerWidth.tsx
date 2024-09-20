import React from 'react'

export default function ContainerWidth({children}:any) {
  return (

    <div className=" mx-auto ">
      <div className="max-w-screen-xl py-6 md:px-12 px-6 text-white mx-auto">
    {children}
      </div>
    </div>

  )
}
