import React from 'react';
import Layout from '../components/layout';

const AuthorsPage = ({ location }) => (
  <Layout location={location}>
    <h1>Yazarlar</h1>

    {/* List of Writers */}
    <div className="authors-list">
    <br></br>
      <h2>Çınla Akdere</h2>
      <p>
        Ankara Üniversitesi Siyasal Bilgiler Fakültesi İktisat Bölümünden lisans, Paris I Panthéon-Sorbonne üniversitesinden, iktisadi düşünce tarihi alanında master ve doktora derecesini aldı. New School for Social Research’ün İktisat Bölümünde ziyaretçi araştırmacı olarak bulundu. Fransa’da farklı üniversitelerde iktisat dersleri verdi. 2003 yılından bu yana P.H.A.R.E. araştırma enstitüsüne bağlı araştırmacı ve 2010 yılından itibaren de O.D.T.Ü. İktisat bölümünde öğretim görevlisidir.
      </p>

      <h2>Abdullah Onur Aktaş</h2>
      <p>
        O.D.T.Ü. İstatistik Bölümü’nde lisans, O.D.T.Ü. Felsefe Bölümü’nde yüksek lisans ve doktora çalışmalarını tamamladı. Almanya’da Schopenhauer Araştırmalar Merkezi’nde bulundu. Şu an Çankırı Üniversitesi Felsefe Bölümü’nde öğretim üyesidir. Müzik felsefesi ve Kant sonrası Kıta Avrupa felsefesi (özellikle Schopenhauer ve Nietzsche) alanlarında çalışıyor.
      </p>

      <h2>Tolga Bağcı</h2>
      <p>
        Bilkent Üniversitesi Fizik Bölümü’nden mezun olduktan sonra, Kopenhag Üniversitesi’nde yüksek lisans ve doktora yaptı. Max Planck Enstitüsü’nde araştırmacı olarak çalıştı. Türkiye’ye döndükten sonra UNAM’da proje uzmanı olarak görev aldı. Fizik felsefesi ve siyaset felsefesi alanlarına ilgi duyuyor.
      </p>

      <h2>Tuna Çakar</h2>
      <p>
        Sabancı Üniversitesi Biyoloji Bilimleri ve Biyomühendislik Programı’nda lisans eğitimini tamamladı. Boğaziçi Üniversitesi’nde Bilişsel Bilimler Yüksek Lisans Programı’nda devam etti. Şu anda O.D.T.Ü. Enformatik Enstitüsü’nde doktora çalışmalarını sürdürüyor. Nöroiktisat, karar verme süreçleri ve etik algı konularında çalışıyor.
      </p>

      <h2>Mert Can Duman</h2>
      <p>
        TOBB ETÜ İktisat Bölümü’nden mezun oldu. TOBB ETÜ’de yüksek lisans yaptı ve öğretim asistanlığı yaptı. Dış ticaret, kent ekonomisi ve yeşil ekonomiler konularında çalışmalar yürütüyor.
      </p>

      <h2>Rüştü Duran</h2>
      <p>
        Sabancı Üniversitesi İktisat Bölümü’nden mezun olduktan sonra Oxford Üniversitesi’nde doktora çalışmalarına başladı. Oyun teorisi ve davranışsal iktisat konularına odaklanıyor.
      </p>

      <h2>A. Arda Gitmez</h2>
      <p>
        Koç Üniversitesi’nde lisans ve yüksek lisans eğitimini tamamladı. Şu anda MIT’de doktora çalışmalarını sürdürüyor. İlgi alanları teorik iktisat ve politik iktisat.
      </p>

      <h2>Ömer Karaduman</h2>
      <p>
        Bilkent Üniversitesi İktisat Bölümü’nden mezun oldu. MIT’de doktora çalışmalarını sürdürüyor. Yapısal endüstriyel organizasyon ve uygulamalı iktisat teorisi konularında çalışıyor.
      </p>

      <h2>Serkan Kiremit</h2>
      <p>
        Marmara Üniversitesi İktisat Bölümü’nden mezun oldu. Liberalizmin teori ve uygulama kısmıyla ilgilenmektedir.
      </p>

      <h2>Can Madenci</h2>
      <p>
        Marmara Üniversitesi’nde lisans, yüksek lisans ve doktorasını tamamladı. Friedrich Hayek’in görüşleri üzerine çalıştı. Mises Enstitüsü’nde araştırmacı olarak bulundu.
      </p>

      <h2>Levent Neyse</h2>
      <p>
        İstanbul Üniversitesi’nde iktisat lisans ve yüksek lisansını tamamladı. Halen Almanya’da post-doc ve LSE’de ortak araştırmacı olarak çalışmaktadır.
      </p>

      <h2>Ali Seyhun Saral</h2>
      <p>
        İstanbul Üniversitesi’nde lisans ve İstanbul Bilgi Üniversitesi’nde yüksek lisans eğitimini aldı. Trento Üniversitesi’nde doktora çalışmalarına devam ediyor.
      </p>

      <h2>Zeliha Taşdirek</h2>
      <p>
        Marmara Üniversitesi İktisat Bölümü’nden mezun oldu. İstanbul Üniversitesi’nde doktora çalışmalarına devam ediyor.
      </p>

      <h2>Murad Tiryakioğlu</h2>
      <p>
        Afyon Kocatepe Üniversitesi’nde iktisat alanında çalışmaktadır. Kalkınma iktisadı ve sosyal yenilikçilik üzerine çalışmaktadır.
      </p>

      <h2>Ü. Barış Urhan</h2>
      <p>
        Dokuz Eylül Üniversitesi’nde lisans eğitimini tamamladı. Şu anda O.D.T.Ü.’de doktora çalışmalarına devam etmektedir.
      </p>

      <h2>Fatih Vural</h2>
      <p>
        İstanbul Üniversitesi Diş Hekimliği Fakültesi’nde eğitim aldı. Müzik ve çeşitli projelerle ilgilenmektedir.
      </p>

      <h2>Timuçin Yalçınkaya</h2>
      <p>
        Dokuz Eylül Üniversitesi’nden doktora derecesi aldı. Dünya iktisat tarihi ve iktisat politikası üzerine dersler vermektedir.
      </p>

      <h2>Geçmiş Dönemdeki Yazarlarımız</h2>
      <ul>
        <li>İdil Bilgiç Alparslan, 2011-2015</li>
        <li>Ekrem Cünedioğlu, 2010-2017</li>
        <li>Selim Koru, 2015-2016</li>
        <li>Uuganbaatar Ninjbat, 2008-2009</li>
        <li>Anıl Girinci, 2006-2008</li>
      </ul>
    </div>
  </Layout>
);

export default AuthorsPage;