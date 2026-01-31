
import React, { useState } from 'react';
import Clock from './components/Clock';
import PrayerTimes from './components/PrayerTimes';
import JawiApp from './components/JawiApp';
import { CategoryType } from './types';

const App: React.FC = () => {
  const [isJawi, setIsJawi] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryType | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [selectedSyllabusFolder, setSelectedSyllabusFolder] = useState<string | null>(null);
  const [selectedTextbookFolder, setSelectedTextbookFolder] = useState<string | null>(null);

  const toggleLanguage = () => setIsJawi(!isJawi);

  const handleTabClick = (tabId: CategoryType) => {
    setActiveTab(activeTab === tabId ? null : tabId);
    setSelectedSyllabusFolder(null); 
    setSelectedTextbookFolder(null); // Reset sub-folders when switching main tabs
    if (tabId === CategoryType.JAWI || tabId === CategoryType.PENGENALAN) {
       setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
       }, 100);
    }
  };

  // --- TEXTBOOK DATA ---
  const textbookCategories = [
    {
      id: 'arab',
      title: isJawi ? "سكوله٢ عرب" : "Sekolah Arab",
      description: isJawi ? "كوليكسي بوكو تيک‌س ديݢيتل سكوله٢ عرب" : "Digital Textbook collection for Arab Schools",
      icon: "fa-mosque",
      color: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      id: 'ugama',
      title: isJawi ? "سكوله٢ اوݢام" : "Sekolah Ugama",
      description: isJawi ? "كوليكسي بوكو تيک‌س ديݢيتل سكوله٢ اوݢام" : "Digital Textbook collection for Religious Schools",
      icon: "fa-kaaba",
      color: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    },
    {
      id: 'integrasi',
      title: isJawi ? "اينتيݢراسي (ڤي.اءي)" : "Integrasi (P.I)",
      description: isJawi ? "ڤنديديقن عموم اينتيݢراسي (ڤنديديقن اسلام)" : "General Integrated Education (Pendidikan Islam)",
      icon: "fa-book-quran",
      color: "from-emerald-800 to-emerald-950",
      accent: "bg-emerald-400"
    }
  ];

  const integrasiTextbooks = [
    {
      year: isJawi ? "تاهون ٢" : "Tahun 2",
      title: isJawi ? "ڤنديديقن اسلام" : "Pendidikan Islam",
      subtitle: isJawi ? "تاهون ٢ - ايديسي باهرو" : "Tahun 2 - Edisi Baharu",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%202%2FBuku%20Teks%2FPendidikan%20Islam%20Tahun%202%20High%20Quality%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%202%2FBuku%20Teks",
      coverColor: "from-emerald-800 to-emerald-950",
      accent: "bg-emerald-400"
    },
    {
      year: isJawi ? "تاهون ٣" : "Tahun 3",
      title: isJawi ? "ڤنديديقن اسلام" : "Pendidikan Islam",
      subtitle: isJawi ? "تاهون ٣ - ايديسي باهرو" : "Tahun 3 - Edisi Baharu",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%203%2FBuku%20Teks%2FPENDIDIKAN%20ISLAM%20TAHUN%203%20%28ReducedWM%29%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%203%2FBuku%20Teks",
      coverColor: "from-emerald-800 to-emerald-950",
      accent: "bg-emerald-400"
    },
    {
      year: isJawi ? "تاهون ٤" : "Tahun 4",
      title: isJawi ? "كومڤيلاسي" : "Kompilasi",
      subtitle: isJawi ? "ڤنديديقن اسلام تاهون ٤" : "Pendidikan Islam Tahun 4",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%204%2FBuku%20Teks%2F2%2E%20Kompilasi%20Mata%20Pelajaran%20Pendidikan%20Islam%20Tahun%204%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%204%2FBuku%20Teks",
      coverColor: "from-emerald-800 to-emerald-950",
      accent: "bg-emerald-400"
    },
    {
      year: isJawi ? "تاهون ٥" : "Tahun 5",
      title: isJawi ? "كومڤيلاسي" : "Kompilasi",
      subtitle: isJawi ? "ڤنديديقن اسلام تاهون ٥" : "Pendidikan Islam Tahun 5",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%205%2FBuku%20Teks%2F2%2E%20Kompilasi%20Mata%20Pelajaran%20Pendidikan%20Islam%20Tahun%205%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%205%2FBuku%20Teks",
      coverColor: "from-emerald-800 to-emerald-950",
      accent: "bg-emerald-400"
    }
  ];

  const arabTextbooks = [
    {
      year: isJawi ? "تاهون ٥" : "Tahun 5",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ٥ - سكوله٢ عرب" : "Tahun 5 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/01-Tahun%205/Buku%20Teks?csf=1&web=1&e=8LJXXU",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ٦" : "Tahun 6",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ٦ - سكوله٢ عرب" : "Tahun 6 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/02-%20Tahun%206/Buku%20Teks?csf=1&web=1&e=e2RhNT",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ٧" : "Tahun 7",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ٧ - سكوله٢ عرب" : "Tahun 7 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/03-%20Tahun%207/Buku%20Teks?csf=1&web=1&e=yVpaTv",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ٨" : "Tahun 8",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ٨ - سكوله٢ عرب" : "Tahun 8 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/04-%20Tahun%208/Buku%20Teks?csf=1&web=1&e=7N6p1Z",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ٩" : "Tahun 9",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ٩ - سكوله٢ عرب" : "Tahun 9 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/05-%20%20Tahun%209/Buku%20Teks?csf=1&web=1&e=sZZVHj",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ١٠" : "Tahun 10",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ١٠ - سكوله٢ عرب" : "Tahun 10 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/06-%20%20Tahun%2010/Buku%20Teks?csf=1&web=1&e=bTxQHg",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "تاهون ١١" : "Tahun 11",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "تاهون ١١ - سكوله٢ عرب" : "Tahun 11 - Sekolah Arab",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/07-%20%20Tahun%2011/Buku%20Teks?csf=1&web=1&e=1qkzi6",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ١" : "Pra-U 1",
      title: isJawi ? "لغة عربية" : "Lughah Arabiah",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ١ (لغة عربية)" : "Pra-Universiti 1 (Lughah Arabiah)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/08-%20%20Pra%20Universiti%201%20(Jurusan%20Lughah%20Arabiah)/Buku%20Teks?csf=1&web=1&e=61oQgx",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ١" : "Pra-U 1",
      title: isJawi ? "اصول الدين" : "Usuluddin",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ١ (اصول الدين)" : "Pra-Universiti 1 (Usuluddin)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/09-%20Pra%20Universiti%201%20(Jurusan%20Usuluddin)/Buku%20Teks?csf=1&web=1&e=aPsqg5",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ١" : "Pra-U 1",
      title: isJawi ? "شريعة" : "Syariah",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ١ (شريعة)" : "Pra-Universiti 1 (Syariah)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/10-%20Pra%20Universiti%201%20(Jurusan%20Syariah)/Buku%20Teks?csf=1&web=1&e=wx0JD1",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ٢" : "Pra-U 2",
      title: isJawi ? "لغة عربية" : "Lughah Arabiah",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ٢ (لغة عربية)" : "Pra-Universiti 2 (Lughah Arabiah)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/11-%20Pra%20Universiti%202%20(Jurusan%20Lughah%20Arabiah)/Buku%20Teks?csf=1&web=1&e=uIxR31",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ٢" : "Pra-U 2",
      title: isJawi ? "اصول الدين" : "Usuluddin",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ٢ (اصول الدين)" : "Pra-Universiti 2 (Usuluddin)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/12-%20Pra%20Universiti%202%20(Jurusan%20Usuluddin)/Buku%20Teks?csf=1&web=1&e=9fJsAW",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ٢" : "Pra-U 2",
      title: isJawi ? "شريعة" : "Syariah",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ٢ (شريعة)" : "Pra-Universiti 2 (Syariah)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/13-%20Pra%20Universiti%202%20(Jurusan%20Syariah)/Buku%20Teks?csf=1&web=1&e=ADz8QT",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    },
    {
      year: isJawi ? "ڤرا اونيؤرسيتي ١ دان ٢" : "Pra-U 1 & 2",
      title: isJawi ? "جوروسن عموم" : "Jurusan Umum",
      subtitle: isJawi ? "ڤرا اونيؤرسيتي ١ دان ٢ (جوروسن عموم)" : "Pra-Universiti 1 & 2 (Jurusan Umum)",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/14-%20Pra%20Universiti%201%20dan%202%20(Jurusan%20Umum)/Buku%20Teks?csf=1&web=1&e=DsWsm0",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400"
    }
  ];

  const ugamaTextbooks = [
    {
      year: isJawi ? "درجه ٤" : "Darjah 4",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "درجه ٤ - سكوله٢ اوݢام" : "Darjah 4 - Sekolah Ugama",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20IV/Buku%20Teks?csf=1&web=1&e=I6K9dc",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    },
    {
      year: isJawi ? "درجه ٥" : "Darjah 5",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "درجه ٥ - سكوله٢ اوݢام" : "Darjah 5 - Sekolah Ugama",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20IV/Buku%20Teks?csf=1&web=1&e=I6K9dc",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    },
    {
      year: isJawi ? "درجه ٦" : "Darjah 6",
      title: isJawi ? "بوكو تيک‌س" : "Buku Teks",
      subtitle: isJawi ? "درجه ٦ - سكوله٢ اوݢام" : "Darjah 6 - Sekolah Ugama",
      link: "https://jpibrunei.sharepoint.com/:f:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20VI/Buku%20Teks?csf=1&web=1&e=pZ6Xc0",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    }
  ];

  // --- SYLLABUS DATA ---
  const mainSyllabusList = [
    { 
      id: 'arab',
      level: isJawi ? "سكوله٢ عرب" : "Sekolah Arab", 
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran", 
      subtitle: isJawi ? "سوكتن ڤلاجرن سكوله٢ عرب" : "Sukatan Pelajaran Sekolah-sekolah Arab",
      link: "#",
      coverColor: "from-amber-600 to-amber-950",
      accent: "bg-amber-400",
      isFolder: true
    },
    { 
      id: 'dua-penggal',
      level: isJawi ? "درجه IV - VI" : "Darjah IV - VI", 
      subject: isJawi ? "سوكتن دوا ڤڠݢل" : "Sukatan Dua Penggal", 
      subtitle: isJawi ? "درجه IV هيڠݢ درجه VI ڤرسكولهن اوݢام، نݢارا بروني دارالسلام" : "Darjah IV hingga Darjah VI Persekolahan Ugama, Negara Brunei Darussalam",
      link: "#",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400",
      isFolder: true
    },
    { 
      id: 'integrasi',
      level: isJawi ? "اينتيݢراسي" : "Integrasi", 
      subject: isJawi ? "ڤنديديقن اسلام" : "Pendidikan Islam", 
      subtitle: isJawi ? "سوكتن ڤلاجرن ڤنديديقن اسلام (اينتيݢراسي)" : "Sukatan Pelajaran Pendidikan Islam (Integrasi)",
      link: "#",
      coverColor: "from-lime-800 to-lime-950",
      accent: "bg-lime-400",
      isFolder: true
    }
  ];

  const integrasiSyllabusList = [
    { 
      level: isJawi ? "تاهون ٢ (اينتيݢراسي)" : "Tahun 2 (Integrasi)", 
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran", 
      subtitle: isJawi ? "سوكتن ڤلاجرن باهرو - اينتيݢراسي" : "Sukatan Pelajaran Baharu - Integrasi",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%202%2FSukatan%20Pelajaran%2FSUKATAN%20PELAJARAN%20BAHARU%20PENDIDIKAN%20ISLAM%20TAHUN%202%20%282026%20%2D%20KEMAS%20KINI%29%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%202%2FSukatan%20Pelajaran",
      coverColor: "from-orange-800 to-orange-950",
      accent: "bg-orange-400"
    },
    { 
      level: isJawi ? "تاهون ٣ (اينتيݢراسي)" : "Tahun 3 (Integrasi)", 
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran", 
      subtitle: isJawi ? "سوكتن ڤلاجرن باهرو - اينتيݢراسي" : "Sukatan Pelajaran Baharu - Integrasi",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%203%2FSukatan%20Pelajaran%2FSUKATAN%20PELAJARAN%20BAHARU%20PENDIDIKAN%20ISLAM%20TAHUN%203%20%2D%205%20JAN26%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%203%2FSukatan%20Pelajaran",
      coverColor: "from-indigo-800 to-indigo-950",
      accent: "bg-indigo-400"
    },
    { 
      level: isJawi ? "تاهون ٤ (اينتيݢراسي)" : "Tahun 4 (Integrasi)", 
      subject: isJawi ? "كومڤيلاسي" : "Kompilasi", 
      subtitle: isJawi ? "ڤنديديقن اسلام تاهون ٤ - اينتيݢراسي" : "Pendidikan Islam Tahun 4 - Integrasi",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%204%2FBuku%20Teks%2F2%2E%20Kompilasi%20Mata%20Pelajaran%20Pendidikan%20Islam%20Tahun%204%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%204%2FBuku%20Teks",
      coverColor: "from-rose-800 to-rose-950",
      accent: "bg-rose-400"
    },
    { 
      level: isJawi ? "تاهون ٥ (اينتيݢراسي)" : "Tahun 5 (Integrasi)", 
      subject: isJawi ? "كومڤيلاسي" : "Kompilasi", 
      subtitle: isJawi ? "ڤنديديقن اسلام تاهون ٥ - اينتيݢراسي" : "Pendidikan Islam Tahun 5 - Integrasi",
      link: "https://jpibrunei.sharepoint.com/sites/BahanKurikulumMataPelajaranPendidikanIslam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%205%2FBuku%20Teks%2F2%2E%20Kompilasi%20Mata%20Pelajaran%20Pendidikan%20Islam%20Tahun%205%2Epdf&parent=%2Fsites%2FBahanKurikulumMataPelajaranPendidikanIslam%2FShared%20Documents%2FTahun%205%2FBuku%20Teks",
      coverColor: "from-teal-800 to-teal-950",
      accent: "bg-teal-400"
    }
  ];

  const duaPenggalSyllabusList = [
    {
      level: isJawi ? "درجه ٤" : "Darjah 4",
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran",
      link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20IV/Sukatan%20Pelajaran/Sukatan%20Pelajaran%20Persekolahan%20Ugama%20NBD%202023%20Dua%20penggal.pdf?csf=1&web=1&e=oGdpJQ",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    },
    {
      level: isJawi ? "درجه ٥" : "Darjah 5",
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran",
      link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20V/Sukatan%20Pelajaran/Sukatan%20Pelajaran%20Persekolahan%20Ugama%20NBD%202023%20Dua%20penggal.pdf?csf=1&web=1&e=nIcxEN",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    },
    {
      level: isJawi ? "درجه ٦" : "Darjah 6",
      subject: isJawi ? "سوكتن ڤلاجرن" : "Sukatan Pelajaran",
      link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BahanSumberSokonganSekolahUgama/Shared%20Documents/Darjah%20VI/Sukatan%20Pelajaran/Sukatan%20Pelajaran%20Persekolahan%20Ugama%20NBD%202023%20Dua%20penggal.pdf?csf=1&web=1&e=Pl8VHc",
      coverColor: "from-violet-800 to-violet-950",
      accent: "bg-violet-400"
    }
  ];

  const arabSyllabusList = [
    { level: isJawi ? "تاهون ٥" : "Tahun 5", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/01-Tahun%205/Sukatan%20Pelajaran/1.%20SUKATAN%20PELAJARAN%20SA%20TAHUN%205%202022.pdf?csf=1&web=1&e=q5e25F", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ٦" : "Tahun 6", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/02-%20Tahun%206/Sukatan%20Pelajaran/SUKATAN%20TAHUN%206%20JAN%202023.pdf?csf=1&web=1&e=wOazBx", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ٧" : "Tahun 7", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/03-%20Tahun%207/Sukatan%20Pelajaran/3.%20SUKATAN%20PELAJARAN%20SA%20TAHUN%207%202022.pdf?csf=1&web=1&e=39RPMV", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ٨" : "Tahun 8", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/04-%20Tahun%208/Sukatan%20Pelajaran/SUKATAN%20TAHUN%208%20JAN%202023.pdf?csf=1&web=1&e=7N6p1Z", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ٩ (فاست تريک)" : "Tahun 9 Fast Track", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/05-%20%20Tahun%209/Sukatan%20Pelajaran/SUKATAN%20TAHUN%209%20FAST%20TRACK%20JAN%202023.pdf?csf=1&web=1&e=Nv4tuj", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ٩ (نورمل تريک)" : "Tahun 9 Normal Track", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/05-%20%20Tahun%209/Sukatan%20Pelajaran/SUKATAN%20TAHUN%209%20NORMAL%20TRACK%20JAN%202024.pdf?csf=1&web=1&e=T4Zmvxf", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ١٠ (فاست تريک)" : "Tahun 10 Fast Track", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/06-%20%20Tahun%2010/Sukatan%20Pelajaran/SUKATAN%20TAHUN%2010%20FAST%20TRACK%20JULAI%202024.pdf?csf=1&web=1&e=PnOEBy", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ١٠ (نورمل تريک)" : "Tahun 10 Normal Track", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/06-%20%20Tahun%2010/Sukatan%20Pelajaran/SUKATAN%20TAHUN%2010%20NORMAL%20TRACK%20JULAI%202024.pdf?csf=1&web=1&e=OJyXwf", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "تاهون ١١ (نورمل تريک)" : "Tahun 11 Normal Track", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/07-%20%20Tahun%2011/Sukatan%20Pelajaran/SUKATAN%20TAHUN%2011%20NORMAL%20TRACK%20JAN%202023.pdf?csf=1&web=1&e=Fgldov", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو١ (لغة عربية)" : "Pra U1 Lughah Arabiah", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/08-%20%20Pra%20Universiti%201%20(Jurusan%20Lughah%20Arabiah)/Sukatan%20Pelajaran/10.%20SUKATAN%20PELAJARAN%20SA%20PRA%20U1%20LUGHAH%20ARABIAH.pdf?csf=1&web=1&e=eOhO1d", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو١ (اصول الدين)" : "Pra U1 Usuluddin", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/09-%20Pra%20Universiti%201%20(Jurusan%20Usuluddin)/Sukatan%20Pelajaran/11.%20SUKATAN%20PELAJARAN%20SA%20PRA%20U1%20USULUDDIN.pdf?csf=1&web=1&e=0kpz4d", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو١ (شريعة)" : "Pra U1 Syariah", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/10-%20Pra%20Universiti%201%20(Jurusan%20Syariah)/Sukatan%20Pelajaran/12.%20SUKATAN%20PELAJARAN%20SA%20PRA%20U1%20SYARIAH.pdf?csf=1&web=1&e=hQ9gym", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو١ شريعة (اصول فقه)" : "Pra U1 Syariah Usul Fiqh", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/10-%20Pra%20Universiti%201%20(Jurusan%20Syariah)/Sukatan%20Pelajaran/SUKATAN%20PRA%20U%201%20SYARIAH%20(U.FIQH%20-%20keluaran%20DEC%202024).pdf?csf=1&web=1&e=ezHCBw", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو٢ (جوروسن لغة)" : "Pra Universiti 2 (Jurusan Lughah)", link: "https://teams.microsoft.com/l/channel/19%3A162e51df99214b58a0ca5e0844c25748%40thread.tacv2/11-%20Pra%20Universiti%202%20(Jurusan%20Lughah%20Arabiah)?groupId=aa9e791c-bccf-4f53-8b98-fd0c4f14879e&tenantId=47020947-65c5-427e-be88-fdc455f97b89", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو٢ (لغة عربية)" : "Pra Universiti 2 Lughah Arabiah", filename: "SUKATAN PRA U 2 LUGHAH ARABIAH JAN 2023.pdf", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو٢ (اصول الدين)" : "Pra Universiti 2 Usuluddin", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/12-%20Pra%20Universiti%202%20(Jurusan%20Usuluddin)/Sukatan%20Pelajaran/SUKATAN%20PRA%20U2%20USULUDDIN%20JAN%202023.pdf?csf=1&web=1&e=Gm01Fb", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو٢ (شريعة)" : "Pra Universiti 2 Syariah", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/10-%20Pra%20Universiti%201%20(Jurusan%20Syariah)/Sukatan%20Pelajaran/12.%20SUKATAN%20PELAJARAN%20SA%20PRA%20U1%20SYARIAH.pdf?csf=1&web=1&e=yTm8XX", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
    { level: isJawi ? "ڤرا يو١ دان ٢ (عموم)" : "Pra Universiti 1 & 2 Umum", link: "https://jpibrunei.sharepoint.com/:b:/r/sites/BAHANKURIKULUMJPISEKOLAHARAB353/Shared%20Documents/14-%20Pra%20Universiti%201%20dan%202%20(Jurusan%20Umum)/Sukatan%20Pelajaran/16.%20SUKATAN%20PELAJARAN%20SA%20PRA%20U1%20%26%202%20UMUM%201%202022.pdf?csf=1&web=1&e=G2G8ck", color: "from-amber-600 to-amber-950", accent: "bg-amber-400" },
  ];

  const getSyllabusList = () => {
    if (selectedSyllabusFolder === 'integrasi') return integrasiSyllabusList;
    if (selectedSyllabusFolder === 'dua-penggal') return duaPenggalSyllabusList;
    if (selectedSyllabusFolder === 'arab') return arabSyllabusList;
    return mainSyllabusList;
  };

  const getTextbookList = () => {
    if (selectedTextbookFolder === 'integrasi') return integrasiTextbooks;
    if (selectedTextbookFolder === 'arab') return arabTextbooks; 
    if (selectedTextbookFolder === 'ugama') return ugamaTextbooks;
    return [];
  };

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#2FB399] h-10 w-full relative z-10 flex items-center px-4 md:px-12">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-black/20 hover:bg-black/40 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold transition-all text-white border border-white/10 group active:scale-95"
            title={isJawi ? "Tukar ke Rumi" : "Tukar ke Jawi"}
          >
            <i className="fas fa-language text-base group-hover:rotate-12 transition-transform"></i>
            <span className={isJawi ? "" : "jawi-text text-sm leading-none pt-1"}>
              {isJawi ? 'TUKAR KE RUMI' : 'توقر ك جاوي'}
            </span>
          </button>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="bg-[#004D40] w-full py-6 md:py-10 px-4 md:px-12 flex items-center shadow-lg">
        <div className="flex-shrink-0 w-20 md:w-32">
           <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Emblem_of_Brunei.svg/1200px-Emblem_of_Brunei.svg.png" 
            alt="Brunei Emblem" 
            className="w-full drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
           />
        </div>

        <div className="flex-1 flex flex-col items-center text-center jawi-text px-4" dir="rtl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            ڤورتل <span className="text-cyan-400">باهن</span> كوريكولوم
          </h1>
          <h2 className="text-lg md:text-2xl text-yellow-400 opacity-90 drop-shadow-[0_0_5px_rgba(255,215,0,0.4)] mt-2 jawi-text">
            جابتن ڤڠاجين اسلام
          </h2>
        </div>
        <div className="flex-shrink-0 w-20 md:w-32 hidden md:block"></div>
      </div>

      {/* 3. TICKER BAR */}
      <div className="bg-white border-b border-gray-200 h-10 w-full"></div>

      <div className="flex justify-center mt-12 mb-4 animate-pulse">
          <span className="px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500/60 text-[10px] font-bold tracking-[0.4em] jawi-text uppercase" dir="rtl">
              ايديسي بروني دارالسلام
          </span>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto mb-16 px-4">
        <Clock />
        <PrayerTimes />
      </div>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4">
        {/* Category: UTAMA */}
        <div className="space-y-4">
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl py-2 text-center">
            <span className={`text-emerald-400 font-bold tracking-[0.3em] text-lg uppercase ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'اوتام' : 'UTAMA'}</span>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => handleTabClick(CategoryType.SUKATAN)}
              className={`w-full bg-white/5 hover:bg-white/10 border rounded-xl p-4 flex items-center justify-between gap-4 transition-all group ${activeTab === CategoryType.SUKATAN ? 'border-emerald-500 bg-emerald-500/10' : 'border-emerald-500/20'}`}
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-lg text-blue-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-scroll"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'سوكتن ڤلاجرن' : 'Sukatan Pelajaran'}</span>
              </div>
            </button>
            <button 
              onClick={() => handleTabClick(CategoryType.BUKU_TEKS)}
              className={`w-full bg-white/5 hover:bg-white/10 border rounded-xl p-4 flex items-center justify-between gap-4 transition-all group ${activeTab === CategoryType.BUKU_TEKS ? 'border-emerald-500 bg-emerald-500/10' : 'border-emerald-500/20'}`}
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-pink-500/20 rounded-lg text-pink-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-books"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'بوکو تيک‌س' : 'Buku Teks'}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Category: INOVASI */}
        <div className="space-y-4">
          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl py-2 text-center">
            <span className={`text-cyan-400 font-bold tracking-[0.3em] text-lg uppercase ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'اينوؤاسي' : 'INOVASI'}</span>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => handleTabClick(CategoryType.JAWI)}
              className={`w-full bg-white/5 hover:bg-white/10 border rounded-xl p-4 flex items-center justify-between gap-4 transition-all group ${activeTab === CategoryType.JAWI ? 'border-cyan-500 bg-cyan-500/10' : 'border-cyan-500/20'}`}
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/20 rounded-lg text-purple-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-keyboard"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'توليسن رومي ک جاوي' : 'Tulisan Rumi ke Jawi'}</span>
              </div>
            </button>
            <a 
              href="https://mrbaem.com/beritakeluarga"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl p-4 flex items-center justify-between gap-4 transition-all group"
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-500/20 rounded-lg text-yellow-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-users"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'اڤليكاسي بريتا كلوارݢ' : 'Aplikasi Berita Keluarga'}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Category: MAKLUMAT */}
        <div className="space-y-4">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl py-2 text-center">
            <span className={`text-blue-400 font-bold tracking-[0.3em] text-lg uppercase ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'معلومت' : 'MAKLUMAT'}</span>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => handleTabClick(CategoryType.PENGENALAN)}
              className={`w-full bg-white/5 hover:bg-white/10 border rounded-xl p-4 flex items-center justify-between gap-4 transition-all group ${activeTab === CategoryType.PENGENALAN ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500/20'}`}
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/20 rounded-lg text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-info-circle"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'ڤڠنلن' : 'Pengenalan'}</span>
              </div>
            </button>
            <a 
              href="https://unitmediajpi.my.canva.site/dashboard-penjualan-bkr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 hover:bg-white/10 border border-blue-500/20 hover:border-blue-500/50 rounded-xl p-4 flex items-center justify-between gap-4 transition-all group"
              dir={isJawi ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-500/20 rounded-lg text-gray-400 text-xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <span className={`text-gray-200 font-semibold text-xl ${isJawi ? 'jawi-text' : ''}`}>{isJawi ? 'ڤمبلين بوکو' : 'Pembelian Buku'}</span>
              </div>
            </a>
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto space-y-12">
        {activeTab === CategoryType.JAWI && (
          <div className="animate-in slide-in-from-bottom-10 duration-500">
             <JawiApp />
          </div>
        )}

        {activeTab === CategoryType.PENGENALAN && (
          <div className="bg-black/60 backdrop-blur-lg border border-blue-500 p-8 md:p-12 rounded-3xl text-center glow-blue animate-in zoom-in-95" dir={isJawi ? "rtl" : "ltr"}>
             <div className="flex flex-col items-center mb-8">
                <i className="fas fa-info-circle text-6xl text-blue-400 mb-6 animate-pulse"></i>
                <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isJawi ? 'jawi-text' : ''}`}>
                  {isJawi ? 'ڤڠنلن' : 'Pengenalan'}
                </h2>
                <div className={`text-gray-200 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed space-y-6 ${isJawi ? 'jawi-text' : ''}`}>
                  {isJawi ? (
                    <>
                      <p>سلامت داتڠ ك دشبورد باهن كوريكولوم مات ڤلاجرن ڤنديديقن اسلام — ساتو ڤلاتفورم اينتراکتيف يڠ ديريک كاس اونتوق ݢورو، ڤنديديق، دان ڤلاجر دالم ممهمي سرتا مڠاکسيس سومبر كوريكولوم ڤنديديقن اسلام دڠن لبه بركسن.</p>
                      <p>دشبورد اين مڠومڤولكن باهن اجر، ڤندوان ڤمبلاجرن، ڤرنچڠن ڤڠاجرن، دان سومبر باهن كوريكولوم دالم ساتو تمڤت ترسوسون سوڤايا ڤڠݢونا تيدق ڤرلو منچاريڽ ساتو-ساتو د باڽق لامن اتاو فايل براسيڠن.</p>
                    </>
                  ) : (
                    <>
                      <p>Selamat datang ke Dashboard Bahan Kurikulum Mata Pelajaran Pendidikan Islam — satu platform interaktif yang direka khas untuk guru, pendidik, and pelajar dalam memahami serta mengakses sumber kurikulum Pendidikan Islam dengan lebih berkesan.</p>
                      <p>Dashboard ini mengumpulkan bahan ajar, panduan pembelajaran, perancangan pengajaran, and sumber bahan kurikulum dalam satu tempat tersusun supaya pengguna tidak perlu mencarinya satu-satu di banyak lama atau fail berasingan.</p>
                    </>
                  )}
                </div>
             </div>
          </div>
        )}

        {activeTab === CategoryType.BUKU_TEKS && (
          <div className="bg-black/60 backdrop-blur-lg border border-pink-500 p-8 md:p-12 rounded-3xl text-center glow-pink animate-in zoom-in-95" dir={isJawi ? "rtl" : "ltr"}>
             <div className="flex flex-col items-center mb-8">
                <i className="fas fa-book-open text-6xl text-pink-500 mb-6 animate-pulse"></i>
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isJawi ? 'jawi-text' : ''}`}>
                  {isJawi ? 'ڤوستاك ديݢيتل جي.ڤي.اي.' : 'PUSTAKA DIGITAL JPI'}
                </h2>
                
                {selectedTextbookFolder && (
                   <button 
                     onClick={() => setSelectedTextbookFolder(null)}
                     className="mt-4 flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-pink-500/30 rounded-full text-pink-500 font-bold transition-all active:scale-95 group"
                   >
                     <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                     <span>{isJawi ? 'باليق' : 'BACK'}</span>
                   </button>
                )}

                <p className={`text-gray-400 max-w-2xl mx-auto text-xl mt-4 ${isJawi ? 'jawi-text' : ''}`}>
                  {!selectedTextbookFolder && (isJawi ? 'سيلا ڤيليه كاتيݢوري بوكو تيک‌س.' : 'Please select a textbook category.')}
                  {selectedTextbookFolder === 'arab' && (isJawi ? 'بوكو تيک‌س سكوله٢ عرب.' : 'Arab School textbooks.')}
                  {selectedTextbookFolder === 'ugama' && (isJawi ? 'بوكو تيک‌س سكوله٢ اوݢام.' : 'Religious School textbooks.')}
                  {selectedTextbookFolder === 'integrasi' && (isJawi ? 'بوكو تيک‌س ڤنديديقن اسلام (اينتيݢراسي).' : 'Integrated Pendidikan Islam textbooks.')}
                </p>
             </div>

             <div className="flex flex-wrap justify-center gap-12 px-4 mt-8">
                {!selectedTextbookFolder ? (
                  textbookCategories.map((folder, idx) => (
                    <div key={idx} className="group perspective-1000 w-full sm:w-[320px] animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="relative aspect-[4/3] transition-all duration-700 transform-style-3d group-hover:rotate-y-[-20deg] group-hover:translate-x-2">
                        <div className={`absolute inset-0 bg-gradient-to-br ${folder.color} rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex flex-col p-8 items-center text-center justify-center cursor-pointer`} onClick={() => setSelectedTextbookFolder(folder.id)}>
                          <div className={`w-16 h-16 rounded-2xl ${folder.accent} flex items-center justify-center text-black text-3xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                            <i className={`fas ${folder.icon}`}></i>
                          </div>
                          <h3 className={`text-2xl font-bold text-white mb-2 ${isJawi ? 'jawi-text' : ''}`}>{folder.title}</h3>
                          <p className={`text-sm text-white/60 ${isJawi ? 'jawi-text' : ''}`}>{folder.description}</p>
                          <div className="mt-6 px-6 py-2 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                             {isJawi ? 'بوك فولدر' : 'Open Folder'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  getTextbookList().length > 0 ? (
                    getTextbookList().map((book, idx) => (
                      <div key={idx} className="group perspective-1000 w-full sm:w-[280px] animate-in zoom-in-95 duration-500">
                        <div className="relative aspect-[2/3] transition-all duration-700 transform-style-3d group-hover:rotate-y-[-25deg] group-hover:translate-x-4">
                          <div className={`absolute inset-0 bg-gradient-to-br ${book.coverColor} rounded-r-xl shadow-2xl overflow-hidden border-l-8 border-black/40 flex flex-col p-6 items-center text-center`}>
                            <div className="mb-4 opacity-50">
                               <i className="fas fa-mosque text-3xl text-yellow-500"></i>
                            </div>
                            <div className={`w-12 h-1 ${book.accent} mb-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]`}></div>
                            <h3 className={`text-4xl font-bold text-white mb-2 leading-tight ${isJawi ? 'jawi-text' : ''}`}>{book.title}</h3>
                            <p className={`text-xl text-yellow-400/80 mb-auto ${isJawi ? 'jawi-text' : ''}`}>{book.year}</p>
                            <div className="mt-auto w-full border-t border-white/10 pt-4 flex flex-col items-center">
                               <p className="text-xs text-white/40 mb-3 tracking-widest uppercase jawi-text">جابتن ڤڠاجين اسلام</p>
                               <span className={`text-lg text-white font-bold opacity-60 ${isJawi ? 'jawi-text' : ''}`}>{book.subtitle}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] rounded-r-xl">
                            <a href={book.link} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 bg-pink-500 hover:bg-white text-black font-extrabold rounded-full text-xl transition-all shadow-[0_0_20px_rgba(255,0,255,0.5)] transform hover:scale-110 active:scale-95 ${isJawi ? 'jawi-text' : ''}`}>
                               {isJawi ? 'بوك' : 'OPEN'}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center py-20 opacity-40">
                      <i className="fas fa-folder-open text-6xl mb-4"></i>
                      <p className={`text-2xl ${isJawi ? 'jawi-text' : ''}`}>
                        {isJawi ? 'باهن بلوم ترسديا' : 'Content not available yet'}
                      </p>
                    </div>
                  )
                )}
             </div>
          </div>
        )}

        {activeTab === CategoryType.SUKATAN && (
          <div className="bg-black/60 backdrop-blur-lg border border-cyan-500 p-8 md:p-12 rounded-3xl text-center glow-blue animate-in zoom-in-95" dir={isJawi ? "rtl" : "ltr"}>
             <div className="flex flex-col items-center mb-8">
                <i className="fas fa-scroll text-6xl text-cyan-400 mb-6 animate-pulse"></i>
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isJawi ? 'jawi-text' : ''}`}>
                  {isJawi ? 'ريڤوسيتوري سوكتن ڤلاجرن' : 'REPOSITORI SUKATAN PELAJARAN'}
                </h2>
                
                {selectedSyllabusFolder && (
                   <button 
                     onClick={() => setSelectedSyllabusFolder(null)}
                     className="mt-4 flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-cyan-500/30 rounded-full text-cyan-400 font-bold transition-all active:scale-95 group"
                   >
                     <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                     <span>{isJawi ? 'باليق' : 'BACK'}</span>
                   </button>
                )}
                
                <p className={`text-gray-400 max-w-2xl mx-auto text-xl mt-4 ${isJawi ? 'jawi-text' : ''}`}>
                  {!selectedSyllabusFolder && (isJawi ? 'سيلا ڤيليه كاتيݢوري سوكتن ڤلاجرن.' : 'Please select a syllabus category.')}
                  {selectedSyllabusFolder === 'integrasi' && (isJawi ? 'ڤيليه تاهون اونتوق سوكتن ڤنديديقن اسلام اينتيݢراسي.' : 'Select year for Pendidikan Islam Integrasi.')}
                  {selectedSyllabusFolder === 'dua-penggal' && (isJawi ? 'درجه ٤ هيڠݢ درجه ٦ ڤرسكولهن اوݢام.' : 'Darjah 4 to Darjah 6 Religious School.')}
                  {selectedSyllabusFolder === 'arab' && (isJawi ? 'سوكتن ڤلاجرن سكوله٢ عرب.' : 'Syllabus for Arab Schools.')}
                </p>
             </div>

             <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 mt-8 max-w-6xl mx-auto">
                {getSyllabusList().map((item: any, idx) => (
                    <div key={idx} className={`group perspective-1000 animate-in zoom-in-95 duration-500 ${selectedSyllabusFolder === 'arab' ? 'w-full sm:w-[220px]' : 'w-full sm:w-[280px]'}`}>
                      <div className="relative aspect-[2/3] transition-all duration-700 transform-style-3d group-hover:rotate-y-[-25deg] group-hover:translate-x-4">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.coverColor || item.color} rounded-r-xl shadow-2xl overflow-hidden border-l-8 border-black/40 flex flex-col p-4 md:p-6 items-center text-center`}>
                          <div className="mb-4 opacity-50">
                            <i className={`fas ${item.isFolder ? 'fa-folder-open' : 'fa-scroll'} text-2xl md:text-3xl text-cyan-400`}></i>
                          </div>
                          <div className={`w-12 h-1 ${item.accent} mb-4 md:mb-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]`}></div>
                          <h3 className={`${selectedSyllabusFolder === 'arab' ? 'text-xl' : 'text-3xl'} font-bold text-white mb-2 leading-tight ${isJawi ? 'jawi-text' : ''}`}>
                            {item.subject || (isJawi ? 'سوكتن ڤلاجرن' : 'Sukatan Pelajaran')}
                          </h3>
                          <p className={`text-lg text-cyan-400/80 mb-auto ${isJawi ? 'jawi-text' : ''}`}>{item.level}</p>
                          <div className="mt-auto w-full border-t border-white/10 pt-4 flex flex-col items-center">
                             <p className="text-[10px] text-white/40 mb-2 tracking-widest uppercase jawi-text">جابتن ڤڠاجين اسلام</p>
                             {item.subtitle && <span className={`text-xs text-white font-bold opacity-60 ${isJawi ? 'jawi-text' : ''}`}>{item.subtitle}</span>}
                             {item.filename && <span className="text-[8px] text-cyan-500/40 truncate w-full">{item.filename}</span>}
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] rounded-r-xl">
                          {item.isFolder ? (
                            <button 
                              onClick={() => setSelectedSyllabusFolder(item.id)}
                              className={`px-6 py-2 bg-cyan-500 hover:bg-white text-black font-extrabold rounded-full text-base md:text-xl transition-all shadow-[0_0_20px_rgba(0,243,255,0.5)] transform hover:scale-110 active:scale-95 ${isJawi ? 'jawi-text' : ''}`}
                            >
                              {isJawi ? 'بوك فولدر' : 'OPEN FOLDER'}
                            </button>
                          ) : (
                            <a href={item.link || '#'} target={item.link === '#' ? '_self' : '_blank'} rel="noopener noreferrer" className={`px-6 py-2 bg-cyan-500 hover:bg-white text-black font-extrabold rounded-full text-base md:text-xl transition-all shadow-[0_0_20px_rgba(0,243,255,0.5)] transform hover:scale-110 active:scale-95 ${isJawi ? 'jawi-text' : ''}`} title={item.link}>
                               {isJawi ? 'بوك' : 'OPEN'}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                ))}
             </div>
          </div>
        )}
      </div>

      <footer className="max-w-6xl mx-auto mt-32 text-center border-t border-white/5 pt-12 text-gray-600 px-4">
        <div className={`flex flex-wrap justify-center gap-8 mb-6 text-lg ${isJawi ? 'jawi-text' : ''}`} dir={isJawi ? "rtl" : "ltr"}>
           <button onClick={() => setShowPrivacy(true)} className="hover:text-cyan-400 transition-colors">{isJawi ? 'داسر ڤريؤاسي' : 'Privacy Policy'}</button>
           <a href="#" className="hover:text-cyan-400 transition-colors">{isJawi ? 'هوبوڠي كامي' : 'Contact Us'}</a>
           <a href="#" className="hover:text-cyan-400 transition-colors">{isJawi ? 'ڤتا لامن' : 'Site Map'}</a>
        </div>
        <p className="text-sm md:text-lg mt-4 jawi-text px-4" dir="rtl">
          حق چيڤتا اونيت ميديا / ابراهيم ٢٠٢٦ | ڤورتل كوريكولوم جي.ڤي.اي. | جابتن ڤڠاجين اسلام، بروني دارالسلام
        </p>
      </footer>

      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowPrivacy(false)}></div>
          <div className="relative bg-[#0a1a1a] border-2 border-cyan-500 glow-blue rounded-[2.5rem] max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setShowPrivacy(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:rotate-90">
              <i className="fas fa-times"></i>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 text-3xl mb-6 glow-blue"><i className="fas fa-shield-alt"></i></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 jawi-text">داسر ڤريؤاسي</h3>
              <div className="space-y-6 text-gray-200 leading-relaxed text-lg mt-4">
                <p className="jawi-text leading-loose" dir="rtl">
                  ڤورتل باهن كوريكولوم اين اداله حق چيڤتا بهاݢين كوريكولوم. سݢالا معلومت، باهن، دان كاندوڠن د دالم ڤورتل اين هاڽ اونتوق کݢوناءن ڤڠݢونا يڠ دبري كبنرن سهاج.
                </p>
              </div>
              <button onClick={() => setShowPrivacy(false)} className="mt-10 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(0,243,255,0.4)]">FAHAM / فهم</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
