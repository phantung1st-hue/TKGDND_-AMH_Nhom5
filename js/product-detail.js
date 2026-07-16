/* GREENMART - CHI TIẾT SẢN PHẨM */

/* ===== chi-tiet-san-pham.js ===== */
/* =========================================================
   TRANG CHI TIẾT SẢN PHẨM
   Đọc ?id=... trên URL để hiển thị đúng sản phẩm tương ứng
   ========================================================= */

const DANH_GIA_MAU = [
  { ten: "Nguyễn Thị Lan", ngay: "02/05/2024", sao: 5, noiDung: "Sản phẩm rất tươi ngon, giao hàng nhanh. Sẽ tiếp tục ủng hộ shop!" },
  { ten: "Trần Văn Minh", ngay: "28/04/2024", sao: 4, noiDung: "Chất lượng tốt, đóng gói cẩn thận, giá cả hợp lý so với thị trường." },
  { ten: "Phạm Thu Hà", ngay: "20/04/2024", sao: 5, noiDung: "Đây là lần thứ 3 mình mua, chất lượng luôn ổn định. Rất hài lòng." }
];

let trongLuongDangChon = null;
let soLuongDangChon = 1;

function layIdSanPhamTuUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || DANH_SACH_SAN_PHAM[0].id;
}

function taoSaoHtml(diem, kichThuoc = 15) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<svg viewBox="0 0 24 24" fill="${i <= Math.round(diem) ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.5" style="width:${kichThuoc}px;height:${kichThuoc}px"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  }
  return html;
}

function renderChiTietSanPham() {
  if (!document.getElementById("chi-tiet-san-pham")) return;
  const id = layIdSanPhamTuUrl();
  const sp = timSanPhamTheoId(id) || DANH_SACH_SAN_PHAM[0];
  trongLuongDangChon = sp.trongLuong ? sp.trongLuong[0] : null;
  soLuongDangChon = 1;

  document.title = sp.ten + " - GreenMart";
  document.getElementById("duong-dan-danh-muc").textContent = sp.danhMucTen;
  document.getElementById("duong-dan-danh-muc").href = `san-pham.html?danh-muc=${sp.danhMuc}`;
  document.getElementById("duong-dan-ten-sp").textContent = sp.ten;
  document.getElementById("mo-ta-day-du").textContent = sp.moTaDay;
  document.getElementById("so-danh-gia-tab").textContent = sp.soLuongDanhGia;

  const danhSachAnh = [sp.hinhAnh, ...(sp.hinhAnhPhu || [])];

  const trongLuongHtml = (sp.trongLuong || [])
    .map(
      (tl, i) =>
        `<button class="lua-chon-trong-luong ${i === 0 ? "dang-chon" : ""}" data-trong-luong="${tl}">${tl}</button>`
    )
    .join("");

  const thumbHtml = danhSachAnh
    .map(
      (anh, i) =>
        `<div class="thumb ${i === 0 ? "dang-chon" : ""}" data-anh="${anh}">
           <img src="${anh}" alt="${sp.ten} - ảnh ${i + 1}" onerror="this.src='assets/images/placeholder.svg'">
         </div>`
    )
    .join("");

  document.getElementById("chi-tiet-san-pham").innerHTML = `
    <div class="anh-sp-vung">
      <div class="khung-anh anh-chinh-sp" id="anh-chinh-sp">
        ${layNhanSanPham(sp)}
        <img src="${sp.hinhAnh}" alt="${sp.ten}" onerror="this.src='assets/images/placeholder.svg'">
      </div>
      <div class="danh-sach-thumb" id="danh-sach-thumb">
        ${thumbHtml}
        <div class="thumb video-thumb" aria-label="Xem video sản phẩm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z"/></svg>
        </div>
      </div>
    </div>

    <div class="thong-tin-sp">
      <h1>${sp.ten}</h1>
      <div class="hang-danh-gia-sp">
        <span class="sao">${taoSaoHtml(sp.danhGia)} (${sp.soLuongDanhGia} đánh giá)</span>
        <span>Mã SP: ${sp.maSp}</span>
        <span class="con-hang">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>
          ${sp.conHang ? "Còn hàng" : "Hết hàng"}
        </span>
      </div>

      <div class="gia-sp-chinh">
        <span class="gia-hien-tai" id="gia-chi-tiet-hien-tai">${dinhDangTien(layGiaTheoTrongLuong(sp, trongLuongDangChon))}</span>
        ${sp.giaCu ? `<span class="gia-cu" id="gia-chi-tiet-cu">${dinhDangTien(layGiaCuTheoTrongLuong(sp, trongLuongDangChon))}</span>` : ""}
      </div>

      <p>${sp.moTaNgan}</p>

      ${
        sp.trongLuong
          ? `<span class="nhan-lua-chon">Chọn trọng lượng:</span>
             <div class="nhom-trong-luong" id="nhom-trong-luong">${trongLuongHtml}</div>`
          : ""
      }

      <span class="nhan-lua-chon">Số lượng:</span>
      <div class="hang-so-luong-mua">
        <div class="buoc-so-luong">
          <button type="button" id="giam-so-luong" aria-label="Giảm số lượng">−</button>
          <input type="text" id="o-so-luong" value="1" readonly>
          <button type="button" id="tang-so-luong" aria-label="Tăng số lượng">+</button>
        </div>
      </div>

      <div class="nhom-nut-mua">
        <button class="nut nut-toi" id="nut-them-gio-ct" data-id="${sp.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          Thêm vào giỏ
        </button>
        <a href="gio-hang.html" class="nut nut-cam" id="nut-mua-ngay">Mua ngay</a>
        <button class="nut-icon nut-yeu-thich-ct nut-yeu-thich${typeof coTrongYeuThich === "function" && coTrongYeuThich(sp.id) ? " da-thich" : ""}" data-id="${sp.id}" aria-label="Yêu thích sản phẩm ${sp.ten}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 21s-7-4.6-9.5-9C.8 8.5 2 4.9 5.5 4c2-.5 3.9.3 5 2 1.1-1.7 3-2.5 5-2 3.5.9 4.7 4.5 3 8-2.5 4.4-9.5 9-9.5 9z"/>
          </svg>
        </button>
      </div>

      <div class="luoi-dich-vu-sp">
        <div class="dich-vu-sp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="7" width="15" height="11" rx="1"/><path d="M16 10h3.5L23 14v4h-7"/><circle cx="6" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>
          <div><strong>Giao hàng nhanh</strong><span>Nội thành trong 2h</span></div>
        </div>
        <div class="dich-vu-sp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
          <div><strong>Cam kết chất lượng</strong><span>100% Hữu cơ tươi mới</span></div>
        </div>
        <div class="dich-vu-sp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg>
          <div><strong>Đổi trả miễn phí</strong><span>Trong 24h nếu lỗi</span></div>
        </div>
        <div class="dich-vu-sp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/></svg>
          <div><strong>Thanh toán đa dạng</strong><span>Tiền mặt, MoMo, Thẻ</span></div>
        </div>
      </div>
    </div>
  `;

  // Đánh giá khách hàng
  document.getElementById("vung-danh-gia").innerHTML = DANH_GIA_MAU.map(
    (dg) => `
      <div class="danh-gia-item">
        <div class="danh-gia-item-dau">
          <span class="danh-gia-item-ten">${dg.ten}</span>
          <span class="danh-gia-item-ngay">${dg.ngay}</span>
        </div>
        <div class="sao">${taoSaoHtml(dg.sao, 14)}</div>
        <p>${dg.noiDung}</p>
      </div>`
  ).join("");

  // Sản phẩm liên quan: cùng danh mục, khác id, tối đa 4 sản phẩm
  const lienQuan = DANH_SACH_SAN_PHAM.filter(
    (s) => s.danhMuc === sp.danhMuc && s.id !== sp.id
  ).slice(0, 4);
  document.getElementById("vung-san-pham-lien-quan").innerHTML = lienQuan
    .map(taoTheSanPham)
    .join("");

  ganSuKienChiTiet(sp);
}

function ganSuKienChiTiet(sp) {
  // Chọn trọng lượng
  const nhomTrongLuong = document.getElementById("nhom-trong-luong");
  if (nhomTrongLuong) {
    nhomTrongLuong.addEventListener("click", (su_kien) => {
      const nut = su_kien.target.closest(".lua-chon-trong-luong");
      if (!nut) return;
      nhomTrongLuong.querySelectorAll(".lua-chon-trong-luong").forEach((n) => n.classList.remove("dang-chon"));
      nut.classList.add("dang-chon");
      trongLuongDangChon = nut.dataset.trongLuong;
      const giaMoi = layGiaTheoTrongLuong(sp, trongLuongDangChon);
      const giaCuMoi = layGiaCuTheoTrongLuong(sp, trongLuongDangChon);
      const giaHienTai = document.getElementById("gia-chi-tiet-hien-tai");
      const giaCu = document.getElementById("gia-chi-tiet-cu");
      if (giaHienTai) giaHienTai.textContent = dinhDangTien(giaMoi);
      if (giaCu && giaCuMoi) giaCu.textContent = dinhDangTien(giaCuMoi);
    });
  }

  // Đổi ảnh chính khi bấm thumbnail
  document.getElementById("danh-sach-thumb").addEventListener("click", (su_kien) => {
    const thumb = su_kien.target.closest(".thumb:not(.video-thumb)");
    if (!thumb) return;
    document.querySelectorAll("#danh-sach-thumb .thumb").forEach((t) => t.classList.remove("dang-chon"));
    thumb.classList.add("dang-chon");
    document.querySelector("#anh-chinh-sp img").src = thumb.dataset.anh;
  });

  // Tăng giảm số lượng
  const oSoLuong = document.getElementById("o-so-luong");
  document.getElementById("giam-so-luong").addEventListener("click", () => {
    soLuongDangChon = Math.max(1, soLuongDangChon - 1);
    oSoLuong.value = soLuongDangChon;
  });
  document.getElementById("tang-so-luong").addEventListener("click", () => {
    soLuongDangChon += 1;
    oSoLuong.value = soLuongDangChon;
  });

  // Thêm vào giỏ
  document.getElementById("nut-them-gio-ct").addEventListener("click", () => {
    themVaoGioHang(sp.id, soLuongDangChon, trongLuongDangChon);
    hienThiToast(`Đã thêm ${soLuongDangChon} "${sp.ten}" vào giỏ hàng`);
  });

  // Mua ngay: thêm vào giỏ rồi chuyển sang trang giỏ hàng
  document.getElementById("nut-mua-ngay").addEventListener("click", (su_kien) => {
    su_kien.preventDefault();
    themVaoGioHang(sp.id, soLuongDangChon, trongLuongDangChon);
    window.location.href = "gio-hang.html";
  });

  // Tabs mô tả / dinh dưỡng / nguồn gốc / bảo quản / đánh giá
  document.querySelectorAll(".tabs-sp-nhan button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs-sp-nhan button").forEach((b) => b.classList.remove("dang-hoat-dong"));
      document.querySelectorAll(".pane-tab").forEach((p) => p.classList.remove("dang-hien"));
      btn.classList.add("dang-hoat-dong");
      document.getElementById("pane-" + btn.dataset.tab).classList.add("dang-hien");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderChiTietSanPham);
