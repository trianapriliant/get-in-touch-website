'use client'
import Image from 'next/image';

interface Skill {
  name: string;
  src?: string; // Optional image source for the skill
  color?: string; // Optional color for text-only skills
}

interface SkillMarqueeProps {
  skills: Skill[];
  direction?: 'right' | 'left'; // Optional direction, defaults to 'left'
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
            className="flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            {skill.src && (
              <Image
                src={skill.src}
                alt={skill.name}
                width={30}
                height={30}
                className="object-contain"
              />
            )}
            <span className="text-base">{skill.name}</span>
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