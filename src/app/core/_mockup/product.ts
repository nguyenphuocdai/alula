export class product {
  constructor(
    public id: number,
    public name: String,
    public price: number,
    public currency: String,
    public image: String,
    public url: String,
    public shortDesc: String,
    public imageThumnail?: image[],
    public priceDiscount?: number,
    public added?: boolean,
    public quatity?: number
  ) {}
}

export class image{
  base64: string;
  name: string;
}

export const productsCollection: product[] = [
  {
    id: 10,
    name: "Cây Lan Hồ Điệp",
    price: 500.999,
    priceDiscount: 450.99,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-lan-ho-diep.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-lan-ho-diep.jpg",
    shortDesc:
      "Lan Hồ Điệp là loài hoa đại diện cho sự tinh tế, trang nhã và quý phái. Cây dường như là lựa chọn số một để làm quà tặng với mọi người, mọi dịp. Tình cảm âm thầm giấu kín trong mỗi cánh hoa xinh đẹp làm nên sức hút mãnh liệt của loài cây này."
  },
  {
    id: 11,
    name: "Cây Sen Đá",
    price: 249.999,
    priceDiscount: 200.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-sen-da.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-sen-da.jpg",
    shortDesc:
      "Sen Đá là loại cây cảnh nhỏ nhắn nhưng mũm mĩm đáng yêu, biểu tượng của tình bạn, tình yêu bền chặt. Hầu hết các bạn nữ đều thích trồng một chậu Sen Đá ngay bàn làm việc, bệ cửa sổ, kệ sách, hay góc ban công. Đặc biệt, cây này còn thể trồng ở nhiều kiểu chậu tạo hình tùy thích. Thật hay phải không nào!"
  },
  {
    id: 12,
    name: "Cây Xương Rồng",
    price: 240.999,
    priceDiscount: 220.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-xuong-rong.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-xuong-rong.jpg",
    shortDesc:
      "Nhiều người coi Xương Rồng là biểu tượng của sức sống bất diệt, sự vươn lên dù gặp hoàn cảnh khó khăn. Và dù trải qua khô cằn sỏi đá, bão cát sa mạc đi chăng nữa, cây rồi cũng sẽ nở hoa rực rỡ. Tặng Xương Rồng làm quà ấy là lời chúc sinh nhật rất ý nghĩa đấy nhé!"
  },
  {
    id: 13,
    name: "Cây Phát Lộc Tim",
    price: 119.999,
    priceDiscount: 118.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-phat-loc-tim.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-phat-loc-tim.jpg",
    shortDesc:
      "Phát Lộc vốn có thân dẻo dễ uốn cong tạo hình. Bằng sự khéo tay của mình, nhiều nhà vườn đã sáng tạo nên những hình dáng độc đáo của cây này. Một chậu Phát Lộc hai nhánh thân hình tim trắng xanh xinh xắn là gợi ý tuyệt vời để làm cây cảnh tặng sinh nhật. Phát Lộc Tim lại dễ chăm sóc nên khá được mọi người yêu thích."
  },
  {
    id: 14,
    name: "Hoa Hồng",
    price: 599.99,
    priceDiscount: 540.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-hoa-hong.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-hoa-hong.jpg",
    shortDesc:
      `
      Nữ hoàng kiêu sa của các loài hoa - Hoa Hồng là món quà không thể thiếu của mọi dịp đặc biệt, kể cả sinh nhật. Mỗi màu của loài hoa đa sắc này sẽ ngụ ý một lời chúc khác nhau.
      Hoa Hồng đỏ: Tượng trưng cho một tình yêu nồng cháy và lãng mạn, nên dành tặng người yêu.
      Hoa Hồng trắng: Vẻ đẹp của sự thuần khiết, ngây thơ và sự cảm thông, có thể dành để bày tỏ lời xin lỗi chân thành.
      Hoa Hồng vàng: Không chỉ tượng trưng cho một tình yêu kiêu sa đầy rực rỡ, mà nó còn là loài hoa của tình bạn, thể hiện sự quan tâm và tiến triển trong mối quan hệ, chẳng hạn như: anh quan tâm đến em hoặc hãy nhớ đến anh. Bên cạnh đó, Hoa Hồng vàng cũng là loài hoa lý tưởng để dành tặng mẹ và bà, bởi lẽ nó còn có ý nghĩa của sự biết ơn và tôn kính.`
  },
  {
    id: 15,
    name: "Hoa Chi Tử (Dành Dành)",
    price: 149.999,
    priceDiscount: 100.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-hoa-chi-tu.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-hoa-chi-tu.jpg",
    shortDesc:
      "Hoa Chi Tử là tên gọi khác của Hoa Dành Dành - một loài hoa trắng tinh khôi, thuần khiết. Vào ngày sinh thần của một người trẻ, tặng chậu hoa Chi Tử là ngụ ý chúc họ sẽ thành công và có thanh xuân tuyệt đẹp. “Chi Tử Khai Hoa” là câu chúc phổ biến của giới trẻ Trung Quốc cũng vì ý nghĩa như vậy."
  },
  {
    id: 16,
    name: "Tiểu Cảnh",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-tieu-canh-kim-ngan.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-tieu-canh-kim-ngan.jpg",
    shortDesc:
      "Tiểu cảnh trong lọ thủy tinh là sự sáng tạo độc đáo mà giới yêu cây cảnh săn lùng nhiều nhất hiện nay. Hầu như loại cây xanh mini nào cũng đều có thể mix lại với nhau làm tiểu cảnh. Lưu ý là các cây trong một trong chậu tiểu cảnh thì phải có đặc điểm sinh trưởng (nhu cầu ánh sáng, lượng nước, đất trồng) gần giống nhau. Hãy thử chọn cây cảnh tặng sinh nhật bằng một chậu tiểu cảnh đi nào. Đảm bảo người nhận sẽ vỡ òa lên vì kinh ngạc và thích thú đấy."
  }
];



export const productsNew: product[] = [
  {
    id: 1,
    name: "Giỏ cây mix",
    price: 500.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-gio-cay-mix.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-gio-cay-mix.jpg",
    shortDesc:
      "Nếu người nhận quà sinh nhật thích sự đơn giản, và có tính cách hơi hào phóng một chút, bạn có thể tự tay mix một giỏ cây cảnh để tặng. Những cây như Vạn Niên Thanh, Trầu Bà, Hồng Môn, Dương Xỉ, Thường Xuân, Cau Tiểu Trâm, … hay được trồng chung với nhau khá là đẹp."
  },
  {
    id: 2,
    name: "Cây hạt mầm",
    price: 249.999,
    priceDiscount: 200.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-hat-mam.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-hat-mam.jpg",
    shortDesc:
      "Có lẽ không nhiều người biết đến loại cây này, mặc dù chúng cũng đang dần phổ biến. Chỉ cần vài hạt của bất kỳ cây gì, lúa hay hạt thanh long chẳng hạn, bạn gieo cho chúng mọc mầm, sẽ thành một chậu cây tươi xanh mơn mởn. Tuy loại cây trồng cảnh này khá độc đáo nhưng lại có thời gian sống không lâu (khoảng 3-4 tháng), nên bạn cũng cần lưu ý nếu muốn sử dụng làm quà tặng."
  },
  {
    id: 3,
    name: "Cây không khí",
    price: 240.999,
    priceDiscount: 220.999,
    currency: "VNĐ",
    image: "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-khong-khi.jpg",
    url:
      "https://vuoncayviet.com/data/items/1162/cay-canh-tang-sinh-nhat-cay-khong-khi.jpg",
    shortDesc:
      "Gợi ý cuối cùng cho bạn, cũng là món quà bất ngờ nhất: cây không khí. Đa số mọi người đều cho rằng cây cần đất thì mới sống được. Tuy nhiên, loại cây không khí lại không hề sống phụ thuộc vào đất trồng."
  },
  {
    id: 4,
    name: "Kim ngân",
    price: 119.999,
    priceDiscount: 118.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/30/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy.png",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/30/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy.png",
    shortDesc:
      "Kim ngân là loại cây được đánh giá cao về phong thủy, mang lại may mắn, giàu có cho người sở hữu. Kim ngân thích hợp với khí hậu nóng ẩm, khả năng sinh trưởng mạnh mẽ. Cây to có thể đặt ngoài trời, trước hiên nhà, cây nhỏ trồng trong chậu để đặt trên bàn. Hiện nay, loài cây có cái tên mang ý nghĩa “tiền vàng” này ngày càng được lựa chọn để trang trí nội thất ở nhiều nơi trên thế giới."
  },
  {
    id: 5,
    name: "Đại đế vương",
    price: 599.999,
    priceDiscount: 540.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-2.jpg?1508919535",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-2.jpg?1508919535",
    shortDesc:
      "Đại đế vương là loại cây thuộc họ trầu bà, ưa bóng râm và nơi ẩm. Đúng như tên gọi của mình, cây thể hiện tinh thần đế vương, quyền uy và sức mạnh của người lãnh đạo. Chính vì thế, dân công sở cực kỳ yêu thích loại cây này với mong muốn thăng tiến trong sự nghiệp. Ngoài ra, cây còn có tác dụng xua đuổi tà ma, chướng khí, đem lại cảm giác thư thái cho con người."
  },
  {
    id: 6,
    name: "Phú quý",
    price: 149.999,
    priceDiscount: 100.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-3.jpg?1508919535",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-3.jpg?1508919535",
    shortDesc:
      "Cây phú quý ngày càng được ưa chuộng và trồng làm cây cảnh bởi nó có lá màu xanh viền đỏ hồng rất đẹp mắt. Đây là một giống cây có nguồn gốc từ Indonesia, có khả năng thanh lọc không khí, giảm bớt ô nhiễm khói bụi, giúp không gian sống trong lành hơn. Theo quan niệm phong thủy, cây phú quý còn tượng trưng cho sự may mắn và tốt lành trong cuộc sống."
  },
  {
    id: 7,
    name: "Ngọc ngân",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-4.jpg?1508919535",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-4.jpg?1508919535",
    shortDesc:
      "Ngọc ngân không chỉ đẹp ở những phiến lá xanh pha đốm trắng mà còn rất mạnh khỏe bởi bộ rễ vững chắc, mang đến sự hài hòa cho loại cây này. Người ta tin rằng, trưng bày một chậu ngọc ngân trên bàn làm việc hay phòng khách sẽ đem đến nhiều bổng lộc. Hơn nữa, cây rất ưa bóng râm và thích nghi tốt với môi trường máy lạnh trong văn phòng."
  },
  {
    id: 8,
    name: "Vạn lộc",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-5.jpg?1508919551",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-5.jpg?1508919551",
    shortDesc:
      "Theo tên gọi, vạn lộc sẽ là loại cây cảnh mang lại cho gia chủ vô vàn tài lộc. Cây có màu sặc sỡ như đỏ, cam, hồng,… với viền lá màu xanh. Lá cây dày, bóng, nổi gân, mọc thẳng đứng, tán phủ tròn. Từ tên gọi, hình dáng cho đến màu sắc của cây đều vô cùng bắt mắt và tràn đầy năng lượng. Vì thế nên vạn lộc rất sang trọng và có ý nghĩa tốt trong phong thủy."
  },
  {
    id: 9,
    name: "Cây may mắn",
    price: 499.99,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-6.jpg?1508919551",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-6.jpg?1508919551",
    shortDesc:
      "Cây may mắn được trồng trong chậu sứ nhỏ với lớp cỏ xanh mượt bên dưới, mỗi cây thường có 3 hoặc 5 quả, bao quanh thành hình tròn phần dưới thân tạo nên sự hài hòa, vững chắc. Cây sống tốt trong môi trường có ánh sáng nhẹ, tượng trưng cho sự sung túc, đem đến phúc khí cho ngôi nhà, phòng làm việc,… giúp gia chủ luôn giữ được sự tinh thông, sáng suốt."
  },
  {
    id: 20,
    name: "Phát lộc",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-7.jpg?1508919551",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-7.jpg?1508919551",
    shortDesc:
      "Cây phát lộc (hay còn gọi là cây phất dụ) có sức sống mạnh mẽ, rất dễ chăm sóc. Nó tự sinh tồn trong môi trường khắc nghiệt nhưng luôn giữ được dáng thẳng, hiên ngang, là một loại cây mang đến năng lượng dồi dào. Phất lộc có nhiều đốt rỗng nên theo phong thủy thì tinh thần của gia chủ cũng theo đó mà dễ lưu thông, tâm hồn được tự do, thăng hoa."
  },
  {
    id: 21,
    name: "Đa búp đỏ",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-8.jpg?1508919551",
    url:
      "http://img.kythuatnuoitrong.edu.vn/2017/10/25/tong-hop-cac-loai-cay-canh-dep-de-ban-hop-phong-thuy-8.jpg?1508919551",
    shortDesc:
      "Đa búp đỏ (đa cao su, đa dai) có nguồn gốc từ Ấn Độ được du nhập vào Việt Nam và dần trở thành loại cây cảnh được ưa thích để trang trí. Cây có hệ hễ chắc khỏe cộng với khả năng hút bụi và các khí độc như carbon monoxide, hydrogen fluoride,... trong không khí. Đa búp đỏ mang trong mình biểu tượng của sự trường tồn, sức sống dẻo dai, nên có thể che chở, đem lại sự bình an cho gia đình của bạn."
  },
  {
    id: 22,
    name: "Cỏ Lan Chi",
    price: 499.999,
    priceDiscount: 450.999,
    currency: "VNĐ",
    image: "https://media.ohay.tv/v1/upload/content/2018-10/04/33882-4a60d461430c47d9c1c9184ae2e186cb-ohaytv.jpg",
    url:
      "https://media.ohay.tv/v1/upload/content/2018-10/04/33882-4a60d461430c47d9c1c9184ae2e186cb-ohaytv.jpg",
    shortDesc:
      `Tên khoa học là Chlorophytum bichetii họ thực vật  Asphodelaceae (họ Tỏi rừng). Là cây thuộc các nước Châu Phi- vùng nhiệt đới.

      Ngoài tên là cỏ Lan chi, người ta cũng thường gọi nó bằng một cái tên khác là Thảo lan chi - cái tên rất nhẹ nhàng y hệt như dáng vẻ bên ngoài của cây vậy.
      
      Thoạt nhìn thì cây cỏ lan chi như mang đến sự yếu đuối, mỏng manh. Tuy nhiên đây lại là loại cây có sức sống khá mãnh liệt. Chịu được sự khắc nhiệt của thời tiết về độ ấm hạn chế, thiếu ánh sáng.
      
      Hình dáng cây nhỏ nhắn, dễ thương nên thường được  trồng trong chậu sứ, chậu thủy tinh đặt ở bàn làm việc, kệ tủ,...`
  }
];

