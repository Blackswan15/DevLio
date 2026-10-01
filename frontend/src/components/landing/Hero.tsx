import type { ReactNode } from "react";
import {
  ArrowRight,
  Code2,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl text-center">

        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-5xl text-green-600 duration-500 ease-in-out font-semibold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
          Everything you build.
          <br />

          <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
            One developer profile.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 hover:text-green-600 duration-400 sm:text-lg">
          DevLio brings your GitHub activity, competitive programming,
          projects, and developer achievements together in one place.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/signup">
          <button className="group flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90">
            Build your profile

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          </Link>

          <button
  onClick={() => {
    const featuresSection = document.getElementById("features");

    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="flex h-11 items-center rounded-lg border border-white/10 bg-white/[0.02] px-6 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
>
  Explore DevLio
</button>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-white/[0.025] blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101012] shadow-2xl shadow-black/50">
            <div className="flex h-11 items-center border-b border-white/10 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div className="mx-auto px-20 py-1 text-[10px] text-white/20 sm:block hover:text-green-600">
                devlio.dev
              </div>
            </div>

            <div className="grid lg:grid-cols-[210px_1fr]">
              <aside className="hidden border-r border-white/10 p-5 lg:block">
                <div className="mb-8 text-sm font-semibold">
                  DevLio
                </div>

                <div className="space-y-1 text-xs">
                  <div className="rounded-md bg-white/10 px-3 py-2">
                    Overview
                  </div>

                  <div className="px-3 py-2 text-white/30 hover:text-white">
                    GitHub
                  </div>

                  <div className="px-3 py-2 text-white/30 hover:text-white">
                    Problems
                  </div>

                  <div className="px-3 py-2 text-white/30 hover:text-white">
                    Projects
                  </div>

                  <div className="px-3 py-2 text-white/30 hover:text-white">
                    Profile
                  </div>
                </div>
              </aside>

              <div className="p-6 sm:p-8">
                <div className="mb-7">
                  <p className="text-xs text-white/30">
                    Developer overview
                  </p>

                  <h3 className="mt-1 text-xl font-medium">
                    Your progress at a glance
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <StatCard
                    icon={<Code2 size={15} />}
                    label="GitHub"
                    value="1,247"
                    description="Contributions"
                  />

                  <StatCard
                    icon={<Trophy size={15} />}
                    label="Problems"
                    value="384"
                    description="Solved"
                  />

                  <StatCard
                    icon={<Code2 size={15} />}
                    label="Projects"
                    value="12"
                    description="Tracked"
                  />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30">
                      Activity
                    </span>

                    <span className="text-xs text-white/20">
                      Last 12 months
                    </span>
                  </div>

                  <div className="mt-6 flex h-24 items-end gap-1">
                    {[35, 45, 30, 60, 50, 75, 55, 85, 65, 90, 70, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-sm bg-white/15"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
};

function StatCard({
  icon,
  label,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-xs text-white/35">
        {icon}
        {label}
      </div>

      <div className="mt-4 text-2xl font-semibold">
        {value}
      </div>

      <div className="mt-1 text-[11px] text-white/25">
        {description}
      </div>
    </div>
  );
}

export default Hero;