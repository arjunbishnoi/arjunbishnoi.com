import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative py-10 z-40 bg-background">
      {/* Static Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 sm:pb-4">
        <h2 className="text-[1.625rem] md:text-3xl lg:text-4xl text-black dark:text-white font-bold tracking-normal leading-normal">About</h2>
      </div>
      
      {/* About content */}
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:pt-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-full md:max-w-xs aspect-square rounded-2xl overflow-hidden border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm">
              <Image 
                src="/arjun-bishnoi-profile-square.jpg" 
                alt="Arjun Bishnoi - Full Stack Developer & UI/UX Designer" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />

            </div>
          </div>

          {/* Content Columns */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-foreground font-normal mb-6 leading-relaxed">
              I am Arjun Bishnoi. I build cross-platform mobile apps, work with AI engineering, and design user interfaces. Whether I am making native apps for iOS and Android, using React Native, or creating design systems, I focus on building tools that look good and are easy to use.
            </p>
            <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed">
              Right now, I am studying Applied A.I. Solutions Development at George Brown College to learn how to add smart, AI-driven features to the products I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
