import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        <p className="text-xs uppercase tracking-[0.2em] text-white">
          Start building
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl text-green-600 font-semibold tracking-tight sm:text-5xl">
          Your work deserves a recognition.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white">
          Create your DevLio profile and start turning your developer
          activity into something you can actually see.
        </p>

        <button className="group mx-auto mt-8 flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
          Get started

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}

export default CTA;