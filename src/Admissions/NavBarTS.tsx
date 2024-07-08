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
  const handleClick = (menuID: number) => {
    if (menuID === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(menuID);
    }
  };

  return (
    <div>
      {Nav_list.map((ChildrenNav) => (
        <div key={ChildrenNav.id}>
          <div>
            <button
              type="button"
              className=""
              id="menu-button"
              onClick={() => handleClick(ChildrenNav.id)}
            >
              <p>{ChildrenNav.title}</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NavBarTS;
