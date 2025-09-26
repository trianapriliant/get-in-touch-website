'use client'
import Image from 'next/image';

interface Skill {
  name: string;
  src?: string;
  color?: string;
}

interface SkillMarqueeProps {
  skills: Skill[];
  direction?: 'right' | 'left';
}

export default function SkillMarquee({ skills, direction = 'left' }: SkillMarqueeProps) {
  return (
  <div>
    <div className="w-full overflow-hidden whitespace-nowrap bg-background/10 py-4">
      <div
        className={`flex w-max gap-5 px-4 ${
          direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 px-5 py-2 rounded-3xl bg-background/50 text-foreground shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_5px_16px_rgba(0,0,0,0.2)] transition-all border border-accent/20 backdrop-blur-sm"
          >
            {skill.src && (
              <Image
                src={skill.src}
                alt={skill.name}
                width={30}
                height={30}
                className="object-contain drop-shadow-sm"
              />
            )}
            <span className="text-base font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
        }
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  </div>
  );
}
