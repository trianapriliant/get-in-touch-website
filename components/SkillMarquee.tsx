interface Skill {
  name: string
  color: string
}

interface SkillMarqueeProps {
  skills: Skill[]
  direction: 'right' | 'left'
}

export default function SkillMarquee({ skills, direction }: SkillMarqueeProps) {
  return (
    <div className="marquee-container py-4">
      <div className={`marquee-content ${direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className={`skill-item ${skill.color} mx-1`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )
}