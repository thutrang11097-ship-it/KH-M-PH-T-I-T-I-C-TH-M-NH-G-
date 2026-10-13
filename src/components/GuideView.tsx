import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Smartphone,
  Laptop,
  Share2,
  Copy,
  Check,
  BookOpen,
  Users,
  ShieldCheck,
  Printer,
  Compass,
  ArrowRight,
  ExternalLink,
  QrCode,
  CheckCircle2,
} from 'lucide-react';

export const GuideView: React.FC = () => {
  const { setView } = useApp();
  const [copied, setCopied] = useState(false);

  // Current or public app URL
  const publicUrl = window.location.origin;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(publicUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      {/* Top breadcrumb */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
        <button
          onClick={() => setView('home')}
          className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors py-1 cursor-pointer"
        >
          <span>← Về trang chủ</span>
        </button>
        <span className="font-semibold text-teal-700">Tài liệu Hướng dẫn Triển khai THPT</span>
      </div>

      {/* Hero Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Dành cho Giáo viên & Học sinh Khối 10</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          Hướng Dẫn Sử Dụng & Kiểm Thử Trên Điện Thoại
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          Tài liệu hướng dẫn cách mở link công khai cho toàn bộ học sinh trong khối,
          kiểm thử trên điện thoại di động và tổ chức một tiết Hoạt động trải nghiệm, hướng nghiệp hiệu quả.
        </p>

        {/* Public Share Box */}
        <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-teal-400 flex items-center gap-1.5">
              <Share2 className="w-4 h-4" />
              Đường link công khai để học sinh truy cập:
            </span>
            <span>Không cần đăng nhập tài khoản</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              readOnly
              value={publicUrl}
              className="flex-1 bg-slate-800 border border-slate-700 text-teal-200 text-xs sm:text-sm font-mono px-3.5 py-2.5 rounded-xl focus:outline-none select-all"
            />
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-teal-400 transition-colors shadow-sm cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Sao chép link gửi Zalo/Lớp</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            💡 Thầy cô hoặc ban cán sự có thể dán đường link này vào nhóm Zalo/Facebook lớp 10 hoặc tạo mã QR dán lên bảng máy chiếu.
          </p>
        </div>
      </div>

      {/* Part 1: How to test on phones */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              1. Cách kiểm thử và trải nghiệm mượt mà trên Điện thoại
            </h2>
            <p className="text-xs text-slate-500">
              Tương thích tốt trên cả iOS (Safari) và Android (Chrome, Cốc Cốc, Zalo Browser).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-slate-900">Mở link trên trình duyệt</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Dán đường link vào trình duyệt Safari (iPhone) hoặc Chrome (Android). Giao diện tự động co giãn tối ưu cho màn hình cảm ứng dọc.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-slate-900">Thao tác chạm 1 chạm</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Mỗi câu hỏi và nấc thang phản tư đều thiết kế phím bấm lớn (≥44px), giúp bạn chọn đáp án và đọc phân tích suy luận rất dễ dàng.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-slate-900">Tự động ghi nhớ tiến độ</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Nếu vô tình tắt trình duyệt hoặc có cuộc gọi, tiến độ trạm đã làm vẫn được lưu nguyên vẹn trên điện thoại của bạn.
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Structure of a 45-minute lesson */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              2. Gợi ý tiến trình Tiết học Trải nghiệm Hướng nghiệp (45 phút)
            </h2>
            <p className="text-xs text-slate-500">
              Kế hoạch bài dạy mẫu dành cho giáo viên bộ môn hoặc giáo viên chủ nhiệm.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="font-mono font-bold text-teal-700 shrink-0 w-16">05 phút</div>
            <div>
              <span className="font-bold text-slate-900 block">Khởi động & Quét mã truy cập:</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Giáo viên chiếu mã link hoặc QR lên màn hình. Giới thiệu tinh thần: "Thử một điều mới – hiểu thêm về chính mình; không chấm điểm giỏi/kém".
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="font-mono font-bold text-teal-700 shrink-0 w-16">25 phút</div>
            <div>
              <span className="font-bold text-slate-900 block">Tự do khám phá các trạm trải nghiệm:</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Mỗi học sinh chọn tối thiểu 3–4 trạm theo sở thích (hoặc thử sức cả 8 trạm). Hoàn thành nhiệm vụ thực tế và điền 4 câu hỏi phản tư sau mỗi trạm.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="font-mono font-bold text-teal-700 shrink-0 w-16">10 phút</div>
            <div>
              <span className="font-bold text-slate-900 block">Mở Hồ sơ cá nhân & Thảo luận cặp đôi:</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Hai bạn cùng bàn mở Hồ sơ bản thân, so sánh mức độ hứng thú và các năng lực mình làm tốt. Cùng nhau chọn 1 mục tiêu rèn luyện cho tuần tới.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <div className="font-mono font-bold text-teal-700 shrink-0 w-16">05 phút</div>
            <div>
              <span className="font-bold text-slate-900 block">Tổng kết & Lưu hồ sơ:</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Học sinh bấm nút "In / Lưu hồ sơ PDF" để lưu vào tệp minh chứng học tập cá nhân phục vụ đánh giá môn Hoạt động trải nghiệm, hướng nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Privacy and Reset advice */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Lưu ý về Bảo mật & Thiết bị công cộng</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Ứng dụng tôn trọng tối đa quyền riêng tư của học sinh: <strong>Không yêu cầu tài khoản, không lưu trữ thông tin cá nhân trên máy chủ lạ</strong>.
          Mọi dữ liệu nằm trong bộ nhớ trình duyệt (LocalStorage) của máy tính hoặc điện thoại bạn đang cầm.
          Nếu bạn học tại phòng máy tính chung của trường, bạn chỉ cần bấm nút <strong>“Làm mới hồ sơ”</strong> ở góc trang hồ sơ hoặc dưới chân trang khi kết thúc buổi học để xóa dữ liệu sạch sẽ cho bạn tiếp theo!
        </p>

        <div className="pt-2">
          <button
            onClick={() => setView('home')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-bold text-xs sm:text-sm hover:bg-teal-500 transition-colors shadow-sm cursor-pointer"
          >
            <span>Trở về Trang chủ & Bắt đầu ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
