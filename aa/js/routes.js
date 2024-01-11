routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/signin/',
    url: './pages/signin.html',
  },
  {
    path: '/postregister/',
    url: './pages/postregister.html',
  },
  {
    path: '/panduan/',
    url: './pages/panduan.html',
  },
  {
    path: '/home/',
    url: './pages/home.html',
  },
  {
    path: '/akun/',
    url: './pages/akun.html',
  },
  {
    path: '/signup/',
    url: './pages/signup.html',
  },
    {
    path: '/fasilitas_kamar/',
    url: './pages/fasilitas-kamar.html',
  },
  {
    path: '/fasiinfodaftar/',
    url: './pages/fasiinfodaftar.html',
  },
  {
    path: '/fasivip/',
    url: './pages/fasivip.html',
  },
  {
    path: '/fasibersalin/',
    url: './pages/fasibersalin.html',
  },
  {
    path: '/fasiperina/',
    url: './pages/fasiperina.html',
  },
  {
    path: '/fasiradio/',
    url: './pages/fasiradio.html', 
  },
  {
    path: '/fasilab/',
    url: './pages/fasilab.html',
  },
  {
    path: '/fasibedah/',
    url: './pages/fasibedah.html',  
  },
  {
    path: '/fasifarmasi/',
    url: './pages/fasifarmasi.html',   
  },
  {
    path: '/fasiigd/',
    url: './pages/fasiigd.html',   
  },
  {
    path: '/fasiponek',
    url: './pages/fasiponek.html',   
  },
  {
    path: '/color-themes/',
    componentUrl: './pages/color-themes.html',
  },
  {
    path: '/news/',
    url: './pages/news.html',
  },
  {
    path: '/news/:id/',
    url: './pages/news-detail.html',
  },
  {
    path: '/daftar/',
    url: './pages/daftar.html',
  },
  {
    path: '/kamar/',
    url: './pages/kamar.html',
  },
  {
    path: '/dokter/',
    url: './pages/dokter.html',
  },
  {
    path: '/rawatjalan/',
    url: './pages/rawatjalan.html',
  },
  {
    path: '/regiswa/',
    url: './pages/regiswa.html',
  },
  {
    path: '/rawatinap/:idu/',
    url: './pages/rawatinap.html',
  },
  {
    path: '/laboratorium/',
    url: './pages/laboratorium.html',
  },
  {
    path: '/radiologi/',
    url: './pages/radiologi.html',
  },
  {
    path: '/pengaduan/',
    url: './pages/pengaduan.html',
  },
  {
    path: '/pengaduan/:no_rkm_medis/:id/',
    url: './pages/pengaduan-detail.html',
  },
  {
    path: '/booking/',
    url: './pages/booking.html',
  },
  {
    path: '/booking/:no_rkm_medis/:tanggal_periksa/:no_reg/',
    url: './pages/booking-detail.html',
  },
  {
    path: '/billing/',
    url: './pages/billing.html',
  },
  {
    path: '/riwayat/',
    url: './pages/riwayat-list.html',
  },
  {
    path: '/riwayat/:no_rkm_medis/:tgl_registrasi/:no_reg/',
    url: './pages/riwayat-detail.html',
  },
  {
    path: '/riwayatranap/',
    url: './pages/riwayatranap-list.html',
  },
  {
    path: '/riwayatranap/:no_rkm_medis/:tgl_registrasi/:no_reg/',
    url: './pages/riwayatranap-detail.html',
  },  {
    path: '/profil/',
    url: './pages/profil.html',
  },
  {
    path: '/sukses/',
    url: './pages/sukses.html',
  },
  {
    path: '/profile/',
    url: './pages/profile.html',
  },
  {
    path: '/notifikasi/',
    url: './pages/notifikasi.html',
  },
  {
    path: '/telemedicine/',
    url: './pages/telemedicine.html',
  },
    {
    path: '/antrianpoli/',
    url: './pages/antrianpoli.html',
  },
  {
    path: '/telemedicine/:no_rkm_medis/:tanggal/:kd_poli/:nm_poli/:kd_dokter/:nm_dokter/:biaya/',
    url: './pages/telemedicine-daftar.html',
  },
  {
    path: '/operasi/',
    url: './pages/operasi.html',
  }, 
  {
    path: '/telemedicine-sukses/',
    url: './pages/telemedicine-sukses.html',
  },
  // Color Themes
  {
    path: '/pengaturan/',
    componentUrl: './pages/pengaturan.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
