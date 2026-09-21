import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Building,
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  Activity,
  Trophy,
  Users,
  Calendar,
  Star,
  Quote,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Tag
} from 'lucide-react';
import logoImg from './src/assets/karsa-logo.png';
import heroImg from './src/assets/karsa-hero.jpg';
import courtSintetisA from './src/assets/lapangan-sintetis-a.webp';
import courtVinylB from './src/assets/lapangan-vinyl-b.webp';
import courtSintetisC from './src/assets/lapangan-sintetis-c.webp';

const pageData = {
  name: "Karsa Futsal",
  phone: "6289529605601",
  address: "Jl. Sudirman No.10, Palangka Raya, Kalteng.",
  title: "Arena Futsal Terbaik di Jantung Kota",
  description: "Bermain dengan semangat juara di Karsa Futsal. Kami menyediakan fasilitas lapangan berstandar nasional, rumput sintetis premium, dan sirkulasi udara terbaik untuk performa maksimal Anda.",
  profileImg: logoImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah/", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "Karsa Futsal adalah pusat kebugaran dan arena olahraga yang didedikasikan untuk para pencinta sepak bola dan futsal di Palangka Raya. Kami berkomitmen memberikan pengalaman bermain yang aman, nyaman, dan kompetitif.",
  history: "Berdiri sejak tahun 2018, Karsa Futsal bermula dari kecintaan pendirinya terhadap olahraga futsal. Dimulai dengan satu lapangan sederhana, kini Karsa Futsal telah berkembang menjadi arena premium dengan tiga lapangan berstandar internasional yang selalu menjadi pilihan utama turnamen lokal.",
  locationHighlights: [
    { time: "Parkir Luas", place: "& Aman", icon: "Shield" },
    { time: "Kantin", place: "Tersedia", icon: "Coffee" },
    { time: "Ruang Ganti", place: "Bersih", icon: "Users" }
  ],
  catalogs: [
    { 
      name: "Lapangan Sintetis A", 
      desc: "Rumput sintetis monofilament tebal, cocok untuk kontrol bola presisi.",
      img: courtSintetisA 
    },
    { 
      name: "Lapangan Vinyl B", 
      desc: "Lantai vinyl empuk (shock absorption) mengurangi risiko cedera.",
      img: courtVinylB 
    },
    { 
      name: "Lapangan Sintetis C", 
      desc: "Area luas dengan tribun penonton, sering digunakan untuk turnamen.",
      img: courtSintetisC 
    }
  ],
  pricing: [
    { time: "Senin - Jumat (08:00 - 15:00)", price: "Rp 120.000 / Jam" },
    { time: "Senin - Jumat (15:00 - 24:00)", price: "Rp 150.000 / Jam" },
    { time: "Sabtu - Minggu / Libur", price: "Rp 175.000 / Jam" },
    { time: "Sewa Member (Bulanan)", price: "Diskon 15%" }
  ],
  faqs: [
    { q: "Apakah tersedia penyewaan bola dan rompi?", a: "Ya, harga sewa lapangan sudah termasuk 1 buah bola. Untuk rompi dikenakan biaya sewa Rp 20.000/set (isi 12)." },
    { q: "Apakah bisa menyewa sepatu futsal di lokasi?", a: "Tentu, kami menyediakan penyewaan sepatu futsal berbagai ukuran dengan harga Rp 25.000/main." },
    { q: "Berapa minimal waktu penyewaan lapangan?", a: "Minimal penyewaan adalah 1 jam. Anda bisa menyewa lebih dari itu dengan kelipatan 30 menit setelah jam pertama." },
    { q: "Apakah DP (Down Payment) diwajibkan?", a: "Ya, untuk mengunci jadwal yang Anda pesan, kami mewajibkan DP minimal 50% dari total biaya sewa." }
  ],
  testimonials: [
    { name: "Reza Pahlevi", rating: 5, text: "Lapangan sintetisnya mantap, rumputnya tebal dan tidak licin. Sirkulasi udara bagus jadi tidak terlalu pengap pas main siang hari." },
    { name: "Andi Saputra", rating: 5, text: "Sering langganan main mingguan di sini pakai lapangan vinyl. Fasilitas ruang ganti dan toiletnya selalu bersih. Top Karsa!" },
    { name: "Komunitas Futsal PKY", rating: 4, text: "Parkiran luas, tribun penontonnya juga nyaman untuk sparing. Kantinnya murah meriah, cocok buat nongkrong habis main." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imgUrl) => {
    setLightbox({ isOpen: true, image: imgUrl });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: '' });
    document.body.style.overflow = 'unset';
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const duration = formData.get('duration');
    const courtType = formData.get('courtType');
    const notes = formData.get('notes') || '-';
    
    const waText = `Halo Admin *${pageData.name}*, saya *${name}*.%0A%0ASaya ingin cek ketersediaan lapangan dengan detail berikut:%0A- Tanggal: *${date}*%0A- Jam Mulai: *${time}*%0A- Durasi: *${duration} Jam*%0A- Tipe Lapangan: *${courtType}*%0A- Catatan: ${notes}%0A%0AApakah jadwal tersebut masih kosong?`;
    
    const waUrl = `https://wa.me/${pageData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const getShareUrl = () => {
    if (typeof window !== 'undefined' && window.location.href && window.location.href.startsWith('http')) {
      return window.location.href;
    }
    return 'https://solusilokal.github.io/Karsa-Futsal/';
  };

  const getShareText = () => {
    return `${pageData.name} - ${pageData.title}. Arena futsal standar nasional di Palangka Raya! Info & Booking: https://wa.me/${pageData.phone}`;
  };

  const handleShare = (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    const textToCopy = getShareUrl();
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        tempInput.style.top = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch (e) {
        console.error('Copy fallback error:', e);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(getShareText() + '\n' + getShareUrl())}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageData.name,
          text: getShareText(),
          url: getShareUrl(),
        });
      } catch (err) {
        // User cancelled or share dismissed
      }
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F0F4F8; /* Light Blue background */
          color: #0D2B4A; /* Deep Blue text */
          margin: 0;
          font-family: 'Manrope', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#0D2B4A]">
          
          <button
            onClick={handleShare}
            type="button"
            aria-label="Bagikan halaman ini"
            className="absolute top-6 right-6 z-30 p-3 bg-[#0D2B4A]/60 backdrop-blur-md rounded-full border border-white/25 text-white hover:bg-[#0D2B4A]/90 active:scale-90 transition-all shadow-lg cursor-pointer"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B4A] via-[#0D2B4A]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-1.5 bg-white mb-6 shadow-2xl border-2 border-[#98C93C] flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#98C93C] mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-blue-50 font-medium text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            {/* Social Media & Maps Links (Updated Layout) */}
            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <MapPin size={18} /> Rute Lokasi
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#98C93C] text-[#0D2B4A] rounded-2xl font-extrabold text-[14px] uppercase tracking-wider hover:bg-[#7AB02D] hover:text-white transition-all shadow-[0_8px_30px_rgb(152,201,60,0.4)]"
            >
              Cek Jadwal & Booking
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        <section className="py-6 px-6 bg-[#07192F] shadow-inner">
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            {pageData.locationHighlights.map((loc, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-blue-800/50 text-xs text-blue-50 font-semibold shadow-sm">
                <Check size={14} className="text-[#98C93C]" />
                {loc.time} {loc.place}
              </span>
            ))}
          </div>
        </section>

        <section className="pt-12 pb-8 px-6 bg-white border-b border-slate-100">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Trophy className="text-[#98C93C]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0D2B4A] tracking-tight">Tentang Karsa</h2>
            </div>
          </div>
          
          <div className="bg-[#F0F4F8] rounded-[1.5rem] p-6 border border-slate-200 shadow-sm mb-6">
            <p className="text-slate-600 text-[13px] leading-relaxed">
              {pageData.about}
            </p>
          </div>

          <div className="bg-white rounded-[1.5rem] p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-[#0D2B4A] mb-2 flex items-center gap-2">
              <Clock size={16} /> Sejarah Berdiri
            </h3>
            <p className="text-slate-600 text-[13px] leading-relaxed">
              {pageData.history}
            </p>
          </div>
        </section>

        <section className="pt-12 pb-8 bg-slate-50 border-b border-slate-200">
      <div className="px-6 mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <LayoutGrid className="text-[#98C93C]" size={24} />
          <h2 className="text-2xl font-extrabold text-[#0D2B4A] tracking-tight">Katalog Lapangan</h2>
        </div>
        <p className="text-slate-500 text-xs ml-8 mt-1">Pilih tipe lapangan sesuai dengan preferensi tim Anda.</p>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-6 no-scrollbar">
            {pageData.catalogs.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[260px] rounded-[1.5rem] overflow-hidden group border border-slate-200 shadow-md bg-white flex flex-col"
              >
                <div 
                  className="w-full aspect-[4/3] overflow-hidden cursor-pointer relative"
                  onClick={() => openLightbox(item.img)}
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-1 rounded">Perbesar</div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#0D2B4A] text-sm mb-2">{item.name}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-white border-b border-slate-100">
      <div className="mb-8 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Tag className="text-[#98C93C]" size={24} />
          <h2 className="text-2xl font-extrabold text-[#0D2B4A] tracking-tight">Daftar Harga Sewa</h2>
        </div>
        <p className="text-slate-500 text-xs ml-8 mt-1">Tarif berlaku untuk semua jenis lapangan.</p>
      </div>

      <div className="flex flex-col gap-3">
            {pageData.pricing.map((price, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[#F0F4F8] border border-slate-200 rounded-2xl">
                <span className="text-[13px] font-semibold text-[#0D2B4A]">{price.time}</span>
                <span className="text-[14px] font-bold text-[#98C93C]">{price.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-8 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#98C93C]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0D2B4A] tracking-tight">Tanya Jawab (FAQ)</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openFaqIndex === idx ? 'bg-white border-[#98C93C]' : 'bg-white border-slate-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="text-[13px] font-bold text-[#0D2B4A] pr-4">{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-[#98C93C] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-4 pt-0 text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-white border-b border-slate-100">
          <div className="mb-8 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#98C93C]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0D2B4A] tracking-tight">Testimoni Tim</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8 mt-1">Pengalaman seru mereka yang sudah bermain di Karsa.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-50 p-6 rounded-[1.5rem] border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#98C93C] text-[#98C93C]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0D2B4A] flex items-center justify-center text-[#98C93C] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-[#0D2B4A]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="booking-form" className="py-16 px-6 bg-[#07192F]">
          <div className="bg-white rounded-[2rem] p-7 shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#F0F4F8] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#F0F4F8] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-extrabold text-[#0D2B4A] mb-2">Booking Lapangan</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi formulir untuk mengecek jadwal kosong. Kami akan merespon melalui WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Nama / Nama Tim</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Cth: FC Barcelona"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Tanggal Main</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Jam Mulai</label>
                  <input 
                    type="time" 
                    name="time" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Durasi (Jam)</label>
                  <select 
                    name="duration" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all appearance-none"
                  >
                    <option value="1">1 Jam</option>
                    <option value="2">2 Jam</option>
                    <option value="3">3 Jam</option>
                    <option value="4">4 Jam</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Tipe Lapangan</label>
                  <select 
                    name="courtType" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all appearance-none"
                  >
                    <option value="">Pilih...</option>
                    <option value="Sintetis A">Sintetis A</option>
                    <option value="Vinyl B">Vinyl B</option>
                    <option value="Sintetis C">Sintetis C</option>
                    <option value="Bebas">Bebas (Mana yang kosong)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-[#0D2B4A] ml-1">Catatan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Tolong siapkan 2 bola..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#98C93C] focus:ring-1 focus:ring-[#98C93C] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#98C93C] text-[#0D2B4A] font-extrabold text-[15px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#7AB02D] hover:text-white transition-all shadow-[0_4px_20px_rgb(152,201,60,0.3)]"
              >
                Kirim ke WhatsApp
                <MessageCircle size={20} />
              </button>
            </form>
          </div>
        </section>

        <footer className="pt-10 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 rounded-full p-1 bg-white shadow-md border border-[#98C93C]/40 mb-4 overflow-hidden flex items-center justify-center">
            <img 
              src={pageData.profileImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#0D2B4A] text-lg">{pageData.name}</span>
            <span className="max-w-[250px] mt-1">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[11px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[11px] mt-2 tracking-wide font-medium hover:text-[#7AB02D] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0D2B4A] backdrop-blur-xl border border-[#98C93C]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(13,43,74,0.5)] hover:bg-[#07192F] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#98C93C]">Cek Jadwal Lapangan</span>
            <div className="bg-[#98C93C] text-[#0D2B4A] p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.image} 
              alt="View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 relative">
              <h3 className="text-[#0D2B4A] font-bold text-base">Bagikan {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mb-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white border border-[#98C93C]/40 p-1 mb-3 shadow-sm flex items-center justify-center overflow-hidden">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full rounded-full object-contain" />
              </div>
              <h4 className="text-[#0D2B4A] font-bold text-base text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-xs text-center mt-1 max-w-[280px] leading-relaxed">{pageData.title}</p>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-slate-50 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-200 transition-all shadow-sm border border-slate-200">
                  {copied ? <Check size={22} className="text-[#98C93C]" /> : <Copy size={22} />}
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </button>

              <button
                type="button"
                onClick={shareToWhatsApp}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-slate-50 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white group-hover:brightness-110 transition-all shadow-sm">
                  <MessageCircle size={22} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </button>
              
              <button
                type="button"
                onClick={shareToFacebook}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-slate-50 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white group-hover:brightness-110 transition-all shadow-sm">
                  <Facebook size={22} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </button>

              <button
                type="button"
                onClick={shareToTwitter}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-slate-50 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white group-hover:brightness-110 transition-all shadow-sm">
                  <Twitter size={22} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Twitter / X</span>
              </button>
            </div>

            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 active:scale-95 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share size={16} />
                Bagikan via Aplikasi Lain
              </button>
            )}
            
          </div>
        </div>
      )}
    </>
  );
}