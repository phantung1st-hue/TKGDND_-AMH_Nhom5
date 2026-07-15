/* GREENMART - TRANG THANH TOÁN
   Giữ chức năng cơ bản, bố cục bám sát frame Figma. */

const SAN_PHAM_THANH_TOAN = [
  { ten: "Cải Kale Hữu Cơ", donVi: "500g", gia: 45000, soLuong: 2, hinhAnh: "assets/images/banana.png" },
  { ten: "Cà Chua Đà Lạt", donVi: "1kg", gia: 35000, soLuong: 1, hinhAnh: "assets/images/tomato.png" },
  { ten: "Mật Ong Hoa Nhãn", donVi: "250ml", gia: 120000, soLuong: 1, hinhAnh: "assets/images/banana.png" }
];

const PHI_VAN_CHUYEN = { tieu_chuan: 30000, nhanh: 55000 };
let vanChuyenDangChon = "tieu_chuan";
let thanhToanDangChon = "cod";
let giamGia = 10000;

function dinhDangTien(soTien) {
  return `${Number(soTien).toLocaleString("vi-VN")}đ`;
}

function tongTamTinh() {
  return SAN_PHAM_THANH_TOAN.reduce((tong, sp) => tong + sp.gia * sp.soLuong, 0);
}

function iconTieuDe(loai) {
  const icons = {
    thongtin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M13 10h5M13 14h5"/></svg>',
    vanchuyen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
    thanhtoan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h4"/></svg>'
  };
  return icons[loai];
}

function taoTruong(id, nhan, type, placeholder, giaTri = "") {
  return `<div class="nhom-truong">
    <label for="${id}">${nhan}</label>
    <input id="${id}" class="o-nhap" type="${type}" placeholder="${placeholder}" value="${giaTri}">
    <div class="thong-diep-loi" data-loi-cho="${id}" hidden></div>
  </div>`;
}

function renderTrangThanhToan() {
  const vung = document.getElementById("vung-thanh-toan");
  if (!vung) return;

  vung.innerHTML = `
    <div class="bo-cuc-thanh-toan">
      <form id="form-thanh-toan" class="cot-form-thanh-toan" novalidate>
        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">${iconTieuDe("thongtin")}<h1>Thông tin đặt hàng</h1></div>
          ${taoTruong("ho-ten", "Họ tên", "text", "Họ và tên", "Nguyễn Văn An")}
          <div id="hop-le-ho-ten" class="thong-diep-hop-le">✓ Thông tin hợp lệ</div>
          <div class="luoi-form-2">
            ${taoTruong("so-dien-thoai", "Số điện thoại", "tel", "0xxx xxx xxx")}
            ${taoTruong("email-tt", "Email", "email", "an.nguyen@example", "an.nguyen@example")}
          </div>
          <div class="nhom-truong">
            <label for="dia-chi">Địa chỉ chi tiết</label>
            <input id="dia-chi" class="o-nhap" placeholder="Số nhà, tên đường, Phường/Xã...">
            <div class="thong-diep-loi" data-loi-cho="dia-chi" hidden></div>
          </div>
          <div class="nhom-truong">
            <label for="ghi-chu">Ghi chú (Tùy chọn)</label>
            <textarea id="ghi-chu" class="o-vung-van-ban" placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi đến..."></textarea>
          </div>
        </section>

        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">${iconTieuDe("vanchuyen")}<h2>Phương thức vận chuyển</h2></div>
          <div class="luoi-van-chuyen">
            <label class="the-lua-chon dang-chon" data-van-chuyen="tieu_chuan">
              <input type="radio" name="van-chuyen" value="tieu_chuan" checked>
              <span class="noi-dung-lua-chon"><strong>Tiêu chuẩn</strong><small>Nhận hàng sau 2-3 ngày</small></span><b>30.000đ</b>
            </label>
            <label class="the-lua-chon" data-van-chuyen="nhanh">
              <input type="radio" name="van-chuyen" value="nhanh">
              <span class="noi-dung-lua-chon"><strong>Giao hàng nhanh</strong><small>Nhận hàng trong 24h</small></span><b>55.000đ</b>
            </label>
          </div>
        </section>

        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">${iconTieuDe("thanhtoan")}<h2>Phương thức thanh toán</h2></div>
          <div class="danh-sach-thanh-toan">
            ${taoPhuongThuc("cod", "💵", "Thanh toán khi nhận hàng (COD)", true)}
            ${taoPhuongThuc("chuyen-khoan", "🏦", "Chuyển khoản ngân hàng")}
            ${taoPhuongThuc("vi-dien-tu", "▣", "Ví điện tử (Momo, ZaloPay)")}
            ${taoPhuongThuc("the-quoc-te", "▤", "Thẻ quốc tế (Visa, Mastercard)")}
          </div>
        </section>
      </form>

      <aside class="khoi-tom-tat-don">
        <div class="tieu-de-tom-tat"><h2>Tóm tắt đơn hàng</h2></div>
        <div id="danh-sach-tom-tat" class="danh-sach-tom-tat"></div>
        <div class="hang-ma-giam-gia">
          <input id="o-ma-giam-gia-tt" class="o-nhap" placeholder="Mã giảm giá">
          <button id="nut-ap-dung-ma-tt" type="button">Áp dụng</button>
        </div>
        <p id="thong-bao-ma" class="thong-bao-ma"></p>
        <div class="bang-tien">
          <div><span>Tạm tính</span><strong id="tt-tam-tinh"></strong></div>
          <div><span>Phí vận chuyển</span><strong id="tt-phi-van-chuyen"></strong></div>
          <div class="giam-gia"><span>Giảm giá</span><strong id="tt-giam-gia"></strong></div>
          <div class="tong-thanh-toan"><span>Tổng cộng</span><strong id="tt-tong-cong"></strong></div>
        </div>
        <p class="ghi-chu-vat">(Đã bao gồm VAT nếu có)</p>
        <button id="nut-dat-hang" class="nut-dat-hang" type="submit" form="form-thanh-toan">
          <span>Đặt hàng</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
        <p class="ghi-chu-dieu-khoan">Bằng cách đặt hàng, bạn đồng ý với <a href="#">Điều khoản sử dụng</a> của GreenMart.</p>
      </aside>
    </div>`;

  renderDanhSachSanPham();
  capNhatTongTien();
  ganSuKien();
  hienThiLoiMauEmail();
}

function taoPhuongThuc(id, icon, ten, dangChon = false) {
  return `<label class="the-phuong-thuc ${dangChon ? "dang-chon" : ""}" data-thanh-toan="${id}">
    <input type="radio" name="thanh-toan" value="${id}" ${dangChon ? "checked" : ""}>
    <span class="radio-tuy-chinh"></span><span class="icon-phuong-thuc">${icon}</span>
    <span class="noi-dung-lua-chon"><strong>${ten}</strong></span>
  </label>`;
}

function renderDanhSachSanPham() {
  document.getElementById("danh-sach-tom-tat").innerHTML = SAN_PHAM_THANH_TOAN.map(sp => `
    <div class="dong-san-pham-tom-tat">
      <div class="khung-anh"><img src="${sp.hinhAnh}" alt="${sp.ten}"><span class="the-so-luong-mini">${sp.soLuong}</span></div>
      <div class="dong-san-pham-tom-tat-info"><h4>${sp.ten}</h4><div class="don-vi">${sp.donVi}</div><strong>${dinhDangTien(sp.gia)}</strong></div>
    </div>`).join("");
}

function capNhatTongTien() {
  const tamTinh = tongTamTinh();
  const phi = PHI_VAN_CHUYEN[vanChuyenDangChon];
  const tong = tamTinh + phi - giamGia;
  document.getElementById("tt-tam-tinh").textContent = dinhDangTien(tamTinh);
  document.getElementById("tt-phi-van-chuyen").textContent = dinhDangTien(phi);
  document.getElementById("tt-giam-gia").textContent = `-${dinhDangTien(giamGia)}`;
  document.getElementById("tt-tong-cong").textContent = dinhDangTien(tong);
}

function ganSuKien() {
  document.querySelectorAll("[data-van-chuyen]").forEach(the => the.addEventListener("click", () => {
    document.querySelectorAll("[data-van-chuyen]").forEach(x => x.classList.remove("dang-chon"));
    the.classList.add("dang-chon");
    the.querySelector("input").checked = true;
    vanChuyenDangChon = the.dataset.vanChuyen;
    capNhatTongTien();
  }));

  document.querySelectorAll("[data-thanh-toan]").forEach(the => the.addEventListener("click", () => {
    document.querySelectorAll("[data-thanh-toan]").forEach(x => x.classList.remove("dang-chon"));
    the.classList.add("dang-chon");
    the.querySelector("input").checked = true;
    thanhToanDangChon = the.dataset.thanhToan;
  }));

  document.getElementById("nut-ap-dung-ma-tt").addEventListener("click", () => {
    const ma = document.getElementById("o-ma-giam-gia-tt").value.trim().toUpperCase();
    const tb = document.getElementById("thong-bao-ma");
    if (ma === "GREEN10") {
      giamGia = 10000;
      tb.textContent = "Áp dụng mã thành công";
      tb.className = "thong-bao-ma hop-le";
    } else {
      giamGia = 0;
      tb.textContent = ma ? "Mã giảm giá không hợp lệ" : "Vui lòng nhập mã giảm giá";
      tb.className = "thong-bao-ma loi";
    }
    capNhatTongTien();
  });

  ["ho-ten", "so-dien-thoai", "email-tt", "dia-chi"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => xoaLoi(id));
  });

  document.getElementById("form-thanh-toan").addEventListener("submit", xuLyDatHang);
}

function hienThiLoiMauEmail() {
  const email = document.getElementById("email-tt");
  email.classList.add("loi");
  const loi = document.querySelector('[data-loi-cho="email-tt"]');
  loi.textContent = "ⓘ Vui lòng nhập email hợp lệ";
  loi.hidden = false;
}

function xoaLoi(id) {
  const o = document.getElementById(id);
  const loi = document.querySelector(`[data-loi-cho="${id}"]`);
  o.classList.remove("loi");
  if (loi) loi.hidden = true;
  if (id === "ho-ten") document.getElementById("hop-le-ho-ten").hidden = o.value.trim().length < 2;
}

function datLoi(id, thongBao) {
  const o = document.getElementById(id);
  const loi = document.querySelector(`[data-loi-cho="${id}"]`);
  o.classList.add("loi");
  loi.textContent = thongBao;
  loi.hidden = false;
}

function xuLyDatHang(event) {
  event.preventDefault();
  let hopLe = true;
  const hoTen = document.getElementById("ho-ten").value.trim();
  const sdt = document.getElementById("so-dien-thoai").value.replace(/\D/g, "");
  const email = document.getElementById("email-tt").value.trim();
  const diaChi = document.getElementById("dia-chi").value.trim();

  if (hoTen.length < 2) { datLoi("ho-ten", "Vui lòng nhập họ tên"); hopLe = false; }
  if (!/^0\d{9}$/.test(sdt)) { datLoi("so-dien-thoai", "Vui lòng nhập số điện thoại hợp lệ"); hopLe = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { datLoi("email-tt", "Vui lòng nhập email hợp lệ"); hopLe = false; }
  if (diaChi.length < 5) { datLoi("dia-chi", "Vui lòng nhập địa chỉ chi tiết"); hopLe = false; }
  if (!hopLe) return;

  alert("Đặt hàng thành công!");
}

document.addEventListener("DOMContentLoaded", renderTrangThanhToan);
