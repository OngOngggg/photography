const posts = [
  {
    id: "tokyo",
    title: "日本·东京",
    category: "city",
    date: "2025-07",
    thumb: "images/tokyo/cover.jpg",
    images: [
      "images/tokyo/cover.jpg",
      "images/tokyo/01.jpg","images/tokyo/02.jpg","images/tokyo/03.jpg","images/tokyo/04.jpg",
      "images/tokyo/05.jpg","images/tokyo/06.jpg","images/tokyo/07.jpg","images/tokyo/08.jpg",
      "images/tokyo/09.jpg"
    ]
  },
  {
    id: "kamakura",
    title: "日本·镰仓",
    category: "city",
    date: "2025-07",
    thumb: "images/kamakura/cover.jpg",
    images: [
      "images/kamakura/cover.jpg",
      "images/kamakura/01.jpg","images/kamakura/02.jpg","images/kamakura/03.jpg","images/kamakura/04.jpg",
      "images/kamakura/05.jpg","images/kamakura/06.jpg","images/kamakura/07.jpg","images/kamakura/08.jpg",
      "images/kamakura/09.jpg","images/kamakura/10.jpg","images/kamakura/11.jpg"
    ]
  },
  {
    id: "hengshan",
    title: "衡山",
    category: "nature",
    date: "2023-01",
    thumb: "images/hengshan/00.jpg",
    images: [],
    count: 18
  },
  {
    id: "suzhou",
    title: "苏州",
    category: "city",
    date: "2025-12",
    thumb: "images/suzhou/cover.jpg",
    images: [
      "images/suzhou/cover.jpg",
      "images/suzhou/01.jpg","images/suzhou/02.jpg","images/suzhou/03.jpg","images/suzhou/04.jpg",
      "images/suzhou/05.jpg","images/suzhou/06.jpg","images/suzhou/07.jpg","images/suzhou/08.jpg",
      "images/suzhou/09.jpg"
    ]
  },
  {
    id: "siguniangshan",
    title: "四姑娘山",
    category: "nature",
    date: "2024-10",
    thumb: "images/siguniangshan/cover.jpg",
    images: [
      "images/siguniangshan/cover.jpg",
      "images/siguniangshan/01.jpg","images/siguniangshan/02.jpg","images/siguniangshan/03.jpg","images/siguniangshan/04.jpg",
      "images/siguniangshan/05.jpg","images/siguniangshan/06.jpg","images/siguniangshan/07.jpg","images/siguniangshan/08.jpg",
      "images/siguniangshan/09.jpg","images/siguniangshan/10.jpg","images/siguniangshan/11.jpg","images/siguniangshan/12.jpg",
      "images/siguniangshan/13.jpg","images/siguniangshan/14.jpg","images/siguniangshan/15.jpg","images/siguniangshan/16.jpg",
      "images/siguniangshan/17.jpg"
    ]
  },
  {
    id: "wugongshan",
    title: "武功山",
    category: "nature",
    date: "2025-06",
    thumb: "images/wugongshan/winter_00.jpg",
    images: [],
    count: 15
  },
  {
    id: "yunnan",
    title: "云南",
    category: "nature",
    date: "2026-01",
    thumb: "images/yunnan/cover.jpg",
    images: [
      "images/yunnan/cover.jpg",
      "images/yunnan/01.jpg","images/yunnan/02.jpg","images/yunnan/03.jpg","images/yunnan/04.jpg",
      "images/yunnan/05.jpg","images/yunnan/06.jpg","images/yunnan/07.jpg","images/yunnan/08.jpg",
      "images/yunnan/09.jpg","images/yunnan/10.jpg","images/yunnan/11.jpg","images/yunnan/12.jpg",
      "images/yunnan/13.jpg","images/yunnan/14.jpg","images/yunnan/15.jpg","images/yunnan/16.jpg",
      "images/yunnan/17.jpg","images/yunnan/18.jpg","images/yunnan/19.jpg","images/yunnan/20.jpg",
      "images/yunnan/21.jpg","images/yunnan/22.jpg","images/yunnan/23.jpg","images/yunnan/24.jpg",
      "images/yunnan/25.jpg","images/yunnan/26.jpg","images/yunnan/27.jpg","images/yunnan/28.jpg",
      "images/yunnan/29.jpg","images/yunnan/30.jpg","images/yunnan/31.jpg","images/yunnan/32.jpg",
      "images/yunnan/33.jpg"
    ]
  },
  {
    id: "japan-kansai",
    title: "日本·关西",
    category: "city",
    date: "2025-07",
    thumb: "images/kyoto/cover.jpg",
    images: [],
    count: 31
  },
  {
    id: "hangzhou",
    title: "杭州",
    category: "city",
    date: "2024-12",
    thumb: "images/hangzhou/cover.jpg",
    images: [
      "images/hangzhou/cover.jpg",
      "images/hangzhou/01.jpg","images/hangzhou/02.jpg","images/hangzhou/03.jpg","images/hangzhou/04.jpg",
      "images/hangzhou/05.jpg","images/hangzhou/06.jpg","images/hangzhou/07.jpg","images/hangzhou/08.jpg",
      "images/hangzhou/09.jpg","images/hangzhou/10.jpg","images/hangzhou/11.jpg","images/hangzhou/12.jpg",
      "images/hangzhou/13.jpg","images/hangzhou/14.jpg"
    ]
  },
  {
    id: "sanqingshan",
    title: "三清山",
    category: "nature",
    date: "2024-10",
    thumb: "images/sanqingshan/cover.jpg",
    images: [
      "images/sanqingshan/cover.jpg",
      "images/sanqingshan/01.jpg","images/sanqingshan/02.jpg","images/sanqingshan/03.jpg","images/sanqingshan/04.jpg",
      "images/sanqingshan/05.jpg","images/sanqingshan/06.jpg","images/sanqingshan/07.jpg"
    ]
  },
  {
    id: "nanjing",
    title: "南京",
    category: "city",
    date: "2024-07",
    thumb: "images/nanjing/04.jpg",
    images: [],
    count: 11
  },
  {
    id: "huangshan",
    title: "黄山",
    category: "nature",
    date: "2024-04",
    thumb: "images/huangshan/cover.jpg",
    images: [
      "images/huangshan/cover.jpg",
      "images/huangshan/01.jpg","images/huangshan/02.jpg","images/huangshan/03.jpg","images/huangshan/04.jpg",
      "images/huangshan/05.jpg","images/huangshan/06.jpg","images/huangshan/07.jpg"
    ]
  },
  {
    id: "yangzhou",
    title: "扬州",
    category: "city",
    date: "2024-07",
    thumb: "images/yangzhou/00.jpg",
    images: [
      "images/yangzhou/00.jpg","images/yangzhou/01.jpg","images/yangzhou/02.jpg",
      "images/yangzhou/03.jpg","images/yangzhou/04.jpg","images/yangzhou/05.jpg"
    ]
  },
  {
    id: "nanchang",
    title: "南昌",
    category: "city",
    date: "2024-03",
    thumb: "images/nanchang/00.jpg",
    images: [
      "images/nanchang/00.jpg","images/nanchang/01.jpg"
    ]
  }
];

posts.sort((a, b) => b.date.localeCompare(a.date));
