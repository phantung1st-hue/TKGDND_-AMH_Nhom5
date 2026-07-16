/* GREENMART - THANH TOÁN */

/* ===== thanh-toan.js ===== */
/* =========================================================
   TRANG THANH TOÁN - GREENMART
   ========================================================= */

const KHOA_UU_DAI_THANH_TOAN = "greenmart_uu_dai";
const KHOA_DON_HANG = "greenmart_don_hang";
const MUC_MIEN_PHI_GIAO_HANG = 300000;

const PHUONG_THUC_VAN_CHUYEN = {
  tieu_chuan: { ten: "Giao tiêu chuẩn", phi: 30000, thoiGian: "2–3 ngày làm việc" },
  nhanh: { ten: "Giao nhanh", phi: 55000, thoiGian: "Trong 24 giờ" }
};

const MA_GIAM_GIA_THANH_TOAN = { GREEN10: 0.1, GREEN20: 0.2 };

let vanChuyenDangChon = "tieu_chuan";
let thanhToanDangChon = "cod";
let uuDaiDangDung = docUuDaiDaLuu();

function docUuDaiDaLuu() {
  try {
    const duLieu = JSON.parse(localStorage.getItem(KHOA_UU_DAI_THANH_TOAN));
    return duLieu && MA_GIAM_GIA_THANH_TOAN[duLieu.ma] ? duLieu : null;
  } catch (_) {
    return null;
  }
}

function luuUuDai(uuDai) {
  uuDaiDangDung = uuDai;
  if (uuDai) localStorage.setItem(KHOA_UU_DAI_THANH_TOAN, JSON.stringify(uuDai));
  else localStorage.removeItem(KHOA_UU_DAI_THANH_TOAN);
}

function layPhiVanChuyen(tamTinh) {
  if (tamTinh >= MUC_MIEN_PHI_GIAO_HANG && vanChuyenDangChon === "tieu_chuan") return 0;
  return PHUONG_THUC_VAN_CHUYEN[vanChuyenDangChon].phi;
}

function renderTrangThanhToan() {
  if (!document.getElementById("vung-thanh-toan")) return;
  const gioHang = docGioHang();
  const vung = document.getElementById("vung-thanh-toan");

  if (!gioHang.length) {
    vung.innerHTML = `
      <section class="trang-thai-thanh-toan trong">
        <div class="bieu-tuong-trang-thai">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h3l2.5 11.5a2 2 0 0 0 2 1.5h8.8a2 2 0 0 0 2-1.6L22 7H6"/></svg>
        </div>
        <h1>Chưa có sản phẩm để thanh toán</h1>
        <p>Giỏ hàng của bạn đang trống. Hãy chọn sản phẩm tươi sạch trước khi tiếp tục.</p>
        <a href="san-pham.html" class="nut nut-cam">Tiếp tục mua sắm</a>
      </section>`;
    return;
  }

  const tamTinh = tinhTamTinhGioHang();
  const mienPhiShip = tamTinh >= MUC_MIEN_PHI_GIAO_HANG;

  vung.innerHTML = `
    <div class="tieu-de-trang-thanh-toan">
      <div>
        <span class="nhan-an-toan">Thanh toán an toàn</span>
        <h1>Thông tin đặt hàng</h1>
        <p>Kiểm tra thông tin giao nhận và phương thức thanh toán trước khi đặt hàng.</p>
      </div>
      <div class="cac-buoc-thanh-toan" aria-label="Tiến trình đặt hàng">
        <span class="hoan-thanh">1. Giỏ hàng</span><i></i><span class="hien-tai">2. Thanh toán</span><i></i><span>3. Hoàn tất</span>
      </div>
    </div>

    <div class="bo-cuc-thanh-toan">
      <form id="form-thanh-toan" novalidate>
        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">
            <span class="so-buoc">1</span>
            <div><h2>Thông tin người nhận</h2><p>Dùng để xác nhận và giao đơn hàng.</p></div>
          </div>

          <div class="luoi-form-2">
            ${taoTruongNhap("ho-ten", "Họ và tên", "text", "Ví dụ: Nguyễn Văn An", true, "Vui lòng nhập họ tên từ 2 ký tự")}
            ${taoTruongNhap("so-dien-thoai", "Số điện thoại", "tel", "Ví dụ: 0912 345 678", true, "Số điện thoại phải gồm 10 chữ số")}
          </div>
          ${taoTruongNhap("email-tt", "Email nhận xác nhận đơn", "email", "ban@example.com", true, "Vui lòng nhập email hợp lệ")}

          <label class="o-check luu-thong-tin">
            <input type="checkbox" id="luu-thong-tin"><span>Lưu thông tin cho lần mua sau trên thiết bị này</span>
          </label>
        </section>

        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">
            <span class="so-buoc">2</span>
            <div><h2>Địa chỉ giao hàng</h2><p>Nhập đầy đủ để đơn hàng được giao chính xác.</p></div>
          </div>
          <div class="luoi-form-3">
            ${taoSelect("tinh-thanh", "Tỉnh / Thành phố", ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Bình Dương", "Đồng Nai", "Tỉnh / thành khác"])}
            ${taoTruongNhap("quan-huyen", "Quận / Huyện", "text", "Nhập quận, huyện", true, "Vui lòng nhập quận / huyện")}
            ${taoTruongNhap("phuong-xa", "Phường / Xã", "text", "Nhập phường, xã", true, "Vui lòng nhập phường / xã")}
          </div>
          ${taoTruongNhap("dia-chi", "Số nhà, tên đường", "text", "Ví dụ: 123 Nguyễn Văn Linh", true, "Vui lòng nhập địa chỉ chi tiết")}
          <div class="nhom-truong">
            <label for="ghi-chu">Ghi chú giao hàng <span class="khong-bat-buoc">Không bắt buộc</span></label>
            <textarea id="ghi-chu" class="o-vung-van-ban" maxlength="250" placeholder="Ví dụ: Gọi trước khi giao, giao tại quầy lễ tân..."></textarea>
            <div class="dem-ky-tu"><span id="so-ky-tu">0</span>/250</div>
          </div>
        </section>

        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">
            <span class="so-buoc">3</span>
            <div><h2>Phương thức vận chuyển</h2><p>Chọn thời gian nhận hàng phù hợp.</p></div>
          </div>
          ${mienPhiShip ? `<div class="thong-bao-mien-phi">Đơn hàng đạt ${dinhDangTien(MUC_MIEN_PHI_GIAO_HANG)} — miễn phí giao tiêu chuẩn.</div>` : ""}
          <div class="luoi-van-chuyen">
            ${taoTheVanChuyen("tieu_chuan", mienPhiShip ? "Miễn phí" : dinhDangTien(30000), true)}
            ${taoTheVanChuyen("nhanh", dinhDangTien(55000), false)}
          </div>
        </section>

        <section class="khoi-thanh-toan">
          <div class="khoi-thanh-toan-tieu-de">
            <span class="so-buoc">4</span>
            <div><h2>Phương thức thanh toán</h2><p>Thông tin thanh toán được bảo mật.</p></div>
          </div>
          <div class="danh-sach-thanh-toan">
            ${taoTheThanhToan("cod", "Thanh toán khi nhận hàng (COD)", "Thanh toán tiền mặt sau khi kiểm tra hàng", true)}
            ${taoTheThanhToan("chuyen-khoan", "Chuyển khoản ngân hàng", "Nhận thông tin chuyển khoản sau khi đặt hàng")}
            ${taoTheThanhToan("vi-dien-tu", "Ví điện tử", "MoMo hoặc ZaloPay")}
            ${taoTheThanhToan("the-quoc-te", "Thẻ tín dụng / ghi nợ", "Visa, Mastercard, JCB")}
          </div>
          <div id="chi-tiet-thanh-toan" class="chi-tiet-thanh-toan"></div>
        </section>
      </form>

      <aside class="khoi-tom-tat-don">
        <div class="tieu-de-tom-tat"><h2>Đơn hàng của bạn</h2><a href="gio-hang.html">Chỉnh sửa</a></div>
        <div id="danh-sach-tom-tat" class="danh-sach-tom-tat"></div>
        <div class="hang-ma-giam-gia">
          <input type="text" class="o-nhap" id="o-ma-giam-gia-tt" placeholder="Nhập mã GREEN10 hoặc GREEN20" value="${uuDaiDangDung?.ma || ""}">
          <button class="nut nut-vien nut-nho" id="nut-ap-dung-ma-tt" type="button">${uuDaiDangDung ? "Đổi mã" : "Áp dụng"}</button>
        </div>
        <p id="thong-bao-ma" class="thong-bao-ma ${uuDaiDangDung ? "hop-le" : ""}">${uuDaiDangDung ? `Đã áp dụng mã ${uuDaiDangDung.ma}` : ""}</p>
        <div class="bang-tien">
          <div><span>Tạm tính</span><strong id="tt-tam-tinh"></strong></div>
          <div><span>Phí vận chuyển</span><strong id="tt-phi-van-chuyen"></strong></div>
          <div id="dong-giam-gia-tt" class="giam-gia" hidden><span>Ưu đãi</span><strong id="tt-giam-gia"></strong></div>
          <div class="tong-thanh-toan"><span>Tổng thanh toán</span><strong id="tt-tong-cong"></strong></div>
        </div>
        <button class="nut nut-cam nut-rong nut-dat-hang" id="nut-dat-hang" type="submit" form="form-thanh-toan">
          <span>Đặt hàng</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
        <div class="cam-ket-thanh-toan">
          <span>✓ Thực phẩm tươi sạch</span><span>✓ Đổi trả theo chính sách</span><span>✓ Bảo mật thông tin</span>
        </div>
        <p class="ghi-chu-dieu-khoan">Khi đặt hàng, bạn đồng ý với <a href="javascript:void(0)" class="disabled-link" aria-disabled="true" tabindex="-1">Điều khoản sử dụng</a> và <a href="javascript:void(0)" class="disabled-link" aria-disabled="true" tabindex="-1">Chính sách bảo mật</a>.</p>
      </aside>
    </div>`;

  dienThongTinDaLuu();
  capNhatChiTietThanhToan();
  capNhatTomTatDonHang();
  ganSuKienThanhToan();
}

function taoTruongNhap(id, nhan, type, placeholder, batBuoc, loi) {
  return `<div class="nhom-truong"><label for="${id}">${nhan}${batBuoc ? ' <span class="bat-buoc">*</span>' : ""}</label><input type="${type}" id="${id}" class="o-nhap" placeholder="${placeholder}" ${batBuoc ? "required" : ""}><div class="thong-diep-loi" data-loi-cho="${id}" hidden>${loi}</div></div>`;
}

function taoSelect(id, nhan, luaChon) {
  return `<div class="nhom-truong"><label for="${id}">${nhan} <span class="bat-buoc">*</span></label><select id="${id}" class="o-chon" required><option value="">Chọn tỉnh / thành</option>${luaChon.map(x => `<option value="${x}">${x}</option>`).join("")}</select><div class="thong-diep-loi" data-loi-cho="${id}" hidden>Vui lòng chọn tỉnh / thành phố</div></div>`;
}

function taoTheVanChuyen(id, gia, dangChon) {
  const pt = PHUONG_THUC_VAN_CHUYEN[id];
  return `<label class="the-lua-chon ${dangChon ? "dang-chon" : ""}" data-van-chuyen="${id}"><input type="radio" name="van-chuyen" value="${id}" ${dangChon ? "checked" : ""}><span class="radio-tuy-chinh"></span><div class="noi-dung-lua-chon"><strong>${pt.ten}</strong><small>${pt.thoiGian}</small></div><b>${gia}</b></label>`;
}

function taoTheThanhToan(id, ten, moTa, dangChon = false) {
  return `<label class="the-phuong-thuc ${dangChon ? "dang-chon" : ""}" data-thanh-toan="${id}"><input type="radio" name="thanh-toan" value="${id}" ${dangChon ? "checked" : ""}><span class="radio-tuy-chinh"></span><span class="icon-phuong-thuc">${id === "cod" ? "₫" : id === "chuyen-khoan" ? "🏦" : id === "vi-dien-tu" ? "📱" : "💳"}</span><span class="noi-dung-lua-chon"><strong>${ten}</strong><small>${moTa}</small></span></label>`;
}

function capNhatChiTietThanhToan() {
  const vung = document.getElementById("chi-tiet-thanh-toan");
  const noiDung = {
    cod: `<strong>Thanh toán khi nhận hàng</strong><p>Bạn thanh toán cho nhân viên giao hàng sau khi nhận và kiểm tra sản phẩm.</p>`,
    "chuyen-khoan": `<strong>Thông tin chuyển khoản</strong>
      <div class="thong-tin-chuyen-khoan"><span>Ngân hàng</span><b>Vietcombank</b><span>Số tài khoản</span><b>1024 680 2010</b><span>Chủ tài khoản</span><b>CONG TY GREENMART</b><span>Nội dung</span><b>GM + Số điện thoại</b></div>
      <p class="luu-y-demo">Thông tin phục vụ mô phỏng giao diện đồ án, không thực hiện giao dịch thật.</p>`,
    "vi-dien-tu": `<strong>Quét mã ví điện tử</strong>
      <div class="lua-chon-vi">
        <label><input type="radio" name="loai-vi" value="momo" checked><span>MoMo</span></label>
        <label><input type="radio" name="loai-vi" value="zalopay"><span>ZaloPay</span></label>
      </div>
      <div class="khung-qr-thanh-toan"><img id="anh-qr-vi" src="assets/images/thanh-toan/qr-momo.svg" alt="Mã QR MoMo mô phỏng"><div><b id="ten-vi-dang-chon">MoMo</b><p>Quét mã bằng ứng dụng ví điện tử để thanh toán.</p><small>Mã QR minh họa cho đồ án, không có giá trị giao dịch.</small></div></div>`,
    "the-quoc-te": `<strong>Thông tin thẻ tín dụng / ghi nợ</strong>
      <div class="form-the-thanh-toan">
        <div class="nhom-truong full"><label for="so-the">Số thẻ <span class="bat-buoc">*</span></label><input id="so-the" class="o-nhap" inputmode="numeric" maxlength="19" placeholder="1234 5678 9012 3456"><div class="thong-diep-loi" data-loi-cho="so-the" hidden>Vui lòng nhập 16 chữ số thẻ</div></div>
        <div class="nhom-truong full"><label for="ten-chu-the">Tên chủ thẻ <span class="bat-buoc">*</span></label><input id="ten-chu-the" class="o-nhap" placeholder="NGUYEN VAN AN"><div class="thong-diep-loi" data-loi-cho="ten-chu-the" hidden>Vui lòng nhập tên chủ thẻ</div></div>
        <div class="nhom-truong"><label for="han-the">Ngày hết hạn <span class="bat-buoc">*</span></label><input id="han-the" class="o-nhap" inputmode="numeric" maxlength="5" placeholder="MM/YY"><div class="thong-diep-loi" data-loi-cho="han-the" hidden>Nhập đúng định dạng MM/YY</div></div>
        <div class="nhom-truong"><label for="cvv">CVV <span class="bat-buoc">*</span></label><input id="cvv" class="o-nhap" inputmode="numeric" maxlength="3" placeholder="123"><div class="thong-diep-loi" data-loi-cho="cvv" hidden>CVV gồm 3 chữ số</div></div>
      </div>
      <p class="luu-y-demo">Biểu mẫu mô phỏng phục vụ đồ án; website không lưu thông tin thẻ.</p>`
  };
  vung.innerHTML = noiDung[thanhToanDangChon];
  ganSuKienChiTietThanhToan();
}

function ganSuKienChiTietThanhToan() {
  document.querySelectorAll('input[name="loai-vi"]').forEach(o => o.addEventListener("change", () => {
    const laMomo = o.value === "momo";
    document.getElementById("anh-qr-vi").src = laMomo ? "assets/images/thanh-toan/qr-momo.svg" : "assets/images/thanh-toan/qr-zalopay.svg";
    document.getElementById("ten-vi-dang-chon").textContent = laMomo ? "MoMo" : "ZaloPay";
  }));
  const soThe = document.getElementById("so-the");
  if (soThe) soThe.addEventListener("input", () => { soThe.value = soThe.value.replace(/\D/g, "").slice(0,16).replace(/(.{4})/g, "$1 ").trim(); xoaLoiTruong("so-the"); });
  const hanThe = document.getElementById("han-the");
  if (hanThe) hanThe.addEventListener("input", () => { const v=hanThe.value.replace(/\D/g, "").slice(0,4); hanThe.value=v.length>2?v.slice(0,2)+"/"+v.slice(2):v; xoaLoiTruong("han-the"); });
  const cvv = document.getElementById("cvv");
  if (cvv) cvv.addEventListener("input", () => { cvv.value=cvv.value.replace(/\D/g, "").slice(0,3); xoaLoiTruong("cvv"); });
  const ten = document.getElementById("ten-chu-the");
  if (ten) ten.addEventListener("input", () => xoaLoiTruong("ten-chu-the"));
}

function capNhatTomTatDonHang() {
  const gioHang = docGioHang();
  const danhSach = document.getElementById("danh-sach-tom-tat");
  if (!danhSach) return;

  danhSach.innerHTML = gioHang.map((dong) => {
    const sp = timSanPhamTheoId(dong.id);
    if (!sp) return "";
    return `<div class="dong-san-pham-tom-tat"><div class="khung-anh"><img src="${sp.hinhAnh}" alt="${sp.ten}" onerror="this.src='assets/images/placeholder.svg'"><span class="the-so-luong-mini">${dong.soLuong}</span></div><div class="dong-san-pham-tom-tat-info"><h4>${sp.ten}</h4><div class="don-vi">${dong.trongLuong || sp.donVi}</div></div><strong>${dinhDangTien(layGiaTheoTrongLuong(sp, dong.trongLuong) * dong.soLuong)}</strong></div>`;
  }).join("");

  const tamTinh = tinhTamTinhGioHang();
  const phiVanChuyen = layPhiVanChuyen(tamTinh);
  const tiLe = uuDaiDangDung ? MA_GIAM_GIA_THANH_TOAN[uuDaiDangDung.ma] : 0;
  const giamGia = Math.round(tamTinh * tiLe);
  const tongCong = Math.max(0, tamTinh + phiVanChuyen - giamGia);

  document.getElementById("tt-tam-tinh").textContent = dinhDangTien(tamTinh);
  document.getElementById("tt-phi-van-chuyen").textContent = phiVanChuyen === 0 ? "Miễn phí" : dinhDangTien(phiVanChuyen);
  document.getElementById("tt-tong-cong").textContent = dinhDangTien(tongCong);
  const dongGiam = document.getElementById("dong-giam-gia-tt");
  dongGiam.hidden = giamGia <= 0;
  if (giamGia > 0) document.getElementById("tt-giam-gia").textContent = `-${dinhDangTien(giamGia)}`;
}

function ganSuKienThanhToan() {
  document.querySelectorAll("[data-van-chuyen]").forEach(the => the.addEventListener("click", () => {
    document.querySelectorAll("[data-van-chuyen]").forEach(t => t.classList.remove("dang-chon"));
    the.classList.add("dang-chon");
    the.querySelector("input").checked = true;
    vanChuyenDangChon = the.dataset.vanChuyen;
    capNhatTomTatDonHang();
  }));

  document.querySelectorAll("[data-thanh-toan]").forEach(the => the.addEventListener("click", () => {
    document.querySelectorAll("[data-thanh-toan]").forEach(t => t.classList.remove("dang-chon"));
    the.classList.add("dang-chon");
    the.querySelector("input").checked = true;
    thanhToanDangChon = the.dataset.thanhToan;
    capNhatChiTietThanhToan();
  }));

  const ghiChu = document.getElementById("ghi-chu");
  ghiChu.addEventListener("input", () => document.getElementById("so-ky-tu").textContent = ghiChu.value.length);

  document.getElementById("nut-ap-dung-ma-tt").addEventListener("click", apDungMaGiamGia);
  document.getElementById("o-ma-giam-gia-tt").addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); apDungMaGiamGia(); }
  });

  document.querySelectorAll(".o-nhap, .o-chon").forEach(o => {
    o.addEventListener("input", () => xoaLoiTruong(o.id));
    o.addEventListener("change", () => xoaLoiTruong(o.id));
  });

  document.getElementById("form-thanh-toan").addEventListener("submit", xuLyDatHang);
}

function apDungMaGiamGia() {
  const oMa = document.getElementById("o-ma-giam-gia-tt");
  const thongBao = document.getElementById("thong-bao-ma");
  const ma = oMa.value.trim().toUpperCase();
  oMa.value = ma;
  if (MA_GIAM_GIA_THANH_TOAN[ma]) {
    luuUuDai({ ma });
    thongBao.textContent = `Áp dụng thành công mã ${ma}.`;
    thongBao.className = "thong-bao-ma hop-le";
    document.getElementById("nut-ap-dung-ma-tt").textContent = "Đổi mã";
  } else {
    luuUuDai(null);
    thongBao.textContent = ma ? "Mã giảm giá không hợp lệ hoặc đã hết hạn." : "Vui lòng nhập mã giảm giá.";
    thongBao.className = "thong-bao-ma loi";
  }
  capNhatTomTatDonHang();
}

function xoaLoiTruong(id) {
  const o = document.getElementById(id);
  const loi = document.querySelector(`[data-loi-cho="${id}"]`);
  if (o) o.classList.remove("loi");
  if (loi) loi.hidden = true;
}

function datLoi(id, coLoi) {
  const o = document.getElementById(id);
  const loi = document.querySelector(`[data-loi-cho="${id}"]`);
  o.classList.toggle("loi", coLoi);
  if (loi) loi.hidden = !coLoi;
  return !coLoi;
}

function xacThucFormThanhToan() {
  const sdt = document.getElementById("so-dien-thoai").value.replace(/[\s.-]/g, "");
  const ketQua = [
    datLoi("ho-ten", document.getElementById("ho-ten").value.trim().length < 2),
    datLoi("so-dien-thoai", !/^(0\d{9}|\+84\d{9})$/.test(sdt)),
    datLoi("email-tt", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email-tt").value.trim())),
    datLoi("tinh-thanh", !document.getElementById("tinh-thanh").value),
    datLoi("quan-huyen", document.getElementById("quan-huyen").value.trim().length < 2),
    datLoi("phuong-xa", document.getElementById("phuong-xa").value.trim().length < 2),
    datLoi("dia-chi", document.getElementById("dia-chi").value.trim().length < 5)
  ];
  if (thanhToanDangChon === "the-quoc-te") {
    const soThe = (document.getElementById("so-the")?.value || "").replace(/\D/g, "");
    const tenChuThe = document.getElementById("ten-chu-the")?.value.trim() || "";
    const hanThe = document.getElementById("han-the")?.value || "";
    const cvv = document.getElementById("cvv")?.value || "";
    const [thang, nam] = hanThe.split("/").map(Number);
    ketQua.push(
      datLoi("so-the", !/^\d{16}$/.test(soThe)),
      datLoi("ten-chu-the", tenChuThe.length < 3),
      datLoi("han-the", !/^(0[1-9]|1[0-2])\/\d{2}$/.test(hanThe) || !thang || Number.isNaN(nam)),
      datLoi("cvv", !/^\d{3}$/.test(cvv))
    );
  }
  const hopLe = ketQua.every(Boolean);
  if (!hopLe) document.querySelector(".loi")?.scrollIntoView({ behavior: "smooth", block: "center" });
  return hopLe;
}

function xuLyDatHang(e) {
  e.preventDefault();
  if (!xacThucFormThanhToan()) return;

  const nut = document.getElementById("nut-dat-hang");
  nut.disabled = true;
  nut.querySelector("span").textContent = "Đang xử lý...";

  const gioHang = docGioHang();
  const tamTinh = tinhTamTinhGioHang();
  const phiVanChuyen = layPhiVanChuyen(tamTinh);
  const giamGia = uuDaiDangDung ? Math.round(tamTinh * MA_GIAM_GIA_THANH_TOAN[uuDaiDangDung.ma]) : 0;
  const maDon = `GM${new Date().toISOString().slice(2,10).replace(/-/g, "")}${String(Date.now()).slice(-4)}`;
  const donHang = {
    maDon, ngayDat: new Date().toISOString(), gioHang, tamTinh, phiVanChuyen, giamGia,
    tongCong: tamTinh + phiVanChuyen - giamGia,
    vanChuyen: vanChuyenDangChon, thanhToan: thanhToanDangChon,
    nguoiNhan: {
      hoTen: document.getElementById("ho-ten").value.trim(),
      soDienThoai: document.getElementById("so-dien-thoai").value.trim(),
      email: document.getElementById("email-tt").value.trim(),
      diaChi: `${document.getElementById("dia-chi").value.trim()}, ${document.getElementById("phuong-xa").value.trim()}, ${document.getElementById("quan-huyen").value.trim()}, ${document.getElementById("tinh-thanh").value}`,
      ghiChu: document.getElementById("ghi-chu").value.trim()
    }
  };

  const lichSu = JSON.parse(localStorage.getItem(KHOA_DON_HANG) || "[]");
  lichSu.unshift(donHang);
  localStorage.setItem(KHOA_DON_HANG, JSON.stringify(lichSu.slice(0, 20)));
  if (document.getElementById("luu-thong-tin").checked) localStorage.setItem("greenmart_thong_tin_giao_hang", JSON.stringify(donHang.nguoiNhan));
  ghiGioHang([]);
  luuUuDai(null);
  renderDatHangThanhCong(donHang);
}

function dienThongTinDaLuu() {
  try {
    const tt = JSON.parse(localStorage.getItem("greenmart_thong_tin_giao_hang"));
    if (!tt) return;
    document.getElementById("ho-ten").value = tt.hoTen || "";
    document.getElementById("so-dien-thoai").value = tt.soDienThoai || "";
    document.getElementById("email-tt").value = tt.email || "";
  } catch (_) {}
}

function renderDatHangThanhCong(donHang) {
  const tenThanhToan = { cod: "Thanh toán khi nhận hàng", "chuyen-khoan": "Chuyển khoản ngân hàng", "vi-dien-tu": "Ví điện tử", "the-quoc-te": "Thẻ tín dụng / ghi nợ" };
  document.getElementById("vung-thanh-toan").innerHTML = `
    <section class="trang-thai-thanh-toan thanh-cong">
      <div class="bieu-tuong-trang-thai"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-7"/></svg></div>
      <span class="nhan-an-toan">Đặt hàng thành công</span>
      <h1>Cảm ơn bạn, ${donHang.nguoiNhan.hoTen}!</h1>
      <p>Đơn hàng đã được ghi nhận. GreenMart sẽ liên hệ xác nhận qua số <strong>${donHang.nguoiNhan.soDienThoai}</strong>.</p>
      <div class="the-xac-nhan-don">
        <div><span>Mã đơn hàng</span><strong>${donHang.maDon}</strong></div>
        <div><span>Tổng thanh toán</span><strong>${dinhDangTien(donHang.tongCong)}</strong></div>
        <div><span>Phương thức</span><strong>${tenThanhToan[donHang.thanhToan]}</strong></div>
        <div><span>Dự kiến giao</span><strong>${PHUONG_THUC_VAN_CHUYEN[donHang.vanChuyen].thoiGian}</strong></div>
      </div>
      ${donHang.thanhToan === "chuyen-khoan" ? `<div class="huong-dan-sau-dat"><strong>Thông tin chuyển khoản</strong><p>Ngân hàng GreenMart Demo — STK 0123456789 — Nội dung: <b>${donHang.maDon}</b></p></div>` : ""}
      <div class="nhom-nut-hoan-tat"><a href="san-pham.html" class="nut nut-cam">Tiếp tục mua sắm</a><a href="index.html" class="nut nut-vien">Về trang chủ</a></div>
    </section>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", renderTrangThanhToan);
