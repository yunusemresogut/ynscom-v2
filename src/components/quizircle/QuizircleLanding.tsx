"use client";

import Image from "next/image";
import {
  HiOutlineBolt,
  HiOutlineClock,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineTrophy,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { FaCrown } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { quizircleApp } from "@/lib/apps";
import AppTopBar from "@/components/apps/AppTopBar";
import AppFooter from "@/components/apps/AppFooter";
import PhoneFrame from "@/components/apps/PhoneFrame";
import StoreBadges from "@/components/apps/StoreBadges";
import LetterRing from "./LetterRing";

const SCREEN_BG = "#0F0F12";

const content = {
  en: {
    nav: { how: "How to play", modes: "Modes", features: "Features", screens: "Screenshots" },
    eyebrow: "Available on iOS & Android",
    heroA: "Think fast.",
    heroB: "Answer faster.",
    heroText:
      "Circle the alphabet, answer a question for every letter, race the clock and climb the leaderboards. Type or say your answers, challenge friends to duels and join the weekly tournament.",
    heroChips: ["A to Z letter circle", "Voice or type", "Turkish & English"],
    comingSoon: "Coming soon",
    howTitle: "How to play",
    howText: "One letter at a time, all the way around the circle. A short interactive tutorial walks you through it on your first launch.",
    steps: [
      { title: "Letters light up", text: "Letters activate in order. The question for the active letter appears in the middle of the circle." },
      { title: "Type or say it", text: "Answer with the in-game keyboard or just speak into the microphone. Correct answers earn points and bonus time." },
      { title: "Pass and come back", text: "Not sure? Pass and return to the yellow letters later in the round. Keep your combo alive." },
    ],
    legend: { active: "Active", correct: "Correct", wrong: "Wrong", pass: "Passed" },
    modesTitle: "Four ways to play",
    modes: [
      { name: "Classic", meta: "5 min", text: "Type or speak your answers and use your jokers." },
      { name: "Fast", meta: "3 min", text: "Less time, more intensity." },
      { name: "Host", meta: "Party", text: "The phone holder reads the question; everyone else guesses aloud." },
      { name: "Weekly Tournament", meta: "Weekly", text: "Mixed hard questions, a new set every week and its own global ranking." },
    ],
    features: [
      {
        shot: "classic",
        title: "Type it or just say it",
        text: "Use the built-in keyboard or tap the mic and answer out loud. Correct answers add points and bonus time, and every streak grows your combo.",
      },
      {
        shot: "hint",
        title: "Jokers that change the game",
        text: "You get one use of each joker every day. Run out? Watch a short ad to refill them all.",
        list: [
          { icon: "clock", label: "+15 seconds: extend the clock when time runs low" },
          { icon: "shield", label: "Shield: your combo survives the next wrong answer" },
          { icon: "bulb", label: "Hint: reveal some letters of the answer" },
        ],
      },
      {
        shot: "host",
        title: "Quiz night in your pocket",
        text: "Host mode turns one phone into a party game. The holder sees the question and the answer and marks guesses right or wrong.",
      },
      {
        shot: "weekly",
        title: "Weekly tournament & duels",
        text: "A fresh set of mixed hard questions every week, three free tries and its own global leaderboard. Add friends with your friend code and send 1v1 duels in any category.",
      },
      {
        shot: "results",
        title: "Every round counts",
        text: "Score, accuracy, max combo and time bonus after each round. Daily, weekly and all-time leaderboards for every mode and category, plus bronze, silver and gold achievements.",
      },
    ],
    categoriesTitle: "Nine categories",
    categoriesText: "Five categories are always free. The four special ones give you one free round a day, and Premium makes them unlimited. Each category has its own leaderboard.",
    categories: {
      general: "General Knowledge",
      history: "History",
      technology: "Technology",
      science: "Science",
      sports: "Sports",
      mythology: "Mythology & Legends",
      food: "Food & Kitchen",
      nature: "Nature & Animals",
      gaming: "Gaming",
    },
    screensTitle: "Screenshots",
    gallery: {
      home: "Quizircle home screen",
      modes: "Mode selection",
      categories: "Category selection",
      classic: "A Classic round in progress",
      hint: "Hint joker revealing letters",
      host: "Host mode",
      weekly: "Weekly tournament",
      results: "Round results",
    },
    premiumTitle: "Quizircle Premium",
    premiumText:
      "Optional, one-time purchase. No subscription. Unlimited play in every special category, unlimited weekly tournament tries, no ads at all and a gold frame with a crown on your profile, leaderboards and duels.",
    ctaTitle: "Think you know your stuff?",
    ctaText: "Complete the letter circle, beat the clock and claim your spot on the leaderboard.",
    footer: { privacy: "Privacy Policy", terms: "Terms of Service", deletion: "Account Deletion", contact: "Contact" },
  },
  tr: {
    nav: { how: "Nasıl oynanır", modes: "Modlar", features: "Özellikler", screens: "Ekranlar" },
    eyebrow: "iOS ve Android'de",
    heroA: "Hızlı düşün.",
    heroB: "Daha hızlı cevapla.",
    heroText:
      "Alfabeyi dolaş, her harf için gelen soruyu yanıtla, süreye karşı yarış ve liderlik tablosunda yüksel. Cevabını yaz ya da söyle, arkadaşlarına düello gönder, haftalık turnuvaya katıl.",
    heroChips: ["A'dan Z'ye harf çemberi", "Sesli veya yazılı", "Türkçe ve İngilizce"],
    comingSoon: "Yakında",
    howTitle: "Nasıl oynanır?",
    howText: "Harf harf, çemberin etrafında tam tur. İlk açılışta kısa bir interaktif eğitim sana temelleri gösterir.",
    steps: [
      { title: "Harfler sırayla yanar", text: "Çemberdeki harfler alfabetik sırayla aktif olur. Aktif harfin sorusu çemberin ortasında görünür." },
      { title: "Yaz ya da söyle", text: "Oyun içi klavyeyle yaz veya mikrofona söyle. Doğru cevaplar puan ve ek süre kazandırır." },
      { title: "Pas geç, geri dön", text: "Emin değil misin? Pas ver, tur içinde sarı harflere geri dön. Combo serini koru." },
    ],
    legend: { active: "Aktif", correct: "Doğru", wrong: "Yanlış", pass: "Pas" },
    modesTitle: "Dört farklı mod",
    modes: [
      { name: "Klasik", meta: "5 dk", text: "Yazarak veya sesle cevapla, jokerlerini kullan." },
      { name: "Hızlı", meta: "3 dk", text: "Daha az süre, daha yüksek tempo." },
      { name: "Sen Sor", meta: "Parti", text: "Telefonu tutan soruyu okur, diğerleri sesli tahmin eder." },
      { name: "Haftalık Turnuva", meta: "Haftalık", text: "Karma zor sorular, her hafta yeni set ve ayrı global sıralama." },
    ],
    features: [
      {
        shot: "classic",
        title: "Yaz ya da söyle",
        text: "Oyun içi klavyeyle yaz ya da mikrofona dokunup cevabını sesli söyle. Doğru cevaplar puan ve ek süre getirir, art arda bildikçe combo serin büyür.",
      },
      {
        shot: "hint",
        title: "Oyunu değiştiren jokerler",
        text: "Her jokerden günde bir hak. Hakların bitince kısa bir reklam izleyip hepsini yenileyebilirsin.",
        list: [
          { icon: "clock", label: "+15 saniye: süre daraldığında turu uzat" },
          { icon: "shield", label: "Kalkan: bir sonraki yanlışta combo serin bozulmaz" },
          { icon: "bulb", label: "İpucu: cevaptaki bazı harfleri aç" },
        ],
      },
      {
        shot: "host",
        title: "Cebindeki bilgi yarışması gecesi",
        text: "Sen Sor modu tek telefonu parti oyununa çevirir. Telefonu tutan soruyu ve cevabı görür, tahminleri doğru ya da yanlış olarak işaretler.",
      },
      {
        shot: "weekly",
        title: "Haftalık turnuva ve düellolar",
        text: "Her hafta yeni bir karma zor soru seti, haftada üç ücretsiz deneme ve ayrı bir global sıralama. Arkadaş kodunla arkadaş ekle, istediğin kategoride 1v1 düello gönder.",
      },
      {
        shot: "results",
        title: "Her tur sayılır",
        text: "Tur sonunda skor, isabet, maksimum combo ve süre bonusu. Her mod ve kategori için günlük, haftalık ve tüm zamanlar sıralaması; bronz, gümüş ve altın başarımlar.",
      },
    ],
    categoriesTitle: "Dokuz kategori",
    categoriesText: "Beş kategori her zaman ücretsiz. Dört özel kategoride her gün bir ücretsiz tur var, Premium ile sınırsız oynanır. Her kategorinin kendi liderlik tablosu var.",
    categories: {
      general: "Genel Kültür",
      history: "Tarih",
      technology: "Teknoloji",
      science: "Bilim",
      sports: "Spor",
      mythology: "Mitoloji ve Efsaneler",
      food: "Yemek ve Mutfak",
      nature: "Doğa ve Hayvanlar",
      gaming: "Oyun Dünyası",
    },
    screensTitle: "Ekran görüntüleri",
    gallery: {
      home: "Quizircle ana ekranı",
      modes: "Mod seçimi",
      categories: "Kategori seçimi",
      classic: "Devam eden bir Klasik tur",
      hint: "Harfleri açan ipucu jokeri",
      host: "Sen Sor modu",
      weekly: "Haftalık turnuva",
      results: "Tur sonucu",
    },
    premiumTitle: "Quizircle Premium",
    premiumText:
      "İsteğe bağlı, tek seferlik ödeme. Abonelik yok. Tüm özel kategorilerde sınırsız oyun, haftalık turnuvada sınırsız deneme, tamamen reklamsız oyun, profilde, sıralamalarda ve düellolarda altın çerçeve ile taç rozeti.",
    ctaTitle: "Bilgine güveniyor musun?",
    ctaText: "Harf çemberini tamamla, süreyi yen, sıralamada yerini al.",
    footer: { privacy: "Gizlilik Politikası", terms: "Kullanım Koşulları", deletion: "Hesap Silme", contact: "İletişim" },
  },
};

const FREE_CATEGORIES = ["general", "history", "technology", "science", "sports"] as const;
const PREMIUM_CATEGORIES = ["mythology", "food", "nature", "gaming"] as const;
const MODE_ICONS = [HiOutlineSparkles, HiOutlineBolt, HiOutlineUserGroup, HiOutlineTrophy];
const LIST_ICONS = { clock: HiOutlineClock, shield: HiOutlineShieldCheck, bulb: HiOutlineLightBulb };
const GALLERY = ["home", "modes", "categories", "classic", "hint", "host", "weekly", "results"] as const;

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-[#9A9AAF]">{text}</p>}
    </div>
  );
}

export default function QuizircleLanding() {
  const { locale } = useLanguage();
  const c = content[locale];
  const shot = (name: string) => `/apps/quizircle/screens/${locale}/${name}.jpg`;

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-[#0F0F12] text-white selection:bg-[#FF6A00]/40">
      <AppTopBar
        app={quizircleApp}
        className="border-b border-white/5 bg-[#0F0F12]/80"
        accentClassName="hover:text-[#FF8C33]"
        sections={[
          { href: "#how", label: c.nav.how },
          { href: "#modes", label: c.nav.modes },
          { href: "#features", label: c.nav.features },
          { href: "#screens", label: c.nav.screens },
        ]}
      />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,106,0,0.18),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:pt-20">
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3">
              <Image src={quizircleApp.icon} alt="Quizircle" width={56} height={56} className="rounded-2xl shadow-lg shadow-[#FF6A00]/20" priority />
              <span className="rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 px-3 py-1 text-xs font-semibold text-[#FF8C33]">
                {c.eyebrow}
              </span>
            </div>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              {c.heroA}
              <br />
              <span className="bg-linear-to-r from-[#FF6A00] to-[#FF3D00] bg-clip-text text-transparent">
                {c.heroB}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-[#9A9AAF] lg:mx-0">{c.heroText}</p>
            <StoreBadges app={quizircleApp} comingSoonLabel={c.comingSoon} className="mt-8 justify-center lg:justify-start" />
            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {c.heroChips.map((chip) => (
                <span key={chip} className="rounded-lg border border-white/10 bg-[#1A1A22] px-3 py-1.5 text-xs font-medium text-white/80">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <LetterRing className="absolute inset-0 m-auto w-full max-w-[520px] opacity-90" />
            <PhoneFrame
              src={shot("home")}
              alt={c.gallery.home}
              screenColor={SCREEN_BG}
              frameClassName="border-[#22222E] bg-black shadow-[#FF6A00]/20"
              className="relative my-16 w-[44%] min-w-[180px] max-w-[250px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Nasıl oynanır */}
      <section id="how" className="scroll-mt-20 border-t border-white/5 bg-[#121218] py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.howTitle} text={c.howText} />
          <div className="grid gap-5 md:grid-cols-3">
            {c.steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-white/5 bg-[#1A1A22] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6A00] text-lg font-black">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A9AAF]">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/80">
            {(
              [
                ["#FF6A00", c.legend.active],
                ["#22C55E", c.legend.correct],
                ["#EF4444", c.legend.wrong],
                ["#FACC15", c.legend.pass],
              ] as const
            ).map(([color, label]) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Modlar */}
      <section id="modes" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionTitle title={c.modesTitle} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.modes.map((mode, i) => {
              const Icon = MODE_ICONS[i];
              return (
                <div
                  key={mode.name}
                  className="group rounded-2xl border border-white/5 bg-[#1A1A22] p-6 transition hover:border-[#FF6A00]/40"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[#FF8C33]" />
                    <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-white/60">{mode.meta}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{mode.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9A9AAF]">{mode.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section id="features" className="scroll-mt-20 border-t border-white/5 bg-[#121218] py-24">
        <div className="mx-auto max-w-5xl space-y-24 px-5 sm:px-6">
          {c.features.map((f, i) => (
            <div
              key={f.shot}
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative w-full max-w-[240px] shrink-0">
                <div className="absolute -inset-10 rounded-full bg-[#FF6A00]/10 blur-3xl" />
                <PhoneFrame
                  src={shot(f.shot)}
                  alt={f.title}
                  screenColor={SCREEN_BG}
                  frameClassName="border-[#22222E] bg-black"
                  className="relative"
                  sizes="240px"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-[#9A9AAF]">{f.text}</p>
                {"list" in f && f.list && (
                  <ul className="mt-6 space-y-3 text-left">
                    {f.list.map((item) => {
                      const Icon = LIST_ICONS[item.icon as keyof typeof LIST_ICONS];
                      return (
                        <li key={item.label} className="flex items-start gap-3 text-sm text-white/85">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/15 text-[#FF8C33]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="pt-1.5">{item.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategoriler */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <SectionTitle title={c.categoriesTitle} text={c.categoriesText} />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
            {[...FREE_CATEGORIES, ...PREMIUM_CATEGORIES].map((key) => {
              const premium = (PREMIUM_CATEGORIES as readonly string[]).includes(key);
              return (
                <div
                  key={key}
                  className={`relative flex flex-col items-center gap-3 rounded-2xl border p-4 text-center ${
                    premium ? "border-[#FACC15]/25 bg-[#FACC15]/5" : "border-white/5 bg-[#1A1A22]"
                  }`}
                >
                  {premium && <FaCrown className="absolute right-2.5 top-2.5 h-3 w-3 text-[#FACC15]" />}
                  <Image src={`/apps/quizircle/categories/${key}.png`} alt="" width={48} height={48} />
                  <span className="text-xs font-medium leading-tight text-white/85">{c.categories[key]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="screens" className="scroll-mt-20 border-t border-white/5 bg-[#121218] py-24">
        <SectionTitle title={c.screensTitle} />
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {GALLERY.map((name) => (
            <PhoneFrame
              key={name}
              src={shot(name)}
              alt={c.gallery[name]}
              screenColor={SCREEN_BG}
              frameClassName="border-[#22222E] bg-black"
              className="w-[200px] shrink-0 snap-center sm:w-[220px]"
              sizes="220px"
            />
          ))}
        </div>
      </section>

      {/* Premium + CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-5 sm:px-6">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-[#FACC15]/20 bg-linear-to-br from-[#FACC15]/10 to-transparent p-8 text-center sm:flex-row sm:text-left">
            <FaCrown className="h-10 w-10 shrink-0 text-[#FACC15]" />
            <div>
              <h3 className="text-xl font-bold">{c.premiumTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9A9AAF]">{c.premiumText}</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#FF6A00] to-[#FF3D00] p-10 text-center sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[28px] border-white/10" />
            <h2 className="relative text-3xl font-black tracking-tight sm:text-4xl">{c.ctaTitle}</h2>
            <p className="relative mx-auto mt-3 max-w-md text-white/85">{c.ctaText}</p>
            <StoreBadges app={quizircleApp} comingSoonLabel={c.comingSoon} className="relative mt-8 justify-center" />
          </div>
        </div>
      </section>

      <AppFooter
        appName={quizircleApp.fullName}
        className="text-white/90"
        links={[
          { href: "/quizircle/privacy", label: c.footer.privacy },
          { href: "/quizircle/terms", label: c.footer.terms },
          { href: "/quizircle/account-deletion", label: c.footer.deletion },
          { href: "mailto:yunusesogut@gmail.com?subject=Quizircle", label: c.footer.contact },
        ]}
      />
    </div>
  );
}
