import { Container } from "@/components/ui/container";
import { trustedBy } from "@/lib/site-content";

export function TrustedByMarquee() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <section className="pb-16 pt-4">
      <Container>
        <div className="rounded-2xl border border-border/70 bg-glass/35 p-5 backdrop-blur-md">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Organizaciones que aceleran su operación con ADI (placeholders)
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex min-w-max animate-marquee items-center gap-4">
              {items.map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="inline-flex h-12 items-center rounded-full border border-border/70 bg-black/20 px-5 text-sm text-muted-foreground"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
