/* GREENMART - LIÊN HỆ */

/* ===== lien-he.js ===== */
/* =========================================================
   TRANG LIÊN HỆ - xác thực form và giả lập gửi liên hệ
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-lien-he");
  if (!form) return;

  form.addEventListener("submit", (su_kien) => {
    su_kien.preventDefault();

    const hoTen = document.getElementById("lh-ho-ten");
    const email = document.getElementById("lh-email");
    const noiDung = document.getElementById("lh-noi-dung");
    let hopLe = true;

    [hoTen, email, noiDung].forEach((truong) => truong.classList.remove("loi"));

    if (hoTen.value.trim().length < 2) {
      hoTen.classList.add("loi");
      hopLe = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.classList.add("loi");
      hopLe = false;
    }
    if (noiDung.value.trim().length < 10) {
      noiDung.classList.add("loi");
      hopLe = false;
    }

    if (!hopLe) {
      hienThiToast("Vui lòng kiểm tra lại thông tin đã nhập");
      return;
    }

    document.getElementById("thong-bao-gui-thanh-cong").hidden = false;
    form.reset();
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
