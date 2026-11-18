export const SECTIONS = [
  { id: 'mulai', label: 'Pembuka' },
  { id: 'kenalan', label: 'Profil pemateri' },
  { id: 'tujuan', label: 'Tujuan pembelajaran' },
  { id: 'konsep', label: 'Teknologi sebagai alat' },
  { id: 'teknologi', label: 'Peta teknologi' },
  { id: 'masalah', label: 'Menemukan masalah' },
  { id: 'produk', label: 'Dari masalah ke produk' },
  { id: 'bisnis', label: 'Model bisnis' },
  { id: 'validasi', label: 'Validasi pasar' },
  { id: 'studi-kasus', label: 'Studi kasus' },
  { id: 'etika', label: 'Dampak dan etika' },
  { id: 'pitching', label: 'Menyampaikan ide' },
  { id: 'cek-pemahaman', label: 'Cek pemahaman' },
  { id: 'penutup', label: 'Ringkasan dan penutup' },
]

export const OBJECTIVES = [
  'Menjelaskan peran teknologi dalam technopreneurship.',
  'Mengenali jenis teknologi masa kini beserta masalah yang cocok diselesaikannya.',
  'Menemukan dan merumuskan masalah yang layak diselesaikan.',
  'Memahami alur mengubah masalah menjadi produk teknologi.',
  'Membedakan model bisnis B2C, B2B, B2G, dan B2B2C.',
  'Melakukan validasi pasar dan menghitung ukuran pasar sederhana.',
]

export const LAYERS = [
  { t: 'Data', d: 'Bahan mentah: foto, teks, angka, atau sinyal sensor.', ex: 'Foto daun dan hama dari kamera ponsel' },
  { t: 'Model atau logika', d: 'Otak yang mengolah data menjadi jawaban.', ex: 'Model deteksi objek YOLO11l' },
  { t: 'Aplikasi', d: 'Wajah yang dilihat dan disentuh pengguna.', ex: 'Web app Next.js yang berjalan di browser' },
  { t: 'Keputusan pengguna', d: 'Tindakan nyata yang diambil berkat jawaban tersebut.', ex: 'Petani memilih pengendalian hama yang aman' },
]

export const TECHS = [
  {
    name: 'Computer vision',
    what: 'Teknologi yang membuat komputer mampu "melihat": mengenali, menghitung, dan menandai objek dalam gambar atau video.',
    analogy: 'Seperti mengajari mata baru dengan ribuan contoh foto berlabel, hingga ia bisa mengenali objek yang belum pernah dilihatnya.',
    fit: 'Pekerjaan yang biasanya dinilai dengan mata manusia dan dilakukan berulang kali.',
    mine: 'AIO PestGuard membandingkan tiga model YOLO pada 24 kelas hama dan memilih YOLO11l (mAP50 0,794). Proyek UAV memakai SegFormer untuk memetakan 8 kelas objek dari foto udara.',
    school: 'Mendeteksi sampah yang dibuang di tempat yang salah, atau memeriksa kerapian rak buku perpustakaan.',
    start: 'Teachable Machine dari Google (tanpa kode), lalu Ultralytics YOLO di Google Colab.',
  },
  {
    name: 'NLP dan LLM',
    what: 'Natural Language Processing membuat komputer memahami bahasa manusia. Large Language Model (LLM) adalah model bahasa berukuran besar yang dapat menulis dan menjawab pertanyaan.',
    analogy: 'Seperti pembaca super cepat yang mampu membaca ribuan keluhan dalam semenit lalu merangkum polanya.',
    fit: 'Masalah yang melibatkan banyak teks: ulasan, keluhan, dokumen, atau percakapan.',
    mine: 'Fine-tuning model IndoRoBERTa (akurasi 88,2%) untuk membaca sentimen 1.883 unggahan di X. StockSense AI memakai Gemma 2B lewat Ollama sebagai chatbot berbahasa Indonesia.',
    school: 'Merangkum masukan santri dari kotak saran digital setiap bulan.',
    start: 'Hugging Face untuk model siap pakai, Ollama untuk menjalankan LLM di laptop.',
  },
  {
    name: 'Retrieval-Augmented Generation (RAG)',
    what: 'Teknik menghubungkan LLM dengan kumpulan dokumen milik kita, sehingga jawabannya berdasarkan sumber yang jelas, bukan karangan.',
    analogy: 'Seperti ujian open book: sebelum menjawab, model mencari halaman yang relevan terlebih dahulu.',
    fit: 'Tanya jawab atas dokumen khusus yang tidak diketahui LLM umum, dan ketika jawaban harus dapat dipertanggungjawabkan.',
    mine: 'AgriPest-RAG menggabungkan deteksi hama dengan basis pengetahuan pengendalian. Proyek UAV menghubungkan hasil segmentasi dengan ChromaDB dan Gemini 2.5 Flash.',
    school: 'Asisten tanya jawab tentang tata tertib pondok dan jadwal kegiatan yang selalu merujuk dokumen resmi.',
    start: 'ChromaDB sebagai basis data vektor, ditambah API LLM seperti Gemini.',
  },
  {
    name: 'Forecasting dan machine learning tabular',
    what: 'Model yang belajar dari data berbentuk tabel untuk memprediksi angka atau kategori, termasuk memperkirakan masa depan.',
    analogy: 'Seperti pedagang berpengalaman yang menebak penjualan minggu depan, tetapi dengan ingatan atas ribuan transaksi.',
    fit: 'Keputusan yang bergantung pada perkiraan: stok, permintaan, risiko, atau anggaran.',
    mine: 'StockSense AI memprediksi penjualan 7 hari dengan XGBoost. CIVIC-FOOD AI memproyeksikan indeks ketahanan pangan 38 provinsi hingga 2028 (MAPE 4,02%, R2 0,91).',
    school: 'Memperkirakan jumlah porsi kantin harian agar makanan tidak berlebih atau kurang.',
    start: 'Google Sheets untuk data awal, lalu scikit-learn atau XGBoost di Google Colab.',
  },
  {
    name: 'Internet of Things (IoT)',
    what: 'Perangkat fisik bersensor yang terhubung ke internet dan mengirim data secara terus-menerus.',
    analogy: 'Seperti memberi indra perasa pada benda: tanah bisa "melapor" ketika kering, keran bisa "melapor" ketika bocor.',
    fit: 'Masalah di dunia fisik yang perlu dipantau terus tanpa kehadiran manusia.',
    mine: 'Di PT Aigra EON Indonesia, model forecasting dibangun untuk data sensor tanah, cuaca, dan kondisi lahan yang mengalir secara real-time.',
    school: 'Sensor pemantau pemakaian air di asrama untuk mendeteksi keran yang lupa ditutup.',
    start: 'Mikrokontroler ESP32 atau Arduino dengan sensor sederhana.',
  },
  {
    name: 'Analitik data dan explainable AI',
    what: 'Teknik menemukan pola dalam data dan menjelaskan mengapa sebuah model mengambil keputusan tertentu.',
    analogy: 'Bukan hanya memberi nilai rapor, tetapi juga menjelaskan mata pelajaran mana yang paling memengaruhi nilai tersebut.',
    fit: 'Keputusan penting yang harus dapat dijelaskan kepada orang lain, terutama pengambil kebijakan.',
    mine: 'EduGap-XAI dan SURE-MAP Indonesia memakai clustering, analisis spasial, dan SHAP untuk menjelaskan faktor penyebab kesenjangan antarprovinsi.',
    school: 'Menganalisis faktor yang paling berkaitan dengan keterlambatan setoran hafalan.',
    start: 'Looker Studio atau Tableau untuk visualisasi, lalu pustaka SHAP di Python.',
  },
  {
    name: 'Web, mobile, dan cloud',
    what: 'Lapisan yang mengantarkan teknologi kepada pengguna: aplikasi, server, dan infrastruktur daring.',
    analogy: 'Seperti etalase dan jalur distribusi. Produk sebagus apa pun tidak berguna jika tidak sampai ke tangan pembeli.',
    fit: 'Hampir semua solusi, karena model AI pun membutuhkan antarmuka agar dapat dipakai.',
    mine: 'AIO PestGuard mengekspor model ke ONNX agar berjalan langsung di browser, dibangun dengan Next.js dan FastAPI, lalu di-deploy di Vercel.',
    school: 'Halaman web sederhana untuk pendaftaran ekstrakurikuler dan pengumuman.',
    start: 'Streamlit untuk prototipe cepat, Next.js dan Vercel untuk produk yang lebih lengkap.',
  },
]

export const NO_AI = [
  ['Aturannya jelas dan sederhana', 'Logika "jika... maka..." atau rumus spreadsheet'],
  ['Belum ada data sama sekali', 'Kumpulkan data terlebih dahulu melalui formulir atau pencatatan'],
  ['Kesalahan dapat berakibat fatal', 'Sistem pendukung keputusan, manusia tetap menjadi pengambil keputusan akhir'],
  ['Masalah utamanya koordinasi', 'Jadwal bersama, grup pesan, atau papan pengumuman digital'],
]

export const PIPELINE = [
  { t: 'Rumuskan masalah', q: 'Keputusan apa yang ingin dibantu, dan oleh siapa?' },
  { t: 'Kumpulkan data', q: 'Data apa yang tersedia, dan apakah cukup mewakili kenyataan?' },
  { t: 'Siapkan data', q: 'Apakah ada data ganda, kosong, atau keliru?' },
  { t: 'Bangun model', q: 'Pendekatan mana yang paling sederhana namun memadai? Bandingkan beberapa.' },
  { t: 'Evaluasi', q: 'Metrik apa yang benar-benar mencerminkan keberhasilan bagi pengguna?' },
  { t: 'Jadikan produk', q: 'Bagaimana pengguna awam dapat memakainya tanpa pelatihan?' },
  { t: 'Pantau dan perbaiki', q: 'Apakah performa tetap baik ketika kondisi di lapangan berubah?' },
]

export const LESSONS = [
  {
    t: 'Akurasi bukan segalanya',
    d: 'Model juga harus tahu kapan ia ragu. Pada AIO PestGuard, selain mAP50 0,794, diukur pula calibration error 0,036, yaitu seberapa sesuai tingkat keyakinan model dengan kenyataan. Pada sistem deteksi glaukoma (AUC-ROC 0,9812), Monte Carlo Dropout dipakai untuk menandai prediksi yang tidak pasti agar diperiksa dokter.',
  },
  {
    t: 'Data bisa menipu',
    d: 'Pada EduGap-XAI, data empat provinsi baru di Papua ternyata salinan dari provinsi induknya. Tanpa pemeriksaan, analisis akan menyimpulkan kesenjangan melebar 49,2%, padahal sebagian besar adalah kesenjangan lama yang baru terlihat setelah pemekaran.',
  },
  {
    t: 'Model harus sampai ke pengguna',
    d: 'Model terbaik tidak berguna jika sulit dipakai. AIO PestGuard dijalankan langsung di browser dan tersedia dalam tiga bahasa. StockSense AI menyediakan chatbot yang memahami bahasa sehari-hari pemilik warung.',
  },
  {
    t: 'Pilih ukuran keberhasilan yang tepat',
    d: 'Pada bluRadar, ukuran "jumlah akun dibuka" ternyata mendorong perilaku yang salah. Ukuran diganti menjadi "nasabah yang benar-benar aktif", sehingga teknologi dan tim bergerak ke arah yang benar.',
  },
]

export const PROTO = [
  ['Tanpa kode', 'Google Form, Google Sheets, Teachable Machine', 'Menguji apakah masalahnya nyata dan solusinya diminati'],
  ['Sedikit kode', 'Google Colab, Streamlit, Looker Studio', 'Membuktikan model atau analisis dapat bekerja'],
  ['Kode penuh', 'Next.js, FastAPI, ONNX, Vercel', 'Membangun produk yang siap dipakai banyak orang'],
]

export const PAYER_EXAMPLES = [
  { name: 'Antrean laundry asrama', user: 'Santri', payer: 'Pengelola asrama atau sekolah' },
  { name: 'Mesin pencari internet', user: 'Masyarakat umum', payer: 'Pengiklan' },
  { name: 'AI deteksi hama', user: 'Petani', payer: 'Koperasi, dinas pertanian, atau perusahaan agrikultur' },
  { name: 'Dashboard prioritas pendidikan', user: 'Analis dan pengambil kebijakan', payer: 'Pemerintah daerah' },
]

export const MARKETS = [
  ['B2C', 'Individu', 'Sangat banyak', 'Kecil', 'Cepat', 'Contoh umum: aplikasi belajar berbayar'],
  ['B2B', 'Perusahaan atau UMKM', 'Banyak sampai sedang', 'Sedang sampai besar', 'Menengah', 'StockSense AI (UMKM), bluRadar (bank)'],
  ['B2G', 'Instansi pemerintah', 'Sedikit', 'Besar', 'Lama, melalui proses pengadaan', 'EduGap-XAI, CIVIC-FOOD AI'],
  ['B2B2C', 'Lembaga membayar, individu memakai', 'Sedang', 'Sedang', 'Menengah', 'AIO PestGuard (koperasi membayar, petani memakai)'],
]

export const REVENUE = [
  ['Langganan (SaaS)', 'Biaya rutin untuk memakai perangkat lunak', 'Rp49.000 per bulan per warung'],
  ['Lisensi', 'Hak pakai untuk satu lembaga dalam periode tertentu', 'Lisensi tahunan untuk satu dinas'],
  ['Per penggunaan', 'Dibayar sesuai jumlah pemakaian, misalnya per pemindaian', 'Rp200 per foto yang dianalisis'],
  ['Kontrak proyek', 'Pembuatan solusi khusus untuk satu klien', 'Dashboard kebijakan untuk satu kabupaten'],
  ['Freemium', 'Fitur dasar gratis, fitur lanjutan berbayar', 'Deteksi gratis, laporan lahan lengkap berbayar'],
]

export const EVIDENCE = [
  { t: 'Data sekunder', d: 'Statistik resmi menunjukkan masalahnya besar.', s: 1 },
  { t: 'Wawancara', d: 'Calon pengguna mengakui masalahnya nyata.', s: 2 },
  { t: 'Daftar tunggu', d: 'Orang bersedia mendaftar atau meninggalkan kontak.', s: 3 },
  { t: 'Uji coba', d: 'Pengguna benar-benar memakai versi awal secara rutin.', s: 4 },
  { t: 'Surat minat', d: 'Lembaga menandatangani letter of intent atau nota kesepahaman.', s: 5 },
  { t: 'Pembayaran pertama', d: 'Ada pihak yang membayar. Ini bukti paling kuat.', s: 6 },
]

export const CASES = [
  {
    id: 'pestguard', name: 'AIO PestGuard', segment: 'B2B2C', link: 'https://aio-pestguard-simulation.vercel.app',
    problem: 'Serangan hama sering baru disadari setelah tanaman rusak, dan petani membutuhkan panduan pengendalian yang aman.',
    tech: 'YOLO11l untuk 24 kelas hama padi, jagung, dan bawang merah (mAP50 0,794, calibration error 0,036), diekspor ke ONNX agar berjalan di browser. Web app Next.js dan FastAPI dalam tiga bahasa.',
    model: 'Petani memakai secara gratis. Koperasi, dinas pertanian, atau perusahaan agrikultur membayar lisensi per petani binaan.',
    context: 'Menurut FAO (2021), hingga 40% produksi tanaman dunia hilang akibat hama dan penyakit setiap tahun.',
    market: [
      { k: 'TAM', v: '29,34 juta', d: 'unit usaha pertanian perorangan di Indonesia (BPS, Sensus Pertanian 2023)' },
      { k: 'SAM', v: '8,8 juta', d: 'asumsi 30%: komoditas pangan dan hortikultura yang relevan serta memiliki ponsel pintar' },
      { k: 'SOM', v: '44 ribu', d: 'asumsi 0,5% dari SAM terjangkau dalam 3 tahun melalui mitra koperasi' },
    ],
    revenue: '44 ribu petani x Rp10.000 per bulan x 12 bulan = sekitar Rp5,3 miliar per tahun',
    status: 'Top 3 Energy Future di Pertamuda by Pertamina dan Best Presentation di Call for Paper Faperta UPN Veteran Jawa Timur. Keduanya adalah validasi teknis dan gagasan dari juri.',
    next: 'Uji coba dengan satu kelompok tani selama satu musim tanam, lalu mengajukan surat minat kepada koperasi.',
  },
  {
    id: 'stocksense', name: 'StockSense AI', segment: 'B2B', link: null,
    problem: 'Banyak UMKM mengatur stok berdasarkan perkiraan, sehingga sering kehabisan barang laku atau menumpuk barang yang tidak laku.',
    tech: 'Prediksi penjualan 7 hari dengan XGBoost, dashboard Streamlit, dan chatbot lokal Gemma 2B melalui Ollama yang memahami Bahasa Indonesia sehari-hari.',
    model: 'Langganan bulanan berbiaya rendah (SaaS), atau bermitra dengan aplikasi kasir yang sudah dipakai UMKM.',
    context: 'UMKM non-pertanian didominasi sektor perdagangan dan penyediaan makan minum, dua sektor yang paling bergantung pada pengelolaan stok.',
    market: [
      { k: 'TAM', v: '30,2 juta', d: 'UMKM non-pertanian di Indonesia (Kementerian UMKM, SIDT-UMKM 2025)' },
      { k: 'SAM', v: '20,85 juta', d: 'sektor perdagangan besar dan eceran (14,44 juta) serta penyediaan makan minum (6,41 juta)' },
      { k: 'SOM', v: '20.850', d: 'asumsi 0,1% dari SAM berlangganan dalam 3 tahun' },
    ],
    revenue: '20.850 usaha x Rp49.000 per bulan x 12 bulan = sekitar Rp12,3 miliar per tahun',
    status: 'Prototipe berfungsi. Belum diuji kepada pemilik usaha secara langsung.',
    next: 'Mewawancarai 10 pemilik warung di sekitar sekolah, lalu uji coba gratis selama satu bulan.',
  },
  {
    id: 'edugap', name: 'EduGap-XAI', segment: 'B2G', link: 'https://edugap-xai.vercel.app/',
    problem: 'Partisipasi sekolah usia 16 sampai 18 tahun di beberapa provinsi tertinggal, tetapi penyebab dan lokasi prioritasnya belum jelas.',
    tech: '20 indikator dari BPS dan Badan Pangan Nasional (2021 sampai 2025) dianalisis dengan Moran\'s I, LISA, association rule mining, LightGBM, SHAP, dan conformal prediction, menghasilkan Intervention Priority Index.',
    model: 'Kontrak atau lisensi tahunan kepada pemerintah daerah, umumnya melalui mekanisme pengadaan pemerintah.',
    context: 'Anggaran fungsi pendidikan pada APBN 2026 ditetapkan sebesar Rp769,09 triliun melalui Perpres Nomor 118 Tahun 2025. Alat bantu prioritas membantu anggaran tepat sasaran.',
    market: [
      { k: 'TAM', v: '552', d: 'calon pembeli: 38 pemerintah provinsi dan 514 pemerintah kabupaten atau kota' },
      { k: 'SAM', v: '150', d: 'asumsi: daerah dengan kesenjangan partisipasi sekolah yang tinggi' },
      { k: 'SOM', v: '10', d: 'asumsi: pemerintah daerah yang menjadi klien dalam 3 tahun' },
    ],
    revenue: '10 daerah x Rp150 juta per tahun = sekitar Rp1,5 miliar per tahun',
    status: 'Dashboard 8 halaman telah dibangun dan menandai 6 provinsi prioritas.',
    next: 'Presentasi kepada satu Bappeda atau Dinas Pendidikan untuk uji coba sebagai alat bantu perencanaan.',
  },
  {
    id: 'bluradar', name: 'bluRadar', segment: 'B2B enterprise', link: 'https://bluradar.vercel.app',
    problem: 'Banyak akun baru blu by BCA Digital cepat menjadi tidak aktif, sementara tim penjualan lapangan dinilai dari jumlah akun yang dibuka.',
    tech: 'Analisis 8.726 ulasan aplikasi menunjukkan 40,1% keluhan berkaitan dengan proses awal yang rumit. Penempatan tim lapangan dengan Thompson Sampling dan dorongan aktivasi dengan uplift modeling.',
    model: 'Solusi internal untuk satu klien besar. Nilainya diukur dari penghematan dan tambahan nasabah aktif, bukan dari jumlah pembeli.',
    context: 'Pada pasar B2B enterprise, validasi tidak diukur dari ukuran pasar, melainkan dari besarnya manfaat bagi satu klien.',
    market: [
      { k: 'Biaya', v: '-53%', d: 'proyeksi penurunan biaya per nasabah aktif' },
      { k: 'Nasabah', v: '+5.400', d: 'proyeksi tambahan nasabah aktif dengan anggaran lebih kecil' },
      { k: 'Ketahanan', v: '93,7%', d: 'dari 10.000 skenario simulasi Monte Carlo tetap menunjukkan hasil positif' },
    ],
    revenue: 'Proyeksi NPV 3 tahun sebesar Rp48,5 miliar dengan titik balik modal pada bulan ke-6',
    status: 'Peringkat 7 dari 87 tim (8% teratas) di babak penyisihan MarkUp Mini Case Competition 2026.',
    next: 'Menguji asumsi aktivasi dengan data internal klien melalui uji coba terbatas di satu kota.',
  },
]

export const SDG_MAP = [
  ['AIO PestGuard', 'SDG 2: Tanpa Kelaparan'],
  ['EduGap-XAI', 'SDG 4: Pendidikan Berkualitas'],
  ['StockSense AI', 'SDG 8: Pekerjaan Layak dan Pertumbuhan Ekonomi'],
  ['Deteksi glaukoma', 'SDG 3: Kehidupan Sehat dan Sejahtera'],
]

export const ETHICS = [
  { title: 'Privasi', body: 'Data pribadi adalah amanah. Kumpulkan seperlunya, simpan dengan aman, dan minta izin sebelum digunakan.', color: 'bg-marker' },
  { title: 'Keadilan', body: 'Model belajar dari data yang bisa berat sebelah. Audit keadilan memastikan hasilnya tidak merugikan kelompok tertentu.', color: 'bg-[#D4DBFF]' },
  { title: 'Keamanan', body: 'Rekomendasi yang keliru dapat lebih berbahaya daripada tidak ada rekomendasi. Periksa keluaran terhadap aturan keselamatan.', color: 'bg-[#BFE8D6]' },
  { title: 'Kejujuran AI', body: 'LLM dapat mengarang jawaban (halusinasi). RAG dan pencantuman sumber membantu jawaban tetap dapat dipertanggungjawabkan.', color: 'bg-[#FFD1D8]' },
  { title: 'Transparansi', body: 'Keputusan penting harus dapat dijelaskan. Teknik seperti SHAP membantu menunjukkan alasan di balik prediksi.', color: 'bg-white' },
]

export const QUIZ = [
  { q: 'Menurut Bailetti (2012), technology entrepreneurship bertujuan untuk...', options: ['Menciptakan dan menangkap nilai', 'Membuat teknologi secanggih mungkin', 'Merekrut dan melatih karyawan', 'Meneliti dan mempublikasikan jurnal'], a: 0 },
  { q: 'Kapan sebuah masalah sebaiknya tidak diselesaikan dengan AI?', options: ['Ketika datanya sangat banyak', 'Ketika aturannya jelas dan sederhana', 'Ketika polanya rumit', 'Ketika melibatkan gambar'], a: 1 },
  { q: 'Produk yang dibayar koperasi tetapi dipakai petani termasuk model...', options: ['B2C', 'B2G', 'B2B2C', 'C2C'], a: 2 },
  { q: 'SOM dalam perhitungan ukuran pasar berarti...', options: ['Seluruh pasar di dunia', 'Pasar yang dapat dilayani secara teori', 'Jumlah pesaing', 'Bagian pasar yang realistis direbut dalam waktu dekat'], a: 3 },
  { q: 'Bukti validasi pasar yang paling kuat adalah...', options: ['Pembayaran pertama dari pelanggan', 'Pujian dari teman', 'Banyaknya fitur', 'Logo yang menarik'], a: 0 },
]

export const SUMMARY = [
  'Teknologi adalah alat untuk menciptakan dan menangkap nilai, bukan tujuan akhir.',
  'Setiap teknologi cocok untuk jenis masalah tertentu, dan tidak semua masalah membutuhkan AI.',
  'Ide yang kuat berangkat dari masalah nyata yang bersifat mendesak dan merugikan.',
  'Produk teknologi yang baik memperhatikan kualitas data, ketidakpastian model, dan kemudahan pengguna.',
  'Pilih model bisnis (B2C, B2B, B2G, B2B2C) berdasarkan siapa yang memakai dan siapa yang membayar.',
  'Validasi pasar bergerak dari data sekunder hingga pembayaran pertama, dan menang lomba belum termasuk validasi pasar.',
  'Teknologi harus amanah: menjaga privasi, adil, aman, jujur, dan transparan.',
]

export const GLOSSARY = [
  { t: 'Technopreneur', d: 'Wirausahawan yang menjadikan teknologi sebagai alat utama penciptaan nilai.' },
  { t: 'Model AI', d: 'Program yang belajar pola dari data untuk membuat prediksi atau keputusan.' },
  { t: 'RAG', d: 'Retrieval-Augmented Generation, teknik menghubungkan LLM dengan dokumen sumber.' },
  { t: 'SaaS', d: 'Software as a Service, perangkat lunak yang dibayar secara berlangganan.' },
  { t: 'B2B, B2G, B2B2C', d: 'Penjualan kepada bisnis, kepada pemerintah, dan kepada lembaga yang melayani individu.' },
  { t: 'TAM, SAM, SOM', d: 'Total pasar, pasar yang dapat dilayani, dan pasar yang realistis direbut.' },
  { t: 'MVP', d: 'Minimum Viable Product, versi paling sederhana untuk menguji ide.' },
  { t: 'Kalibrasi', d: 'Kesesuaian antara tingkat keyakinan model dan kenyataan.' },
]

export const REFERENCES = [
  { text: 'Bailetti, T. (2012). Technology Entrepreneurship: Overview, Definition, and Distinctive Aspects. Technology Innovation Management Review. Akses terbuka.', href: 'https://timreview.ca/node/520' },
  { text: 'Graham, P. (2012). How to Get Startup Ideas. Esai daring, akses terbuka.', href: 'https://paulgraham.com/startupideas.html' },
  { text: 'Badan Pusat Statistik. (2023). Hasil Pencacahan Lengkap Sensus Pertanian 2023 Tahap I.', href: 'https://www.bps.go.id/id/pressrelease/2023/12/04/2050/' },
  { text: 'FAO. (2021). Climate change fans spread of pests and threatens plants and crops, new FAO study.', href: 'https://sfcs.fao.org/newsroom/detail/Climate-change-fans-spread-of-pests-and-threatens-plants-and-crops-new-FAO-study/en' },
  { text: 'Kementerian UMKM RI. (2025). Sistem Informasi Data Tunggal UMKM, dikutip melalui UKMIndonesia.id.', href: 'https://ukmindonesia.id/baca-deskripsi-posts/data-umkm-jumlah-dan-pertumbuhan-usaha-mikro-kecil-dan-menengah-di-indonesia' },
  { text: 'Peraturan Presiden Nomor 118 Tahun 2025 tentang Rincian APBN 2026, dikutip melalui Harian Jogja.', href: 'https://news.harianjogja.com/r-1275584/apbn-2027-tertinggi-sepanjang-sejarah-anggaran-pendidikan-tembus-rp824-triliun' },
  { text: 'United Nations. (2015). Transforming our world: the 2030 Agenda for Sustainable Development.', href: 'https://sdgs.un.org/goals' },
  { text: 'CB Insights. The Top Reasons Startups Fail.', href: 'https://www.cbinsights.com/research/startup-failure-reasons-top/' },
  { text: 'Gross, B. (2015). The single biggest reason why start-ups succeed. TED Talk.', href: 'https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_start_ups_succeed' },
  { text: 'Fitzpatrick, R. (2013). The Mom Test.', href: null },
]
export const CONTACT = {
  portfolio: 'https://nazrilravipratama.vercel.app/',
  whatsapp: 'https://wa.me/6282333970758',
  whatsappLabel: '0823 3397 0758',
  linkedin: 'https://www.linkedin.com/in/nazrilravipratama',
  email: 'nazrilpratama099@gmail.com',
}

export const HERO_PAIRS = [
  { pain: 'Antrean mesin cuci asrama bisa memakan waktu satu jam.', idea: 'Sistem antrean laundry yang memberi notifikasi saat giliran tiba.' },
  { pain: 'Petani baru menyadari serangan hama setelah tanaman rusak.', idea: 'AI yang mengenali hama cukup dari foto kamera ponsel.' },
  { pain: 'Warung dekat pondok sering kehabisan barang yang paling dicari.', idea: 'Prediksi penjualan sederhana untuk pemilik warung.' },
  { pain: 'Setoran hafalan selalu menumpuk di akhir bulan.', idea: 'Pencatat hafalan yang menampilkan progres harian.' },
]

export const MARQUEE = [
  'antrean mesin cuci', 'sandal tertukar', 'internet lambat saat tenggat', 'jadwal piket terlupa',
  'setoran hafalan menumpuk', 'uang saku habis lebih cepat', 'menu kantin cepat habis',
  'barang hilang di asrama', 'pengumuman terlambat sampai', 'antrean kamar mandi subuh',
]

export const PHOTOS = [
  { src: '/img/pertamuda.webp', alt: 'Nazril memegang piala dan papan dana pembinaan Top 3 Pertamuda Energy Founder', caption: 'Top 3 Pertamuda Energy Founder dari Pertamina. Dana pembinaan Rp50 juta untuk AIO PestGuard.', rotate: -2.5 },
  { src: '/img/nec-stage.webp', alt: 'Nazril di atas panggung memegang papan Juara 3 dan sertifikat', caption: 'Juara 3 National Essay Competition, Semadiksi UNUSA, Oktober 2026.', rotate: 2 },
  { src: '/img/best-presentation.webp', alt: 'Nazril menerima sertifikat Best Presentation di panggung', caption: 'Best Presentation di Call for Paper Faperta UPN Veteran Jawa Timur, untuk AgriPest-RAG.', rotate: -1.5 },
  { src: '/img/gemastik.webp', alt: 'Tim Sains Data UNESA berfoto di depan panggung GEMASTIK XVIII', caption: 'Finalis GEMASTIK XVIII bersama tim Sains Data UNESA di Telkom University, 2025.', rotate: 1.5, wide: true },
  { src: '/img/nec-cert.webp', alt: 'Papan Juara 3 dan sertifikat atas nama Nazril Ravi Pratama', caption: 'Sertifikat Juara 3 National Essay Competition.', rotate: -2 },
  { src: '/img/jakarta.webp', alt: 'Nazril berdiri di rooftop dengan latar gedung tinggi Jakarta', caption: 'Di sela perjalanan di Jakarta.', rotate: 2.5 },
]

export const STATS = [
  { value: 35, suffix: '+', label: 'prestasi nasional dan internasional' },
  { value: 4400, prefix: '1 dari 10 tim, ', suffix: '+ pendaftar', label: 'COMPFEST Data Science Academy UI', compact: true },
  { value: 3.84, decimals: 2, label: 'IPK Sains Data UNESA' },
]

export const TIMELINE = [
  { when: '2024', what: 'Memulai studi Sains Data di UNESA, International Undergraduate Program.' },
  { when: 'Sept 2025', what: 'Asisten dosen untuk 3 kelas: Aljabar Matriks serta Struktur Data dan Algoritma.' },
  { when: 'Okt 2025', what: 'Finalis GEMASTIK XVIII divisi Data Mining.' },
  { when: 'Feb sampai Mei 2026', what: 'CRM Data Officer Intern di Jalan Langit Foundation, terpilih sebagai Best Intern #1 dari seluruh divisi.' },
  { when: 'Mar 2026 sampai sekarang', what: 'Data Science and AI Researcher di Big Data Lab Analysis.' },
  { when: 'Mei 2026', what: 'Pembicara di POINTER 2026, Fakultas Ilmu Komputer UPN Veteran Jakarta.' },
  { when: 'Jul 2026', what: 'Terpilih sebagai 1 dari 10 tim (dari 4.400+ pendaftar) di COMPFEST Data Science Academy, Universitas Indonesia.' },
  { when: 'Jul 2026 sampai sekarang', what: 'AI Engineer Intern di PT Aigra EON Indonesia, mengembangkan AI untuk pertanian.' },
  { when: 'Okt 2026', what: 'Top 3 Pertamuda by Pertamina, Juara 1 Smart Data Analytics USK, dan Juara 3 NEC UNUSA.' },
]

export const EXAMPLES = [
  { name: 'Gojek', year: '2010', story: 'Gojek tidak dimulai sebagai aplikasi super. Awalnya ia adalah layanan pemesanan ojek melalui telepon, karena mencari ojek yang jelas dan dapat dipesan saat itu sulit. Aplikasinya baru diluncurkan pada 2015.' },
  { name: 'Ruangguru', year: '2014', story: 'Ruangguru berangkat dari sulitnya mencari guru les yang sesuai. Platform ini mulai sebagai tempat mempertemukan siswa dengan guru privat, lalu berkembang menjadi layanan belajar daring.' },
  { name: 'Kitabisa', year: '2013', story: 'Kitabisa lahir dari keinginan untuk memudahkan masyarakat saling membantu. Penggalangan dana yang sebelumnya rumit menjadi dapat dilakukan siapa saja secara daring.' },
]

export const IDEA_SOURCES = [
  { title: 'Keresahan pribadi', body: 'Hal yang hampir setiap hari menyulitkan diri sendiri. Jika kita merasakannya, besar kemungkinan orang lain juga.', ask: 'Apa yang paling sering membuat kegiatan harian terhambat?' },
  { title: 'Proses yang masih manual', body: 'Antrean, absensi, rekap, dan pencatatan yang masih menggunakan kertas serta diulang setiap hari merupakan sinyal kuat adanya peluang.', ask: 'Apa yang masih ditulis tangan dan sering hilang atau keliru?' },
  { title: 'Keluhan orang lain', body: 'Keluhan pengelola kantin, ustadz, petugas keamanan, atau orang tua adalah informasi berharga tentang masalah nyata.', ask: 'Siapa yang paling sering mengeluh di sekitar kita, dan tentang apa?' },
  { title: 'Perkembangan teknologi', body: 'Teknologi baru membuka kemungkinan yang sebelumnya mustahil, misalnya AI, kamera ponsel, dan internet yang semakin terjangkau.', ask: 'Pekerjaan apa yang dulu memerlukan ahli, tetapi kini dapat dibantu AI?' },
  { title: 'Data', body: 'Angka dapat mengungkap masalah yang tidak terlihat oleh mata. Pola kecil sering menyimpan cerita besar.', ask: 'Pola apa yang mungkin muncul dari data absensi atau nilai satu angkatan?' },
]

export const PK_TABLE = [
  { aspect: 'Urgensi', pk: 'Harus segera diselesaikan', vit: 'Dapat ditunda tanpa kerugian berarti' },
  { aspect: 'Frekuensi', pk: 'Terjadi rutin, sering setiap hari', vit: 'Sesekali atau tidak menentu' },
  { aspect: 'Kerugian jika dibiarkan', pk: 'Waktu, uang, kesehatan, atau kesempatan hilang', vit: 'Hampir tidak ada' },
  { aspect: 'Kesediaan membayar', pk: 'Tinggi, karena rasa sakitnya nyata', vit: 'Rendah, banyak alternatif gratis' },
]

export const WHY_DEMO = {
  problem: 'Santri sering terlambat masuk kelas pagi.',
  chain: [
    'Karena antrean kamar mandi lama.',
    'Karena hampir semua santri bangun dan mandi pada jam yang sama.',
    'Karena hanya ada satu bel bangun untuk satu gedung.',
    'Karena jadwal mandi tidak pernah dibagi per kamar.',
    'Karena tidak ada informasi kapan kamar mandi sedang sepi.',
  ],
  insight: 'Akar masalahnya ternyata bukan kedisiplinan semata, melainkan ketiadaan informasi. Informasi adalah wilayah di mana teknologi paling berperan.',
}

export const MOM_TABLE = [
  { weak: 'Kamu mau memakai aplikasi antrean laundry?', strong: 'Terakhir kali mencuci, berapa lama kamu menunggu mesin kosong?', why: 'Fakta dari kejadian nyata lebih jujur daripada janji di masa depan.' },
  { weak: 'Menurutmu ideku bagus?', strong: 'Selama ini kamu mengatasi masalah ini dengan cara apa?', why: 'Orang cenderung sopan terhadap ide kita, tetapi jujur tentang kebiasaannya.' },
  { weak: 'Kamu mau membayar berapa?', strong: 'Berapa waktu atau uang yang hilang karena masalah ini bulan lalu?', why: 'Kerugian yang sudah terjadi adalah bukti, harga yang dibayangkan hanya perkiraan.' },
  { weak: 'Masalah ini sangat mengganggu, kan?', strong: 'Ceritakan kejadian terakhir ketika hal ini terjadi.', why: 'Pertanyaan menggiring menghasilkan jawaban yang kita harapkan, bukan kenyataan.' },
]

export const PITCH_STAGES = [
  { from: 0, to: 15, title: 'Pembuka', body: 'Ceritakan satu kejadian nyata yang membuat audiens ikut merasakan masalahnya.' },
  { from: 15, to: 35, title: 'Masalah', body: 'Sebutkan siapa yang terdampak, seberapa sering, dan apa kerugiannya.' },
  { from: 35, to: 60, title: 'Solusi', body: 'Jelaskan cara kerja solusi dengan bahasa yang mudah dipahami.' },
  { from: 60, to: 75, title: 'Nilai bisnis', body: 'Sebutkan siapa pengguna, siapa pembayar, dan model pendapatannya.' },
  { from: 75, to: 90, title: 'Penutup', body: 'Jelaskan mengapa tim kalian tepat dan mengapa waktunya sekarang.' },
]
