"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { iznikTilesApp } from "@/lib/apps";
import AppTopBar from "@/components/apps/AppTopBar";
import AppFooter from "@/components/apps/AppFooter";
import PhoneFrame from "@/components/apps/PhoneFrame";
import StoreBadges from "@/components/apps/StoreBadges";
import Tile, { type TileKind } from "./Tile";

// Oyunun paleti
const COBALT = "#12305A";
const UI = "/apps/iznik-tiles/ui";

const content = {
  en: {
    nav: { how: "How to play", mansion: "Mansion", features: "Features", screens: "Screenshots" },
    status: "In App Store review",
    subtitle: "Relaxing Tile Matching Puzzle",
    heroText:
      "Discover the timeless beauty of Iznik tiles in a relaxing triple tile match puzzle. Match three tiles, clear layered boards and restore a historic Ottoman mansion.",
    heroChips: ["No timers", "No lives", "Plays offline"],
    comingSoon: "Coming soon to the App Store",
    howTitle: "Easy to learn, satisfying to master",
    steps: [
      { title: "Tap free tiles", text: "Tiles with nothing on top are free. Tap one to move it into your tray." },
      { title: "Match three", text: "Three tiles with the same motif in the tray match and disappear." },
      { title: "Clear the board", text: "Empty the board to win. Plan ahead: if the tray fills up, the level is lost." },
    ],
    trayCaption: "Six slots. Three of a kind. One more tulip and they're gone.",
    mansionTitle: "Restore a historic mansion",
    mansionText:
      "Every level you win earns stars and tile shards. Use them to bring a ruined Ottoman mansion back to life, room by room.",
    mansionHint: "Hover a room to restore it",
    rooms: { avlu: "Courtyard", sofa: "Hall", hamam: "Bathhouse", bahce: "Garden" },
    rewards: { star: "Stars", shard: "Tile shards" },
    twistsTitle: "New twists as you progress",
    twists: [
      { kind: "pattern", name: "Pattern tiles", text: "Three golden pieces join into a tulip branch and earn a bonus tile shard." },
      { kind: "hidden", name: "Hidden tiles", text: "Face down until uncovered. What's underneath?" },
      { kind: "locked", name: "Locked tiles", text: "Chained in place until you match a trio of the motif on the key." },
      { kind: "normal", name: "Narrow tray", text: "Tougher levels with less room to breathe." },
    ],
    jokersTitle: "Helpful jokers",
    jokers: [
      { icon: "icon_undo", name: "Undo" },
      { icon: "icon_hint", name: "Hint" },
      { icon: "icon_shuffle", name: "Shuffle" },
      { icon: "icon_release", name: "Pull Out" },
    ],
    featuresTitle: "Made to relax",
    features: [
      { title: "Handcrafted levels", text: "Every level is tested by hand and guaranteed to be solvable." },
      { title: "Playful shapes", text: "Hearts, smiley faces, butterflies, fish, tulips and more." },
      { title: "18 Iznik motifs", text: "Tulips, carnations, pomegranates, cypresses and more." },
      { title: "Your own pace", text: "No timers, no lives, no energy. Play whenever you like." },
      { title: "Free, no purchases", text: "Completely free with no in-app purchases." },
      { title: "English & Turkish", text: "Plays offline, anywhere." },
    ],
    motifsTitle: "The art of Iznik",
    screensTitle: "Screenshots",
    ctaTitle: "Relax, focus and match",
    ctaText: "Iznik Tiles is in App Store review and will be available on iPhone and iPad soon.",
    footer: { privacy: "Privacy Policy", support: "Support", contact: "Contact" },
  },
  tr: {
    nav: { how: "Nasıl oynanır", mansion: "Konak", features: "Özellikler", screens: "Ekranlar" },
    status: "App Store incelemesinde",
    subtitle: "Rahatlatıcı Taş Eşleştirme",
    heroText:
      "İznik çinisinin zamansız güzelliğini rahatlatıcı bir üçlü taş eşleştirme oyununda keşfet. Üç taşı eşleştir, katmanlı tahtaları temizle, tarihi bir Osmanlı konağını yeniden canlandır.",
    heroChips: ["Süre yok", "Can yok", "İnternetsiz oynanır"],
    comingSoon: "Yakında App Store'da",
    howTitle: "Öğrenmesi kolay, ustalaşması keyifli",
    steps: [
      { title: "Açık taşlara dokun", text: "Üstünde taş olmayan taşlar açıktır. Dokunduğun taş tepsine gider." },
      { title: "Üçünü buluştur", text: "Tepside aynı motiften üç taş buluşunca kaybolur." },
      { title: "Tahtayı temizle", text: "Tahtayı boşaltırsan kazanırsın. Hamleni planla: tepsi dolarsa bölüm kaybedilir." },
    ],
    trayCaption: "Altı yuva. Üç aynı taş. Bir lale daha gelirse hepsi kaybolur.",
    mansionTitle: "Tarihi bir konağı restore et",
    mansionText:
      "Kazandığın her bölüm yıldız ve çini parçası getirir. Bunlarla harap bir Osmanlı konağını oda oda yeniden hayata döndür.",
    mansionHint: "Onarmak için bir odanın üzerine gel",
    rooms: { avlu: "Avlu", sofa: "Sofa", hamam: "Hamam", bahce: "Bahçe" },
    rewards: { star: "Yıldız", shard: "Çini parçası" },
    twistsTitle: "İlerledikçe yeni sürprizler",
    twists: [
      { kind: "pattern", name: "Desen taşları", text: "Üç altın parça birleşip lale dalı olur, ek çini parçası kazandırır." },
      { kind: "hidden", name: "Gizli taşlar", text: "Üstü açılana kadar ters durur. Altında ne var?" },
      { kind: "locked", name: "Kilitli taşlar", text: "Anahtardaki motiften bir üçlü eşleşene kadar zincirli kalır." },
      { kind: "normal", name: "Dar tepsi", text: "Nefes alacak yerin daha az olduğu zorlu bölümler." },
    ],
    jokersTitle: "Yardımcı jokerler",
    jokers: [
      { icon: "icon_undo", name: "Geri Al" },
      { icon: "icon_hint", name: "İpucu" },
      { icon: "icon_shuffle", name: "Karıştır" },
      { icon: "icon_release", name: "Çıkar" },
    ],
    featuresTitle: "Rahatlamak için tasarlandı",
    features: [
      { title: "Özenle hazırlanmış bölümler", text: "Her bölüm tek tek test edildi, hepsi çözülebilir." },
      { title: "Eğlenceli şekiller", text: "Kalp, gülen yüz, kelebek, balık, lale ve daha fazlası." },
      { title: "18 İznik motifi", text: "Lale, karanfil, nar, servi ve daha fazlası." },
      { title: "Kendi hızında", text: "Süre yok, can yok, enerji yok. Ne zaman istersen oyna." },
      { title: "Ücretsiz, satın alma yok", text: "Tamamen ücretsiz, uygulama içi satın alma yok." },
      { title: "Türkçe ve İngilizce", text: "İnternetsiz, her yerde oynanır." },
    ],
    motifsTitle: "İznik sanatı",
    screensTitle: "Ekran görüntüleri",
    ctaTitle: "Rahatla, odaklan, eşleştir",
    ctaText: "Iznik Tiles şu an App Store incelemesinde; çok yakında iPhone ve iPad'de.",
    footer: { privacy: "Gizlilik Politikası", support: "Destek", contact: "İletişim" },
  },
};

const ROOMS = ["avlu", "sofa", "hamam", "bahce"] as const;
const SCREENS = ["match", "shapes", "konak", "hard", "butterfly"];
const MOTIFS = Array.from({ length: 18 }, (_, i) => i);

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="font-[family-name:var(--font-baloo)] text-3xl font-extrabold tracking-tight text-[#F5C04A] sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 leading-relaxed text-[#D8E2F2]/75">{text}</p>}
    </div>
  );
}

export default function IznikLanding() {
  const { locale } = useLanguage();
  const c = content[locale];
  const shot = (name: string) => `/apps/iznik-tiles/screens/${locale}/${name}.jpg`;

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-clip bg-[#0E2649] text-[#F6ECD9] selection:bg-[#F5C04A]/40"
    >
      {/* Arka plandaki soluk motif deseni */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-[0.07]"
        style={{
          backgroundImage: "url(/apps/iznik-tiles/motifs/0.png), url(/apps/iznik-tiles/motifs/6.png)",
          backgroundSize: "72px, 72px",
          backgroundPosition: "0 0, 90px 90px",
          backgroundRepeat: "repeat",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <AppTopBar
        app={iznikTilesApp}
        className="border-b border-[#F5C04A]/10 bg-[#0E2649]/85"
        accentClassName="hover:text-[#F5C04A]"
        sections={[
          { href: "#how", label: c.nav.how },
          { href: "#mansion", label: c.nav.mansion },
          { href: "#features", label: c.nav.features },
          { href: "#screens", label: c.nav.screens },
        ]}
      />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(42,111,196,0.35),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-6 flex flex-col items-center gap-4 lg:flex-row">
              <Image
                src={iznikTilesApp.icon}
                alt="Iznik Tiles"
                width={88}
                height={88}
                priority
                className="rounded-[1.4rem] shadow-xl shadow-black/40"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C04A]/30 bg-[#F5C04A]/10 px-3 py-1 text-xs font-semibold text-[#F5C04A]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F5C04A]" />
                {c.status}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-baloo)] text-6xl font-extrabold leading-none tracking-tight text-[#F5C04A] drop-shadow-[0_4px_0_rgba(0,0,0,0.25)] sm:text-7xl">
              Iznik Tiles
            </h1>
            <p className="mt-3 font-[family-name:var(--font-baloo)] text-2xl font-semibold text-[#F6ECD9]">
              {c.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-[#D8E2F2]/80 lg:mx-0">{c.heroText}</p>
            <StoreBadges
              app={iznikTilesApp}
              comingSoonLabel={c.comingSoon}
              className="mt-8 justify-center text-[#F6ECD9] lg:justify-start"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {c.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#F6ECD9]/15 bg-[#173B6B] px-3.5 py-1.5 text-xs font-semibold text-[#F6ECD9]/90"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[470px] w-full max-w-[460px] sm:h-[540px]">
            <PhoneFrame
              src={shot("shapes")}
              alt="Iznik Tiles shaped board"
              screenColor={COBALT}
              frameClassName="border-[#D9A93A] bg-[#D9A93A]"
              className="absolute left-0 top-12 w-[40%] -rotate-6 opacity-90"
              sizes="200px"
            />
            <PhoneFrame
              src={shot("konak")}
              alt="Iznik Tiles mansion"
              screenColor={COBALT}
              frameClassName="border-[#D9A93A] bg-[#D9A93A]"
              className="absolute right-0 top-12 w-[40%] rotate-6 opacity-90"
              sizes="200px"
            />
            <PhoneFrame
              src={shot("match")}
              alt="Iznik Tiles gameplay"
              screenColor={COBALT}
              frameClassName="border-[#F5C04A] bg-[#F5C04A] shadow-black/50"
              className="absolute left-1/2 top-0 w-[48%] -translate-x-1/2"
              sizes="240px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Nasıl oynanır */}
      <section id="how" className="scroll-mt-20 bg-[#0B1F3D] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.howTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {c.steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-[#F5C04A]/15 bg-[#173B6B]/60 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5C04A] font-[family-name:var(--font-baloo)] text-xl font-extrabold text-[#12305A]">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-baloo)] text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D8E2F2]/75">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Tepsi örneği */}
          <div className="mx-auto mt-14 max-w-xl">
            <div className="grid grid-cols-6 gap-1.5 rounded-2xl border-2 border-[#D9A93A]/50 bg-[#E9DBBF] p-2 shadow-inner sm:gap-2 sm:p-3">
              {[0, 0, 5, 5, 9, null].map((m, i) => (
                <div key={i} className="aspect-[5/6] rounded-lg bg-[#D8C7A4]/60">
                  {m !== null && <Tile motif={m} />}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-[#D8E2F2]/70">{c.trayCaption}</p>
          </div>
        </div>
      </section>

      {/* Konak */}
      <section id="mansion" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.mansionTitle} text={c.mansionText} />
          <div className="mb-8 flex justify-center gap-6 text-sm font-semibold">
            <span className="inline-flex items-center gap-2">
              <Image src={`${UI}/icon_star.png`} alt="" width={28} height={28} />
              {c.rewards.star}
            </span>
            <span className="inline-flex items-center gap-2">
              <Image src={`${UI}/icon_shard.png`} alt="" width={28} height={28} />
              {c.rewards.shard}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ROOMS.map((room) => (
              <figure
                key={room}
                tabIndex={0}
                className="group relative aspect-square overflow-hidden rounded-3xl border-2 border-[#D9A93A]/60 outline-none"
              >
                <Image
                  src={`/apps/iznik-tiles/konak/${room}.jpg`}
                  alt={c.rooms[room]}
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover transition duration-700 lg:brightness-75 lg:sepia lg:group-hover:scale-105 lg:group-hover:brightness-100 lg:group-hover:sepia-0 lg:group-focus:brightness-100 lg:group-focus:sepia-0"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 pt-10 font-[family-name:var(--font-baloo)] text-xl font-bold">
                  {c.rooms[room]}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 hidden text-center text-xs text-[#D8E2F2]/50 lg:block">{c.mansionHint}</p>
        </div>
      </section>

      {/* Mekanikler ve jokerler */}
      <section className="bg-[#0B1F3D] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.twistsTitle} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.twists.map((t, i) => (
              <div key={t.name} className="rounded-3xl border border-[#F5C04A]/15 bg-[#173B6B]/60 p-6 text-center">
                <div className="mx-auto flex h-24 items-end justify-center gap-1">
                  {t.kind === "normal" ? (
                    <div className="grid w-full max-w-[150px] grid-cols-5 gap-1 rounded-lg bg-[#E9DBBF] p-1.5">
                      {[11, 11, 3, null, null].map((m, j) => (
                        <div key={j} className="aspect-[5/6] rounded bg-[#D8C7A4]/60">
                          {m !== null && <Tile motif={m} />}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Tile
                      kind={t.kind as TileKind}
                      motif={[0, 0, 1][i]}
                      keyMotif={5}
                      className="w-16"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-baloo)] text-lg font-bold">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D8E2F2]/75">{t.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-20 text-center font-[family-name:var(--font-baloo)] text-2xl font-bold text-[#F5C04A]">
            {c.jokersTitle}
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-10">
            {c.jokers.map((j) => (
              <div key={j.icon} className="flex flex-col items-center gap-3">
                <span className="flex h-18 w-18 items-center justify-center rounded-full border-[3px] border-[#F5C04A] bg-[#12305A] shadow-lg">
                  <Image src={`${UI}/${j.icon}.png`} alt="" width={40} height={40} />
                </span>
                <span className="text-sm font-semibold">{j.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section id="features" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.featuresTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f, i) => (
              <div key={f.title} className="flex gap-4 rounded-3xl border border-[#F6ECD9]/10 bg-[#173B6B]/40 p-5">
                <Tile motif={[0, 12, 1, 7, 5, 11][i]} className="w-11 shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-baloo)] text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#D8E2F2]/75">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-20 text-center font-[family-name:var(--font-baloo)] text-2xl font-bold text-[#F5C04A]">
            {c.motifsTitle}
          </h3>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-6 gap-2 sm:grid-cols-9 sm:gap-3">
            {MOTIFS.map((m) => (
              <Tile
                key={m}
                motif={m}
                className="transition duration-300 hover:-translate-y-1.5 hover:rotate-3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="screens" className="scroll-mt-20 bg-[#0B1F3D] py-24">
        <SectionTitle title={c.screensTitle} />
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:justify-center">
          {SCREENS.map((name) => (
            <PhoneFrame
              key={name}
              src={shot(name)}
              alt={`Iznik Tiles: ${name}`}
              screenColor={COBALT}
              frameClassName="border-[#D9A93A] bg-[#D9A93A]"
              className="w-[200px] shrink-0 snap-center sm:w-[210px]"
              sizes="210px"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#F5C04A]/60 bg-linear-to-br from-[#1F4E9C] to-[#12305A] p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -left-6 -top-6 w-24 rotate-12 opacity-80">
              <Tile motif={0} />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-4 w-24 -rotate-12 opacity-80">
              <Tile motif={5} />
            </div>
            <h2 className="relative font-[family-name:var(--font-baloo)] text-3xl font-extrabold text-[#F5C04A] sm:text-4xl">
              {c.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-[#D8E2F2]/85">{c.ctaText}</p>
            <StoreBadges
              app={iznikTilesApp}
              comingSoonLabel={c.comingSoon}
              className="relative mt-8 justify-center text-[#F6ECD9]"
            />
          </div>
        </div>
      </section>

      <AppFooter
        appName={iznikTilesApp.fullName}
        className="text-[#F6ECD9]/90"
        links={[
          { href: "/iznik-tiles/privacy", label: c.footer.privacy },
          { href: "/iznik-tiles/support", label: c.footer.support },
          { href: "mailto:yunusesogut@gmail.com?subject=Iznik%20Tiles", label: c.footer.contact },
        ]}
      />
    </div>
  );
}
