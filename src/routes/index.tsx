import { createFileRoute } from "@tanstack/react-router";
import heroCleats from "@/assets/hero-cleats.jpg";
import jersey from "@/assets/jersey.jpg";
import cap from "@/assets/cap.jpg";
import skates from "@/assets/skates.jpg";
import boardgame from "@/assets/boardgame.jpg";
import { ArrowRight, MapPin, Truck, Scissors, Phone, Instagram, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cleatworldgh — Soccer Cleats, Custom Jerseys & Sports Gear in Accra" },
      { name: "description", content: "Your one-stop shop for soccer cleats, custom team jerseys, hats, board games and roller skates. Based at Dansoman Roundabout. We deliver across Ghana." },
    ],
  }),
});

// TODO: replace with the real Cleatworldgh WhatsApp number and Instagram handle.
const WHATSAPP_NUMBER = "233000000000"; // international format, no + or spaces
const WHATSAPP_DISPLAY = "+233 00 000 0000";
const INSTAGRAM_HANDLE = "cleatworldgh";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Dansoman+Roundabout+Accra";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const products = [
  { name: "Soccer Cleats", tag: "Pro grade", img: heroCleats, desc: "FG, AG and turf cleats from elite brands." },
  { name: "Soccer Jerseys", tag: "Stock & custom", img: jersey, desc: "Club and national team jerseys in stock — plus custom prints for your squad." },
  { name: "Snapbacks & Hats", tag: "Streetwear", img: cap, desc: "Caps, beanies and bucket hats." },
  { name: "Roller Skates", tag: "Glide", img: skates, desc: "Quad and inline skates for cruising." },
  { name: "Board Games", tag: "Indoor", img: boardgame, desc: "Chess, draughts, scrabble and more." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="size-8 rounded bg-gradient-brand grid place-items-center font-display text-primary-foreground">C</span>
            <span className="font-display text-xl tracking-wider">CLEATWORLD<span className="text-primary">GH</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#shop" className="hover:text-foreground transition">Shop</a>
            <a href="#custom" className="hover:text-foreground transition">Custom Kits</a>
            <a href="#visit" className="hover:text-foreground transition">Visit</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href={waLink("Hi Cleatworldgh! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            <ShoppingBag className="size-4" /> Order
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Dansoman Roundabout · Accra
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] uppercase">
              Gear up.<br />
              <span className="text-primary">Stand out.</span><br />
              Score more.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Cleats, custom team jerseys, hats, roller skates and board games — all under one roof.
              Built for ballers, runners, riders and rollers across Ghana.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition shadow-glow">
                Shop the drop <ArrowRight className="size-4" />
              </a>
              <a href="#custom" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:bg-card transition">
                Customize a kit
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-6 pt-6 max-w-md">
              {[
                ["500+", "Teams kitted"],
                ["48h", "Custom turnaround"],
                ["GH", "Nationwide delivery"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-primary">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" aria-hidden />
            <img
              src={heroCleats}
              alt="Orange and black soccer cleats kicking up dust"
              width={1600}
              height={1200}
              className="relative rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card max-w-[220px]">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Top seller</p>
              <p className="font-display text-lg leading-tight">Strike FG Cleats</p>
              <p className="text-primary font-semibold mt-1">GHS 850</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border bg-card/30 overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap font-display text-3xl uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0">
                {["Cleats", "Custom Jerseys", "Hats", "Roller Skates", "Board Games", "Team Kits", "Delivery Nationwide"].map((t) => (
                  <span key={t} className="mx-8 flex items-center gap-8 text-muted-foreground">
                    {t} <span className="text-primary">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">The Catalog</p>
            <h2 className="font-display text-5xl md:text-6xl uppercase">Everything sport,<br />nothing average.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">From match-day essentials to weekend rides — handpicked for performance, priced for the streets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <a
              key={p.name}
              href={waLink(`Hi Cleatworldgh! I'm interested in ${p.name}. Could you share what's available?`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${p.name} on WhatsApp`}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/60 transition shadow-card block ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-square"}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs uppercase tracking-widest">
                {p.tag}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                  <ArrowRight className="size-5 text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                <p className="text-xs uppercase tracking-widest text-primary mt-4">Enquire on WhatsApp →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CUSTOM */}
      <section id="custom" className="relative border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Custom Kits</p>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none">
              Your team.<br />Your name.<br /><span className="text-primary">Your number.</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md">
              Bring us your crest, your colors and your roster. We'll print, press and pack a full set ready for kickoff in 48 hours.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Full team kits (jerseys, shorts, socks)", "Names, numbers and sponsor patches", "Heat-press or sublimation", "Bulk pricing for clubs & schools"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition">
              Request a quote <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={jersey} alt="Custom soccer jersey" loading="lazy" className="rounded-xl aspect-[3/4] object-cover col-span-2" />
            <div className="rounded-xl border border-border bg-background p-6">
              <Scissors className="size-6 text-primary mb-3" />
              <p className="font-display text-2xl">48-hr</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Turnaround</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <Truck className="size-6 text-primary mb-3" />
              <p className="font-display text-2xl">Free</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Accra delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section id="visit" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Pull up</p>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-8">Find us at<br />Dansoman Roundabout.</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Cleatworldgh HQ</p>
                  <p className="text-muted-foreground text-sm">Dansoman Roundabout, Accra, Ghana</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Truck className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">We deliver</p>
                  <p className="text-muted-foreground text-sm">Same-day across Accra, nationwide via courier.</p>
                </div>
              </div>
              <div id="contact" className="flex gap-4">
                <Phone className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">WhatsApp orders</p>
                  <a href="https://wa.me/233000000000" className="text-muted-foreground text-sm hover:text-primary">+233 00 000 0000</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="size-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Follow the drops</p>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary">@cleatworldgh</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-square lg:aspect-auto min-h-[400px]">
            <iframe
              title="Cleatworldgh location — Dansoman Roundabout"
              src="https://www.google.com/maps?q=Dansoman+Roundabout+Accra&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cleatworldgh. All rights reserved.</p>
          <p className="font-display tracking-widest uppercase">Made in Accra · Worn worldwide</p>
        </div>
      </footer>
    </div>
  );
}
