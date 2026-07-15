/* GREENMART - ĐĂNG NHẬP / ĐĂNG KÝ */

/* ===== tai-khoan.js ===== */
/* =========================================================
   TRANG ĐĂNG NHẬP / ĐĂNG KÝ
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Hiện / ẩn mật khẩu (dùng chung 2 trang) ---- */
  document.querySelectorAll(".nut-hien-mat-khau").forEach((nut) => {
    nut.addEventListener("click", () => {
      const oNhap = document.getElementById(nut.dataset.cho);
      oNhap.type = oNhap.type === "password" ? "text" : "password";
    });
  });

  /* ---- FORM ĐĂNG NHẬP ---- */
  const formDangNhap = document.getElementById("form-dang-nhap");
  if (formDangNhap) {
    formDangNhap.addEventListener("submit", (su_kien) => {
      su_kien.preventDefault();
      const taiKhoan = document.getElementById("dn-tai-khoan").value.trim();
      const matKhau = document.getElementById("dn-mat-khau").value;
      const canhBao = document.getElementById("canh-bao-dang-nhap");
      const noiDungCanhBao = document.getElementById("noi-dung-canh-bao");

      const laEmailHopLe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(taiKhoan);
      const laSoDienThoaiHopLe = /^(0|\+84)[0-9]{9,10}$/.test(taiKhoan);

      if (!taiKhoan || (!laEmailHopLe && !laSoDienThoaiHopLe)) {
        noiDungCanhBao.textContent = "Vui lòng nhập email hoặc số điện thoại hợp lệ";
        canhBao.hidden = false;
        return;
      }

      if (!matKhau || matKhau.length < 6) {
        noiDungCanhBao.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
        canhBao.hidden = false;
        return;
      }

      canhBao.hidden = true;
      hienThiToast("Đăng nhập thành công! Đang chuyển hướng...");
      setTimeout(() => (window.location.href = "index.html"), 900);
    });
  }

  /* ---- FORM ĐĂNG KÝ ---- */
  const formDangKy = document.getElementById("form-dang-ky");
  if (formDangKy) {
    const oMatKhau = document.getElementById("dk-mat-khau");

    // Kiểm tra độ mạnh mật khẩu theo thời gian thực
    oMatKhau.addEventListener("input", () => {
      const gt = oMatKhau.value;
      document.getElementById("dk-du-8-ky-tu").checked = gt.length >= 8;
      document.getElementById("dk-hoa-thuong").checked = /[a-z]/.test(gt) && /[A-Z]/.test(gt);
      document.getElementById("dk-co-chu-so").checked = /[0-9]/.test(gt);
    });

    formDangKy.addEventListener("submit", (su_kien) => {
      su_kien.preventDefault();
      const canhBao = document.getElementById("canh-bao-dang-ky");
      const noiDungCanhBao = document.getElementById("noi-dung-canh-bao-dk");

      const hoTen = document.getElementById("dk-ho-ten").value.trim();
      const email = document.getElementById("dk-email").value.trim();
      const soDienThoai = document.getElementById("dk-so-dien-thoai").value.trim();
      const matKhau = oMatKhau.value;
      const xacNhanMatKhau = document.getElementById("dk-xac-nhan-mat-khau").value;
      const dongY = document.getElementById("dk-dong-y").checked;

      const baoLoi = (thongDiep) => {
        noiDungCanhBao.textContent = thongDiep;
        canhBao.hidden = false;
      };

      if (hoTen.length < 2) return baoLoi("Vui lòng nhập họ tên hợp lệ");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return baoLoi("Vui lòng nhập email hợp lệ");
      if (!/^(0|\+84)[0-9]{9,10}$/.test(soDienThoai)) return baoLoi("Vui lòng nhập số điện thoại hợp lệ");
      if (matKhau.length < 8) return baoLoi("Mật khẩu phải có ít nhất 8 ký tự");
      if (matKhau !== xacNhanMatKhau) return baoLoi("Mật khẩu xác nhận không khớp");
      if (!dongY) return baoLoi("Vui lòng đồng ý với Điều khoản sử dụng và Chính sách bảo mật");

      canhBao.hidden = true;
      hienThiToast("Tạo tài khoản thành công! Đang chuyển đến đăng nhập...");
      setTimeout(() => (window.location.href = "dang-nhap.html"), 900);
    });
  }
});
