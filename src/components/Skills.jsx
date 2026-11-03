import React from 'react';
import { CheckCircle2, Cpu } from 'lucide-react';
import { honestSkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Jerarquización Honesta</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Habilidades agrupadas por nivel de uso real
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Sin listas infladas ni palabras de relleno. Separado exactamente entre lo que hago todos los días en finanzas, cómo lo programo con código y las herramientas de soporte.
          </p>
        </div>

        {/* 3 Bloques Claros */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {honestSkills.map((block) => (
            <div
              key={block.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                  {block.category}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 mb-5 leading-relaxed">
                  {block.subtitle}
                </p>

                <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                  {block.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-zinc-200">
                            {item.name}
                          </div>
                          <p className="text-zinc-400 mt-0.5 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
