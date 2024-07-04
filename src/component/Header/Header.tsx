import { useState } from "react";
import { IoHome } from "react-icons/io5";

const Item_List = [
  {
    id: 1,
    title: "Giới thiệu ",
    submenuList: [
      {
        id: 11,
        title: "Cổng thông tin đào tạo ",
        link: "/CongTTDT",
      },
      {
        id: 12,
        title: "Các ngành đào tạo",
        link: "/cac-nganh-dt",
      },
      {
        id: 13,
        title: "Phòng đào tạo đại học ",
        herf: "/phong-dt-dh",
      },
    ],
  },
  {
    id: 2,
    title: "Thông báo ",
    submenuList: [
      {
        id: 20,
        title: "Đại học chính quy ",
        link: "/Dh-chinh-quy",
      },
      {
        id: 21,
        title: "Văn bằng 2",
        link: "/VB-2",
      },
      {
        id: 22,
        title: "Đào tạo từ xa ",
        link: "/Đt-tu-xa",
      },
    ],
  },
  {
    id: 3,
    title: "Quy đinh- Hướng dẫn",
    submenuList: [
      {
        id: 30,
        title: "Quy chế, quy định đào tạo đại học ",
        link: "/qui-che-qui-dinh-qui-trinh",
      },
      {
        id: 31,
        title: "Quy chế tuyển sinh đại học TXQM",
        link: "/quy-che-tuyen-sinh-dai-hoc-txqm",
      },
      {
        id: 32,
        title: "Qui chế về công tác giáo trình ",
        link: "https://daa.uit.edu.vn/sites/daa/files/uploads/53_qd_dhcntt_19_2_2019scan.pdf",
      },
      {
        id: 33,
        title: "Quy định đào tạo ngắn hạn",
        link: "/quy-dinh-dao-tao-ngan-han",
      },
      {
        id: 34,
        title: "Quy trình cho giảng viên",
        link: "/quy-trinh-danh-cho-can-bo-giang-day",
      },
      {
        id: 35,
        title: "Quy trình cho sinh viên",
        link: "/mot-so-quy-trinh-danh-cho-sinh-vien",
      },
      {
        id: 36,
        title: "Tra cứu và xác minh VB tốt nghiệp ĐH",
        link: "/huong-dan-tra-cuu-va-xac-minh-van-bang-tot-nghiep-dai-hoc",
      },
      {
        id: 37,
        title: "Hướng dẫn sinh viên về các quy định ngoại ngữ   ",
        link: "/huong-dan-sinh-vien-dai-hoc-he-chinh-quy-thuc-hien-cac-quy-dinh-ve-chuan-qua-trinh-va-chuan",
      },
      {
        id: 38,
        title: "Hướng dẫn triển khai dạy và học qua mạng",
        link: "/huong-dan-trien-khai-day-va-hoc-qua-mang-trong-thoi-gian-phong-chong-dich-covid-19",
      },
    ],
  },
  {
    id: 4,
    title: "Kế hoạch năm",
  },
  {
    id: 5,
    title: "Chương trình đào tạo ",
    submenuList: [
      {
        id: 50,
        title: "Hệ chính quy  ",
        link: "/chinh-quy",
      },
      {
        id: 51,
        title: "hệ từ xa",
        link: "/tu-xa",
      },
    ],
  },
  {
    id: 6,
    title: "Lịch",
    submenuList: [
      {
        id: 60,
        title: "TKB",
        link: "/TKB",
      },
      {
        id: 61,
        title: "Lịch phòng",
        link: "/lich-phong",
      },
    ],
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleClick = (menuId: number) => {
    if (menuId === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(menuId);
    }
  };
  return (
    <nav className=" container mx-auto top-0 gap-5">
      <img src="https://student.uit.edu.vn/sites/daa/files/banner.png" alt="" />
      <div className="bg-blue-500 gap-5 flex">
        <div className="text-red-700  pl-5 items-end py-3 text-sm border-sm">
          <IoHome />
        </div>
        {Item_List.map((childItem) => (
          <div key={childItem.id} className=" relative inline-block text-left">
            <div>
              <button
                type="button"
                className="bg-blue-500 inline-flex w-full gap-x-2 text-white shadow-sm ring-inset ring-gray-300 "
                id="menu-button"
                onClick={() => handleClick(childItem.id)}
              >
                <p>{childItem.title}</p>
              </button>
            </div>
            {childItem.submenuList &&
              childItem.submenuList.length > 0 &&
              isOpen === childItem.id && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-sm bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    {childItem.submenuList.map((subChildItem) => (
                      <a
                        key={subChildItem.id}
                        href={subChildItem.link}
                        className="text-gray-700 block px-4 text-sm"
                        id={subChildItem.id.toString()}
                      >
                        {subChildItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
