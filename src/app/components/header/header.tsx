import Image from 'next/image'

import "./header.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m João Matos! 👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image
        src={`https://github.com/joaovicttorbm.png`}
        alt="Logo github"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}