import "./App.css";
import Card2 from "./component/Card 2/Card2";
import Card from "./component/Card1&Login/Card";
import Login from "./component/Card1&Login/Login";
import NavBar from "./component/Header/Header";
import { Routes, Route } from "react-router";

const MOCK_Data = [
  {
    id: 1,
    text: "New1",
    link: "abc",
    date: "12/11/2006",
  },
  {
    id: 2,
    text: "New2",
    link: "abc",
    date: "12/11/2006",
  },
  {
    id: 3,
    text: "New3",
    link: "abc",
    date: "12/11/2006",
  },
  {
    id: 4,
    text: "New4",
    link: "abc",
    date: "12/11/2006",
  },
];
const MOCK_DATA_Card2 = [
  {
    id: 1,
    img: "https://phongdl.uit.edu.vn/sites/phongdl/files/styles/thumb_bv/public/default_images/no-img.png?itok=Aqt6OeFi",
    nameNews: "Sử dụng OpenVPN",
    link: "https://phongdl.uit.edu.vn/su-dung-openvpn",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Sử dụng OpenVPN để truy cập vào mạng trường. Download bản cài đặt mới nhất phần mềm Open VPN tại trang chủ  https://openvpn.net/community-downloads/ và file cấu hình “pfSense4-UDP4-1194-config.ovpn” (đối với CBGV) hoặc file pfSense4-UDP4-1195-config.ovpn (đối với...",
  },
  {
    id: 2,
    img: "https://phongdl.uit.edu.vn/sites/phongdl/files/styles/thumb_bv/public/uploads/images/thumbs/201705/1605_image002.png?itok=b_E5LyZI",
    nameNews: "Hiểu rõ hơn về mã độc tống tiền Wanna.Cry  ",
    link: "https://phongdl.uit.edu.vn/sua-loi-windows-10-bang-1-cu-click-chuot-voi-fixwin",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Mã độc tống tiền Wanna.Cry (WannaCrypt hay Wcry) đang gây ra một cơn địa chấn mạnh trên phạm vi toàn cầu trong vài ngày gần đây(75000 trường hợp ở 99 quốc gia). Số tiền mà kẻ xấu yêu cầu để khôi phục dữ liệu là 300 USD cho mỗi trường hợp. Nạn nhân của Wanna.Cry l..",
  },
  {
    id: 3,
    img: "https://phongdl.uit.edu.vn/sites/phongdl/files/styles/thumb_bv/public/uploads/images/thumbs/201606/wifi1.png?itok=WKrGknLR",
    nameNews: "Kết nối wifi sử dụng tài khoản chứng thực UIT trên Windows 7 ",
    link: "https://phongdl.uit.edu.vn/su-dung-he-thong-microsoft-azure-thay-cho-microsoft-imagine-dreamspark-cu",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Ghi chú: Windows 8, Windows 8.1, Android, iOS, Mac không cần cấu hình   1/ Chọn Start -> Control Panel -> Network and Sharing Center, xuất hiện màn hình sau: 2/ Chọn “Manager wireless networks”, xuất hiện màn hình sau: 3/ Chọn “Add”, xuất hiện...",
  },
  {
    id: 4,
    img: "https://phongdl.uit.edu.vn/sites/phongdl/files/styles/thumb_bv/public/uploads/images/thumbs/201606/google-sites-image.png?itok=8MD5hwBO",
    nameNews: "Hướng dẫn tạo website trên Google sites",
    link: "https://phongdl.uit.edu.vn/cach-cap-nhat-windows-10-len-windows-10-may-2019-1903",
    date: "18-07-2021",
    time: "10:10pm",
    note: "I. Đăng ký sites mới II. Thiết kế trang 1. Chỉnh sửa trang và biên tập trang 2. Cách tạo trang mới 3. Cách tổ chức menu 4. Tùy chọn  More 5. Quản lý sites ( Manage Sites ) + Trang general + Trang Page + Trang Attachments + Trang Page Templates + Trang...",
  },
  {
    id: 5,
    img: "https://phongdl.uit.edu.vn/sites/phongdl/files/styles/thumb_bv/public/uploads/images/thumbs/201606/moodle.jpg?itok=3ESy3pnd",
    nameNews: "Hướng dẫn sử dụng website môn học (moodle)",
    link: "https://phongdl.uit.edu.vn/ket-noi-wifi-uit-tren-dien-thoai-android",
    date: "18-07-2021",
    time: "10:10pm",
    note: "Địa chỉ website môn học: https://courses.uit.edu.vn, dùng tài khoản chứng thực để đăng nhập (cho SV & GV). Đây là hệ thống hỗ trợ học tập của sinh viên và giảng dạy của giảng viên, nếu khai thác tốt hệ thống này sẽ trở thành kênh thông tin môn học rất...",
  },
];
function App() {
  return (
    <div>
      <NavBar />
      <nav>
        <ul>
          <li>
            <a href="Card1&Login">Card1&Login</a>
          </li>
          <li>
            <a href="/Card2">Card2</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/Card1&Login"
          element={
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <Login />
                <Card title="Hướng dẫn" list={MOCK_Data} />
              </div>
              <div className="col-span-3"></div>
            </div>
          }
        />
        <Route
          path="/Card2"
          element={
            <Card2 titleNew="PHÒNG DỮ LIỆU & CNTT" listNew={MOCK_DATA_Card2} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
