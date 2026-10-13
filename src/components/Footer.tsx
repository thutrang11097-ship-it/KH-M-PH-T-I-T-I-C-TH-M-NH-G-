import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Compass, Heart, HelpCircle, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setView, resetAllData, completedStationsCount } = useApp();

  const handleResetConfirm = () => {
    if (
      window.confirm(
        'Bạn có chắc chắn muốn xóa toàn bộ kết quả đã lưu và bắt đầu lại từ đầu không? Thao tác này phù hợp khi bạn sử dụng máy tính chung ở phòng máy trường.'
      )
    ) {
      resetAllData();
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 no-print mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <Compass className="w-5 h-5 text-teal-400" />
              <span>KHÁM PHÁ TÔI – TÔI CÓ THẾ MẠNH GÌ?</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              Bộ công cụ trải nghiệm hướng nghiệp và nhận diện điểm mạnh dành riêng cho học sinh lớp 10 THPT trong chương trình Hoạt động trải nghiệm, hướng nghiệp.
            </p>
            <p className="text-slate-400 text-[11px]">
              Khẩu hiệu: <span className="text-teal-300 font-medium">“Thử một điều mới – hiểu thêm về chính mình”</span>
            </p>
          </div>

          {/* Col 2: Storage & Privacy Guarantee */}
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
            <div className="flex items-center gap-2 text-slate-200 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Chính sách Dữ liệu & Quyền riêng tư</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px] mb-3">
              • Hoàn toàn không yêu cầu đăng ký tài khoản hay cung cấp thông tin cá nhân.<br />
              • Dữ liệu bài làm và mức độ phản tư được lưu cục bộ trên trình duyệt thiết bị này (LocalStorage).<br />
              • Không gửi dữ liệu lên máy chủ lạ. An toàn và bảo mật tuyệt đối cho học sinh.
            </p>
            {completedStationsCount > 0 && (
              <button
                onClick={handleResetConfirm}
                className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-rose-200 underline cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Xóa dữ liệu để máy sẵn sàng cho bạn khác</span>
              </button>
            )}
          </div>

          {/* Col 3: Navigation & Teacher note */}
          <div>
            <div className="text-slate-200 font-semibold mb-2">Dành cho Giáo viên & Học sinh</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setView('guide')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
                  <span>Cách tổ chức tiết học trải nghiệm trên lớp</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView('profile')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cách in / xuất hồ sơ khám phá năng lực cá nhân
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Danh sách 8 trạm trải nghiệm thực tế
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © 2026 Chương trình Hoạt động trải nghiệm, hướng nghiệp THPT · Mở cho toàn khối 10.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Tôn trọng tính đa dạng năng lực học sinh</span>
            <span>·</span>
            <span>Không dán nhãn cố định</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
