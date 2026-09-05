import type { Band } from "../types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Fellow Fellow",
    info: "Fellow Fellow (เฟลโลว โฟลโลว; มีสไตล์ด้วยตัวพิมพ์เล็กทั้งหมด) เป็นดูโอชายภายใต้Kicks Recordsเปิดตัวเมื่อวันที่ 30 มกราคม พ.ศ. 2556",
    genre: "Pop, indie pop",
    image: "/images/bands/fellowfellow.jpg",
    members: [
      {
        name: "ข้าว",
        role: "ร้องนำ",
        image: "/images/bands/ข้าว.jpg",
      },
      {
        name: "ที",
        role: "กีตาร์",
        image: "/images/bands/ที.jpg",
      },
    ],
  },

  {
     id: 2,
    name: "dept",
    info: "Dept (เดป) เป็นดูโอชายภายใต้สังกัด Smallroomพวกเขาเดบิวต์เมื่อวันที่ 15 มิถุนายน 2018 ด้วยซิงเกิลดิจิทัล",
    genre: "ป๊อป / อัลเทอร์เนทีฟ",
    image: "/images/bands/dept.jpg",
    members: [
    {
      name: "เบนซ์",
      role: "นักร้อง นักกีตาร์",
      image: "/images/bands/เบนซ์.jpg",
    },
    {
      name: "ลุค",
      role: "นักเล่นคีย์บอร์ด",
      image: "/images/bands/ลุค.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "HYBS",
    info: "HYBS (ไฮบ์ รัป ส) เป็นดูโอชายภายใต้สังกัดJUICEYพวกเขาเดบิวต์เมื่อวันที่ 8 ตุลาคม 2021 ด้วยซิงเกิลดิจิทัลภาษาอังกฤษและทั้งคู่ยุบวงอย่างเป็นทางการเมื่อวันที่ 10 มกราคม พ.ศ. 2567",
    genre: "อาร์แอนด์บี, โซล",
    image: "/images/bands/hybs.jpg",
    members: [
    {
      name: "เจมส์",
      role: "ร้องนำ",
      image: "/images/bands/เจมส์.jpg",
    },
    {
      name: "กานต์",
      role: "กีตาร์ / คีย์บอร์ด",
      image: "/images/bands/กานต์.jpg",
      },
    ],
  },
];
