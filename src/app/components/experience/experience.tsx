import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Software Developer, freelancer.</p>
      <div className="experience-time">
        <Skill image="/react.png" measure={2} years="2 years" />
        <Skill image="/ts.png" measure={2} years="2 years" />
        <Skill image="/js.png" measure={2} years="2 years" />
        <Skill image="/java.png" measure={1} years="1 year" />
      </div>
    </div>
  )
}
