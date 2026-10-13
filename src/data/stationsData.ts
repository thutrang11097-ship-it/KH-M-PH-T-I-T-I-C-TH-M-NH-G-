import { StationData } from '../types';

export const STATIONS: StationData[] = [
  // 1. TOÁN HỌC VÀ TƯ DUY LOGIC
  {
    id: 'logic_math',
    title: 'Trạm 1: Toán học & Tư duy logic',
    shortTitle: 'Tư duy logic',
    category: 'Tư duy định lượng & Suy luận',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'indigo',
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      accent: 'bg-indigo-600',
    },
    iconName: 'BrainCircuit',
    tagline: 'Phân tích đa chiều, bóc tách dữ kiện và tìm quy luật cốt lõi.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn thử sức với năng lực suy luận có căn cứ, phát hiện quy luật ẩn giấu và tối ưu hóa giải pháp logic trong tình huống thực tế.',
    competencyFocus: [
      'Khả năng xâu chuỗi thông tin rời rạc',
      'Tư duy phân tích nguyên nhân - kết quả',
      'Tối ưu hóa bài toán điều kiện ngặt',
    ],
    strengthsReflectionOptions: [
      'Em đọc kỹ dữ kiện và không bị đánh lừa bởi suy đoán cảm tính',
      'Em biết loại trừ các phương án mâu thuẫn rất nhanh',
      'Em thích thú khi phát hiện ra quy luật ẩn giấu',
      'Em giữ được sự kiên nhẫn khi gặp bài toán cần nhiều bước tư duy',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bí ẩn phòng trực ban Ngày hội trường',
        description:
          'Trong ngày hội trường, 4 bạn An, Bình, Châu, Dũng trực tại 4 vị trí: Cổng chính, Sân khấu, Gian hàng sách, Phòng y tế. Hãy xác định vị trí của bạn Châu dựa trên các dữ kiện sau:',
        scenarioContext:
          '1. An không trực ở Cổng chính và cũng không ở Sân khấu.\n2. Người trực ở Gian hàng sách là bạn thân nhất của Bình (nghĩa là Bình không trực ở Gian hàng sách).\n3. Dũng được phân công trực ở Phòng y tế.\n4. Châu thích đọc sách nên đã chủ động xin nhận vị trí này từ đầu.',
        type: 'scenario_choice',
        options: [
          {
            id: 'opt1_a',
            text: 'Châu trực ở Sân khấu',
            isCorrect: false,
            score: 1,
            explanation:
              'Chưa chính xác. Dữ kiện số 4 nêu rõ: Châu chủ động xin nhận vị trí Gian hàng sách do yêu thích đọc sách, và điều này hoàn toàn khớp với việc An không trực ở sách và Dũng ở Y tế.',
          },
          {
            id: 'opt1_b',
            text: 'Châu trực ở Gian hàng sách',
            isCorrect: true,
            score: 3,
            explanation:
              'Chính xác! Dữ kiện 4 cho biết trực tiếp Châu ở Gian hàng sách. Khi ghép lại: Dũng ở Y tế, Châu ở Sách; còn lại An và Bình cho Cổng chính & Sân khấu. Vì An không ở Cổng chính cũng không ở Sân khấu (mâu thuẫn nếu còn 2 chỗ này) -> bạn đã chứng minh tư duy loại trừ chặt chẽ!',
          },
          {
            id: 'opt1_c',
            text: 'Châu trực ở Cổng chính',
            isCorrect: false,
            score: 1,
            explanation:
              'Chưa chính xác. Ở dữ kiện 4, Châu trực tiếp đăng ký và nhận Gian hàng sách.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Tối ưu lộ trình chuyển quà tri ân',
        description:
          'Chi đoàn cần chuyển 3 phần quà từ Văn phòng Đoàn (O) tới 3 lớp 10A, 10B, 10C rồi quay về O. Khoảng cách (mét) giữa các điểm như sau:\n• O - 10A: 40m | O - 10B: 70m | O - 10C: 50m\n• 10A - 10B: 35m | 10B - 10C: 45m | 10A - 10C: 60m\nLộ trình nào dưới đây giúp tiết kiệm quãng đường đi bộ nhất?',
        scenarioContext:
          'Gợi ý: Tính tổng độ dài của từng chu trình khép kín: O -> Điểm 1 -> Điểm 2 -> Điểm 3 -> O.',
        type: 'single_choice',
        options: [
          {
            id: 'opt2_a',
            text: 'Lộ trình O -> 10B -> 10A -> 10C -> O',
            isCorrect: false,
            score: 1,
            explanation:
              'Tổng quãng đường: 70 (O-10B) + 35 (10B-10A) + 60 (10A-10C) + 50 (10C-O) = 215 mét. Chưa phải phương án ngắn nhất.',
          },
          {
            id: 'opt2_b',
            text: 'Lộ trình O -> 10A -> 10B -> 10C -> O',
            isCorrect: true,
            score: 3,
            explanation:
              'Chính xác! Tổng quãng đường: 40 (O-10A) + 35 (10A-10B) + 45 (10B-10C) + 50 (10C-O) = 170 mét. Đây là chu trình tối ưu nhất, ngắn hơn phương án khác đến 45m!',
          },
          {
            id: 'opt2_c',
            text: 'Lộ trình O -> 10C -> 10A -> 10B -> O',
            isCorrect: false,
            score: 1,
            explanation:
              'Tổng quãng đường: 50 (O-10C) + 60 (10C-10A) + 35 (10A-10B) + 70 (10B-O) = 215 mét. Phương án này đi qua cạnh chéo dài 10A-10C và cạnh 10B-O dài nhất.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Giải mã dãy số chu kỳ của Đồng hồ Thiên văn',
        description:
          'Một đồng hồ mô phỏng chu kỳ sao hiển thị dãy số quy luật: 3, 7, 15, 31, 63, ... Số tiếp theo xuất hiện trên màn hình sẽ là số nào?',
        scenarioContext:
          'Quan sát mối quan hệ giữa hai số liên tiếp: 3 -> 7 (+4 hoặc x2+1), 7 -> 15 (+8 hoặc x2+1), 15 -> 31 (+16 hoặc x2+1)...',
        type: 'single_choice',
        options: [
          {
            id: 'opt3_a',
            text: '95',
            isCorrect: false,
            score: 1,
            explanation:
              'Không chính xác. Quy luật tăng dần không phải là cộng thêm một hằng số cố định 32.',
          },
          {
            id: 'opt3_b',
            text: '127',
            isCorrect: true,
            score: 3,
            explanation:
              'Tuyệt vời! Cách 1: Mỗi số bằng số liền trước nhân 2 rồi cộng 1 (63 x 2 + 1 = 127). Cách 2: Khoảng cách tăng dần theo lũy thừa của 2 (+4, +8, +16, +32, và tiếp theo là +64 -> 63 + 64 = 127). Hoặc công thức tổng quát là 2^(n+1) - 1!',
          },
          {
            id: 'opt3_c',
            text: '126',
            isCorrect: false,
            score: 1,
            explanation:
              'Gần đúng, nhưng 63 x 2 = 126 chưa cộng thêm 1 đơn vị theo quy luật chu kỳ.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Bài toán 3 chiếc hộp dán nhãn sai',
      description:
        'Có 3 chiếc hộp kín: Hộp 1 đựng toàn bóng Xanh, Hộp 2 đựng toàn bóng Đỏ, Hộp 3 đựng cả bóng Xanh và Đỏ xen kẽ. Người quản lý dán nhãn “XANH”, “ĐỎ”, “CẢ HAI”, nhưng biết chắc chắn rằng CẢ 3 HỘP ĐỀU BỊ DÁN NHÃN SAI. Bạn chỉ được thò tay bốc đúng 1 quả bóng từ DUY NHẤT một chiếc hộp mà không nhìn vào trong.',
      question:
        'Bạn cần chọn thò tay vào chiếc hộp có nhãn dán nào để xác định chính xác nội dung của cả 3 hộp?',
      options: [
        {
          id: 'bonus_opt_a',
          text: 'Chọn hộp dán nhãn “CẢ HAI”',
          isCorrect: true,
          score: 3,
          explanation:
            'Xuất sắc! Vì nhãn “CẢ HAI” chắc chắn dán sai, nên hộp này chỉ có thể đựng toàn Xanh HOẶC toàn Đỏ. Nếu bạn bốc được quả bóng màu Đỏ, hộp này chắc chắn là “Toàn Đỏ”. Khi đó: Hộp dán nhãn “XANH” (bị sai) không thể là toàn Xanh, cũng không thể là toàn Đỏ (vì đã tìm thấy), nên bắt buộc phải là “CẢ HAI”. Hộp còn lại sẽ là “Toàn Xanh”!',
        },
        {
          id: 'bonus_opt_b',
          text: 'Chọn hộp dán nhãn “XANH”',
          isCorrect: false,
          score: 1,
          explanation:
            'Chưa tối ưu. Vì nếu bốc được quả Đỏ từ hộp dán “XANH”, bạn vẫn chưa biết hộp này là “Toàn Đỏ” hay là “Cả Hai”, dẫn tới không thể suy luận 2 hộp còn lại.',
        },
        {
          id: 'bonus_opt_c',
          text: 'Chọn bất kỳ hộp nào cũng như nhau',
          isCorrect: false,
          score: 1,
          explanation:
            'Sai lầm phổ biến! Chỉ có hộp dán nhãn “CẢ HAI” mới đảm bảo chỉ chứa 1 loại bóng duy nhất khi nhãn bị sai, từ đó mở khóa toàn bộ suy luận.',
        },
      ],
      learningInsight:
        'Trong tư duy logic, việc chọn "điểm tựa thông tin tối đa" (ở đây là hộp chắc chắn không hỗn hợp) giúp giải quyết toàn bộ hệ thống chỉ với 1 phép thử duy nhất.',
    },
  },

  // 2. CÔNG NGHỆ VÀ TƯ DUY THUẬT TOÁN
  {
    id: 'tech_algo',
    title: 'Trạm 2: Công nghệ & Tư duy thuật toán',
    shortTitle: 'Tư duy thuật toán',
    category: 'Khoa học máy tính & Công nghệ',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'cyan',
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      accent: 'bg-cyan-600',
    },
    iconName: 'Cpu',
    tagline: 'Chia nhỏ vấn đề, xây dựng chuỗi lệnh và gỡ lỗi có hệ thống.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn trải nghiệm cách thức lập trình viên và kỹ sư công nghệ tư duy: chia nhỏ vấn đề phức tạp thành các bước tuần tự, kiểm soát rẽ nhánh và tìm giải pháp tối ưu tài nguyên.',
    competencyFocus: [
      'Phân rã vấn đề phức tạp (Decomposition)',
      'Tư duy quy trình tuần tự và điều kiện rẽ nhánh (If/Else)',
      'Phát hiện lỗi logic (Debugging)',
    ],
    strengthsReflectionOptions: [
      'Em có khả năng hình dung các bước chạy của chương trình trong đầu',
      'Em kiên trì truy vết nguyên nhân gây ra lỗi',
      'Em thích tìm cách làm nhanh gọn, tiết kiệm thời gian thực thi',
      'Em thấy thú vị khi các câu lệnh hoạt động chính xác như dự kiến',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Điều khiển Robot phân loại sách Thư viện',
        description:
          'Robot tự hành cần di chuyển từ Cửa vào (A) đến Kệ sách Khoa học (B). Trên đường có một xe đẩy hàng chắn ngang ở ô giữa. Thứ tự câu lệnh nào giúp Robot đi vòng an toàn?',
        scenarioContext:
          'Robot đang hướng về phía Bắc. Bản đồ lưới 3x3:\n- Ô (1,1): Vị trí Robot A\n- Ô (1,2): Vật cản\n- Ô (1,3): Kệ sách B\nCác lệnh khả dụng: [Đi thẳng 1 ô], [Rẽ phải 90°], [Rẽ trái 90°].',
        type: 'ordering',
        options: [
          {
            id: 'algo1_a',
            text: 'Đi thẳng 2 ô -> Rẽ phải -> Đi thẳng 1 ô',
            isCorrect: false,
            score: 1,
            explanation:
              'Lệnh này sẽ khiến robot va chạm ngay lập tức vào vật cản ở ô (1,2) trước khi kịp rẽ!',
          },
          {
            id: 'algo1_b',
            text: 'Rẽ phải -> Đi thẳng 1 ô -> Rẽ trái -> Đi thẳng 2 ô -> Rẽ trái -> Đi thẳng 1 ô -> Rẽ phải',
            isCorrect: true,
            score: 3,
            explanation:
              'Chính xác! Robot né sang làn bên phải (tránh vật cản), tiến lên vượt qua vật cản, rồi quay trở lại cột đích và định hướng thẳng tới Kệ sách B.',
          },
          {
            id: 'algo1_c',
            text: 'Rẽ trái -> Đi thẳng 1 ô -> Rẽ phải -> Đi thẳng 1 ô',
            isCorrect: false,
            score: 1,
            explanation:
              'Lộ trình này chưa hoàn thành, robot sẽ dừng ở giữa đường và chưa tiếp cận được kệ sách B.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Săn lỗi (Bug Hunt): Thuật toán cộng điểm thi đua',
        description:
          'Đoàn trường viết một đoạn mã tính điểm thi đua tuần cho mỗi chi đoàn như sau:\n`1. Điểm_Ban_Đầu = 100`\n`2. NẾU Lỗi_Vệ_Sinh > 0 THÌ Điểm_Ban_Đầu = Điểm_Ban_Đầu - 10`\n`3. NẾU Có_Giờ_Học_Tốt THÌ Điểm_Ban_Đầu = Điểm_Ban_Đầu + 15`\n`4. NẾU Điểm_Ban_Đầu > 100 THÌ Điểm_Ban_Đầu = 100`\n`5. NẾU Có_Vi_Phạm_Đồng_Phục THÌ Điểm_Ban_Đầu = 0`\nLớp 10A có 1 lỗi vệ sinh, có giờ học tốt, nhưng bị 1 bạn quên phù hiệu (vi phạm đồng phục), tuy nhiên phần mềm lại báo điểm tuần là 100! Lỗi nằm ở đâu?',
        scenarioContext:
          'Hãy đọc kỹ thứ tự thực thi dòng lệnh từ 1 đến 5.',
        type: 'single_choice',
        options: [
          {
            id: 'algo2_a',
            text: 'Dòng 5 bị đặt sai điều kiện tên biến hoặc chưa được gọi chạy trước dòng 4',
            isCorrect: false,
            score: 1,
            explanation:
              'Nếu dòng 5 chạy sau cùng thì điểm phải là 0, chứ không thể là 100 được. Vấn đề thực tế là câu lệnh kiểm tra điều kiện dòng 5 có thể bị thụt lề sai hoặc câu lệnh so sánh ghi `=` thay vì `==`.',
          },
          {
            id: 'algo2_b',
            text: 'Dòng 5 ghi nhầm dấu gán: mã nguồn viết `NẾU Có_Vi_Phạm_Đồng_Phục = 0` thay vì trừ điểm, hoặc thứ tự logic dòng 4 và 5 bị đảo ngược',
            isCorrect: true,
            score: 3,
            explanation:
              'Đúng vậy! Trong thuật toán, thứ tự logic và cú pháp kiểm tra điều kiện (condition scope) là nguyên nhân hàng đầu gây bug. Nếu điều kiện vi phạm bị bỏ sót hoặc ghi đè sai thời điểm, kết quả sẽ hoàn toàn sai lệch!',
          },
          {
            id: 'algo2_c',
            text: 'Do máy tính không thể tính toán số âm',
            isCorrect: false,
            score: 1,
            explanation:
              'Không phải, máy tính xử lý số âm rất tốt. Lỗi xuất phát hoàn toàn từ thiết kế luồng điều khiển của người lập trình.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Chiến lược tìm kiếm: Sách trong kho 1000 cuốn',
        description:
          'Một danh mục gồm 1.000 cuốn sách đã được xếp theo thứ tự mã số tăng dần từ 0001 đến 1000. Bạn cần tìm cuốn sách mang mã số 0725. Cách tìm kiếm nào tốn ít bước kiểm tra nhất trong trường hợp xấu nhất?',
        scenarioContext:
          'So sánh: Tìm tuần tự từng cuốn từ đầu đến cuối vs Tìm kiếm nhị phân (chia đôi liên tục).',
        type: 'single_choice',
        options: [
          {
            id: 'algo3_a',
            text: 'Mở ngẫu nhiên từng cuốn sách cho đến khi gặp',
            isCorrect: false,
            score: 1,
            explanation:
              'Tìm ngẫu nhiên có thể tốn vô hạn lần hoặc lặp lại sách đã xem, hoàn toàn không có tính bảo đảm thuật toán.',
          },
          {
            id: 'algo3_b',
            text: 'Tìm tuần tự từ cuốn số 1 lần lượt đến cuốn 725 (tốn 725 lần kiểm tra)',
            isCorrect: false,
            score: 1,
            explanation:
              'Tìm kiếm tuần tự (Linear Search) tốn tối đa N bước (1.000 lần), rất lãng phí khi dữ liệu đã được sắp xếp trước.',
          },
          {
            id: 'algo3_c',
            text: 'Tìm kiếm nhị phân (Binary Search): Mở trang giữa, so sánh và loại bỏ một nửa số sách, chỉ tốn tối đa 10 lần kiểm tra',
            isCorrect: true,
            score: 3,
            explanation:
              'Chính xác tuyệt đối! Vì 2^10 = 1024 > 1000, sau mỗi lần chia đôi, số lượng sách cần tìm giảm 50%. Chỉ cần tối đa 10 bước kiểm tra là bạn chắc chắn tìm thấy cuốn sách, thay vì phải lật 725 cuốn!',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Nhận diện vòng lặp vô hạn (Infinite Loop)',
      description:
        'Xem xét đoạn mã sau:\n`Biến X = 1;`\n`LẶP KHI NÀO (X != 10):`\n`    X = X + 2;`\n`IN RA(X);`\nĐiều gì sẽ xảy ra khi máy tính chạy đoạn chương trình này?',
      question: 'Chương trình sẽ in ra số nào?',
      options: [
        {
          id: 'algo_bonus_a',
          text: 'In ra số 10 rồi dừng lại',
          isCorrect: false,
          score: 1,
          explanation:
            'Sai rồi! Ban đầu X=1 (số lẻ). Khi cộng 2 liên tục: 1 -> 3 -> 5 -> 7 -> 9 -> 11... X sẽ nhảy vọt qua số 10 và mãi mãi là số lẻ!',
        },
        {
          id: 'algo_bonus_b',
          text: 'Chương trình rơi vào vòng lặp vô tận và không bao giờ dừng lại',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Vì X xuất phát từ 1 và mỗi lần nhảy 2 đơn vị, giá trị của X luôn là số lẻ. Điều kiện dừng `X == 10` sẽ không bao giờ thỏa mãn, dẫn đến vòng lặp vô tận làm treo máy!',
        },
        {
          id: 'algo_bonus_c',
          text: 'Chương trình báo lỗi cú pháp ngay từ dòng 1',
          isCorrect: false,
          score: 1,
          explanation:
            'Cú pháp hoàn toàn đúng luật logic, nhưng thuật toán có lỗi ngữ nghĩa về điều kiện dừng bước nhảy.',
        },
      ],
      learningInsight:
        'Tư duy thuật toán đòi hỏi bạn phải kiểm tra các trường hợp biên (edge cases) và tính chẵn lẻ của biến bước nhảy để đảm bảo thuật toán luôn kết thúc hữu hạn.',
    },
  },

  // 3. KHOA HỌC VÀ KHÁM PHÁ
  {
    id: 'science_inquiry',
    title: 'Trạm 3: Khoa học & Khám phá',
    shortTitle: 'Khám phá khoa học',
    category: 'Phương pháp khoa học & Thực nghiệm',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'emerald',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      accent: 'bg-emerald-600',
    },
    iconName: 'FlaskConical',
    tagline: 'Đặt giả thuyết, cô lập biến số và rút ra kết luận từ bằng chứng.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn thử sức với phương pháp nghiên cứu khoa học: biết đặt câu hỏi đúng, thiết kế thí nghiệm có đối chứng, kiểm soát biến số và phân biệt tương quan với quan hệ nhân quả.',
    competencyFocus: [
      'Thiết kế thí nghiệm có nhóm đối chứng (Control group)',
      'Phân tích dữ liệu thực nghiệm khách quan',
      'Phân biệt tương quan ngẫu nhiên và nhân quả (Correlation vs Causation)',
    ],
    strengthsReflectionOptions: [
      'Em luôn muốn tìm bằng chứng xác thực trước khi vội tin một kết luận',
      'Em chú ý đến các yếu tố gây nhiễu trong thí nghiệm',
      'Em tò mò về cơ chế vận hành của thế giới tự nhiên xung quanh',
      'Em không ngại thay đổi quan điểm khi thấy dữ liệu thực tế chứng minh khác',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Thiết kế thí nghiệm: Rêu lọc kim loại nặng trong nước ao trường',
        description:
          'Nhóm nghiên cứu muốn kiểm tra giả thuyết: "Loài rêu nước ngọt X có khả năng hấp thụ ion Chì (Pb2+) trong nước ao trường". Yếu tố nào sau đây là quan trọng nhất để thiết kế thí nghiệm đạt chuẩn khoa học?',
        scenarioContext:
          'Cần tạo nhóm thí nghiệm và nhóm đối chứng để loại trừ các yếu tố môi trường khác.',
        type: 'scenario_choice',
        options: [
          {
            id: 'sci1_a',
            text: 'Chỉ cần thả thật nhiều rêu vào 1 bể duy nhất rồi đo lại sau 3 ngày',
            isCorrect: false,
            score: 1,
            explanation:
              'Thiếu nhóm đối chứng! Nếu nồng độ chì giảm do tự lắng xuống đáy bể hoặc bám vào thành kính chứ không phải do rêu thì bạn sẽ đưa ra kết luận sai lầm.',
          },
          {
            id: 'sci1_b',
            text: 'Chuẩn bị 2 bể nước có cùng nồng độ Chì, ánh sáng, nhiệt độ; Bể A thả rêu (thí nghiệm), Bể B không thả rêu (đối chứng)',
            isCorrect: true,
            score: 3,
            explanation:
              'Chính xác! Đây là nguyên tắc cốt lõi của phương pháp khoa học: giữ cố định mọi biến số ngoại lai (nhiệt độ, thể tích, ánh sáng, nồng độ ban đầu) và chỉ thay đổi duy nhất một biến độc lập (sự hiện diện của rêu) để so sánh đối chứng.',
          },
          {
            id: 'sci1_c',
            text: 'Thử nghiệm đồng thời rêu X với 5 loài cá khác nhau trong cùng một bể',
            isCorrect: false,
            score: 1,
            explanation:
              'Việc đưa thêm cá vào sẽ tạo thêm nhiều biến số phức tạp (chất bài tiết, hấp thu qua da cá), làm nhiễu kết quả đánh giá năng lực của rêu.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Giải mã biểu đồ: Nhiệt độ và tốc độ quang hợp',
        description:
          'Dữ liệu thực nghiệm đo tốc độ quang hợp của cây xanh trong nhà lưới:\n• 15°C: 12 mg CO2/h\n• 25°C: 38 mg CO2/h\n• 35°C: 45 mg CO2/h\n• 45°C: 14 mg CO2/h\n• 50°C: 0 mg CO2/h\nNhận định nào sau đây phản ánh chính xác nhất bản chất sinh học của hiện tượng?',
        scenarioContext:
          'Hãy liên hệ với hoạt tính của enzyme xúc tác quang hợp trong tế bào thực vật.',
        type: 'single_choice',
        options: [
          {
            id: 'sci2_a',
            text: 'Nhiệt độ càng tăng thì tốc độ quang hợp luôn luôn tăng theo đường thẳng',
            isCorrect: false,
            score: 1,
            explanation:
              'Sai thực tế. Từ 35°C trở lên, tốc độ quang hợp giảm mạnh và về 0 tại 50°C.',
          },
          {
            id: 'sci2_b',
            text: 'Quang hợp có nhiệt độ tối ưu khoảng 30–35°C; trên nhiệt độ này, các enzyme xúc tác bị biến tính nhiệt làm giảm hiệu suất',
            isCorrect: true,
            score: 3,
            explanation:
              'Rất chính xác! Enzyme là protein; khi vượt qua ngưỡng nhiệt tối ưu, cấu trúc không gian của enzyme bị phá vỡ (biến tính), khiến phản ứng sinh hóa ngừng trệ hoàn toàn.',
          },
          {
            id: 'sci2_c',
            text: 'Ở 50°C cây ngừng quang hợp vì trời quá tối',
            isCorrect: false,
            score: 1,
            explanation:
              'Nhiệt độ cao không đồng nghĩa với trời tối. Yếu tố nhiệt độ đang tác động trực tiếp lên hệ enzyme quang học.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Cạm bẫy tư duy: Tương quan hay Nhân quả?',
        description:
          'Một bài báo đăng dòng tít: "Nghiên cứu chỉ ra: Học sinh ăn nhiều kem trong mùa hè có điểm thi cuối kỳ môn Vật lý thấp hơn học sinh ít ăn kem". Nhà khoa học trẻ sẽ đặt câu hỏi phản biện nào trước thông tin này?',
        scenarioContext:
          'Có yếu tố thứ ba nào (ẩn số / biến gây nhiễu) đang tác động đồng thời lên cả hai sự việc?',
        type: 'single_choice',
        options: [
          {
            id: 'sci3_a',
            text: 'Cấm ngay việc bán kem ở cổng trường để nâng cao điểm thi',
            isCorrect: false,
            score: 1,
            explanation:
              'Đây là hành động bốc đồng dựa trên ngụy biện coi tương quan là quan hệ nhân quả (Correlation is not Causation).',
          },
          {
            id: 'sci3_b',
            text: 'Tìm xem có biến số ẩn (như thời tiết quá nóng khiến học sinh vừa thèm ăn kem vừa mệt mỏi khó tập trung ôn bài) hay không',
            isCorrect: true,
            score: 3,
            explanation:
              'Tư duy khoa học sắc bén! Thời tiết nắng nóng kéo dài là biến số ngoại lai thứ ba gây ra cả hai hiện tượng. Bản thân cây kem không phải là nguyên nhân trực tiếp làm giảm năng lực tư duy vật lý!',
          },
          {
            id: 'sci3_c',
            text: 'Thực hiện khảo sát trên 1 triệu que kem để xem hãng kem nào gây hại',
            isCorrect: false,
            score: 1,
            explanation:
              'Khảo sát này vẫn tiếp tục đi vào ngõ cụt của ngụy biện nhân quả mà không giải quyết được nguồn gốc giả thuyết.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Nghịch lý con quạ đen (Raven Paradox)',
      description:
        'Nhà khoa học muốn chứng minh mệnh đề: "Mọi con quạ đều màu đen". Theo logic tương đương của Hempel, mệnh đề này đồng nghĩa với: "Mọi vật không màu đen thì đều không phải là con quạ".',
      question:
        'Việc bạn quan sát thấy một "chiếc tất màu trắng" trong phòng ngủ có giúp tăng thêm một phần nhỏ bằng chứng ủng hộ mệnh đề "Mọi con quạ đều màu đen" hay không?',
      options: [
        {
          id: 'sci_bonus_a',
          text: 'Về mặt logic toán học chặt chẽ thì có, nhưng giá trị bằng chứng thực nghiệm gần như bằng 0 vì tập hợp các vật không đen là vô hạn',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Về mặt hình thức logic toán học (contrapositive), nó là bằng chứng hợp lệ. Tuy nhiên, trong thực nghiệm khoa học, vì số lượng vật thể không phải quạ là khổng lồ, ta không thể ngồi quan sát tất trắng để chứng minh về quạ mà phải khảo sát trực tiếp mẫu quần thể quạ.',
        },
        {
          id: 'sci_bonus_b',
          text: 'Hoàn toàn không có bất kỳ liên hệ logic nào',
          isCorrect: false,
          score: 1,
          explanation:
            'Trong đại số mệnh đề logic, hai phát biểu A -> B và !B -> !A là tương đương nhau hoàn toàn.',
        },
        {
          id: 'sci_bonus_c',
          text: 'Chiếc tất màu trắng chứng minh quạ không thể bay',
          isCorrect: false,
          score: 1,
          explanation:
            'Kết luận này hoàn toàn không liên quan đến vấn đề được đặt ra.',
        },
      ],
      learningInsight:
        'Khoa học đòi hỏi sự kết hợp hài hòa giữa sự chặt chẽ của logic toán học và tính thực tiễn khả thi của mẫu thực nghiệm.',
    },
  },

  // 4. SÁNG TẠO VÀ THIẾT KẾ
  {
    id: 'creative_design',
    title: 'Trạm 4: Sáng tạo & Thiết kế',
    shortTitle: 'Sáng tạo & Thiết kế',
    category: 'Nghệ thuật thị giác & Trải nghiệm',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'amber',
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      accent: 'bg-amber-600',
    },
    iconName: 'Palette',
    tagline: 'Phân cấp thị giác, phối màu hài hòa và kiến tạo giải pháp thẩm mỹ.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn khám phá khả năng cảm thụ thẩm mỹ, tư duy bố cục thị giác, chọn lọc thông tin trọng tâm và thiết kế sản phẩm thân thiện với người xem.',
    competencyFocus: [
      'Phân cấp thị giác (Visual Hierarchy)',
      'Cảm thụ màu sắc và tâm lý học thị giác',
      'Tư duy thiết kế lấy người dùng làm trung tâm (User Experience)',
    ],
    strengthsReflectionOptions: [
      'Em có trực giác tốt về sự cân đối và khoảng trống trong một trang trình bày',
      'Em nhận ra ngay những lỗi lệch mắt hoặc phối màu gây khó chịu',
      'Em thích sáng tạo những ý tưởng độc đáo, mang phong cách riêng',
      'Em luôn đặt mình vào vị trí người nhìn để thiết kế sao cho dễ hiểu nhất',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bố cục Poster Ngày hội CLB: Phân cấp thị giác',
        description:
          'Bạn được giao thiết kế Poster tuyển thành viên cho CLB Tranh biện khối 10. Trong 3 giây đầu tiên người đi ngang qua bảng tin, mắt họ sẽ quét vào yếu tố nào trước tiên? Bạn nên sắp xếp cỡ chữ và độ nổi bật ra sao?',
        scenarioContext:
          'Thông tin gồm: (1) Tên CLB & Khẩu hiệu chính, (2) Thời hạn đăng ký, (3) Danh sách 10 quyền lợi, (4) Mã QR đăng ký.',
        type: 'scenario_choice',
        options: [
          {
            id: 'des1_a',
            text: 'Để tất cả 4 thông tin cùng một cỡ chữ to như nhau và đóng khung từng phần màu đỏ rực rỡ',
            isCorrect: false,
            score: 1,
            explanation:
              'Thiếu phân cấp! Khi mọi thứ đều hét to như nhau, người xem sẽ bị ngợp thị giác và không đọc được bất kỳ thông tin nào.',
          },
          {
            id: 'des1_b',
            text: 'Tiêu đề & Khẩu hiệu nổi bật nhất (Focal point) -> Thời hạn & Mã QR rõ ràng -> Tóm tắt ngắn gọn 3 quyền lợi đắt giá nhất với khoảng trắng thoáng đãng',
            isCorrect: true,
            score: 3,
            explanation:
              'Tuyệt vời! Nguyên lý phân cấp thị giác (Visual Hierarchy) giúp dẫn dắt mắt người nhìn từ điểm nhấn chính (Focal Point) đến thông tin hành động (Call to Action), giữ lại khoảng trắng nghỉ mắt.',
          },
          {
            id: 'des1_c',
            text: 'Chèn toàn bộ văn bản điều lệ CLB dài 5 trang chữ nhỏ vào giữa poster',
            isCorrect: false,
            score: 1,
            explanation:
              'Poster là công cụ thu hút thị giác nhanh, không phải là tài liệu lưu trữ nội quy chi tiết.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Bảng màu & Cảm xúc: Chiến dịch Bảo vệ Sức khỏe Tinh thần',
        description:
          'Bạn thiết kế ấn phẩm truyền thông cho chuỗi tọa đàm "Vượt qua áp lực học tập tuổi 16". Bộ ba màu sắc nào dưới đây mang lại cảm giác xoa dịu, an toàn, thấu hiểu và tin cậy nhất cho học sinh?',
        scenarioContext:
          'Tâm lý học màu sắc: Màu nóng (đỏ/vàng tươi) kích thích cảnh báo; Màu xanh pastel/xô thơm mang lại sự tĩnh tại.',
        type: 'single_choice',
        options: [
          {
            id: 'des2_a',
            text: 'Đỏ tươi kết hợp Vàng neon và Đen tuyền',
            isCorrect: false,
            score: 1,
            explanation:
              'Bộ màu này tạo cảm giác báo động khẩn cấp, nguy hiểm hoặc lễ hội sôi động, không phù hợp với chủ đề xoa dịu tâm lý.',
          },
          {
            id: 'des2_b',
            text: 'Xanh xô thơm (Sage Green), Xanh da trời dịu (Soft Sky Blue) và Màu be ấm (Warm Cream)',
            isCorrect: true,
            score: 3,
            explanation:
              'Lựa chọn tinh tế! Các tông màu pastel tự nhiên kết hợp với nền be ấm tạo cảm giác bình yên, giảm căng thẳng thị giác và khơi gợi sự cởi mở, an toàn để chia sẻ.',
          },
          {
            id: 'des2_c',
            text: 'Tím đậm kết hợp Xanh neon phản quang chớp nháy',
            isCorrect: false,
            score: 1,
            explanation:
              'Màu sắc này mang hơi hướng Cyberpunk, tạo cảm giác kích thích mạnh chứ không tạo sự gần gũi xoa dịu.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Trải nghiệm người dùng (UX): Tối ưu hóa form đăng ký trực tuyến',
        description:
          'Link đăng ký giải bóng đá của trường ban đầu có 18 câu hỏi chi tiết, khiến 65% học sinh bỏ cuộc giữa chừng. Với tư cách người thiết kế trải nghiệm, bạn đề xuất cải tiến nào hiệu quả nhất?',
        scenarioContext:
          'Nguyên tắc giảm ma sát tương tác (Reduce Friction) và tiến trình lũy tiến.',
        type: 'single_choice',
        options: [
          {
            id: 'des3_a',
            text: 'Bắt buộc học sinh phải hoàn thành cả 18 câu hỏi mới cho gửi form kèm đếm ngược 60 giây',
            isCorrect: false,
            score: 1,
            explanation:
              'Cách này làm gia tăng áp lực và sự bực bội, khiến tỉ lệ bỏ cuộc tăng cao hơn nữa.',
          },
          {
            id: 'des3_b',
            text: 'Tối giản form chỉ còn 3 thông tin cốt lõi (Tên, Lớp, SĐT liên hệ đội trưởng); các thông tin phụ sẽ khảo sát sau khi đã vào bảng đấu',
            isCorrect: true,
            score: 3,
            explanation:
              'Tư duy thiết kế UX chuẩn mực! Giảm thiểu rào cản ban đầu giúp tăng tỉ lệ chuyển đổi hành động lên gấp nhiều lần, tôn trọng thời gian của người dùng.',
          },
          {
            id: 'des3_c',
            text: 'Đổi nền form sang hình động lấp lánh để học sinh vui mắt điền tiếp',
            isCorrect: false,
            score: 1,
            explanation:
              'Hình nền động chỉ làm phân tâm và tải trang chậm, không giải quyết vấn đề cốt lõi là lượng câu hỏi rườm rà.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Thiết kế biểu trưng đa tầng nghĩa',
      description:
        'Logo của dự án bảo vệ môi trường trường học lồng ghép hình ảnh: Một trang sách mở ra tạo thành đôi cánh chim bồ câu, ở giữa là một mầm cây xanh. Ý nghĩa cốt lõi của phép ẩn dụ thị giác này là gì?',
      question: 'Phép lồng ghép này truyền tải thông điệp gì mạnh mẽ nhất?',
      options: [
        {
          id: 'des_bonus_a',
          text: 'Tri thức học đường (sách) chắp cánh cho hòa bình (chim) và sự sinh sôi bền vững của thiên nhiên (mầm cây)',
          isCorrect: true,
          score: 3,
          explanation:
            'Xuất sắc! Một thiết kế sáng tạo đỉnh cao luôn kể được một câu chuyện sâu sắc bằng ngôn ngữ hình khối cô đọng.',
        },
        {
          id: 'des_bonus_b',
          text: 'Học sinh nên đem chim và cây xanh vào thư viện đọc sách',
          isCorrect: false,
          score: 1,
          explanation:
            'Hiểu theo nghĩa đen đơn thuần bỏ qua toàn bộ giá trị biểu tượng của ngôn ngữ thiết kế.',
        },
        {
          id: 'des_bonus_c',
          text: 'Vẽ ngẫu nhiên vì thấy 3 hình ảnh đó đẹp',
          isCorrect: false,
          score: 1,
          explanation:
            'Thiết kế chuyên nghiệp luôn bắt đầu từ ý niệm và thông điệp truyền thông có chủ đích.',
        },
      ],
      learningInsight:
        'Sáng tạo không chỉ là vẽ đẹp, mà là năng lực chuyển hóa ý niệm trừu tượng thành hình ảnh có sức lay động trực tiếp.',
    },
  },

  // 5. NGÔN NGỮ VÀ DIỄN ĐẠT
  {
    id: 'language_expression',
    title: 'Trạm 5: Ngôn ngữ & Diễn đạt',
    shortTitle: 'Ngôn ngữ & Diễn đạt',
    category: 'Văn học & Nghệ thuật truyền thông',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'rose',
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-200',
      accent: 'bg-rose-600',
    },
    iconName: 'PenTool',
    tagline: 'Sắc sảo ngôn từ, cấu trúc lập luận và truyền cảm hứng hành động.',
    introduction:
      'Nhiệm vụ tại trạm này thử thách khả năng làm chủ ngôn ngữ: chọn từ ngữ giàu sức gợi, biến ý tưởng phức tạp thành thông điệp dễ hiểu và thuyết phục người nghe bằng lý lẽ kết hợp cảm xúc.',
    competencyFocus: [
      'Chính xác và tinh tế trong sử dụng từ ngữ (Nuance)',
      'Cấu trúc lập luận mạch lạc (Mô hình PREP)',
      'Thuyết phục và truyền cảm hứng tích cực',
    ],
    strengthsReflectionOptions: [
      'Em biết cách dùng từ ngữ chính xác để diễn đạt điều mình nghĩ',
      'Em có khả năng viết hoặc nói khiến người khác chăm chú lắng nghe',
      'Em nhận ra ngay những lỗi diễn đạt sáo rỗng hoặc tối nghĩa',
      'Em thích tìm kiếm những góc nhìn mới mẻ trong một câu chuyện quen thuộc',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Chuyển hóa thông điệp khô khan thành lời hiệu triệu',
        description:
          'Thông điệp ban đầu trên bảng tin: "Đề nghị học sinh toàn trường không được xả rác bừa bãi tại ghế đá sân trường, ai vi phạm sẽ bị trừ điểm thi đua cá nhân". Lời viết lại nào dưới đây giàu sức truyền cảm và thúc đẩy hành động tự giác nhất?',
        scenarioContext:
          'Ngôn ngữ cấm đoán tiêu cực vs Ngôn ngữ truyền cảm hứng về quyền làm chủ không gian.',
        type: 'single_choice',
        options: [
          {
            id: 'lang1_a',
            text: 'Cấm xả rác! Giám thị sẽ trích xuất camera phạt nặng!',
            isCorrect: false,
            score: 1,
            explanation:
              'Lời đe dọa mang tính áp đặt, chỉ tạo ra sự đối phó khi có người giám sát thay vì ý thức tự giác.',
          },
          {
            id: 'lang1_b',
            text: 'Mỗi chiếc ghế đá dưới bóng phượng là góc nhỏ nâng niu những câu chuyện tuổi học trò. Cùng nhau giữ sân trường trong lành như ngày đầu bạn bước vào lớp 10 nhé!',
            isCorrect: true,
            score: 3,
            explanation:
              'Rất truyền cảm! Thông điệp khơi gợi tình cảm gắn bó với trường lớp, dùng hình ảnh thơ mộng và lời mời gọi đồng hành thay vì phán xét trừng phạt.',
          },
          {
            id: 'lang1_c',
            text: 'Rác thải là chất rắn thải ra trong quá trình sinh hoạt của con người cần phải thu gom đúng quy định.',
            isCorrect: false,
            score: 1,
            explanation:
              'Định nghĩa khô cứng như sách giáo khoa không tạo ra bất kỳ sự rung động cảm xúc nào.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Cấu trúc bài nói 1 phút thuyết phục theo mô hình PREP',
        description:
          'Trong buổi tranh biện về việc: "Học sinh lớp 10 có nên tham gia Ban chấp hành CLB hay không?", bạn cần sắp xếp 4 phần nói theo đúng trình tự thuyết phục PREP (Point - Điểm nhìn, Reason - Lý lẽ, Example - Dẫn chứng, Point - Khẳng định lại):',
        scenarioContext:
          'Thứ tự chuẩn mực giúp người nghe nắm bắt mạch lập luận không bị lạc trôi.',
        type: 'ordering',
        options: [
          {
            id: 'lang2_a',
            text: 'Kể một câu chuyện dài -> Nói lý do -> Kết luận vội vàng -> Không nêu quan điểm',
            isCorrect: false,
            score: 1,
            explanation:
              'Người nghe sẽ không hiểu bạn đang ủng hộ hay phản đối cho đến tận cuối bài nói.',
          },
          {
            id: 'lang2_b',
            text: '(P) Học sinh lớp 10 hoàn toàn nên tham gia -> (R) Vì đây là thời điểm vàng xây dựng kỹ năng tự chủ và kết nối trước khi bước vào kỳ thi căng thẳng -> (E) Điển hình là anh Minh khóa trước nhờ làm phó chủ nhiệm CLB năm lớp 10 đã rèn được tính kỷ luật để đạt học bổng -> (P) Vì vậy, đừng ngần ngại trao cơ hội cho lớp 10!',
            isCorrect: true,
            score: 3,
            explanation:
              'Xuất sắc! Cấu trúc PREP kinh điển giúp bài nói rõ ràng, thuyết phục và lưu lại ấn tượng sâu đậm trong tâm trí khán giả.',
          },
          {
            id: 'lang2_c',
            text: 'Đưa ra 10 dẫn chứng liên tiếp mà không có lý lẽ xâu chuỗi',
            isCorrect: false,
            score: 1,
            explanation:
              'Dẫn chứng không có sợi dây lý lẽ liên kết sẽ giống như những mẩu tin vụn vặt.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Nghệ thuật phản biện: Tôn trọng và sắc bén',
        description:
          'Một bạn trong nhóm nói: "Ý tưởng làm video ngắn của cậu tốn thời gian vô ích, chẳng ai thèm xem đâu!". Phản hồi nào dưới đây thể hiện sự trưởng thành về năng lực diễn đạt và bảo vệ ý kiến?',
        scenarioContext:
          'Tách biệt cái tôi cá nhân, công nhận sự lo lắng của bạn và đưa ra số liệu chứng minh.',
        type: 'single_choice',
        options: [
          {
            id: 'lang3_a',
            text: 'Cậu không làm thì im đi, đừng có bàn lùi!',
            isCorrect: false,
            score: 1,
            explanation:
              'Tấn công cá nhân (Ad Hominem) làm leo thang căng thẳng và phá vỡ sự gắn kết nhóm.',
          },
          {
            id: 'lang3_b',
            text: 'Mình hiểu cậu lo lắng về việc nhóm không kịp hạn chót. Tuy nhiên, theo khảo sát nhanh của lớp mình, 80% các bạn xem thông tin qua video ngắn. Mình đã lên sẵn kịch bản quay chỉ mất 30 phút, chúng mình thử quay bản nháp trong chiều nay nhé?',
            isCorrect: true,
            score: 3,
            explanation:
              'Bậc thầy phản biện! Bạn vừa thấu hiểu nỗi lo của bạn mình, vừa đưa ra dẫn chứng thực tế và giải pháp cụ thể giúp giảm thiểu rủi ro.',
          },
          {
            id: 'lang3_c',
            text: 'Bỏ luôn ý tưởng và im lặng không nói gì nữa',
            isCorrect: false,
            score: 1,
            explanation:
              'Thu mình lại khiến bạn đánh mất cơ hội bảo vệ những sáng kiến có giá trị.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Nhận diện phép tu từ chơi chữ và tương phản',
      description:
        'Câu danh ngôn: "Chúng ta kiếm sống bằng những gì mình nhận được, nhưng chúng ta tạo nên một cuộc đời bằng những gì mình trao đi" (Winston Churchill) sử dụng cặp thủ pháp nghệ thuật nào?',
      question: 'Phép tu từ nào tạo nên sức nặng triết lý cho câu nói?',
      options: [
        {
          id: 'lang_bonus_a',
          text: 'Phép tương phản (Nhận được vs Trao đi) và nâng tầm khái niệm (Kiếm sống vs Tạo nên cuộc đời)',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Sự đối lập giữa mức độ sinh tồn vật chất (kiếm sống) và giá trị nhân sinh trường tồn (cuộc đời) tạo nên cú hích nhận thức sâu sắc cho người đọc.',
        },
        {
          id: 'lang_bonus_b',
          text: 'Phép nhân hóa đồ vật vô tri',
          isCorrect: false,
          score: 1,
          explanation:
            'Câu nói không nhân hóa đồ vật nào mà bàn về hành động của con người.',
        },
        {
          id: 'lang_bonus_c',
          text: 'Phép phóng đại quá mức sự thật',
          isCorrect: false,
          score: 1,
          explanation:
            'Đây là sự đúc kết triết lý sâu sắc, không phải là nói quá để gây cười.',
        },
      ],
      learningInsight:
        'Sức mạnh của ngôn từ nằm ở chiều sâu tư tưởng và khả năng đúc kết chân lý một cách cô đọng.',
    },
  },

  // 6. GIAO TIẾP VÀ HỢP TÁC
  {
    id: 'comm_collab',
    title: 'Trạm 6: Giao tiếp & Hợp tác',
    shortTitle: 'Giao tiếp & Hợp tác',
    category: 'Kỹ năng xã hội & Làm việc nhóm',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'teal',
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      border: 'border-teal-200',
      accent: 'bg-teal-600',
    },
    iconName: 'Users',
    tagline: 'Lắng nghe tích cực, điều phối nguồn lực và kiến tạo giải pháp đôi bên cùng thắng.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn thử sức với nghệ thuật làm việc cùng tập thể: nhận diện thế mạnh của từng thành viên, hóa giải bất đồng ý kiến và tạo động lực thúc đẩy nhóm cùng về đích.',
    competencyFocus: [
      'Lắng nghe tích cực và thấu cảm xã hội',
      'Phân bổ vai trò tương thích với thế mạnh cá nhân',
      'Đàm phán giải pháp Win-Win khi có xung đột',
    ],
    strengthsReflectionOptions: [
      'Em có khả năng gắn kết mọi người và tạo không khí làm việc vui vẻ',
      'Em giữ được bình tĩnh khi nhóm xảy ra tranh cãi',
      'Em biết cách nhìn ra điểm mạnh của từng bạn để nhờ giúp đỡ',
      'Em luôn giữ lời hứa và hoàn thành đúng hạn phần việc được giao',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Phân vai dự án Nghiên cứu Lịch sử Địa phương',
        description:
          'Nhóm bạn có 4 thành viên với tính cách khác biệt. Hãy ghép nhiệm vụ phù hợp nhất để dự án đạt hiệu quả cao nhất:',
        scenarioContext:
          '• Bạn A: Cẩn thận, thích đọc tài liệu, ghi chép tỉ mỉ nhưng ngại nói trước đám đông.\n• Bạn B: Hướng ngoại, hoạt ngôn, tự tin đứng trên sân khấu.\n• Bạn C: Thẩm mỹ tốt, thạo thiết kế Canva và dựng video CapCut.\n• Bạn D: Có tài bao quát, quản lý thời gian tốt, hay nhắc nhở tiến độ.',
        type: 'scenario_choice',
        options: [
          {
            id: 'collab1_a',
            text: 'Bắt bạn A làm thuyết trình chính trên sân khấu để "rèn luyện cho quen"',
            isCorrect: false,
            score: 1,
            explanation:
              'Ép người nhút nhát đứng mũi chịu sào trong dự án quan trọng mà không chuẩn bị trước sẽ gây áp lực tiêu cực và giảm hiệu quả chung của nhóm.',
          },
          {
            id: 'collab1_b',
            text: 'D làm Nhóm trưởng điều phối; A phụ trách tổng hợp tài liệu; C thiết kế slide & video; B làm người thuyết trình chính',
            isCorrect: true,
            score: 3,
            explanation:
              'Phân vai bậc thầy! Mỗi thành viên đều được đặt vào đúng vị trí sở trường tự nhiên, giúp nhóm tạo ra sức mạnh cộng hưởng lớn nhất.',
          },
          {
            id: 'collab1_c',
            text: 'Chia đều mỗi người tự làm cả 4 việc từ đầu đến cuối',
            isCorrect: false,
            score: 1,
            explanation:
              'Thiếu chuyên môn hóa và lãng phí thế mạnh riêng biệt của từng thành viên.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Xử lý xung đột: Bất đồng chủ đề thuyết trình',
        description:
          'Nhóm chia làm hai phe tranh cãi gay gắt: Phe 1 muốn làm về "Trí tuệ nhân tạo", Phe 2 muốn làm về "Bảo tồn nghệ thuật Chèo truyền thống". Không ai chịu nhường ai và chỉ còn 2 ngày là đến hạn nộp. Với vai trò thành viên hòa giải, bạn làm gì?',
        scenarioContext:
          'Tìm điểm giao thoa sáng tạo hoặc cơ chế biểu quyết dân chủ có tình có lý.',
        type: 'single_choice',
        options: [
          {
            id: 'collab2_a',
            text: 'Bỏ phiếu ai nhiều người hơn thì thắng, bên thua bắt buộc phải im lặng nghe theo',
            isCorrect: false,
            score: 1,
            explanation:
              'Cách thắng-thua (Win-Lose) này dễ để lại sự bất mãn ngấm ngầm, khiến bên thua làm việc đối phó.',
          },
          {
            id: 'collab2_b',
            text: 'Đề xuất giải pháp giao thoa độc đáo: "Ứng dụng Trí tuệ Nhân tạo trong việc phục dựng và lưu trữ nghệ thuật Chèo cổ cho giới trẻ"',
            isCorrect: true,
            score: 3,
            explanation:
              'Một giải pháp Win-Win đột phá! Cả hai bên đều thấy ý tưởng tâm huyết của mình được trân trọng, đồng thời tạo ra một đề tài mới lạ, độc đáo khiến cả lớp bất ngờ.',
          },
          {
            id: 'collab2_c',
            text: 'Xin cô giáo tách nhóm thành hai nhóm riêng',
            isCorrect: false,
            score: 1,
            explanation:
              'Trốn tránh xung đột khiến bạn bỏ lỡ cơ hội rèn luyện kỹ năng đàm phán và dung hòa tập thể.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Góp ý xây dựng (Constructive Feedback)',
        description:
          'Một bạn trong nhóm nộp phần nội dung khá sơ sài và trễ hạn 1 ngày. Cách phản hồi nào dưới đây giúp bạn ấy sửa lỗi tích cực nhất mà không làm tổn thương lòng tự trọng?',
        scenarioContext:
          'Nguyên tắc phản hồi theo mô hình SBI: Tình huống (Situation) - Hành vi (Behavior) - Tác động (Impact) + Lời đề nghị hỗ trợ.',
        type: 'single_choice',
        options: [
          {
            id: 'collab3_a',
            text: 'Nhắn thẳng vào nhóm chung: "Cậu làm ăn cẩu thả thế này làm tụi mình bị điểm kém đấy!"',
            isCorrect: false,
            score: 1,
            explanation:
              'Chỉ trích công khai mang tính quy chụp cá nhân khiến bạn ấy rơi vào trạng thái phòng thủ hoặc tự ái.',
          },
          {
            id: 'collab3_b',
            text: 'Nhắn riêng với bạn: "Cảm ơn cậu đã nỗ lực gửi bài. Mình thấy phần ý chính cậu nêu rất trúng, nhưng hiện tại còn thiếu ví dụ thực tế và nguồn tài liệu nên nhóm chưa thể đưa vào slide hoàn chỉnh. Cậu có gặp khó khăn gì không? Chiều nay tụi mình ngồi lại 15 phút cùng bổ sung nhé?"',
            isCorrect: true,
            score: 3,
            explanation:
              'Nghệ thuật giao tiếp chân thành! Góp ý riêng tư, ghi nhận nỗ lực trước, chỉ rõ điểm cần hoàn thiện và chủ động chìa tay giúp đỡ.',
          },
          {
            id: 'collab3_c',
            text: 'Tự mình ngồi làm lại hết từ đầu mà không nói gì với bạn',
            isCorrect: false,
            score: 1,
            explanation:
              'Ôm đồm công việc khiến bạn bị kiệt sức, còn bạn kia thì không có cơ hội học hỏi và tiến bộ.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Kỹ thuật phản ánh cảm xúc (Reflective Listening)',
      description:
        'Bạn cùng nhóm thở dài: "Tớ chán quá, chắc tớ chẳng có năng khiếu gì trong môn này cả, làm gì cũng hỏng!". Câu đáp lời nào thể hiện trình độ lắng nghe tích cực sâu sắc nhất?',
      question: 'Bạn sẽ phản hồi như thế nào?',
      options: [
        {
          id: 'collab_bonus_a',
          text: '"Có vẻ cậu đang cảm thấy thất vọng và kiệt sức vì bài tập vừa rồi không như mong đợi đúng không? Tớ đã từng cảm thấy như vậy, cùng ngồi xem lại chỗ nào nhé."',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Bạn đã gọi tên đúng cảm xúc ẩn sau lời than thở và bình thường hóa cảm xúc đó, tạo ra không gian an toàn để bạn mình hồi phục tinh thần.',
        },
        {
          id: 'collab_bonus_b',
          text: '"Có gì đâu mà chán, cố lên là được thôi mà!"',
          isCorrect: false,
          score: 1,
          explanation:
            'Lời khuyên sáo rỗng vô tình gạt bỏ cảm xúc chân thật của người đối diện.',
        },
        {
          id: 'collab_bonus_c',
          text: '"Cậu than vãn thế này làm tụi tớ cũng nản theo đấy."',
          isCorrect: false,
          score: 1,
          explanation:
            'Đổ lỗi cảm xúc sẽ dập tắt hoàn toàn sự kết nối giữa các thành viên.',
        },
      ],
      learningInsight:
        'Giao tiếp đỉnh cao không phải là nói hay, mà là khả năng lắng nghe và thấu cảm trọn vẹn những gì người khác chưa thể thốt nên lời.',
    },
  },

  // 7. TỔ CHỨC VÀ LẬP KẾ HOẠCH
  {
    id: 'org_planning',
    title: 'Trạm 7: Tổ chức & Lập kế hoạch',
    shortTitle: 'Tổ chức & Kế hoạch',
    category: 'Quản trị dự án & Điều phối',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'blue',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      accent: 'bg-blue-600',
    },
    iconName: 'CalendarCheck',
    tagline: 'Phân bổ nguồn lực, quản lý rủi ro và điều hành chương trình nhịp nhàng.',
    introduction:
      'Nhiệm vụ tại trạm này đưa bạn vào vai trò Tổng điều phối sự kiện học đường: cân đối ngân sách có hạn, sắp xếp tiến độ đường găng và chuẩn bị các phương án dự phòng thông minh.',
    competencyFocus: [
      'Quản lý nguồn lực và tối ưu chi phí (Resource allocation)',
      'Tư duy đường găng và sắp xếp trình tự (Critical Path)',
      'Quản trị rủi ro và kế hoạch B (Contingency planning)',
    ],
    strengthsReflectionOptions: [
      'Em thích lập danh sách công việc việc cần làm và tích dấu hoàn thành',
      'Em luôn dự phòng các tình huống xấu có thể xảy ra trước sự kiện',
      'Em biết cách cân đối chi tiêu sao cho hợp lý, không bị thâm hụt',
      'Em có khả năng giữ cho mọi người tuân thủ đúng khung thời gian',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cân đối Ngân sách 5.000.000 VNĐ cho Hội trại Khối 10',
        description:
          'Bạn được giao quản lý quỹ 5 triệu cho gian hàng cắm trại. Hãy chọn phương án phân bổ cân đối và an toàn nhất cho lớp:',
        scenarioContext:
          'Chi phí gồm: Vật liệu dựng trại, Đồ ăn thức uống, Trang trí & Đạo cụ trò chơi, Quỹ dự phòng rủi ro.',
        type: 'allocation',
        options: [
          {
            id: 'plan1_a',
            text: 'Dành 4.500.000đ cho đèn led lộng lẫy và đồ trang trí xịn, thức ăn dùng đồ rẻ tiền, không để tiền dự phòng',
            isCorrect: false,
            score: 1,
            explanation:
              'Phân bổ lệch lạc! Mất an toàn vệ sinh thực phẩm và nếu có phát sinh đột xuất lớp sẽ không còn một đồng nào để xoay xở.',
          },
          {
            id: 'plan1_b',
            text: 'Vật liệu trại an toàn: 1.800.000đ; Thực phẩm dinh dưỡng: 1.600.000đ; Trang trí & Trò chơi: 900.000đ; Quỹ dự phòng phát sinh: 700.000đ (14%)',
            isCorrect: true,
            score: 3,
            explanation:
              'Chuẩn mực quản trị tài chính! Luôn ưu tiên an toàn, trải nghiệm cốt lõi và bắt buộc phải giữ lại 10-15% quỹ dự phòng rủi ro.',
          },
          {
            id: 'plan1_c',
            text: 'Mua toàn bộ trà sữa và đồ ăn vặt 5.000.000đ, mượn lều trại cũ rách của ai thì mượn',
            isCorrect: false,
            score: 1,
            explanation:
              'Thiếu tầm nhìn tổ chức sự kiện toàn diện, trại có thể bị sập khi gặp gió lớn.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Xác định Đường găng (Critical Path): Chuẩn bị đêm Văn nghệ',
        description:
          'Để tổ chức tiết mục kịch của lớp, có 4 đầu việc:\n(A) Viết kịch bản (2 ngày)\n(B) May đo trang phục (3 ngày, cần có kịch bản xong trước)\n(C) Thu âm nhạc nền (1 ngày, cần có kịch bản xong trước)\n(D) Ghép sân khấu tổng duyệt (1 ngày, cần cả trang phục và nhạc nền xong)\nThời gian tối thiểu cần thiết để sẵn sàng biểu diễn là bao nhiêu ngày?',
        scenarioContext:
          'Một số công việc có thể làm song song với nhau!',
        type: 'single_choice',
        options: [
          {
            id: 'plan2_a',
            text: '7 ngày (cộng dồn lần lượt tất cả: 2 + 3 + 1 + 1)',
            isCorrect: false,
            score: 1,
            explanation:
              'Lãng phí thời gian! Việc (B) may trang phục và (C) thu âm có thể tiến hành cùng lúc song song sau khi (A) xong.',
          },
          {
            id: 'plan2_b',
            text: '6 ngày: Đường găng là (A: 2 ngày) -> (B: 3 ngày, chạy song song với C: 1 ngày) -> (D: 1 ngày) = 2 + 3 + 1 = 6 ngày',
            isCorrect: true,
            score: 3,
            explanation:
              'Tư duy quản trị dự án xuất sắc! Đường găng (Critical Path) là chuỗi công việc dài nhất quyết định tiến độ của toàn bộ dự án.',
          },
          {
            id: 'plan2_c',
            text: '3 ngày',
            isCorrect: false,
            score: 1,
            explanation:
              'Không khả thi vì riêng việc (A) và (B) nối tiếp nhau đã mất 5 ngày.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Kế hoạch B (Kế hoạch dự phòng): Cơn mưa rào bất chợt',
        description:
          'Chương trình giao lưu ngoài trời dự kiến diễn ra lúc 15h. Dự báo thời tiết thông báo khả năng có mưa rào 70% vào buổi chiều. Là người tổ chức, bạn hành động ra sao vào lúc 9h sáng?',
        scenarioContext:
          'Đừng đợi mưa rơi xuống mới bắt đầu chạy tìm chỗ trú!',
        type: 'single_choice',
        options: [
          {
            id: 'plan3_a',
            text: 'Cầu mong trời không mưa và giữ nguyên mọi kế hoạch như cũ',
            isCorrect: false,
            score: 1,
            explanation:
              'Phó mặc cho may rủi là sai lầm lớn nhất của người làm tổ chức.',
          },
          {
            id: 'plan3_b',
            text: 'Kích hoạt phương án B: Liên hệ mượn Nhà đa năng làm địa điểm dự bị, phân công nhóm phụ trách chuẩn bị bạt che dàn âm thanh, thông báo cho cả khối sẵn sàng chuyển đồ trước 14h nếu có lệnh',
            isCorrect: true,
            score: 3,
            explanation:
              'Nhà tổ chức chuyên nghiệp! Chủ động chuẩn bị địa điểm dự phòng, bảo vệ thiết bị giá trị và có kênh thông báo rõ ràng trước giờ G.',
          },
          {
            id: 'plan3_c',
            text: 'Hủy bỏ hoàn toàn chương trình ngay từ sáng sớm',
            isCorrect: false,
            score: 1,
            explanation:
              'Hủy vội vàng khi chưa thử các giải pháp linh hoạt sẽ làm lãng phí công sức chuẩn bị của cả khối.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Ma trận Eisenhower (Quan trọng vs Khẩn cấp)',
      description:
        'Sáng thứ Bảy trước ngày diễn ra sự kiện, bạn có 4 việc sau:\n1. Loa chính bị hỏng tiếng lúc đang chuẩn bị tổng duyệt.\n2. Lên kế hoạch dự toán cho chuyến tham quan học kỳ sau.\n3. Nhắn tin tán gẫu với bạn về một bộ phim mới.\n4. Đọc lại quy chế an toàn cháy nổ của nhà trường.',
      question: 'Việc nào thuộc nhóm Cấp bách & Quan trọng (Cần làm ngay lập tức)?',
      options: [
        {
          id: 'plan_bonus_a',
          text: 'Việc số 1: Loa chính bị hỏng tiếng khi đang chuẩn bị tổng duyệt',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Đây là sự cố phát sinh khẩn cấp đe dọa trực tiếp đến sự kiện đang diễn ra, đòi hỏi sự can thiệp tức thời.',
        },
        {
          id: 'plan_bonus_b',
          text: 'Việc số 2: Kế hoạch cho học kỳ sau',
          isCorrect: false,
          score: 1,
          explanation:
            'Việc này quan trọng nhưng không khẩn cấp, có thể lên lịch làm vào tuần sau.',
        },
        {
          id: 'plan_bonus_c',
          text: 'Việc số 3: Tán gẫu về bộ phim',
          isCorrect: false,
          score: 1,
          explanation:
            'Đây là việc không quan trọng và không khẩn cấp.',
        },
      ],
      learningInsight:
        'Làm chủ ma trận Eisenhower giúp bạn không bị chôn vùi trong những việc vặt mà luôn giải quyết đúng thứ tự ưu tiên sống còn.',
    },
  },

  // 8. THẤU HIỂU VÀ HỖ TRỢ NGƯỜI KHÁC
  {
    id: 'empathy_support',
    title: 'Trạm 8: Thấu hiểu & Hỗ trợ người khác',
    shortTitle: 'Thấu hiểu & Hỗ trợ',
    category: 'Trí tuệ cảm xúc & Tham vấn bạn bè',
    timeEstimate: '4–6 phút',
    color: {
      primary: 'violet',
      bg: 'bg-violet-50',
      text: 'text-violet-700',
      border: 'border-violet-200',
      accent: 'bg-violet-600',
    },
    iconName: 'HeartHandshake',
    tagline: 'Đồng cảm không phán xét, nhận diện cảm xúc ẩn giấu và đồng hành tin cậy.',
    introduction:
      'Nhiệm vụ tại trạm này giúp bạn thử sức với năng lực trí tuệ cảm xúc (EQ): nhận diện cảm xúc của bản thân và người khác, đồng hành cùng bạn bè vượt qua khó khăn tâm lý tuổi học trò mà không áp đặt hay phán xét.',
    competencyFocus: [
      'Nhận diện cảm xúc đa tầng (Emotional literacy)',
      'Thấu cảm không phán xét (Non-judgmental empathy)',
      'Hỗ trợ trao quyền tự chủ (Empowerment support)',
    ],
    strengthsReflectionOptions: [
      'Em dễ dàng nhận ra khi một người bạn đang buồn dù bạn ấy cố cười',
      'Bạn bè thường tìm đến em khi cần một nơi an toàn để tâm sự',
      'Em biết cách giữ kín bí mật và sự riêng tư của người khác',
      'Em có sự kiên nhẫn khi lắng nghe người khác khóc hay giãi bày',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Giải mã nụ cười gượng của bạn cùng bàn',
        description:
          'Sau khi cô trả bài kiểm tra Toán, bạn cùng bàn nhận điểm kém hơn kỳ vọng nhiều. Bạn ấy gấp vội bài thi lại, cười bảo: "Ối dồi, tớ chẳng quan tâm đâu, điểm số thôi mà!". Tuy nhiên tay bạn ấy đang run nhẹ và mắt nhìn chăm chú xuống mặt bàn. Cảm xúc thật sự bạn ấy đang trải qua là gì?',
        scenarioContext:
          'Ngôn ngữ cơ thể và cơ chế phòng vệ tâm lý (hài hước hóa để che giấu sự tổn thương).',
        type: 'scenario_choice',
        options: [
          {
            id: 'emp1_a',
            text: 'Bạn ấy thực sự cảm thấy thoải mái và vui vẻ như lời bạn ấy nói',
            isCorrect: false,
            score: 1,
            explanation:
              'Lời nói bên ngoài đang đối nghịch hoàn toàn với ngôn ngữ cơ thể (tay run, mắt cụp xuống).',
          },
          {
            id: 'emp1_b',
            text: 'Bạn ấy đang cảm thấy xấu hổ, thất vọng và bất an, nhưng dùng nụ cười để che giấu nỗi sợ bị người khác thương hại hay đánh giá',
            isCorrect: true,
            score: 3,
            explanation:
              'Trực giác thấu cảm tuyệt vời! Bạn đã nhìn thấu cơ chế phòng vệ của tâm lý: khi bị tổn thương, người ta thường cố tạo vỏ bọc vô tư để bảo vệ lòng tự trọng.',
          },
          {
            id: 'emp1_c',
            text: 'Bạn ấy đang tức giận với cô giáo chấm bài khắt khe',
            isCorrect: false,
            score: 1,
            explanation:
              'Biểu hiện run tay và nhìn xuống là dấu hiệu điển hình của sự xấu hổ và thất vọng hướng vào bản thân chứ không phải sự công kích ra ngoài.',
          },
        ],
      },
      {
        stepNumber: 2,
        title: 'Trao gửi sự hiện diện an toàn',
        description:
          'Trong tình huống trên, hành động nào của bạn thể hiện sự hỗ trợ tinh tế và đúng đắn nhất vào giờ ra chơi?',
        scenarioContext:
          'Tránh so sánh điểm số, tránh khuyên bảo ồn ào trước mặt đám đông.',
        type: 'single_choice',
        options: [
          {
            id: 'emp2_a',
            text: 'Hét to: "Điểm của cậu bao nhiêu để tớ xem cô chấm đúng không nào!"',
            isCorrect: false,
            score: 1,
            explanation:
              'Hành vi này chạm vào nỗi đau riêng tư và làm bạn ấy càng thêm ngượng ngùng.',
          },
          {
            id: 'emp2_b',
            text: 'Không gặng hỏi hay phán xét; nhẹ nhàng rủ bạn cùng đi dạo uống nước, hoặc kín đáo đưa một mẩu giấy nhỏ: "Nếu cậu cần ai ngồi cùng hoặc muốn nói chuyện, tớ luôn ở đây nhé."',
            isCorrect: true,
            score: 3,
            explanation:
              'Sự nâng đỡ vô giá! Bạn trao cho bạn mình quyền riêng tư và thời gian thở, đồng thời báo hiệu rằng bạn luôn là điểm tựa an toàn vô điều kiện khi bạn ấy sẵn sàng.',
          },
          {
            id: 'emp2_c',
            text: 'Khoe bài điểm cao của mình rồi bảo: "Bài này dễ ợt mà sao cậu lại làm sai?"',
            isCorrect: false,
            score: 1,
            explanation:
              'Sự thiếu tinh tế này sẽ cứa thêm một vết thương sâu vào lòng tự trọng của bạn mình.',
          },
        ],
      },
      {
        stepNumber: 3,
        title: 'Hỗ trợ trao quyền: Khi bạn đứng trước ngã rẽ chọn ban học',
        description:
          'Bạn thân tâm sự: "Gia đình muốn tớ theo Ban Tự nhiên (A), nhưng tớ lại đam mê Văn học và Nghệ thuật (D). Tớ hoang mang quá, cậu quyết định hộ tớ nên chọn ban nào đi!". Bạn nên phản hồi thế nào để giúp bạn tự tìm ra câu trả lời cho chính mình?',
        scenarioContext:
          'Nguyên tắc tham vấn tâm lý: Không quyết định thay cuộc đời của người khác, giúp họ làm rõ giá trị bản thân.',
        type: 'single_choice',
        options: [
          {
            id: 'emp3_a',
            text: '"Theo ban A đi, sau này kiếm được nhiều tiền hơn!"',
            isCorrect: false,
            score: 1,
            explanation:
              'Áp đặt định kiến của bản thân vào tương lai của người khác.',
          },
          {
            id: 'emp3_b',
            text: '"Tớ không thể quyết định thay cuộc đời của cậu được, nhưng tớ có thể cùng cậu vạch ra bảng so sánh: Điều gì làm cậu hạnh phúc nhất khi học? Nỗi sợ lớn nhất của cậu với mỗi lựa chọn là gì? Và tụi mình cùng tìm cách chuẩn bị một buổi trò chuyện chân thành với bố mẹ nhé."',
            isCorrect: true,
            score: 3,
            explanation:
              'Trình độ tham vấn bậc thầy! Giúp bạn mình giữ vững quyền tự chủ (Autonomy), soi chiếu nội tâm và trang bị dũng khí đối thoại tích cực với gia đình.',
          },
          {
            id: 'emp3_c',
            text: '"Cứ chống đối bố mẹ đi, mình thích gì thì mình làm nấy."',
            isCorrect: false,
            score: 1,
            explanation:
              'Lời xúi giục cực đoan có thể làm trầm trọng thêm xung đột gia đình.',
          },
        ],
      },
    ],
    bonusChallenge: {
      title: 'Thử thách nâng cao: Phân biệt Sự thương hại (Pity) và Lòng thấu cảm (Empathy)',
      description:
        'Nhà tâm lý học Brené Brown từng nói về sự khác biệt giữa hai khái niệm này khi một người rơi xuống chiếc hố sâu tuyệt vọng.',
      question: 'Phản ứng nào thể hiện trọn vẹn tinh thần "Lòng thấu cảm"?',
      options: [
        {
          id: 'emp_bonus_a',
          text: 'Trèo xuống hố, ngồi cạnh người đó trong bóng tối và nói: "Tôi biết ở đây rất lạnh và cô đơn. Bạn không phải ở đây một mình, tôi cùng ngồi với bạn."',
          isCorrect: true,
          score: 3,
          explanation:
            'Chính xác! Lòng thấu cảm là sự dũng cảm kết nối từ trái tim đến trái tim, sẵn sàng chịu đựng sự không thoải mái để cùng san sẻ cảm xúc với người khác.',
        },
        {
          id: 'emp_bonus_b',
          text: 'Đứng trên miệng hố nhìn xuống và tặc lưỡi: "Tội nghiệp bạn quá, dưới đó kinh khủng thật đấy!"',
          isCorrect: false,
          score: 1,
          explanation:
            'Đây là sự thương hại (Pity) mang tính bề trên, tạo khoảng cách chia cắt thay vì gắn kết.',
        },
        {
          id: 'emp_bonus_c',
          text: 'Ném một cuốn sách "Bí quyết lạc quan" xuống hố rồi bỏ đi',
          isCorrect: false,
          score: 1,
          explanation:
            'Sự tích cực độc hại (Toxic Positivity) làm người khác cảm thấy nỗi đau của mình bị coi thường.',
        },
      ],
      learningInsight:
        'Thấu hiểu và hỗ trợ người khác là năng lực kết nối con người sâu sắc nhất – nền tảng cho mọi ngành nghề dịch vụ, giáo dục, tâm lý và lãnh đạo cộng đồng.',
    },
  },
];
