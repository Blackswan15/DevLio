import {
  BarChart3,
  FolderGit2,
  Trophy,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "GitHub Intelligence",
    description:
      "Repositories, contributions, languages, and activity brought together into one profile.",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description:
      "Track your problem-solving journey and understand how your skills evolve.",
  },
  {
    icon: BarChart3,
    title: "Developer Analytics",
    description:
      "Turn scattered activity into useful metrics that show your progress over time.",
  },
  {
    icon: FolderGit2,
    title: "Project Portfolio",
    description:
      "Showcase what you have actually built instead of letting your work disappear across repositories.",
  },
];

function Features() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-green-600">
            Everything connected
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-green-600 tracking-tight sm:text-5xl">
            Your developer identity shouldn't be scattered.
          </h2>

          <p className="mt-5 text-base leading-7 text-white">
            DevLio turns the platforms you already use into one coherent
            developer profile.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="border-b border-white/10 bg-[#0d0d0f] p-8 transition hover:bg-[#111113] md:[&:nth-child(even)]:border-l md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Icon size={18} />
                </div>

                <h3 className="mt-7 text-lg font-medium">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;