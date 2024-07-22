import React from "react";
import { useState } from "react";

const Nav_list = [
  {
    id: 1,
    title: "Giới thiệu ",
    link: "gioi-thieu",
  },
  {
    id: 2,
    title: "Ngành đào tạo ",
    link: "nganh-dao-tao",
  },
  {
    id: 3,
    title: "Điểm chuẩn hằng năm ",
    link: "diem-chuan-hang-nam",
  },
  {
    id: 4,
    title: "Bảng vàng thành tích ",
    link: "bang-vang-thanh-tich",
  },
  {
    id: 5,
    title: "Đời sống sinh viên ",
    link: "Doi-song-sinh-vien",
  },
  {
    id: 2,
    title: "Tham quan ảo CSVC ",
    link: "Tham-quan-ao-CSVC",
  },
];
const NavBarTS = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <nav className="container mx-auto top-0 gap-5">
      <img
        src="https://tuyensinh.uit.edu.vn/sites/default/files/banner_2024.png "
        alt=""
      />
    </nav>
  );
};
export default NavBarTS;
