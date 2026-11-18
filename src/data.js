export const SECTIONS = [
  { id: 'mulai', label: 'Pembuka' },
  { id: 'kenalan', label: 'Kenalan dulu' },
  { id: 'pemanasan', label: 'Papan keresahan' },
  { id: 'technopreneur', label: 'Technopreneur itu apa' },
  { id: 'menemukan', label: 'Ide itu ditemukan' },
  { id: 'painkiller', label: 'Painkiller atau vitamin' },
  { id: 'lima-kenapa', label: 'Lima kali kenapa' },
  { id: 'dampak', label: 'Mengukur dampak' },
  { id: 'bisnis', label: 'Nilai bisnis' },
  { id: 'validasi', label: 'Validasi jujur' },
  { id: 'studi-kasus', label: 'Bedah karyaku' },
  { id: 'tanggung-jawab', label: 'Teknologi yang amanah' },
  { id: 'skor-ide', label: 'Skor ide' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'pitching', label: 'Pitching' },
  { id: 'penutup', label: 'Penutup' },
]

export const CONTACT = {
  portfolio: 'https://nazrilravipratama.vercel.app/',
  whatsapp: 'https://wa.me/6282333970758',
  whatsappLabel: '0823 3397 0758',
  linkedin: 'https://www.linkedin.com/in/nazrilravipratama',
  email: 'nazrilpratama099@gmail.com',
}

export const HERO_PAIRS = [
  {
    pain: 'Antre mesin cuci asrama bisa sejam sendiri.',
    idea: 'Sistem antrean laundry yang ngasih notifikasi pas giliranmu tiba.',
  },
  {
    pain: 'Petani baru sadar ada hama setelah sawahnya rusak.',
    idea: 'AI yang mengenali hama cukup dari foto kamera HP.',
  },
  {
    pain: 'Warung dekat pondok sering kehabisan barang yang paling dicari.',
    idea: 'Prediksi penjualan sederhana untuk pemilik warung.',
  },
  {
    pain: 'Setoran hafalan selalu numpuk di akhir bulan.',
    idea: 'Tracker hafalan yang bikin progres harian kelihatan.',
  },
]

export const MARQUEE = [
  'antre mesin cuci',
  'sandal ketuker',
  'wifi lemot pas deadline',
  'lupa jadwal piket',
  'setoran hafalan numpuk',
  'uang saku habis tengah bulan',
  'menu kantin cepat habis',
  'barang hilang di asrama',
  'pengumuman nggak sampai',
  'antre kamar mandi subuh',
]

export const PHOTOS = [
  {
    src: '/img/pertamuda.webp',
    alt: 'Nazril memegang piala dan papan dana pembinaan Top 3 Pertamuda Energy Founder',
    caption: 'Top 3 Pertamuda Energy Founder dari Pertamina. Dana pembinaan Rp50 juta untuk AIO PestGuard.',
    rotate: -2.5,
  },
  {
    src: '/img/nec-stage.webp',
    alt: 'Nazril di atas panggung memegang papan Juara 3 dan sertifikat',
    caption: 'Juara 3 National Essay Competition, Semadiksi UNUSA, Oktober 2026.',
    rotate: 2,
  },
  {
    src: '/img/best-presentation.webp',
    alt: 'Nazril menerima sertifikat Best Presentation di panggung',
    caption: 'Best Presentation di Call for Paper Faperta UPN Veteran Jawa Timur, untuk AgriPest-RAG.',
    rotate: -1.5,
  },
  {
    src: '/img/gemastik.webp',
    alt: 'Tim Sains Data UNESA berfoto di depan panggung GEMASTIK XVIII',
    caption: 'Finalis GEMASTIK XVIII bareng tim Sains Data UNESA di Telkom University, 2025.',
    rotate: 1.5,
    wide: true,
  },
  {
    src: '/img/nec-cert.webp',
    alt: 'Papan Juara 3 dan sertifikat atas nama Nazril Ravi Pratama',
    caption: 'Sertifikatnya. Yang ini kubawa pulang dengan senyum lebar.',
    rotate: -2,
  },
  {
    src: '/img/jakarta.webp',
    alt: 'Nazril berdiri di rooftop dengan latar gedung tinggi Jakarta',
    caption: 'Sela perjalanan di Jakarta. Kadang ide justru datang pas lagi jalan.',
    rotate: 2.5,
  },
]

export const STATS = [
  { value: 35, suffix: '+', label: 'prestasi nasional dan internasional' },
  { value: 50, prefix: 'Rp', suffix: ' jt', label: 'dana pembinaan Top 3 Pertamuda by Pertamina' },
  { value: 4400, prefix: '1 dari 10 tim, ', suffix: '+ pendaftar', label: 'COMPFEST Data Science Academy UI', compact: true },
  { value: 3.84, decimals: 2, label: 'IPK Sains Data UNESA' },
]

export const TIMELINE = [
  { when: '2024', what: 'Masuk Sains Data UNESA, International Undergraduate Program.' },
  { when: 'Sept 2025', what: 'Jadi asisten dosen untuk 3 kelas: Aljabar Matriks dan Struktur Data & Algoritma.' },
  { when: 'Okt 2025', what: 'Finalis GEMASTIK XVIII divisi Data Mining, kompetisi TIK mahasiswa paling bergengsi di Indonesia.' },
  { when: 'Feb sampai Mei 2026', what: 'CRM Data Officer Intern di Jalan Langit Foundation. Terpilih Best Intern #1 dari semua divisi.' },
  { when: 'Mar 2026 sampai sekarang', what: 'Data Science and AI Researcher di Big Data Lab Analysis.' },
  { when: 'Mei 2026', what: 'Guest speaker di POINTER 2026, Fakultas Ilmu Komputer UPN Veteran Jakarta.' },
  { when: 'Jul 2026', what: 'Terpilih 1 dari 10 tim (dari 4.400+ pendaftar) di COMPFEST Data Science Academy, Universitas Indonesia.' },
  { when: 'Jul 2026 sampai sekarang', what: 'AI Engineer Intern di PT Aigra EON Indonesia, membangun AI untuk pertanian.' },
  { when: 'Okt 2026', what: 'Top 3 Pertamuda by Pertamina, Juara 1 Smart Data Analytics USK, Juara 3 NEC UNUSA.' },
]

export const EXAMPLES = [
  {
    name: 'Gojek',
    year: '2010',
    story:
      'Awalnya bukan aplikasi super. Gojek mulai sebagai layanan pesan ojek lewat telepon, karena cari ojek yang jelas dan bisa dipesan itu susah. Aplikasinya baru menyusul di 2015.',
  },
  {
    name: 'Ruangguru',
    year: '2014',
    story:
      'Berangkat dari susahnya mencari guru les yang cocok. Ruangguru mulai sebagai tempat mempertemukan siswa dengan guru privat, baru kemudian tumbuh jadi platform belajar.',
  },
  {
    name: 'Kitabisa',
    year: '2013',
    story:
      'Lahir dari keinginan sederhana: bikin orang lebih gampang saling bantu. Galang dana yang dulu ribet jadi bisa dilakukan siapa saja secara online.',
  },
]

export const IDEA_SOURCES = [
  {
    title: 'Keresahan sendiri',
    body: 'Hal yang bikin kamu ngedumel hampir tiap hari. Kalau kamu kesal, besar kemungkinan orang lain juga.',
    ask: 'Minggu ini, apa yang paling sering bikin kamu bilang "aduh, ribet banget"?',
  },
  {
    title: 'Kenapa masih manual?',
    body: 'Antrean, absen, rekap, catatan. Kalau masih pakai kertas dan diulang tiap hari, itu sinyal kuat.',
    ask: 'Apa yang di sekolahmu masih ditulis tangan lalu sering hilang atau salah?',
  },
  {
    title: 'Keluhan orang lain',
    body: 'Dengarkan curhatan ibu kantin, ustadz, satpam, atau orang tua. Keluhan itu peta harta karun.',
    ask: 'Siapa orang dewasa di sekitarmu yang paling sering mengeluh, dan soal apa?',
  },
  {
    title: 'Teknologi baru',
    body: 'Tanya: apa yang dulu mustahil tapi sekarang jadi mungkin karena AI, kamera HP, atau internet murah?',
    ask: 'Pekerjaan apa yang dulu butuh ahli, tapi sekarang bisa dibantu AI di HP?',
  },
  {
    title: 'Data',
    body: 'Angka bisa membongkar masalah yang nggak kelihatan mata. Pola kecil sering menyimpan cerita besar.',
    ask: 'Kalau kamu punya data absensi atau nilai satu angkatan, pola apa yang ingin kamu cek?',
  },
]

export const LENSES = {
  Asrama: [
    'Jam berapa antrean paling panjang terjadi, dan antre untuk apa?',
    'Barang apa yang paling sering hilang atau ketuker?',
    'Informasi apa yang sering telat sampai ke santri?',
  ],
  Kelas: [
    'Bagian pelajaran mana yang paling sering bikin teman-temanmu bingung?',
    'Tugas apa yang paling sering lupa dikumpulkan, dan kenapa?',
    'Apa yang guru lakukan berulang-ulang tiap hari?',
  ],
  Kantin: [
    'Menu apa yang selalu habis duluan, dan menu apa yang sering sisa?',
    'Berapa lama waktu antre saat jam istirahat?',
    'Bagaimana ibu kantin tahu harus masak berapa porsi?',
  ],
  Masjid: [
    'Bagaimana jadwal imam, muadzin, atau petugas kebersihan diatur?',
    'Bagaimana kas atau infaq dicatat dan dilaporkan?',
    'Apa yang sering bikin kegiatan kajian molor?',
  ],
  Rumah: [
    'Apa yang paling bikin orang tuamu repot setiap pagi?',
    'Usaha apa di sekitar rumahmu yang masih dicatat manual?',
    'Apa yang sering dikeluhkan tetangga atau keluarga besarmu?',
  ],
}

export const PK_CARDS = [
  {
    idea: 'Aplikasi yang memberi tahu kapan mesin cuci asrama kosong.',
    answer: 'painkiller',
    why: 'Terjadi hampir tiap hari, makan waktu nyata, dan semua penghuni asrama merasakannya.',
  },
  {
    idea: 'Filter foto bertema pesantren untuk media sosial.',
    answer: 'vitamin',
    why: 'Seru dan lucu, tapi kalau besok nggak ada, hidup siapa pun tetap berjalan normal.',
  },
  {
    idea: 'AI yang mendeteksi hama dari foto daun untuk petani.',
    answer: 'painkiller',
    why: 'Hama yang terlambat ketahuan bisa berarti gagal panen. Ruginya besar dan langsung terasa.',
  },
  {
    idea: 'Aplikasi kutipan motivasi harian.',
    answer: 'vitamin',
    why: 'Menyenangkan, tapi banyak alternatif gratis dan orang jarang merasa "harus" punya.',
  },
  {
    idea: 'Pencatat stok warung yang memberi peringatan saat barang hampir habis.',
    answer: 'painkiller',
    why: 'Kehabisan stok artinya kehilangan penjualan. Pemilik warung merasakan ruginya setiap hari.',
  },
  {
    idea: 'Tema tampilan grup kelas yang bisa ganti tiap minggu.',
    answer: 'vitamin',
    why: 'Mempercantik, tapi tidak menyelesaikan masalah yang membuat orang rugi atau repot.',
  },
  {
    idea: 'Pengingat jadwal minum obat untuk lansia yang tinggal sendiri.',
    answer: 'painkiller',
    why: 'Lupa minum obat bisa berbahaya. Keluarganya pun ikut tenang kalau ada solusinya.',
  },
  {
    idea: 'Notifikasi untuk orang tua saat uang saku anak di koperasi hampir habis.',
    answer: 'painkiller',
    why: 'Santri nggak kehabisan uang mendadak, orang tua nggak panik. Dua pihak merasakan sakitnya.',
  },
]

export const WHY_DEMO = {
  problem: 'Santri sering telat masuk kelas pagi.',
  chain: [
    'Karena antre kamar mandi lama.',
    'Karena hampir semua santri bangun dan mandi di jam yang sama.',
    'Karena cuma ada satu bel bangun untuk satu gedung.',
    'Karena jadwal mandi nggak pernah dibagi per kamar.',
    'Karena nggak ada yang tahu kapan kamar mandi sedang sepi.',
  ],
  insight:
    'Ternyata solusinya bukan sekadar "bangun lebih pagi". Akar masalahnya adalah informasi. Dan informasi adalah wilayah kekuasaan teknologi.',
  idea: 'Ide: jadwal mandi bergilir per kamar ditambah penanda sederhana kamar mandi kosong atau terisi.',
}

export const IMPACT_PRESETS = [
  { name: 'AIO PestGuard', reach: 4, depth: 9 },
  { name: 'Antrean laundry asrama', reach: 2.6, depth: 6 },
  { name: 'Filter foto lucu', reach: 5.5, depth: 1.5 },
  { name: 'Mesin pencari', reach: 6, depth: 8 },
]

export const PAYER_EXAMPLES = [
  {
    name: 'Antrean laundry asrama',
    user: 'Santri',
    payer: 'Pengelola asrama atau sekolah',
    why: 'Sekolah yang membayar karena keluhan berkurang dan mesin cuci dipakai lebih teratur.',
  },
  {
    name: 'Mesin pencari internet',
    user: 'Kita semua',
    payer: 'Pengiklan',
    why: 'Pengguna gratis, yang membayar adalah perusahaan yang ingin produknya terlihat.',
  },
  {
    name: 'AI deteksi hama',
    user: 'Petani',
    payer: 'Koperasi, dinas pertanian, atau perusahaan agrikultur',
    why: 'Petani belum tentu sanggup bayar, tapi lembaga yang butuh panen aman punya alasan kuat untuk membiayai.',
  },
  {
    name: 'Laporan perkembangan santri',
    user: 'Santri dan ustadz',
    payer: 'Orang tua',
    why: 'Orang tua yang jauh dari pondok mau membayar untuk rasa tenang dan informasi yang jelas.',
  },
]

export const MODELS = [
  {
    name: 'Langganan',
    what: 'Pengguna bayar rutin per bulan atau per tahun.',
    example: 'Sekolah bayar Rp200 ribu per bulan untuk sistem antrean laundry di semua asrama.',
    plus: 'Pemasukan stabil dan bisa diprediksi.',
    minus: 'Harus terus memberi alasan supaya orang tidak berhenti.',
  },
  {
    name: 'Komisi',
    what: 'Ambil sedikit persen dari setiap transaksi yang terjadi.',
    example: 'Aplikasi pesan makanan kantin ambil Rp500 dari tiap pesanan.',
    plus: 'Makin ramai dipakai, makin besar pemasukan.',
    minus: 'Butuh volume transaksi yang banyak.',
  },
  {
    name: 'Freemium',
    what: 'Fitur dasar gratis, fitur lanjutan berbayar.',
    example: 'Tracker hafalan gratis, laporan detail untuk orang tua berbayar.',
    plus: 'Gampang menarik pengguna awal.',
    minus: 'Kebanyakan pengguna mungkin nggak pernah upgrade.',
  },
  {
    name: 'Jual ke lembaga',
    what: 'Pembelinya organisasi: sekolah, pemerintah, perusahaan. Sering disebut B2B atau B2G.',
    example: 'Dinas pertanian membeli lisensi AI deteksi hama untuk penyuluh lapangan.',
    plus: 'Nilai satu kontrak bisa besar.',
    minus: 'Proses jualannya lama dan butuh kepercayaan.',
  },
  {
    name: 'Iklan',
    what: 'Pengguna gratis, pemasukan dari pihak yang ingin tampil.',
    example: 'Info lomba dan beasiswa gratis, disponsori bimbel atau kampus.',
    plus: 'Pengguna tidak perlu bayar apa pun.',
    minus: 'Butuh pengguna yang sangat banyak supaya menarik.',
  },
]

export const MOM_TEST = [
  {
    a: 'Kamu mau nggak pakai aplikasi antrean laundry?',
    b: 'Terakhir kali kamu nyuci, berapa lama nunggu mesin kosong?',
    good: 'b',
    why: 'Pertanyaan A mengundang jawaban sopan "mau". Pertanyaan B menggali fakta dari kejadian nyata.',
  },
  {
    a: 'Menurutmu ide aku bagus nggak?',
    b: 'Selama ini kamu ngatasin masalah ini pakai cara apa?',
    good: 'b',
    why: 'Orang jarang tega bilang idemu jelek. Cara mereka bertahan sekarang jauh lebih jujur.',
  },
  {
    a: 'Kamu pernah nyoba cari solusi untuk masalah ini?',
    b: 'Kalau ada aplikasinya, kamu bakal pakai tiap hari kan?',
    good: 'a',
    why: 'Kalau mereka belum pernah mencari solusi, mungkin masalahnya belum cukup sakit. Pertanyaan B cuma berharap dibenarkan.',
  },
  {
    a: 'Kira-kira kamu mau bayar berapa?',
    b: 'Berapa uang atau waktu yang habis gara-gara masalah ini bulan lalu?',
    good: 'b',
    why: 'Harga yang dibayangkan sering ngawur. Kerugian yang sudah terjadi adalah bukti nyata.',
  },
  {
    a: 'Ceritain dong kejadian terakhir waktu ini bikin kamu kesal.',
    b: 'Masalah ini ganggu banget kan?',
    good: 'a',
    why: 'Pertanyaan B menggiring jawaban. Pertanyaan A membuka cerita yang penuh detail.',
  },
]

export const CASES = [
  {
    id: 'pestguard',
    name: 'AIO PestGuard',
    tag: 'AI untuk petani',
    link: 'https://aio-pestguard-simulation.vercel.app',
    pain: 'Petani sering baru sadar ada serangan hama ketika tanaman sudah rusak. Mereka juga butuh tahu cara mengendalikannya yang aman, bukan sekadar nama hamanya.',
    tech: 'Membandingkan tiga model YOLO pada 24 kelas hama padi, jagung, dan bawang merah, lalu memilih YOLO11l (mAP50 0,794). Modelnya dijalankan langsung di browser lewat web app Next.js dan FastAPI, tersedia dalam tiga bahasa.',
    impact: 'Hasil deteksi diubah jadi status risiko lahan, perkiraan fase hidup hama, dan rekomendasi pengendalian organik, lengkap dengan pengecekan pestisida terlarang.',
    business: 'Masuk Top 3 kategori Energy Future di Pertamuda by Pertamina dengan dana pembinaan Rp50 juta. Calon pembayarnya bukan cuma petani, tapi juga koperasi dan lembaga pertanian.',
    lesson: 'Model yang akurat belum cukup. Petani butuh jawaban untuk pertanyaan "terus aku harus ngapain?".',
  },
  {
    id: 'bluradar',
    name: 'bluRadar',
    tag: 'Strategi bisnis digital bank',
    link: 'https://bluradar.vercel.app',
    pain: 'blu by BCA Digital punya banyak akun baru yang cepat jadi tidak aktif. Tim sales lapangan dihargai dari jumlah akun yang dibuka, bukan yang benar-benar dipakai.',
    tech: 'Menganalisis 8.726 ulasan aplikasi dan menemukan bahwa 40,1% keluhan soal ribetnya proses awal, bukan kurang promo. Lalu merancang mesin penjualan berbasis Thompson Sampling dan uplift modeling.',
    impact: 'Ukuran sukses diganti dari "akun dibuka" jadi "nasabah yang benar-benar aktif". Perubahan kecil di definisi, perubahan besar di perilaku tim.',
    business: 'Diproyeksikan menurunkan biaya per nasabah aktif sebesar 53% dan menambah 5.400 nasabah aktif dengan anggaran lebih kecil. Hasil ini bertahan di 93,7% dari 10.000 skenario simulasi Monte Carlo. Peringkat 7 dari 87 tim di babak penyisihan.',
    lesson: 'Masalah yang terlihat di permukaan belum tentu masalah sebenarnya. Kadang yang perlu diganti adalah cara kita mengukur sukses.',
  },
  {
    id: 'stocksense',
    name: 'StockSense AI',
    tag: 'Analitik untuk UMKM',
    link: null,
    pain: 'Banyak UMKM mengatur stok dengan menebak. Akibatnya sering kehabisan barang yang laku atau menumpuk barang yang nggak laku.',
    tech: 'Prediksi penjualan 7 hari ke depan dengan XGBoost, dashboard Streamlit, dan chatbot lokal (Gemma 2B lewat Ollama) yang bisa ditanya pakai Bahasa Indonesia sehari-hari.',
    impact: 'Pemilik usaha yang bukan orang teknis bisa bertanya "minggu depan stok apa yang perlu ditambah?" dan dapat jawaban yang masuk akal.',
    business: 'Potensi model langganan murah untuk UMKM, atau dititipkan sebagai fitur tambahan di aplikasi kasir yang sudah mereka pakai.',
    lesson: 'Teknologi secanggih apa pun nggak ada gunanya kalau penggunanya nggak bisa memakainya.',
  },
  {
    id: 'edugap',
    name: 'EduGap-XAI',
    tag: 'Data untuk kebijakan pendidikan',
    link: 'https://edugap-xai.vercel.app/',
    pain: 'Partisipasi sekolah usia 16 sampai 18 tahun di beberapa provinsi tertinggal jauh. Pertanyaannya: di mana persisnya, dan kenapa?',
    tech: 'Mengolah 20 indikator dari BPS dan Badan Pangan Nasional (2021 sampai 2025) dengan Moran\'s I, LISA, association rule mining, LightGBM, SHAP, dan conformal prediction.',
    impact: 'Menemukan bahwa data empat provinsi baru di Papua ternyata salinan dari provinsi induknya. Jadi "kesenjangan yang melebar 49,2%" sebagian besar adalah kesenjangan lama yang baru terlihat setelah pemekaran wilayah.',
    business: 'Nilainya ada di pengambilan keputusan: Intervention Priority Index yang menandai 6 provinsi paling terjebak, disajikan dalam dashboard 8 halaman untuk pemerintah.',
    lesson: 'Cek datanya sebelum percaya ceritanya. Data yang salah bisa bikin kebijakan salah sasaran.',
  },
]

export const PROBLEM_BANK = [
  'Antre mesin cuci di asrama',
  'Sandal dan barang sering ketuker',
  'Pengumuman penting telat sampai ke santri',
  'Setoran hafalan numpuk di akhir bulan',
  'Uang saku habis sebelum waktunya',
  'Menu kantin favorit cepat habis',
  'Jadwal piket sering lupa',
  'Barang tertinggal di kelas atau masjid',
  'Antre kamar mandi saat subuh',
  'Susah tahu progres belajar sendiri',
  'Orang tua sulit tahu kabar anak di pondok',
  'Buku perpustakaan susah dicari',
  'Sampah plastik menumpuk di asrama',
  'Izin keluar pondok masih pakai kertas',
  'Kegiatan ekstrakurikuler bentrok jadwal',
  'Air atau listrik sering boros tanpa ketahuan',
]

export const CANVAS_FIELDS = [
  { key: 'team', label: 'Nama tim', hint: 'Contoh: Tim Subuh Produktif', short: true },
  { key: 'name', label: 'Nama ide', hint: 'Satu nama yang gampang diingat', short: true },
  { key: 'pain', label: 'Keresahan', hint: 'Masalah apa yang kalian lihat? Ceritakan seperti kejadian nyata.' },
  { key: 'who', label: 'Siapa yang paling kesusahan?', hint: 'Sebutkan sespesifik mungkin. "Santri kelas 10 putra" lebih baik daripada "semua orang".' },
  { key: 'root', label: 'Akar masalah', hint: 'Hasil dari bertanya "kenapa?" berkali-kali.' },
  { key: 'solution', label: 'Solusi teknologi', hint: 'Teknologi apa, dan bagaimana cara kerjanya secara sederhana?' },
  { key: 'whynow', label: 'Kenapa baru bisa sekarang?', hint: 'Apa yang berubah sehingga solusi ini jadi mungkin?' },
  { key: 'user', label: 'Siapa yang pakai?', hint: 'Orang yang sehari-hari menggunakan solusinya.', short: true },
  { key: 'payer', label: 'Siapa yang bayar?', hint: 'Bisa sama, bisa beda dengan pemakai.', short: true },
  { key: 'test', label: 'Cara mengecek ke calon pengguna', hint: 'Pertanyaan jujur apa yang akan kalian ajukan, dan ke siapa?' },
]

export const PITCH_STAGES = [
  { from: 0, to: 15, title: 'Buka dengan cerita', body: 'Ceritakan satu kejadian nyata yang bikin semua orang di ruangan ikut merasakan masalahnya.' },
  { from: 15, to: 35, title: 'Siapa yang kesusahan', body: 'Sebutkan siapa, seberapa sering, dan apa ruginya kalau masalah ini dibiarkan.' },
  { from: 35, to: 60, title: 'Solusi kalian', body: 'Jelaskan cara kerjanya dalam bahasa yang dimengerti adik kelas.' },
  { from: 60, to: 75, title: 'Siapa yang bayar', body: 'Sebutkan siapa yang mendapat manfaat dan siapa yang mau membiayainya.' },
  { from: 75, to: 90, title: 'Kenapa kalian, kenapa sekarang', body: 'Tutup dengan alasan kalian paling cocok menyelesaikan ini, dan kenapa waktunya sekarang.' },
]

export const REFERENCES = [
  {
    text: 'Bailetti, T. (2012). Technology Entrepreneurship: Overview, Definition, and Distinctive Aspects. Technology Innovation Management Review, Februari 2012, 5 sampai 12. Akses terbuka.',
    href: 'https://timreview.ca/node/520',
  },
  {
    text: 'Graham, P. (2012). How to Get Startup Ideas. Esai daring, akses terbuka.',
    href: 'https://paulgraham.com/startupideas.html',
  },
  {
    text: 'Graham, P. (2012). Schlep Blindness. Esai daring, akses terbuka.',
    href: 'https://paulgraham.com/schlep.html',
  },
  {
    text: 'CB Insights. The Top Reasons Startups Fail. Analisis 101 catatan kegagalan startup.',
    href: 'https://www.cbinsights.com/research/startup-failure-reasons-top/',
  },
  {
    text: 'Gross, B. (2015). The single biggest reason why start-ups succeed. TED Talk, akses terbuka.',
    href: 'https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_start_ups_succeed',
  },
  {
    text: 'Fitzpatrick, R. (2013). The Mom Test: How to talk to customers and learn if your business is a good idea when everyone is lying to you.',
    href: null,
  },
]
