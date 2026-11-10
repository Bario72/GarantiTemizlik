// Tüm hizmet içerikleri tek merkezden yönetilir.
// Her hizmetin kendi detay sayfası vardır: /hizmetler/:slug
// visual: ServiceVisual bileşenindeki illüstrasyon anahtarı.
// Görseller gerçek fotoğraflarla değiştirilecekse README.md'ye bakın.

export const SERVICES = [
  {
    slug: 'hali-yikama',
    title: 'Halı Yıkama',
    icon: 'Layers',
    visual: 'carpet',
    short:
      'Batman halı yıkama hizmeti: makine halısından yün ve el dokuma halılara kadar derinlemesine yıkama, durulama ve kurutma.',
    seoTitle: 'Batman Halı Yıkama | Garanti Temizlik – 0543 219 77 72',
    seoDesc:
      'Batman halı yıkama hizmeti. Makine halısı, yün halı ve el dokuma halılar için profesyonel yıkama, durulama ve kurutma. Bilgi için hemen arayın.',
    intro:
      'Halılar; toz, leke ve alerjeni en çok tutan ev tekstilidir. Garanti Temizlik olarak Batman genelinde halılarınızı cinsine ve kirlilik durumuna uygun ürünlerle yıkıyor, iyice durulayıp kuruttuktan sonra kullanıma hazır şekilde teslim ediyoruz.',
    scope: [
      'Makine halısı, yün halı ve el dokuma halı yıkama',
      'Leke bölgelerine özel ön işlem',
      'Halı cinsine uygun şampuan ve dozaj',
      'Derinlemesine yıkama ve bol su ile durulama',
      'Kurutma sonrası paketli teslim',
    ],
    faq: [
      {
        q: 'Hangi halı türlerini yıkıyorsunuz?',
        a: 'Makine halısı, yün halı, shaggy ve el dokuma halılar dahil olmak üzere farklı halı türleri için cinsine uygun yıkama uygulanır. Hassas halılarınız için telefonla veya WhatsApp üzerinden bilgi alabilirsiniz.',
      },
      {
        q: 'Halılar ne kadar sürede teslim edilir?',
        a: 'Teslim süresi halı sayısına, cinsine ve yoğunluğa göre değişir. Güncel teslim süresini öğrenmek için bizi arayabilirsiniz.',
      },
      {
        q: 'Fiyatlar nasıl belirleniyor?',
        a: 'Halı yıkama fiyatı metrekare ve halı cinsine göre hesaplanır. Net fiyat bilgisi için telefonla veya WhatsApp üzerinden ölçü ve halı türünü iletmeniz yeterlidir.',
      },
    ],
  },
  {
    slug: 'koltuk-yikama',
    title: 'Koltuk Yıkama',
    icon: 'Armchair',
    visual: 'sofa',
    short:
      'Batman koltuk yıkama hizmeti: kumaş ve döşeme tipine uygun ürünlerle yerinde derinlemesine koltuk temizliği.',
    seoTitle: 'Batman Koltuk Yıkama | Yerinde Koltuk Temizliği – Garanti Temizlik',
    seoDesc:
      'Batman koltuk yıkama ve yerinde koltuk temizliği. Kumaş tipine uygun ürünlerle leke çözme, derin temizlik ve hızlı kuruma. Hemen bilgi alın.',
    intro:
      'Koltuklar her gün kullanıldığı için ter, toz ve lekeleri derinlemesine tutar. Koltuklarınızı evinizde, kumaş ve döşeme tipine uygun makine ve ürünlerle yıkıyor; leke bölgelerine özel işlem uygulayarak dokusunu bozmadan temizliyoruz.',
    scope: [
      'Kumaş, kadife ve mikrofiber döşeme temizliği',
      'Oturma grubu, köşe takımı, berjer ve sandalye',
      'Leke ve koku bölgelerine özel ön işlem',
      'Yerinde uygulama, kısa kuruma süresi',
      'Dokuyu yıpratmayan ürün seçimi',
    ],
    faq: [
      {
        q: 'Koltuk yıkama evde mi yapılıyor?',
        a: 'Evet, koltuk yıkama adresinizde (yerinde) yapılır. Uygulama sonrası koltuklar kısa sürede kullanılabilir hale gelir.',
      },
      {
        q: 'Deri koltuklar da temizleniyor mu?',
        a: 'Döşeme tipine göre uygulanacak işlem değişir. Deri ve özel kumaşlar için telefonla veya WhatsApp üzerinden bilgi almanızı öneririz.',
      },
      {
        q: 'Koltuklar ne kadar sürede kurur?',
        a: 'Kuruma süresi kumaş tipine ve ortam havalandırmasına göre değişir; genellikle aynı gün içinde kullanılabilir duruma gelir.',
      },
    ],
  },
  {
    slug: 'arac-koltugu-yikama',
    title: 'Araç Koltuğu Yıkama',
    icon: 'Car',
    visual: 'carseat',
    short:
      'Batman araç koltuğu yıkama: oto koltuğu, tavan ve taban döşemelerinde derinlemesine temizlik ve koku giderme.',
    seoTitle: 'Batman Araç Koltuğu Yıkama | Oto Döşeme Temizliği – Garanti Temizlik',
    seoDesc:
      'Batman araç koltuğu yıkama hizmeti. Oto koltukları, tavan ve taban döşemelerinde leke çözme, derin temizlik ve koku giderme. Hemen arayın.',
    intro:
      'Araç içi döşemeler yoğun kullanımda hızla kirlenir ve koku tutar. Araç koltuklarınızı, tavan ve taban döşemelerinizi kumaşa uygun ürünlerle derinlemesine temizliyor; lekeleri çözüp aracınızın içini ferah bir hale getiriyoruz.',
    scope: [
      'Ön ve arka araç koltuğu yıkama',
      'Tavan ve taban döşeme temizliği',
      'Leke ve koku giderme uygulaması',
      'Kumaş ve deri döşemeye uygun ürünler',
      'Detaylı iç temizlik desteği',
    ],
    faq: [
      {
        q: 'Araç koltuğu yıkama ne kadar sürer?',
        a: 'İşlem süresi aracın büyüklüğüne ve kirlilik durumuna göre değişir. Randevu alırken yaklaşık süre bilgisi verilir.',
      },
      {
        q: 'Koltuklar sökülüyor mu?',
        a: 'Standart uygulamada koltuklar sökülmeden, araç içinde temizlenir. Detaylar için bizi arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'yatak-yikama',
    title: 'Yatak Yıkama',
    icon: 'BedDouble',
    visual: 'bed',
    short:
      'Batman yatak yıkama hizmeti: yatak yüzeyinde derinlemesine temizlik, leke ve akar arındırma ile hijyenik uyku alanı.',
    seoTitle: 'Batman Yatak Yıkama | Yerinde Yatak Temizliği – Garanti Temizlik',
    seoDesc:
      'Batman yatak yıkama ve yerinde yatak temizliği. Leke çözme, derinlemesine temizlik ve hijyen uygulaması ile sağlıklı uyku alanı. Bilgi için arayın.',
    intro:
      'Yataklar ter, toz ve akarların en çok biriktiği alanlardır. Yataklarınızı yerinde, kumaşına uygun ürünlerle derinlemesine temizliyor; leke ve kokuları gidererek daha hijyenik bir uyku alanı sunuyoruz.',
    scope: [
      'Tek ve çift kişilik yatak temizliği',
      'Leke bölgelerine özel uygulama',
      'Derinlemesine toz ve akar arındırma',
      'Yerinde uygulama, pratik çözüm',
      'Baza ve başlık temizliği desteği',
    ],
    faq: [
      {
        q: 'Yatak temizliği evde mi yapılıyor?',
        a: 'Evet, yatak yıkama adresinizde yapılır. Uygulama sonrası yatak kısa sürede kullanılabilir hale gelir.',
      },
      {
        q: 'Hangi yatak türlerine uygulanıyor?',
        a: 'Kumaş yüzeyli yataklara uygulanır. Yatağınızın türüne göre en doğru bilgiyi telefonla veya WhatsApp üzerinden alabilirsiniz.',
      },
    ],
  },
  {
    slug: 'battaniye-yorgan-yikama',
    title: 'Battaniye & Yorgan Yıkama',
    icon: 'Package',
    visual: 'blanket',
    short:
      'Batman battaniye ve yorgan yıkama: elyaf, yün ve pamuklu ürünlerde kumaşa uygun yıkama ve kurutma.',
    seoTitle: 'Batman Battaniye ve Yorgan Yıkama | Garanti Temizlik',
    seoDesc:
      'Batman battaniye yıkama ve yorgan yıkama hizmeti. Elyaf, yün ve pamuklu ürünler için kumaşa uygun yıkama, durulama ve kurutma. Hemen bilgi alın.',
    intro:
      'Battaniye ve yorganlar evde yıkandığında formunu kaybedebilir, tam kurumadığında koku yapabilir. Battaniye ve yorganlarınızı kumaş tipine uygun programlarla yıkıyor, tam kuruttuktan sonra kullanıma hazır şekilde teslim ediyoruz.',
    scope: [
      'Elyaf, yün ve pamuklu yorgan yıkama',
      'Battaniye ve pike yıkama',
      'Kumaşa uygun program ve ürün seçimi',
      'Tam kurutma ile koku önleme',
      'Paketli ve düzenli teslim',
    ],
    faq: [
      {
        q: 'Yün yorganlar yıkanabiliyor mu?',
        a: 'Yün ürünler, kumaşa uygun özel programlarla yıkanır. Ürününüzün etiketine ve türüne göre en doğru bilgi için bizimle iletişime geçebilirsiniz.',
      },
      {
        q: 'Teslim süresi ne kadar?',
        a: 'Teslim süresi ürün sayısına ve yoğunluğa göre değişir; randevu sırasında net bilgi verilir.',
      },
    ],
  },
  {
    slug: 'zebra-stor-perde-yikama',
    title: 'Zebra & Stor Perde Yıkama',
    icon: 'PanelTop',
    visual: 'curtain',
    short:
      'Batman perde yıkama: zebra, stor ve tül perdelerde formunu bozmadan temizlik; söküm ve takım desteği.',
    seoTitle: 'Batman Zebra ve Stor Perde Yıkama | Garanti Temizlik',
    seoDesc:
      'Batman perde yıkama hizmeti. Zebra perde, stor perde ve tül perdelerde formunu bozmadan temizlik; söküm ve montaj desteği. Bilgi için hemen arayın.',
    intro:
      'Zebra ve stor perdeler yanlış yıkandığında dalgalanır ve formunu kaybeder. Perdelerinizi mekanizmasına ve kumaşına uygun yöntemle temizliyor; talep halinde söküm ve tekrar takım konusunda da destek veriyoruz.',
    scope: [
      'Zebra perde yıkama',
      'Stor ve silver perde temizliği',
      'Tül ve fon perde yıkama',
      'Formunu koruyan uygulama',
      'Söküm ve montaj desteği',
    ],
    faq: [
      {
        q: 'Perdeler formunu kaybeder mi?',
        a: 'Zebra ve stor perdeler, mekanizmasına ve kumaşına uygun yöntemle temizlendiği için formunu koruyacak şekilde işlem görür.',
      },
      {
        q: 'Perde söküm ve takma hizmeti var mı?',
        a: 'Talep halinde perdelerin sökülmesi ve temizlik sonrası tekrar takılması konusunda destek verilir. Ayrıntı için bizi arayın.',
      },
    ],
  },
  {
    slug: 'kombi-petek-temizligi',
    title: 'Kombi Petek Temizliği',
    icon: 'Flame',
    visual: 'radiator',
    short:
      'Batman kombi petek temizliği: makineyle petek içi tortu temizliği, daha verimli ısınma ve yakıt tasarrufu.',
    seoTitle: 'Batman Kombi Petek Temizliği | Garanti Temizlik',
    seoDesc:
      'Batman kombi petek temizliği. Makineyle petek içi tortu ve çamur temizliği; daha verimli ısınma, dengeli sıcaklık. Bilgi almak için hemen arayın.',
    intro:
      'Zamanla peteklerin içinde biriken tortu ve çamur, ısınma verimini düşürür ve yakıt tüketimini artırır. Peteklerinizi makineyle yıkayarak tortudan arındırıyor; dairenizin daha dengeli ve verimli ısınmasına yardımcı oluyoruz.',
    scope: [
      'Makine ile petek içi yıkama',
      'Tortu ve çamur arındırma',
      'Petek ve tesisat kontrolü',
      'Isınma verimliliğinde iyileşme',
      'Düzenli bakım önerileri',
    ],
    faq: [
      {
        q: 'Petek temizliği ne zaman yaptırılmalı?',
        a: 'Petekleriniz alttan soğuk üstten sıcaksa, bazı odalar geç ısınıyorsa veya uzun süredir temizlik yapılmadıysa petek temizliği önerilir.',
      },
      {
        q: 'İşlem sırasında evde tadilat gerekir mi?',
        a: 'Hayır. Petek temizliği mevcut tesisat üzerinden makineyle yapılır; kırma, dökme gibi işlemler gerektirmez.',
      },
    ],
  },
  {
    slug: 'klima-temizligi',
    title: 'Klima Temizliği',
    icon: 'Wind',
    visual: 'ac',
    short:
      'Batman klima temizliği: filtre ve iç ünite hijyeni, koku giderme ve daha sağlıklı hava akışı.',
    seoTitle: 'Batman Klima Temizliği | Klima Bakımı – Garanti Temizlik',
    seoDesc:
      'Batman klima temizliği ve bakımı. Filtre, iç ünite ve fan temizliği; koku giderme ve sağlıklı hava akışı. Bilgi için 0543 219 77 72.',
    intro:
      'Klimaların içinde biriken toz ve nem; koku, alerjen ve verim kaybına neden olur. Klimanızın filtre, fan ve iç ünitesini hijyenik şekilde temizliyor; daha sağlıklı hava ve daha verimli soğutma/ısıtma için bakımını yapıyoruz.',
    scope: [
      'Filtre ve iç ünite temizliği',
      'Fan ve evaporatör hijyeni',
      'Koku giderme uygulaması',
      'Verim ve hava akışı kontrolü',
      'Kullanım ve bakım önerileri',
    ],
    faq: [
      {
        q: 'Klima temizliği ne sıklıkla yapılmalı?',
        a: 'Kullanım yoğunluğuna göre değişmekle birlikte, yoğun sezon öncesinde temizlik ve bakım yaptırılması önerilir.',
      },
      {
        q: 'İşlem sonrası klima hemen kullanılabilir mi?',
        a: 'Evet, temizlik tamamlandıktan sonra klimanız kullanıma hazırdır.',
      },
    ],
  },
  {
    slug: 'ev-temizligi',
    title: 'Ev Temizliği',
    icon: 'Home',
    visual: 'house',
    short:
      'Batman ev temizliği: detaylı genel temizlik, inşaat sonrası ve boş ev temizliği dahil kapsamlı hizmet.',
    seoTitle: 'Batman Ev Temizliği | Detaylı Genel Temizlik – Garanti Temizlik',
    seoDesc:
      'Batman ev temizliği hizmeti. Detaylı genel temizlik, boş ev ve inşaat sonrası temizlik. Güvenilir ekip, titiz çalışma. Hemen bilgi alın.',
    intro:
      'Ev temizliği zaman ve özen ister. Mutfaktan banyoya, camlardan zeminlere kadar evinizin tamamını detaylı şekilde temizliyor; yaşam alanınızı ferah ve hijyenik bir hale getiriyoruz.',
    scope: [
      'Detaylı genel ev temizliği',
      'Boş ev ve taşınma temizliği',
      'İnşaat ve tadilat sonrası temizlik',
      'Mutfak ve banyo derin temizliği',
      'Cam ve zemin temizliği',
    ],
    faq: [
      {
        q: 'Temizlik malzemelerini kim sağlıyor?',
        a: 'Uygulama kapsamına göre değişebilir; randevu alırken malzeme konusundaki detaylar netleştirilir.',
      },
      {
        q: 'Ev temizliği ne kadar sürer?',
        a: 'Süre; evin büyüklüğüne, kirlilik durumuna ve seçilen kapsamına göre değişir. Telefonda kısa bir ön görüşmeyle yaklaşık süre bilgisi verilir.',
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
