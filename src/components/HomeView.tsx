import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STATIONS } from '../data/stationsData';
import { StationIcon } from './StationIcon';
import { StationId } from '../types';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  ShieldCheck,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Award,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { startStation, userProfile, completedStationsCount, totalStationsCount, setView } =
    useApp();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const progressPercentage = Math.round((completedStationsCount / totalStationsCount) * 100);

  const filteredStations = STATIONS.filter((station) => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'stem') {
      return ['logic_math', 'tech_algo', 'science_inquiry'].includes(station.id);
    }
    if (activeCategoryFilter === 'creative') {
      return ['creative_design', 'language_expression'].includes(station.id);
    }
    if (activeCategoryFilter === 'social') {
      return ['comm_collab', 'org_planning', 'empathy_support'].includes(station.id);
    }
    return true;
  });

  const handleStartFirstUncompleted = () => {
    const uncompleted = STATIONS.find(
      (s) => !userProfile.stationResults[s.id] || !userProfile.stationResults[s.id].completed
    );
    if (uncompleted) {
      startStation(uncompleted.id);
    } else {
      startStation(STATIONS[0].id);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-xl">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Môn Hoạt động trải nghiệm, hướng nghiệp Lớp 10 THPT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            KHÁM PHÁ TÔI – <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-200">
              TÔI CÓ THẾ MẠNH GÌ?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            “Thử một điều mới – hiểu thêm về chính mình”. Không chỉ là một bài trắc nghiệm tính cách thông thường,
            bạn sẽ trực tiếp giải quyết 8 thử thách tương tác thực tế từ logic, công nghệ, sáng tạo đến tổ chức và thấu cảm.
          </p>

          {/* Progress Strip */}
          <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-5 border border-slate-700/80 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
              <span className="text-slate-300 font-medium flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-400" />
                Tiến độ hành trình của bạn:
              </span>
              <span className="font-mono font-bold text-teal-300">
                {completedStationsCount} / {totalStationsCount} trạm ({progressPercentage}%)
              </span>
            </div>

            {/* Custom Progress Bar */}
            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${Math.max(progressPercentage, 4)}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Không cần tài khoản · Dữ liệu lưu an toàn trên máy
              </span>
              <span className="text-slate-400">Tự do chọn trạm không cần theo thứ tự</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleStartFirstUncompleted}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-sm sm:text-base hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/25 active:scale-[0.98] cursor-pointer"
            >
              <span>{completedStationsCount === 0 ? 'Bắt đầu khám phá' : 'Tiếp tục khám phá'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setView('profile')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 transition-all cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-teal-400" />
              <span>Xem hồ sơ cá nhân</span>
            </button>

            <button
              onClick={() => setView('guide')}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white transition-colors text-xs sm:text-sm font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Cách dùng trên lớp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Guiding Principles Card */}
      <section className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Nhiệm vụ thực tế, không phán xét</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mỗi trạm là một tình huống giả lập (3–7 phút). Không đánh giá ai "kém cỏi", mà giúp bạn thấy cách mình tư duy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Không đo bằng tốc độ bấm nhanh</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quan trọng là bạn suy luận như thế nào. Sau mỗi câu hỏi đều có phần giải thích cơ chế tư duy rõ ràng.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Tự đánh giá & Phản tư đa chiều</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Phân biệt rõ: Mức độ làm bài vs Mức độ yêu thích vs Độ thử thách. Giúp bạn chọn hướng đi cho năm lớp 11–12.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stations Explorer Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              8 Trạm trải nghiệm khám phá bản thân
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Nhấp vào trạm bất kỳ để thử sức. Bạn có thể làm theo thứ tự tùy ý và làm lại bất cứ lúc nào.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto text-xs font-medium">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả (8)
            </button>
            <button
              onClick={() => setActiveCategoryFilter('stem')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'stem'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Toán & Công nghệ & Khoa học
            </button>
            <button
              onClick={() => setActiveCategoryFilter('creative')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'creative'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thiết kế & Ngôn ngữ
            </button>
            <button
              onClick={() => setActiveCategoryFilter('social')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'social'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Giao tiếp, Tổ chức & Thấu cảm
            </button>
          </div>
        </div>

        {/* Station Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredStations.map((station, index) => {
            const stationResult = userProfile.stationResults[station.id];
            const isCompleted = stationResult && stationResult.completed;
            const reflection = stationResult?.reflection;

            return (
              <div
                key={station.id}
                className={`group relative flex flex-col justify-between rounded-2xl bg-white p-5 border transition-all duration-200 hover:shadow-md ${
                  isCompleted
                    ? 'border-emerald-200 ring-1 ring-emerald-100'
                    : 'border-slate-200 hover:border-teal-300'
                }`}
              >
                <div>
                  {/* Top metadata strip (Zero-pill discipline: unboxed clean text) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium text-slate-600">{station.category}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {station.timeEstimate}
                    </span>
                  </div>

                  {/* Header: Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${station.color.bg} ${station.color.text} border ${station.color.border}`}
                    >
                      <StationIcon name={station.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors text-base leading-snug">
                        {station.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline / Introduction */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {station.tagline}
                  </p>

                  {/* Competency tags (clean typographic list) */}
                  <div className="text-[11px] text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-semibold text-slate-700 block mb-1">Biểu hiện năng lực:</span>
                    <ul className="space-y-0.5 list-disc list-inside text-slate-600">
                      {station.competencyFocus.slice(0, 2).map((comp, i) => (
                        <li key={i} className="truncate">{comp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom: Status & Action Button */}
                <div className="pt-3 border-t border-slate-100 mt-2">
                  {isCompleted ? (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Đã hoàn thành
                        </span>
                        {reflection && (
                          <span className="text-[11px] text-slate-500">
                            Hứng thú: <strong className="text-amber-600 font-mono">{reflection.interestRating}/5</strong>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startStation(station.id)}
                          className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3 text-slate-500" />
                          <span>Thử lại trạm</span>
                        </button>
                        <button
                          onClick={() => setView('profile')}
                          className="py-2 px-2.5 text-xs font-semibold rounded-lg text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors flex items-center justify-center cursor-pointer"
                          title="Xem kết quả trong hồ sơ"
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => startStation(station.id)}
                      className="w-full py-2.5 px-3.5 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-teal-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] cursor-pointer"
                    >
                      <span>Vào trải nghiệm</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next Step / Callout Strip */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-indigo-50 border border-teal-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h3 className="text-lg font-bold text-slate-900">
            {completedStationsCount === 0
              ? 'Sẵn sàng bắt đầu trạm đầu tiên?'
              : `Bạn đã khám phá ${completedStationsCount} trạm! Xem bức tranh thế mạnh hiện tại?`}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hồ sơ tự động tổng hợp những kỹ năng bạn làm tốt, mức độ hứng thú và các hoạt động trải nghiệm gợi ý phù hợp cho học sinh lớp 10 THPT.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setView('profile')}
            className="px-5 py-3 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-slate-800 transition-all shadow-md cursor-pointer flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-teal-400" />
            <span>Xem hồ sơ khám phá bản thân</span>
          </button>
        </div>
      </section>
    </div>
  );
};
