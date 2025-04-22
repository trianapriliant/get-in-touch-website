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
    <div className="w-full overflow-hidden whitespace-nowrap bg-gray-100 dark:bg-gray-900/0 py-4">
      <div
        className={`flex w-max gap-6 px-4 ${
          direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.5)] transition-all border border-white/10 backdrop-blur-sm"
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
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
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
  );
}
