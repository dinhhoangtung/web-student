import { useState } from "react";
import { IoHome } from "react-icons/io5";

const Item_List = [
  {
    id: 1,
    title: "Trang chủ",
    submenuList: [
      {
        id: 11,
        title: "Chức năng ",
        link: "/",
      },
      {
        id: 12,
        title: "Nhiệm vụ",
        link: "/",
      },
      {
        id: 13,
        title: "Nhân sự ",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Giới thiệu ",
    submenuList: [
      {
        id: 20,
        title: "Chức năng ",
        link: "/",
      },
      {
        id: 21,
        title: "Nhiệm vụ",
        link: "/",
      },
      {
        id: 22,
        title: "Nhân sự ",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Thông tin- Thông báo",
    submenuList: [
      {
        id: 30,
        title: "Thông tin- Thông báo",
        link: "/",
      },
      {
        id: 31,
        title: "Tin tức CNTT",
        link: "/",
      },
      {
        id: 32,
        title: "Hướng dẫn ",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Tin tức CNTT",
    subMenuList: [
      {
        id: 40,
        title: "Trong nước",
        link: "/trong-nuoc",
      },
      {
        id: 41,
        title: "Quốc tế",
        link: "/quoc-te",
      },
      {
        id: 42,
        title: "Bài viết hay",
        link: "/bai-viet-hay",
      },
    ],
  },
  {
    id: 5,
    title: "Hướng dẫn ",
    submenuList: [
      {
        id: 50,
        title: "Chức năng ",
        link: "/",
      },
      {
        id: 51,
        title: "Nhiệm vụ",
        link: "/",
      },
      {
        id: 52,
        title: "Nhân sự ",
        link: "/",
      },
    ],
  },
  {
    id: 6,
    title: "Tài liệu",
    subMenuList: [
      {
        id: 60,
        title: "Quy định - Quy chế",
        link: "/quy-dinh",
      },
      {
        id: 61,
        title: "Quy trình",
        link: "/quy-trinh",
      },
      {
        id: 62,
        title: "Biểu mẫu",
        link: "/bieu-mau",
      },
    ],
  },
  {
    id: 7,
    title: "Thủ thuật",
    subMenuList: [
      {
        id: 70,
        title: "Window",
        link: "/window",
      },
      {
        id: 71,
        title: "Linux",
        link: "/linux",
      },
      {
        id: 72,
        title: "Mac",
        link: "/Mac",
      },
      {
        id: 73,
        title: "Khác",
        link: "/khac",
      },
    ],
  },
  {
    id: 8,
    title: "Liên hệ",
    submenuList: [
      {
        id: 80,
        title: "Chức năng ",
        link: "/",
      },
      {
        id: 81,
        title: "Nhiệm vụ",
        link: "/",
      },
      {
        id: 82,
        title: "Nhân sự ",
        link: "/",
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
            {childItem.subMenuList &&
              childItem.subMenuList.length > 0 &&
              isOpen === childItem.id && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-sm bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    {childItem.subMenuList.map((subChildItem) => (
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
