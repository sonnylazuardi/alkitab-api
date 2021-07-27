# Alkitab API

[💁 New Update] GraphQL Support

![alkitabgraphql](screen.png)

Code & Demo: https://bible.sonnylab.com

Bible API for Everyone. Using express with Babel ES6/ES2015, and cheerio.

## Installing

clone this repository, do the following command

    npm install
    node index.js

## Usage

- Write the query:

```
{
  passages (version: tb, book: "Mazmur", chapter:23) {
    verses {
      verse
      type
      content
    }
  }
}
```

- Hit the play button
- Result would be like this:

```
{
  "data": {
    "passages": {
      "verses": [
        {
          "verse": 1,
          "type": "title",
          "content": "TUHAN, gembalaku yang baik"
        },
        {
          "verse": 1,
          "type": "content",
          "content": "Mazmur Daud. TUHAN adalah gembalaku, takkan kekurangan aku."
        },
        {
          "verse": 2,
          "type": "content",
          "content": "Ia membaringkan aku di padang yang berumput hijau, Ia membimbing aku ke air yang tenang;"
        },
        {
          "verse": 3,
          "type": "content",
          "content": "Ia menyegarkan jiwaku. Ia menuntun aku di jalan yang benar oleh karena nama-Nya."
        },
        {
          "verse": 4,
          "type": "content",
          "content": "Sekalipun aku berjalan dalam lembah kekelaman, aku tidak takut bahaya, sebab Engkau besertaku; gada-Mu dan tongkat-Mu, itulah yang menghibur aku."
        },
        {
          "verse": 5,
          "type": "content",
          "content": "Engkau menyediakan hidangan bagiku, di hadapan lawanku; Engkau mengurapi kepalaku dengan minyak; pialaku penuh melimpah."
        },
        {
          "verse": 6,
          "type": "content",
          "content": "Kebajikan dan kemurahan belaka akan mengikuti aku, seumur hidupku; dan aku akan diam dalam rumah TUHAN sepanjang masa."
        }
      ]
    }
  }
}
```

## Supported languages & versions

### Bahasa Indonesia

- Alkitab Yang Terbuka (DRAFT) 2013
- Alkitab Terjemahan Baru (TB) - 1974 ©
- Alkitab Terjemahan Lama (TL) - 1954 ©
- Alkitab Modified Indonesian Literal Translation (MILT) - 2008 ©
- Alkitab Shellabear (Kontekstual) - 2010
- Kitab Suci Revisi Shellabear 2011 ©
- Alkitab PB Shellabear (Kontekstual) - 2000 \* ©
- Kitab Suci Zabur dan Injil Bahasa Malaysia (KSZI) - 2008 ©
- Kitab Suci Komunitas Kristiani (KSKK) - 2002 ©
- Alkitab PB WBTC Draft - 2006 \* ©
- Alkitab Versi Mudah Dibaca (VMD) - 2005 ©
- Terjemahan Sederhana Indonesia (TSI) - 2014 \* ©
- Alkitab Kabar Baik Bahasa Indonesia Sehari-hari (BIS) - 1985 ©
- Alkitab Today's Malay Version (TMV) - 1987 ©
- Alkitab Bahasa Indonesia yang Disederhanakan (BSD) - 1988 \* ©
- Firman Allah Yang Hidup (FAYH) - 1989 ©
- Alkitab Ende - 1970 ©
- Alkitab Shellabear (Kontekstual) - 1912 ©
- Alkitab PB Klinkert - 1879 \* ©
- Alkitab PB Klinkert - 1863 \* ©
- Alkitab PB Melayu Baba - 1913 \* ©
- Alkitab PB Ambon Draft - 1877 \* ©
- Kitab Alkudus (Keasberry) - 1853 \* ©
- Alkitab PB Leydekker Draft - 1733 \* ©

### Bahasa Suku:

- Alkitab Bahasa Jawa ©
- Alkitab PB Bahasa Jawa (Revisi 2006) \*
- Alkitab Bahasa Jawa (Sehari-hari 1994) ©
- Alkitab PB Bahasa Jawa Suriname \* ©
- Alkitab Bahasa Sunda 1991 ©
- Alkitab PB Bahasa Sunda Formal 1997 \* ©
- Alkitab Bahasa Madura ©
- Alkitab Bahasa Bali ©
- Alkitab PB Bahasa Dayak Ngaju \* ©
- Alkitab PB Bahasa Sasak \* ©
- Alkitab Bahasa Bugis ©
- Alkitab Bahasa Makasar ©
- Alkitab Bahasa Toraja ©
- Alkitab PB Bahasa Duri \* ©
- Alkitab PB Bahasa Gorontalo \* ©
- Alkitab PB Bahasa Gorontalo 2006 \* ©
- Alkitab PB Bahasa Balantak \* ©
- Alkitab PB Bahasa Bambam \* ©
- Alkitab PB Bahasa Kaili Da'a \* ©
- Alkitab PB Bahasa Mongondow \* ©
- Alkitab PB Bahasa Napu \* ©
- Alkitab PB Bahasa Sangir \* ©
- Alkitab PB Bahasa Taa \* ©
- Alkitab PB Bahasa Rote \* ©
- Alkitab PB Bahasa Galela \* ©
- Alkitab PB Bahasa Yali, Angguruk \* ©
- Alkitab PB Bahasa Tabaru \* ©
- Alkitab Bahasa Batak Karo ©
- Alkitab Bahasa Batak Simalungun ©
- Alkitab Bahasa Batak Toba ©
- Alkitab PB Bahasa Batak Dairi \* ©
- Alkitab PB Bahasa Minangkabau \* ©
- Alkitab PB Bahasa Nias \* ©
- Alkitab PB Bahasa Mentawai \* ©
- Alkitab PB Bahasa Lampung \* ©
- Alkitab PB Bahasa Aceh \* ©
- Alkitab Bahasa Mamasa \* ©
- Alkitab PB Bahasa Berik \* ©
- Alkitab Bahasa Manggarai \* ©
- Alkitab PB Bahasa Sabu \* ©
- Alkitab Bahasa Abun \* ©
- Alkitab PB Bahasa Batak Angkola \*
- Alkitab Bahasa Meyah \*

### Bahasa Inggris:

- New English Translation ©
- New American Standard Bible ©
- Holman Christian Standard Bible ©
- Lexham English Bible ©
- New International Version ©
- English Standard Version ©
- New Revised Standard Version ©
- Revised English Version ©
- New King James Version ©
- King James Version ©
- Amplified Bible ©
- New Living Translation ©
- Good News Bible ©
- Easy-to-Read Version ©
- English Version for the Deaf \* ©
- Bible in Basic English ©
- The Message ©
- Phillips NT in Modern English \* ©
- Deibler NT \* ©
- Gullah NT Version \* ©
- Contemporary English Version ©
- Contemporary English Version UK ©
- God's Word to the Nation ©

## Source

Alkitab Mobile SABDA [http://alkitab.mobi/](http://alkitab.mobi/)

## License

MIT License
