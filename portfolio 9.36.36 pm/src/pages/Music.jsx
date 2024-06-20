import React from 'react'

function Music() {
  return (
    <div>
      <div className="h-screen bg-black">
      <img className="absolute opacity-60 px-7 py-10" src="/src/assets/Group 1.png" />
        <img className="absolute opacity-60 start-2/3 top-2/4" src="/src/assets/Group 4.png" />
        <div className="m-10 rounded-lg absolute w-11/12 h-5/6">
          <img className="absolute opacity-65 px-14 py-14 cursor-pointer" src="/src/assets/leo.png" />
          <a href="mailto:leonardkb9@gmail.com">
            <img className="absolute opacity-50 top-0 right-56 z-10 px-14 py-14 cursor-pointer" src="/src/assets/Vector.png" />
          </a>
          <a href="https://github.com/leonardkb">
            <img className="absolute w-42 top-0 right-32 z-10 px-14 py-14 cursor-pointer" src="/src/assets/Shape.png" />
          </a>
          <a href="https://www.instagram.com/_mr_leonard">
            <img className="absolute top-0 right-4 z-10 px-14 py-14 cursor-pointer" src="/src/assets/instagram.png" />
          </a>
          </div>
          <h1 className="absolute tracking-widest top-48 left-28 text-5xl opacity-70 inline-block bg-gradient-to-r from-red-100 via-fuchsia-400 to-fuchsia-500 text-transparent bg-clip-text
          border-b-4 border-fuchsia-300  cursor-pointer hover:text-gradient-pink-500">Music</h1>
      </div>
    </div>
  )
}

export default Music
