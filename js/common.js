/* GREENMART - DỮ LIỆU VÀ CHỨC NĂNG DÙNG CHUNG */

/* ===== du-lieu-san-pham.js ===== */
/* =========================================================
   DỮ LIỆU SẢN PHẨM MẪU
   Đây là "cơ sở dữ liệu" giả lập bằng JavaScript, dùng chung
   cho trang chủ, danh mục sản phẩm, chi tiết sản phẩm...
   Khi có back-end thật, chỉ cần thay thế mảng này bằng dữ
   liệu lấy từ API.
   ========================================================= */

const DANH_SACH_SAN_PHAM = [
  {
    id: "ca-chua-huu-co-da-lat",
    ten: "Cà chua hữu cơ Đà Lạt",
    maSp: "GM-TOM-001",
    danhMuc: "rau-cu",
    danhMucTen: "Rau củ hữu cơ",
    gia: 38000,
    giaCu: 45000,
    donVi: "500g",
    hinhAnh: "assets/images/san-pham/ca-chua-huu-co.jpg",
    hinhAnhPhu: [
      "assets/images/san-pham/ca-chua-huu-co-2.jpg",
      "assets/images/san-pham/ca-chua-huu-co-3.jpg"
    ],
    danhGia: 4.8,
    soLuongDanhGia: 42,
    nhan: "giam-gia",
    phanTram: 15,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: true,
    moTaNgan:
      "Cà chua hữu cơ được trồng tại các trang trại chuẩn GlobalGAP tại Đà Lạt. Quả mọng nước, vị ngọt thanh tự nhiên, giàu Vitamin A và Lycopene tốt cho sức khỏe tim mạch và làn da.",
    moTaDay:
      "Cà chua hữu cơ Đà Lạt của GreenMart được canh tác theo phương pháp truyền thống kết hợp công nghệ hiện đại, không sử dụng thuốc trừ sâu hóa học hay phân bón vô cơ. Từng trái cà chua được thu hoạch thủ công khi đạt độ chín vừa phải để đảm bảo giữ nguyên hàm lượng dinh dưỡng và hương vị tự nhiên nhất. Đặc biệt, cà chua của chúng tôi có lớp vỏ mỏng, thịt dày và mọng nước. Bạn có thể sử dụng ăn trực tiếp, làm salad, ép nước hoặc chế biến các món xào, nấu canh đều mang lại hương vị thơm ngon tuyệt vời.",
    trongLuong: ["500g", "1kg", "2kg"]
  },
  {
    id: "rau-cai-xanh-vietgap",
    ten: "Rau cải xanh VietGAP",
    maSp: "GM-CAI-002",
    danhMuc: "rau-cu",
    danhMucTen: "Rau xanh sạch",
    gia: 22000,
    giaCu: null,
    donVi: "bó",
    hinhAnh: "assets/images/san-pham/rau-cai-xanh.jpg",
    danhGia: 4.7,
    soLuongDanhGia: 30,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Rau cải xanh trồng theo tiêu chuẩn VietGAP, lá non mềm, ngọt tự nhiên, an toàn cho bữa ăn hằng ngày.",
    moTaDay: "Rau cải xanh VietGAP được trồng tại các trang trại đạt chứng nhận, kiểm soát chặt chẽ dư lượng thuốc bảo vệ thực vật. Rau có lá xanh mướt, thân giòn, thích hợp để luộc, xào hoặc nấu canh.",
    trongLuong: ["1 bó", "2 bó"]
  },
  {
    id: "bo-sap-tay-nguyen",
    ten: "Bơ sáp Tây Nguyên",
    maSp: "GM-BOR-003",
    danhMuc: "trai-cay",
    danhMucTen: "Trái cây đặc sản",
    gia: 65000,
    giaCu: null,
    donVi: "kg",
    hinhAnh: "assets/images/san-pham/bo-sap-tay-nguyen.jpg",
    danhGia: 4.9,
    soLuongDanhGia: 58,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Bơ sáp nguyên chất từ Tây Nguyên, thịt vàng óng, béo ngậy, giàu chất béo tốt cho tim mạch.",
    moTaDay: "Bơ sáp Tây Nguyên được tuyển chọn từ những vườn bơ lâu năm, quả to đều, thịt dày, vàng óng và béo ngậy đặc trưng. Thích hợp ăn trực tiếp, làm sinh tố hoặc trộn salad.",
    trongLuong: ["1kg", "2kg"]
  },
  {
    id: "cam-sanh-huu-co",
    ten: "Cam sành hữu cơ",
    maSp: "GM-CAM-004",
    danhMuc: "trai-cay",
    danhMucTen: "Trái cây hữu cơ",
    gia: 38000,
    giaCu: null,
    donVi: "kg",
    hinhAnh: "assets/images/san-pham/cam-sanh-huu-co.jpg",
    danhGia: 4.6,
    soLuongDanhGia: 24,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: true,
    moTaNgan: "Cam sành hữu cơ mọng nước, vị chua ngọt hài hòa, giàu Vitamin C tăng cường đề kháng.",
    moTaDay: "Cam sành hữu cơ được trồng không hóa chất, thu hoạch đúng độ chín để giữ trọn vị ngọt thanh và hàm lượng Vitamin C cao nhất, hỗ trợ tăng cường sức đề kháng cho cả gia đình.",
    trongLuong: ["1kg", "2kg", "3kg"]
  },
  {
    id: "thit-heo-sach",
    ten: "Thịt heo sạch VietGAP",
    maSp: "GM-HEO-005",
    danhMuc: "thit-ca",
    danhMucTen: "Thực phẩm tươi",
    gia: 155000,
    giaCu: null,
    donVi: "kg",
    hinhAnh: "assets/images/san-pham/thit-heo-sach.jpg",
    danhGia: 4.8,
    soLuongDanhGia: 120,
    nhan: "moi",
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Thịt heo sạch, nuôi theo chuẩn VietGAP, không tồn dư kháng sinh, thịt tươi hồng chắc.",
    moTaDay: "Thịt heo sạch của GreenMart được cung cấp từ các trang trại chăn nuôi khép kín, đạt chuẩn VietGAP, heo được kiểm dịch nghiêm ngặt trước khi đưa ra thị trường, đảm bảo an toàn tuyệt đối cho bữa ăn gia đình.",
    trongLuong: ["500g", "1kg"]
  },
  {
    id: "ca-hoi-na-uy",
    ten: "Cá hồi Na Uy phi lê",
    maSp: "GM-CAH-006",
    danhMuc: "thit-ca",
    danhMucTen: "Hải sản nhập khẩu",
    gia: 450000,
    giaCu: 530000,
    donVi: "kg",
    hinhAnh: "assets/images/san-pham/ca-hoi-na-uy.jpg",
    danhGia: 5.0,
    soLuongDanhGia: 86,
    nhan: "giam-gia",
    phanTram: 15,
    nguonGoc: "nhap-khau",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Cá hồi Na Uy nhập khẩu chính ngạch, thịt săn chắc, màu cam tự nhiên, giàu Omega-3.",
    moTaDay: "Cá hồi Na Uy được nhập khẩu chính ngạch, bảo quản lạnh sâu ngay từ khâu đánh bắt để giữ trọn độ tươi ngon và hàm lượng Omega-3 dồi dào, tốt cho tim mạch và trí não.",
    trongLuong: ["500g", "1kg"]
  },
  {
    id: "trung-ga-tha-vuon",
    ten: "Trứng gà thả vườn",
    maSp: "GM-TRG-007",
    danhMuc: "trung-sua",
    danhMucTen: "Trứng & bơ sữa",
    gia: 45000,
    giaCu: null,
    donVi: "vỉ 10 quả",
    hinhAnh: "assets/images/san-pham/trung-ga-tha-vuon.jpg",
    danhGia: 4.9,
    soLuongDanhGia: 215,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Trứng gà thả vườn, lòng đỏ to, đậm vị, thu hoạch mỗi ngày từ trang trại tự nhiên.",
    moTaDay: "Trứng gà thả vườn được thu hoạch mỗi ngày từ những trang trại nuôi gà thả tự nhiên, không sử dụng cám tăng trọng. Lòng đỏ to, đậm vị, thơm ngon và giàu dinh dưỡng.",
    trongLuong: ["Vỉ 6 quả", "Vỉ 10 quả"]
  },
  {
    id: "sua-tuoi-thanh-trung",
    ten: "Sữa tươi thanh trùng",
    maSp: "GM-SUA-008",
    danhMuc: "trung-sua",
    danhMucTen: "Sữa & đồ uống",
    gia: 32000,
    giaCu: null,
    donVi: "chai 500ml",
    hinhAnh: "assets/images/san-pham/sua-tuoi-thanh-trung.jpg",
    danhGia: 4.7,
    soLuongDanhGia: 54,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: true,
    moTaNgan: "Sữa tươi thanh trùng nguyên chất, không đường, giữ trọn hương vị béo ngậy tự nhiên.",
    moTaDay: "Sữa tươi thanh trùng được sản xuất theo quy trình khép kín, xử lý ở nhiệt độ thấp để giữ nguyên dưỡng chất và hương vị béo ngậy tự nhiên của sữa bò tươi nguyên chất.",
    trongLuong: ["Chai 500ml", "Chai 1L"]
  },
  {
    id: "rau-muong-huu-co",
    ten: "Rau muống hữu cơ",
    maSp: "GM-MUO-009",
    danhMuc: "rau-cu",
    danhMucTen: "Rau củ hữu cơ",
    gia: 18000,
    giaCu: null,
    donVi: "bó",
    hinhAnh: "assets/images/san-pham/rau-muong-huu-co.jpg",
    danhGia: 4.8,
    soLuongDanhGia: 92,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: false,
    moTaNgan: "Rau muống hữu cơ giòn ngọt, canh tác không hóa chất, an toàn cho cả gia đình.",
    moTaDay: "Rau muống hữu cơ được trồng tại các vườn đạt chứng nhận hữu cơ, không phun thuốc trừ sâu, thân giòn, lá xanh mướt, thích hợp xào tỏi hoặc luộc chấm mắm.",
    trongLuong: ["1 bó", "2 bó"]
  },
  {
    id: "nho-mau-don",
    ten: "Nho mẫu đơn Nhật",
    maSp: "GM-NHO-010",
    danhMuc: "trai-cay",
    danhMucTen: "Trái cây nhập khẩu",
    gia: 890000,
    giaCu: null,
    donVi: "hộp 1kg",
    hinhAnh: "assets/images/san-pham/nho-mau-don.jpg",
    danhGia: 5.0,
    soLuongDanhGia: 42,
    nhan: "hot",
    nguonGoc: "nhap-khau",
    huuCo: false,
    conHang: true,
    noiBat: false,
    moTaNgan: "Nho mẫu đơn Nhật Bản, quả to giòn, vị ngọt thanh, hàng nhập khẩu cao cấp.",
    moTaDay: "Nho mẫu đơn (Shine Muscat) nhập khẩu trực tiếp từ Nhật Bản, quả to tròn, giòn ngọt, không hạt, vỏ mỏng có thể ăn nguyên trái, là lựa chọn cao cấp cho dịp biếu tặng hoặc chiêu đãi gia đình.",
    trongLuong: ["Hộp 500g", "Hộp 1kg"]
  },
  {
    id: "cai-kale-huu-co",
    ten: "Cải Kale hữu cơ",
    maSp: "GM-KAL-011",
    danhMuc: "rau-cu",
    danhMucTen: "Rau xanh",
    gia: 25000,
    giaCu: null,
    donVi: "300g",
    hinhAnh: "assets/images/san-pham/cai-kale-huu-co.jpg",
    danhGia: 4.7,
    soLuongDanhGia: 36,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: false,
    moTaNgan: "Cải Kale hữu cơ - siêu thực phẩm giàu chất xơ, vitamin K và chất chống oxy hóa.",
    moTaDay: "Cải Kale hữu cơ được xem là siêu thực phẩm nhờ hàm lượng vitamin K, canxi và chất chống oxy hóa vượt trội, thích hợp cho các món salad, sinh tố xanh hoặc xào nhẹ.",
    trongLuong: ["300g", "500g"]
  },
  {
    id: "ca-rot-baby-da-lat",
    ten: "Cà rốt baby Đà Lạt",
    maSp: "GM-ROT-012",
    danhMuc: "rau-cu",
    danhMucTen: "Củ quả",
    gia: 32000,
    giaCu: null,
    donVi: "500g",
    hinhAnh: "assets/images/san-pham/ca-rot-baby.jpg",
    danhGia: 4.8,
    soLuongDanhGia: 47,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: false,
    moTaNgan: "Cà rốt baby Đà Lạt nhỏ xinh, giòn ngọt tự nhiên, giàu Beta-Carotene.",
    moTaDay: "Cà rốt baby được thu hoạch non tại Đà Lạt, kích thước nhỏ vừa ăn, vị ngọt giòn tự nhiên, thích hợp ăn sống, làm salad hoặc hấp luộc giữ trọn dưỡng chất.",
    trongLuong: ["500g", "1kg"]
  },
  {
    id: "ot-chuong-hon-hop",
    ten: "Ớt chuông hỗn hợp",
    maSp: "GM-OTC-013",
    danhMuc: "rau-cu",
    danhMucTen: "Củ quả",
    gia: 55000,
    giaCu: null,
    donVi: "500g",
    hinhAnh: "assets/images/san-pham/ot-chuong-hon-hop.jpg",
    danhGia: 4.6,
    soLuongDanhGia: 28,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: false,
    moTaNgan: "Bộ ba ớt chuông đỏ, vàng, xanh tươi giòn, giàu Vitamin C, trang trí món ăn thêm bắt mắt.",
    moTaDay: "Bộ ớt chuông ba màu đỏ - vàng - xanh được tuyển chọn tươi giòn, thịt dày ít hạt, không chỉ giàu Vitamin C mà còn giúp món ăn thêm bắt mắt, thích hợp xào, nướng hoặc ăn sống.",
    trongLuong: ["500g", "1kg"]
  },
  {
    id: "ca-chua-bi-huu-co",
    ten: "Cà chua bi hữu cơ",
    maSp: "GM-TOB-014",
    danhMuc: "rau-cu",
    danhMucTen: "Củ quả",
    gia: 45000,
    giaCu: null,
    donVi: "500g",
    hinhAnh: "assets/images/san-pham/ca-chua-bi.jpg",
    danhGia: 4.7,
    soLuongDanhGia: 33,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: false,
    moTaNgan: "Cà chua bi hữu cơ ngọt mọng, tiện lợi cho salad hoặc ăn vặt lành mạnh.",
    moTaDay: "Cà chua bi hữu cơ trái nhỏ xinh, vị ngọt đậm đà hơn cà chua thường, không hạt sạn, rất thích hợp làm salad, ăn vặt hoặc trang trí món ăn.",
    trongLuong: ["500g", "1kg"]
  },
  {
    id: "chuoi-laba-huu-co",
    ten: "Chuối Laba hướng hữu cơ",
    maSp: "GM-CHU-015",
    danhMuc: "trai-cay",
    danhMucTen: "Trái cây tươi",
    gia: 65000,
    giaCu: null,
    donVi: "1 nải (~1.2kg)",
    hinhAnh: "assets/images/san-pham/chuoi-laba.jpg",
    danhGia: 4.8,
    soLuongDanhGia: 40,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: true,
    noiBat: false,
    moTaNgan: "Chuối Laba Đà Lạt thơm ngọt đậm đà, quả to đều, canh tác hướng hữu cơ.",
    moTaDay: "Chuối Laba là đặc sản Đà Lạt với hương thơm đậm đà, vị ngọt dịu hiếm có, quả to tròn đều, được canh tác theo hướng hữu cơ hạn chế tối đa hóa chất.",
    trongLuong: ["1 nải nhỏ", "1 nải to"]
  },
  {
    id: "mat-ong-hoa-nhan",
    ten: "Mật ong hoa nhãn",
    maSp: "GM-MAT-016",
    danhMuc: "huu-co",
    danhMucTen: "Thực phẩm hữu cơ",
    gia: 120000,
    giaCu: null,
    donVi: "chai 250ml",
    hinhAnh: "assets/images/san-pham/mat-ong-hoa-nhan.jpg",
    danhGia: 4.9,
    soLuongDanhGia: 65,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: false,
    moTaNgan: "Mật ong hoa nhãn nguyên chất, thu hoạch thủ công, vị ngọt thanh đặc trưng.",
    moTaDay: "Mật ong hoa nhãn được thu hoạch thủ công từ các vườn nhãn miền Tây, nguyên chất 100%, không pha trộn đường, giữ trọn hương thơm và dưỡng chất tự nhiên.",
    trongLuong: ["Chai 250ml", "Chai 500ml"]
  },
  {
    id: "rau-cai-ngot",
    ten: "Rau cải ngọt sạch",
    maSp: "GM-CNG-017",
    danhMuc: "rau-cu",
    danhMucTen: "Rau xanh sạch",
    gia: 16000,
    giaCu: null,
    donVi: "bó",
    hinhAnh: "assets/images/san-pham/rau-cai-ngot.jpg",
    danhGia: 4.5,
    soLuongDanhGia: 21,
    nhan: null,
    nguonGoc: "trong-nuoc",
    huuCo: false,
    conHang: false,
    noiBat: false,
    moTaNgan: "Rau cải ngọt tươi non, vị thanh mát, thích hợp nấu canh hoặc luộc.",
    moTaDay: "Rau cải ngọt được trồng tại vùng chuyên canh rau sạch, lá non mềm, vị thanh mát, phù hợp cho các món canh, luộc hoặc xào tỏi cho bữa cơm gia đình.",
    trongLuong: ["1 bó"]
  },
  {
    id: "ngu-coc-hat-dinh-duong",
    ten: "Ngũ cốc hạt dinh dưỡng",
    maSp: "GM-NGC-018",
    danhMuc: "ngu-coc",
    danhMucTen: "Ngũ cốc & hạt",
    gia: 89000,
    giaCu: 99000,
    donVi: "túi 500g",
    hinhAnh: "assets/images/san-pham/ngu-coc-hat.jpg",
    danhGia: 4.8,
    soLuongDanhGia: 73,
    nhan: "giam-gia",
    phanTram: 10,
    nguonGoc: "trong-nuoc",
    huuCo: true,
    conHang: true,
    noiBat: false,
    moTaNgan: "Hỗn hợp ngũ cốc và hạt dinh dưỡng, giàu chất xơ, tốt cho bữa sáng lành mạnh.",
    moTaDay: "Hỗn hợp ngũ cốc gồm yến mạch, hạt chia, hạnh nhân và hạt điều rang, cung cấp năng lượng bền vững, giàu chất xơ và chất béo tốt, lý tưởng cho bữa sáng dinh dưỡng.",
    trongLuong: ["Túi 500g", "Túi 1kg"]
  }
];

/* Tạo HTML cho 1 thẻ sản phẩm - dùng chung nhiều trang */
function taoTheSanPham(sp) {
  const nhanHtml = layNhanSanPham(sp);
  const giaCuHtml = sp.giaCu
    ? `<span class="gia-cu">${dinhDangTien(sp.giaCu)}</span>`
    : "";

  return `
    <article class="the-san-pham" data-id="${sp.id}">
      <a href="chi-tiet-san-pham.html?id=${sp.id}" class="khung-anh" aria-label="${sp.ten}">
        ${nhanHtml}
        <img src="${sp.hinhAnh}" alt="${sp.ten}" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
      </a>
      <button class="nut-yeu-thich${typeof coTrongYeuThich === "function" && coTrongYeuThich(sp.id) ? " da-thich" : ""}" data-id="${sp.id}" aria-label="Yêu thích sản phẩm ${sp.ten}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 21s-7-4.6-9.5-9C.8 8.5 2 4.9 5.5 4c2-.5 3.9.3 5 2 1.1-1.7 3-2.5 5-2 3.5.9 4.7 4.5 3 8-2.5 4.4-9.5 9-9.5 9z"/>
        </svg>
      </button>
      <div class="the-san-pham-noi-dung">
        <span class="the-san-pham-danh-muc">${sp.danhMucTen}</span>
        <a href="chi-tiet-san-pham.html?id=${sp.id}"><h3 class="the-san-pham-ten">${sp.ten}</h3></a>
        <div class="the-san-pham-danh-gia">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${sp.danhGia} (${sp.soLuongDanhGia})
        </div>
        <div class="the-san-pham-gia">
          <span class="gia-hien-tai">${dinhDangTien(sp.gia)} ${giaCuHtml}</span>
          <button class="nut-icon nut-them-gio" data-id="${sp.id}" aria-label="Thêm ${sp.ten} vào giỏ">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function layNhanSanPham(sp) {
  if (sp.nhan === "giam-gia") {
    return `<span class="nhan-the nhan-giam-gia">-${sp.phanTram}%</span>`;
  }
  if (sp.nhan === "moi") {
    return `<span class="nhan-the nhan-moi">Mới</span>`;
  }
  if (sp.nhan === "hot") {
    return `<span class="nhan-the nhan-hot">Hot</span>`;
  }
  return "";
}


/* ---- Hàm trợ giúp định dạng tiền tệ Việt Nam ---- */
function dinhDangTien(so) {
  return so.toLocaleString("vi-VN") + "đ";
}

/* ---- Lấy sản phẩm theo id ---- */
function timSanPhamTheoId(id) {
  return DANH_SACH_SAN_PHAM.find((sp) => sp.id === id);
}
/* ===== du-lieu-tin-tuc.js ===== */
/* =========================================================
   DỮ LIỆU TIN TỨC MẪU
   ========================================================= */

const DANH_SACH_TIN_TUC = [
  {
    id: "hanh-trinh-xanh",
    tieuDe: "Hành trình xanh: Từ nông trại đến bàn ăn của bạn",
    danhMuc: "song-xanh",
    danhMucTen: "Sống xanh",
    ngay: "18 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/banner-tin-tuc.jpg",
    noiBat: true,
    tomTat:
      "Khám phá cách GreenMart tuyển chọn những nguồn nguyên liệu sạch nhất để đảm bảo sức khỏe tối ưu cho gia đình Việt."
  },
  {
    id: "loi-ich-bo-sap",
    tieuDe: "10 Lợi ích không ngờ của bơ sáp trong thực đơn hằng ngày",
    danhMuc: "dinh-duong",
    danhMucTen: "Dinh dưỡng",
    ngay: "15 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/loi-ich-bo-sap.jpg",
    tomTat:
      "Bơ không chỉ ngon mà còn chứa một lượng lớn chất béo bão hòa đơn tốt cho tim mạch và làn da của bạn..."
  },
  {
    id: "bao-quan-rau-cu",
    tieuDe: "Cách bảo quản rau củ tươi lâu trong tủ lạnh suốt cả tuần",
    danhMuc: "meo-hay",
    danhMucTen: "Mẹo hay",
    ngay: "12 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/bao-quan-rau-cu.jpg",
    tomTat:
      "Mẹo nhỏ giúp rau xanh không bị héo và giữ nguyên hàm lượng vitamin khi lưu trữ trong thời gian dài..."
  },
  {
    id: "salad-uc-ga",
    tieuDe: "Công thức salad ức gà sốt mè rang cho bữa trưa nhanh gọn",
    danhMuc: "nau-an",
    danhMucTen: "Nấu ăn",
    ngay: "10 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/salad-uc-ga.jpg",
    tomTat:
      "Chỉ với 15 phút chuẩn bị, bạn đã có ngay một bữa ăn giàu đạm và đầy đủ chất xơ cho ngày làm việc năng động..."
  },
  {
    id: "nuoc-ep-xanh",
    tieuDe: "Nước ép Green Detox: Thanh lọc cơ thể một cách tự nhiên",
    danhMuc: "dinh-duong",
    danhMucTen: "Dinh dưỡng",
    ngay: "08 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/nuoc-ep-xanh.jpg",
    tomTat:
      "Tìm hiểu lý do tại sao nước ép rau quả xanh lại trở thành xu hướng chăm sóc sức khỏe hàng đầu hiện nay..."
  },
  {
    id: "che-do-an-xanh",
    tieuDe: "Chế độ ăn xanh: Lợi ích bất ngờ cho tim mạch",
    danhMuc: "song-khoe",
    danhMucTen: "Sống khỏe",
    ngay: "15 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/che-do-an-xanh.jpg",
    tomTat:
      "Nhiều nghiên cứu mới đây chỉ ra rằng việc bổ sung rau củ sạch vào bữa ăn hằng ngày giúp giảm nguy cơ mắc các bệnh về tim mạch lên đến 40%..."
  },
  {
    id: "phan-biet-huu-co",
    tieuDe: "Cách phân biệt thực phẩm hữu cơ và thực phẩm VietGAP",
    danhMuc: "kien-thuc",
    danhMucTen: "Kiến thức",
    ngay: "12 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/phan-biet-huu-co.jpg",
    tomTat:
      "Không phải ai cũng biết sự khác biệt giữa hai chứng chỉ này. Hãy cùng GreenMart tìm hiểu để có sự lựa chọn đúng đắn nhất cho sức khỏe gia đình..."
  },
  {
    id: "rau-kale",
    tieuDe: "Rau Kale - Siêu thực phẩm từ thiên nhiên",
    danhMuc: "dinh-duong",
    danhMucTen: "Dinh dưỡng",
    ngay: "16 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/rau-kale.jpg",
    tomTat:
      "Cải Kale được mệnh danh là siêu thực phẩm nhờ hàm lượng vitamin và khoáng chất vượt trội so với các loại rau khác."
  },
  {
    id: "nam-organic",
    tieuDe: "Công dụng bất ngờ từ các loại nấm organic",
    danhMuc: "dinh-duong",
    danhMucTen: "Dinh dưỡng",
    ngay: "14 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/nam-organic.jpg",
    tomTat:
      "Nấm organic không chỉ thơm ngon mà còn mang lại nhiều lợi ích cho hệ miễn dịch và tiêu hóa."
  },
  {
    id: "trai-cay-theo-mua",
    tieuDe: "Tại sao nên chọn trái cây theo mùa?",
    danhMuc: "meo-hay",
    danhMucTen: "Mẹo hay",
    ngay: "11 Tháng 5, 2024",
    hinhAnh: "assets/images/tin-tuc/trai-cay-theo-mua.jpg",
    tomTat:
      "Trái cây theo mùa không chỉ rẻ hơn mà còn tươi ngon và giàu dinh dưỡng hơn hẳn trái cây trái vụ."
  }
];

const DANH_MUC_TIN_TUC = [
  { id: "dinh-duong", ten: "Dinh dưỡng", soLuong: 12 },
  { id: "meo-hay", ten: "Mẹo hay", soLuong: 8 },
  { id: "nau-an", ten: "Nấu ăn", soLuong: 15 },
  { id: "song-xanh", ten: "Sống xanh", soLuong: 5 }
];

function timTinTucTheoId(id) {
  return DANH_SACH_TIN_TUC.find((bv) => bv.id === id);
}
/* ===== gio-hang-core.js ===== */
/* =========================================================
   LÕI XỬ LÝ GIỎ HÀNG (dùng chung mọi trang)
   Lưu giỏ hàng trong localStorage để dữ liệu không mất khi
   chuyển trang hoặc tải lại trình duyệt.
   ========================================================= */


/* Tính giá theo trọng lượng/quy cách đã chọn. Giá gốc ứng với lựa chọn đầu tiên. */
function layHeSoTrongLuong(sp, trongLuong) {
  if (!sp || !trongLuong || !Array.isArray(sp.trongLuong) || !sp.trongLuong.length) return 1;
  const luaChonDau = sp.trongLuong[0];

  function doiVeSoLuong(text) {
    const t = String(text).toLowerCase().replace(/,/g, '.');
    let m = t.match(/([0-9]+(?:\.[0-9]+)?)\s*kg/);
    if (m) return Number(m[1]) * 1000;
    m = t.match(/([0-9]+(?:\.[0-9]+)?)\s*g/);
    if (m) return Number(m[1]);
    m = t.match(/([0-9]+(?:\.[0-9]+)?)\s*l\b/);
    if (m) return Number(m[1]) * 1000;
    m = t.match(/([0-9]+(?:\.[0-9]+)?)\s*ml/);
    if (m) return Number(m[1]);
    m = t.match(/([0-9]+)\s*(?:quả|trứng|bó|chai|hộp|túi)/);
    if (m) return Number(m[1]);
    if (t.includes('nải nhỏ')) return 1;
    if (t.includes('nải to')) return 1.5;
    const so = t.match(/([0-9]+(?:\.[0-9]+)?)/);
    return so ? Number(so[1]) : 1;
  }

  const coSo = doiVeSoLuong(luaChonDau);
  const daChon = doiVeSoLuong(trongLuong);
  return coSo > 0 ? daChon / coSo : 1;
}

function layGiaTheoTrongLuong(sp, trongLuong) {
  return Math.round(sp.gia * layHeSoTrongLuong(sp, trongLuong));
}

function layGiaCuTheoTrongLuong(sp, trongLuong) {
  return sp.giaCu ? Math.round(sp.giaCu * layHeSoTrongLuong(sp, trongLuong)) : null;
}

const KHOA_LUU_GIO_HANG = "greenmart_gio_hang";
const PHI_GIAO_HANG_MAC_DINH = 30000;
const MUC_MIEN_PHI_SHIP = 300000;

/* Đọc giỏ hàng từ localStorage. Cấu trúc: [{ id, soLuong, trongLuong }] */
function docGioHang() {
  try {
    const du_lieu = localStorage.getItem(KHOA_LUU_GIO_HANG);
    return du_lieu ? JSON.parse(du_lieu) : [];
  } catch (loi) {
    console.error("Không đọc được giỏ hàng:", loi);
    return [];
  }
}

/* Ghi giỏ hàng vào localStorage */
function ghiGioHang(gioHang) {
  localStorage.setItem(KHOA_LUU_GIO_HANG, JSON.stringify(gioHang));
  capNhatSoLuongTrenHeader();
}

/* Thêm 1 sản phẩm vào giỏ (hoặc cộng dồn số lượng nếu đã có) */
function themVaoGioHang(id, soLuong = 1, trongLuong = null) {
  const gioHang = docGioHang();
  const dongCoSan = gioHang.find(
    (dong) => dong.id === id && dong.trongLuong === trongLuong
  );

  if (dongCoSan) {
    dongCoSan.soLuong += soLuong;
  } else {
    gioHang.push({ id, soLuong, trongLuong });
  }

  ghiGioHang(gioHang);
  return gioHang;
}

/* Cập nhật số lượng 1 dòng trong giỏ */
function capNhatSoLuongGio(id, trongLuong, soLuongMoi) {
  let gioHang = docGioHang();
  if (soLuongMoi <= 0) {
    gioHang = gioHang.filter(
      (dong) => !(dong.id === id && dong.trongLuong === trongLuong)
    );
  } else {
    const dong = gioHang.find(
      (d) => d.id === id && d.trongLuong === trongLuong
    );
    if (dong) dong.soLuong = soLuongMoi;
  }
  ghiGioHang(gioHang);
  return gioHang;
}

/* Xóa 1 sản phẩm khỏi giỏ */
function xoaKhoiGioHang(id, trongLuong) {
  let gioHang = docGioHang();
  gioHang = gioHang.filter(
    (dong) => !(dong.id === id && dong.trongLuong === trongLuong)
  );
  ghiGioHang(gioHang);
  return gioHang;
}

/* Tổng số lượng sản phẩm trong giỏ (hiển thị badge) */
function tongSoLuongGioHang() {
  return docGioHang().reduce((tong, dong) => tong + dong.soLuong, 0);
}

/* Tính tạm tính (tổng tiền hàng, chưa gồm phí ship / giảm giá) */
function tinhTamTinhGioHang() {
  const gioHang = docGioHang();
  return gioHang.reduce((tong, dong) => {
    const sp = timSanPhamTheoId(dong.id);
    if (!sp) return tong;
    return tong + layGiaTheoTrongLuong(sp, dong.trongLuong) * dong.soLuong;
  }, 0);
}

/* Cập nhật số badge trên icon giỏ hàng ở header, chạy ở mọi trang */
function capNhatSoLuongTrenHeader() {
  const tong = tongSoLuongGioHang();
  document.querySelectorAll("[data-so-luong-gio-hang]").forEach((the) => {
    the.textContent = tong;
    the.style.display = tong > 0 ? "flex" : "none";
  });
}

/* Hiện thông báo dạng toast góc màn hình */
function hienThiToast(noiDung) {
  let vungToast = document.querySelector(".vung-toast");
  if (!vungToast) {
    vungToast = document.createElement("div");
    vungToast.className = "vung-toast";
    document.body.appendChild(vungToast);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>${noiDung}</span>
  `;
  vungToast.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("hien"));

  setTimeout(() => {
    toast.classList.remove("hien");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

document.addEventListener("DOMContentLoaded", capNhatSoLuongTrenHeader);
/* ===== yeu-thich-core.js ===== */
/* =========================================================
   LÕI XỬ LÝ SẢN PHẨM YÊU THÍCH (dùng chung mọi trang)
   Lưu danh sách yêu thích trong localStorage để dữ liệu
   không mất khi chuyển trang hoặc tải lại trình duyệt.
   ========================================================= */

const KHOA_LUU_YEU_THICH = "greenmart_yeu_thich";

/* Đọc danh sách id sản phẩm yêu thích từ localStorage */
function docYeuThich() {
  try {
    const du_lieu = localStorage.getItem(KHOA_LUU_YEU_THICH);
    return du_lieu ? JSON.parse(du_lieu) : [];
  } catch (loi) {
    console.error("Không đọc được danh sách yêu thích:", loi);
    return [];
  }
}

/* Ghi danh sách yêu thích vào localStorage + cập nhật badge header */
function ghiYeuThich(danhSach) {
  localStorage.setItem(KHOA_LUU_YEU_THICH, JSON.stringify(danhSach));
  capNhatSoLuongYeuThichTrenHeader();
}

/* Kiểm tra 1 sản phẩm đã có trong yêu thích chưa */
function coTrongYeuThich(id) {
  return docYeuThich().includes(id);
}

/* Thêm/bỏ 1 sản phẩm khỏi yêu thích. Trả về true nếu vừa được thêm vào */
function toggleYeuThich(id) {
  let danhSach = docYeuThich();
  let daThich;
  if (danhSach.includes(id)) {
    danhSach = danhSach.filter((sp) => sp !== id);
    daThich = false;
  } else {
    danhSach.push(id);
    daThich = true;
  }
  ghiYeuThich(danhSach);
  return daThich;
}

/* Xóa 1 sản phẩm khỏi yêu thích */
function xoaKhoiYeuThich(id) {
  const danhSach = docYeuThich().filter((sp) => sp !== id);
  ghiYeuThich(danhSach);
  return danhSach;
}

/* Xóa toàn bộ danh sách yêu thích */
function xoaTatCaYeuThich() {
  ghiYeuThich([]);
}

/* Tổng số sản phẩm yêu thích (hiển thị badge) */
function tongSoLuongYeuThich() {
  return docYeuThich().length;
}

/* Cập nhật số badge trên icon trái tim ở header, chạy ở mọi trang */
function capNhatSoLuongYeuThichTrenHeader() {
  const tong = tongSoLuongYeuThich();
  document.querySelectorAll("[data-so-luong-yeu-thich]").forEach((the) => {
    the.textContent = tong;
    the.style.display = tong > 0 ? "flex" : "none";
  });
}

/* Đồng bộ trạng thái tim đỏ (.da-thich) cho mọi nút yêu thích đang hiển thị
   trên trang, dựa theo data-id và danh sách đã lưu. Gọi sau khi render thẻ SP. */
function dongBoTrangThaiNutYeuThich() {
  const danhSach = docYeuThich();
  document.querySelectorAll(".nut-yeu-thich[data-id]").forEach((nut) => {
    nut.classList.toggle("da-thich", danhSach.includes(nut.dataset.id));
  });
}

document.addEventListener("DOMContentLoaded", capNhatSoLuongYeuThichTrenHeader);
/* ===== chung.js ===== */
/* =========================================================
   JS DÙNG CHUNG MỌI TRANG
   Menu di động, form đăng ký bản tin, nút yêu thích...
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Menu di động (hamburger) ---- */
  const nutMenu = document.querySelector(".nut-menu-di-dong");
  const menuChinh = document.querySelector(".menu-chinh");

  if (nutMenu && menuChinh) {
    nutMenu.addEventListener("click", () => {
      menuChinh.classList.toggle("mo");
      const dangMo = menuChinh.classList.contains("mo");
      nutMenu.setAttribute("aria-expanded", dangMo ? "true" : "false");
    });

    // Đóng menu khi bấm 1 liên kết (trên di động)
    menuChinh.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => menuChinh.classList.remove("mo"));
    });
  }

  /* ---- Form đăng ký bản tin ở footer (mọi trang) ---- */
  document.querySelectorAll(".form-ban-tin").forEach((form) => {
    form.addEventListener("submit", (su_kien) => {
      su_kien.preventDefault();
      const o_nhap = form.querySelector("input[type='email']");
      if (o_nhap && o_nhap.value.trim()) {
        hienThiToast("Đăng ký nhận tin thành công!");
        o_nhap.value = "";
      }
    });
  });

  /* ---- Nút yêu thích (tim) trên thẻ sản phẩm ----
     Lưu vào localStorage qua js/yeu-thich-core.js, đồng bộ badge
     trên header và hiện thông báo cho người dùng. */
  document.body.addEventListener("click", (su_kien) => {
    const nut = su_kien.target.closest(".nut-yeu-thich");
    if (!nut) return;
    su_kien.preventDefault();

    const id = nut.dataset.id;
    if (!id || typeof toggleYeuThich !== "function") {
      // Không có id sản phẩm (ví dụ nút yêu thích cũ chưa gán id): chỉ đổi giao diện
      nut.classList.toggle("da-thich");
      return;
    }

    const daThich = toggleYeuThich(id);
    nut.classList.toggle("da-thich", daThich);

    const sp = typeof timSanPhamTheoId === "function" ? timSanPhamTheoId(id) : null;
    const ten = sp ? sp.ten : "sản phẩm";
    if (typeof hienThiToast === "function") {
      hienThiToast(
        daThich ? `Đã thêm "${ten}" vào yêu thích` : `Đã bỏ "${ten}" khỏi yêu thích`
      );
    }

    // Nếu đang ở trang "Sản phẩm yêu thích" và vừa bỏ thích -> gỡ thẻ khỏi lưới
    if (!daThich) {
      const the = nut.closest("[data-trang-yeu-thich] .the-san-pham");
      if (the) the.remove();
      const vung = document.querySelector("[data-trang-yeu-thich]");
      if (vung && typeof capNhatTrangThaiRongYeuThich === "function") {
        capNhatTrangThaiRongYeuThich();
      }
    }
  });

  /* ---- Ô tìm kiếm trên header: enter để chuyển tới trang sản phẩm ---- */
  document.querySelectorAll(".o-tim-kiem-header input").forEach((input) => {
    input.addEventListener("keydown", (su_kien) => {
      if (su_kien.key === "Enter" && input.value.trim()) {
        window.location.href =
          "san-pham.html?tim=" + encodeURIComponent(input.value.trim());
      }
    });
  });
});
/* ===== nang-cap-ui.js ===== */
/* =========================================================
   NÂNG CẤP UI DÙNG CHUNG TOÀN SITE
   - Thanh tiến trình cuộn + đổ bóng header khi cuộn
   - Hiệu ứng "reveal" khi phần tử cuộn vào khung nhìn
   - Nút "Lên đầu trang"
   - Hiệu ứng gợn sóng (ripple) khi bấm nút .nut
   - Đếm số chạy (count-up) cho thẻ [data-dem-toi]
   - Ảnh mờ dần khi tải xong
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Thanh tiến trình cuộn + đổ bóng header ---- */
  const thanhTienTrinh = document.createElement("div");
  thanhTienTrinh.className = "thanh-tien-trinh-cuon";
  document.body.appendChild(thanhTienTrinh);

  const header = document.querySelector("header.dau-trang");

  function xuLyCuon() {
    const cuon = window.scrollY || document.documentElement.scrollTop;
    const chieuCaoTrang =
      document.documentElement.scrollHeight - window.innerHeight;
    const phanTram = chieuCaoTrang > 0 ? (cuon / chieuCaoTrang) * 100 : 0;
    thanhTienTrinh.style.width = phanTram + "%";

    if (header) header.classList.toggle("da-cuon", cuon > 8);

    const nutLenDau = document.querySelector(".nut-len-dau");
    if (nutLenDau) nutLenDau.classList.toggle("hien", cuon > 480);
  }
  window.addEventListener("scroll", xuLyCuon, { passive: true });
  xuLyCuon();

  /* ---- Nút "Lên đầu trang" ---- */
  const nutLenDau = document.createElement("button");
  nutLenDau.className = "nut-len-dau";
  nutLenDau.type = "button";
  nutLenDau.setAttribute("aria-label", "Lên đầu trang");
  nutLenDau.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  nutLenDau.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(nutLenDau);

  /* ---- Hiệu ứng gợn sóng (ripple) khi bấm nút chính ---- */
  document.body.addEventListener("click", (su_kien) => {
    const nut = su_kien.target.closest(".nut");
    if (!nut) return;
    const rect = nut.getBoundingClientRect();
    const gon = document.createElement("span");
    const canh = Math.max(rect.width, rect.height);
    gon.className = "gon-song";
    gon.style.width = gon.style.height = canh + "px";
    gon.style.left = su_kien.clientX - rect.left - canh / 2 + "px";
    gon.style.top = su_kien.clientY - rect.top - canh / 2 + "px";
    nut.appendChild(gon);
    setTimeout(() => gon.remove(), 620);
  });

  /* ---- Scroll reveal: gắn .hien khi phần tử vào khung nhìn ---- */
  const phanTuReveal = document.querySelectorAll(".reveal");
  if (phanTuReveal.length) {
    if ("IntersectionObserver" in window) {
      const quanSat = new IntersectionObserver(
        (danhSach) => {
          danhSach.forEach((muc) => {
            if (muc.isIntersecting) {
              muc.target.classList.add("hien");
              quanSat.unobserve(muc.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      phanTuReveal.forEach((el) => quanSat.observe(el));
    } else {
      phanTuReveal.forEach((el) => el.classList.add("hien"));
    }
  }

  /* ---- Đếm số chạy (count-up) cho thẻ có data-dem-toi ---- */
  const theDemSo = document.querySelectorAll("[data-dem-toi]");
  if (theDemSo.length) {
    const chayDem = (the) => {
      const dich = parseFloat(the.dataset.demToi) || 0;
      const hauTo = the.dataset.hauTo || "";
      const thoiLuong = 1300;
      const batDau = performance.now();

      function buoc(hienTai) {
        const tienDo = Math.min((hienTai - batDau) / thoiLuong, 1);
        const easeOut = 1 - Math.pow(1 - tienDo, 3);
        const giaTri = Math.round(dich * easeOut);
        the.textContent = giaTri.toLocaleString("vi-VN") + hauTo;
        if (tienDo < 1) requestAnimationFrame(buoc);
      }
      requestAnimationFrame(buoc);
    };

    if ("IntersectionObserver" in window) {
      const quanSatDem = new IntersectionObserver(
        (danhSach) => {
          danhSach.forEach((muc) => {
            if (muc.isIntersecting) {
              chayDem(muc.target);
              quanSatDem.unobserve(muc.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      theDemSo.forEach((el) => quanSatDem.observe(el));
    } else {
      theDemSo.forEach(chayDem);
    }
  }

  /* ---- Ghi chú: hiệu ứng mờ dần cho ảnh nay xử lý hoàn toàn bằng CSS
     (xem css/12-nang-cap-ui.css) để không phụ thuộc thời điểm JS chạy,
     tránh trường hợp ảnh chèn động (lọc sản phẩm, giỏ hàng, yêu thích...)
     bị "kẹt" vô hình nếu bỏ sót gắn sự kiện. ---- */
});


/* Xử lý nút thêm vào giỏ dùng chung cho mọi trang */
document.addEventListener("click", (su_kien) => {
  const nut = su_kien.target.closest(".nut-them-gio");
  if (!nut) return;
  su_kien.preventDefault();
  const id = nut.dataset.id;
  const sp = timSanPhamTheoId(id);
  if (!sp) return;
  themVaoGioHang(id, 1, sp.trongLuong ? sp.trongLuong[0] : null);
  hienThiToast(`Đã thêm "${sp.ten}" vào giỏ hàng`);
});
