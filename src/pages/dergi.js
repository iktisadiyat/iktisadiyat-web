// src/pages/contact.js
import React from 'react';
import Layout from '../components/layout';

const JournalPage = ({ location }) => (
  <Layout location={location}>
       <h1>İktisadiyat Dergi Seçkisi</h1>
    <p>İktisadiyat Dergi her yıl, bir önceki yıl içerisindeki yazılardan bir seçkiyi okurlarına sunmayı amaçlar. Bu sayede en çok okunan yazılar, bir dokümanda toplu olarak erişime açılır. Yayım, ilerleyen sayılarında özel sayılar da yayımlamayı hedeflemektedir.</p>

    <div class="year-section">
        <h2 class="year-title">2017</h2>
        <ul class="article-list">
            <li>Anne Ben Muhafazakar Oldum – <strong>Fatih VURAL</strong></li>
            <li>Küresel Ekonomiye Bir Vitamin Takviyesi Olarak Küresel Ticaretin Kolaylaştırılması – <strong>Mert Can DUMAN</strong></li>
            <li>İşsizliğe mi Rahatlığa mı Giden Yol: Robotları Beklerken… – <strong>Serkan KİREMİT</strong></li>
            <li>Ölümden Önce Hayat Var mı? Zamanı ve Güzelliği Anlama Çabaları – <strong>Abdullah Onur AKTAŞ</strong></li>
            <li>Sözleşmeli Okullar: Nedir, Ne Değildir? – <strong>A. Arda GİTMEZ</strong></li>
            <li>Dertli Dünyanın İdeolojisiz İnsanı – <strong>Tolga BAĞCI</strong></li>
        </ul>
        <a href="/dergi/iktisadiyat_dergi_2017.pdf" class="download-link">İktisadiyat Dergi 2017 : İndirmek için tıklayınız.</a>
    </div>

    <div class="year-section">
        <h2 class="year-title">2016</h2>
        <ul class="article-list">
            <li>Cambridge Sermaye Tartışmalarına Tanıklık Etmek – <strong>Çınla AKDERE</strong></li>
            <li>Platon-Lenin-Badiou Üçgeni’nde Hakikat.Komün Bağıntısı Üzerine – <strong>Tolga BAĞCI</strong></li>
            <li>Nereye Yapacağız? – <strong>Ömer KARADUMAN</strong></li>
            <li>İki Modelin Hikâyesi: Yapısal Biçim, İndirgenmiş Biçime Karşı – <strong>A. Arda GİTMEZ</strong></li>
            <li>İncir Yaprağı İle Saklanan Gerçek: Schopenhauer Felsefesinde Cinsellik – <strong>Abdullah Onur AKTAŞ</strong></li>
        </ul>
        <a href="/dergi/iktisadiyat_dergi_2016.pdf" class="download-link">İktisadiyat Dergi 2016 : İndirmek için tıklayınız.</a>
    </div>

  </Layout>
);

export default JournalPage;