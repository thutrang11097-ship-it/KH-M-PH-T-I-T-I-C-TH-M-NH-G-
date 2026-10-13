import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STATIONS } from '../data/stationsData';
import { StationIcon } from './StationIcon';
import {
  User,
  Printer,
  RotateCcw,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  Target,
  BookOpen,
  Heart,
  BarChart3,
  ShieldCheck,
  Edit3,
  Calendar,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const {
    userProfile,
    completedStationsCount,
    totalStationsCount,
    startStation,
    resetStation,
    resetAllData,
    updateProfileDetails,
    setView,
  } = useApp();

  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [studentNameInput, setStudentNameInput] = useState(userProfile.studentName || '');
  const [goalInput, setGoalInput] = useState(userProfile.customGoalForNextWeek || '');
  const [personalNotesInput, setPersonalNotesInput] = useState(userProfile.personalNotes || '');
  const [selectedGrowthCompetencies, setSelectedGrowthCompetencies] = useState<string[]>(
    userProfile.targetCompetenciesToGrow || []
  );

  const completedResults = Object.values(userProfile.stationResults).filter(
    (res) => res && res.completed
  );

  // Group stations into Favorites (Interest >= 4)
  const favoriteStations = completedResults
    .filter((r) => r.reflection && r.reflection.interestRating >= 4)
    .map((r) => STATIONS.find((s) => s.id === r.stationId)!)
    .filter(Boolean);

  // Growth opportunities (Difficulty >= 4)
  const challengeStations = completedResults
    .filter((r) => r.reflection && r.reflection.difficultyRating >= 4)
    .map((r) => STATIONS.find((s) => s.id === r.stationId)!)
    .filter(Boolean);

  // All demonstrated competencies across completed stations
  const allDemonstratedCompetencies = Array.from(
    new Set(
      completedResults.flatMap((r) => {
        const station = STATIONS.find((s) => s.id === r.stationId);
        return station ? station.competencyFocus : [];
      })
    )
  );

  // Candidate competencies for user to pick to grow
  const growthCompetencyPool = [
    'Tư duy phân tích dữ kiện & loại trừ mâu thuẫn',
    'Tư duy quy trình tuần tự & thuật toán gỡ lỗi',
    'Thiết kế thí nghiệm có nhóm đối chứng khoa học',
    'Phân cấp thị giác & cảm thụ bố cục thẩm mỹ',
    'Cấu trúc bài nói thuyết phục mạch lạc (PREP)',
    'Hóa giải xung đột nhóm & đàm phán Win-Win',
    'Lập kế hoạch tiến độ & kiểm soát quỹ dự phòng rủi ro',
    'Thấu cảm bạn bè không phán xét & lắng nghe tích cực',
  ];

  const toggleGrowthCompetency = (comp: string) => {
    const updated = selectedGrowthCompetencies.includes(comp)
      ? selectedGrowthCompetencies.filter((c) => c !== comp)
      : [...selectedGrowthCompetencies, comp];
    setSelectedGrowthCompetencies(updated);
    updateProfileDetails({ targetCompetenciesToGrow: updated });
  };

  const handleSaveProfileHeader = () => {
    updateProfileDetails({
      studentName: studentNameInput.trim(),
      customGoalForNextWeek: goalInput.trim(),
      personalNotes: personalNotesInput.trim(),
      targetCompetenciesToGrow: selectedGrowthCompetencies,
    });
    setIsEditingGoal(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetConfirm = () => {
    if (
      window.confirm(
        'Bạn có chắc chắn muốn làm mới toàn bộ hồ sơ không? Mọi kết quả sẽ được xóa trên trình duyệt này.'
      )
    ) {
      resetAllData();
    }
  };

  // Next recommended activities based on interest & completion
  const suggestedNextActivities = [
    {
      title: 'Tham gia Câu lạc bộ chuyên môn tại trường',
      desc: favoriteStations.length > 0
        ? `Dựa trên sở thích của bạn với ${favoriteStations[0].shortTitle}, hãy tìm hiểu CLB ${favoriteStations[0].category.split('&')[0]} của trường THPT.`
        : 'Đăng ký thử sức vào 1 CLB học thuật hoặc nghệ thuật của trường khối 10.',
      icon: 'BookOpen',
    },
    {
      title: 'Áp dụng một công cụ tư duy vào tuần học tới',
      desc: 'Thử nghiệm mô hình PREP khi phát biểu bài trên lớp, hoặc vẽ sơ đồ ma trận ưu tiên công việc trước kỳ kiểm tra giữa kỳ.',
      icon: 'Target',
    },
    {
      title: 'Trò chuyện hướng nghiệp cùng Giáo viên / Chuyên gia',
      desc: 'Mang bản hồ sơ này trao đổi cùng giáo viên chủ nhiệm hoặc cô phụ trách Hoạt động trải nghiệm để thảo luận về định hướng chọn tổ hợp môn lớp 11.',
      icon: 'Sparkles',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      {/* Top Action Toolbar (No-Print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 no-print">
        <button
          onClick={() => setView('home')}
          className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span>← Quay lại 8 Trạm khám phá</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>In / Lưu hồ sơ PDF</span>
          </button>

          <button
            onClick={handleResetConfirm}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer"
            title="Làm mới toàn bộ dữ liệu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm mới hồ sơ</span>
          </button>
        </div>
      </div>

      {/* Official Certificate / Report Header (Printed and Visual) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full pointer-events-none" />

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Chương trình Giáo dục phổ thông 2018 · Hoạt động trải nghiệm, hướng nghiệp
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                HỒ SƠ KHÁM PHÁ BẢN THÂN – THẾ MẠNH LỚP 10
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Bản đồ nhận diện bước đầu về điểm mạnh, thiên hướng hứng thú và phong cách tư duy.
              </p>
            </div>

            {/* Student Name & Class input badge */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:min-w-[260px] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-semibold">Thông tin học sinh:</span>
                <button
                  onClick={() => setIsEditingGoal(!isEditingGoal)}
                  className="text-teal-700 hover:text-teal-800 font-semibold no-print cursor-pointer"
                >
                  {isEditingGoal ? 'Xong' : 'Sửa tên'}
                </button>
              </div>

              {isEditingGoal ? (
                <div className="space-y-2 pt-1 no-print">
                  <input
                    type="text"
                    value={studentNameInput}
                    onChange={(e) => setStudentNameInput(e.target.value)}
                    placeholder="Họ và tên (ví dụ: Nguyễn Minh Anh)"
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleSaveProfileHeader}
                    className="w-full py-1.5 bg-teal-600 text-white rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Lưu tên
                  </button>
                </div>
              ) : (
                <div className="text-sm font-bold text-slate-900">
                  {studentNameInput || 'Học sinh Khối 10 THPT'}
                </div>
              )}

              <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60">
                <span>Số trạm đã hoàn thành:</span>
                <span className="font-mono font-bold text-teal-700">
                  {completedStationsCount} / {totalStationsCount} trạm
                </span>
              </div>
            </div>
          </div>

          {/* Core Pedagogical Notice (Anti-Labeling Guarantee) */}
          <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-4 text-xs sm:text-sm text-teal-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold">
                Tuyên bố sư phạm & Đạo đức hướng nghiệp:
              </strong>
              <p className="text-teal-900 text-xs leading-relaxed">
                Hồ sơ này không nhằm mục đích "dán nhãn" bạn là người giỏi hay kém, cũng không phán xét bạn
                phù hợp tuyệt đối với bất kỳ ngành nghề duy nhất nào. Tốc độ làm bài hoặc điểm số trong một trạm
                chỉ phản ánh mức độ quen thuộc hiện tại của bạn. Tiềm năng của học sinh tuổi 16 là rộng mở và
                luôn phát triển qua quá trình học tập và rèn luyện tích cực!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Dimensional Comparative Visualization */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-teal-600" />
              <span>Biểu đồ so sánh 3 trục: Kết quả nhiệm vụ vs Hứng thú vs Độ thử thách</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Phân biệt rõ ràng ba khía cạnh để bạn có cái nhìn khách quan về vùng an toàn và vùng phát triển của mình.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-3 h-3 rounded bg-teal-500 inline-block" />
              Nhiệm vụ (%)
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
              Hứng thú (1-5)
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-3 h-3 rounded bg-indigo-500 inline-block" />
              Độ thử thách (1-5)
            </span>
          </div>
        </div>

        {/* Bar chart rows for completed stations */}
        {completedResults.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-3">
            <Compass className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm text-slate-600 font-medium">
              Bạn chưa hoàn thành trạm nào.
            </p>
            <p className="text-xs text-slate-400">
              Hãy hoàn thành ít nhất 1 trạm để biểu đồ hiển thị kết quả phân tích cá nhân.
            </p>
            <button
              onClick={() => startStation(STATIONS[0].id)}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-500 transition-colors cursor-pointer"
            >
              <span>Trải nghiệm Trạm 1 ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-5 pt-2">
            {STATIONS.map((station) => {
              const res = userProfile.stationResults[station.id];
              if (!res || !res.completed) return null;

              const taskPercentage = Math.round((res.score / res.maxScore) * 100);
              const interestRating = res.reflection?.interestRating || 3;
              const interestPercentage = (interestRating / 5) * 100;
              const difficultyRating = res.reflection?.difficultyRating || 3;
              const difficultyPercentage = (difficultyRating / 5) * 100;

              return (
                <div
                  key={station.id}
                  className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${station.color.accent}`} />
                      {station.title}
                    </span>
                    <button
                      onClick={() => startStation(station.id)}
                      className="text-xs text-teal-700 hover:underline no-print cursor-pointer"
                    >
                      Làm lại trạm
                    </button>
                  </div>

                  {/* 3 comparative bars */}
                  <div className="space-y-1.5 text-xs">
                    {/* Bar 1: Task score */}
                    <div className="flex items-center gap-3">
                      <span className="w-28 text-slate-500 text-[11px] shrink-0">
                        Nhiệm vụ đạt:
                      </span>
                      <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${taskPercentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-right font-mono font-bold text-teal-800 text-[11px]">
                        {taskPercentage}%
                      </span>
                    </div>

                    {/* Bar 2: Interest */}
                    <div className="flex items-center gap-3">
                      <span className="w-28 text-slate-500 text-[11px] shrink-0">
                        Mức độ hứng thú:
                      </span>
                      <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${interestPercentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-right font-mono font-bold text-amber-800 text-[11px]">
                        {interestRating}/5 sao
                      </span>
                    </div>

                    {/* Bar 3: Challenge */}
                    <div className="flex items-center gap-3">
                      <span className="w-28 text-slate-500 text-[11px] shrink-0">
                        Độ thử thách:
                      </span>
                      <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${difficultyPercentage}%` }}
                        />
                      </div>
                      <span className="w-12 text-right font-mono font-bold text-indigo-800 text-[11px]">
                        Mức {difficultyRating}/5
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid: Completed Stations with Evidence & Favorite Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Minh chứng nhiệm vụ & Biểu hiện năng lực */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Minh chứng nhiệm vụ & Năng lực thể hiện
            </h3>
          </div>

          {completedResults.length === 0 ? (
            <p className="text-xs text-slate-500 italic">
              Chưa có dữ liệu. Hãy tham gia thử thách để ghi lại minh chứng!
            </p>
          ) : (
            <div className="space-y-4">
              {completedResults.map((res) => {
                const station = STATIONS.find((s) => s.id === res.stationId);
                if (!station) return null;

                return (
                  <div
                    key={station.id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{station.title}</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đã xác nhận
                      </span>
                    </div>

                    <div className="text-slate-600 space-y-1">
                      <span className="font-medium text-slate-700 block">Năng lực rèn luyện:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[11px]">
                        {station.competencyFocus.map((cf, i) => (
                          <li key={i}>{cf}</li>
                        ))}
                      </ul>
                    </div>

                    {res.reflection?.strengthsIdentified && res.reflection.strengthsIdentified.length > 0 && (
                      <div className="pt-1 border-t border-slate-200/60 text-slate-700">
                        <span className="font-semibold text-slate-800">Em tự thấy làm tốt: </span>
                        <span>{res.reflection.strengthsIdentified.join(', ')}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Lĩnh vực yêu thích & Vùng phát triển */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Lĩnh vực yêu thích & Vùng thử thách mới
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            {/* Favorites */}
            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 space-y-2">
              <span className="font-bold text-amber-900 block text-xs uppercase tracking-wider">
                🌟 Lĩnh vực bạn hứng thú nhất (4–5 sao):
              </span>
              {favoriteStations.length > 0 ? (
                <ul className="space-y-1.5">
                  {favoriteStations.map((st) => (
                    <li key={st.id} className="text-slate-800 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{st.title}</span>
                      <span className="text-slate-500 text-[11px]">({st.category})</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 italic">
                  Chưa ghi nhận trạm nào đạt mức hứng thú cao. Hãy khám phá thêm các trạm khác nhé!
                </p>
              )}
            </div>

            {/* Challenging areas */}
            <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200/80 space-y-2">
              <span className="font-bold text-indigo-900 block text-xs uppercase tracking-wider">
                🏔️ Lĩnh vực mang tính thử thách cao (Mức 4–5):
              </span>
              {challengeStations.length > 0 ? (
                <ul className="space-y-1.5">
                  {challengeStations.map((st) => (
                    <li key={st.id} className="text-slate-800 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{st.title}</span>
                      <span className="text-slate-500 text-[11px]">
                        (Đây là cơ hội tuyệt vời để học hỏi điều mới)
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 italic">
                  Các nhiệm vụ đã trải nghiệm đều trong tầm kiểm soát nhẹ nhàng của bạn.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Target Competencies to Grow (Interactive Selector) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span>Những năng lực em chủ động muốn phát triển thêm</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tích chọn 2–4 năng lực bạn muốn ưu tiên rèn luyện trong năm học lớp 10 này:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {growthCompetencyPool.map((comp, idx) => {
            const isSelected = selectedGrowthCompetencies.includes(comp);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleGrowthCompetency(comp)}
                className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-950 font-semibold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <span>{comp}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Suggested 3 Next Activities for Grade 10 */}
      <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-slate-50 rounded-3xl p-6 sm:p-8 border border-teal-200 shadow-sm space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Hành động tiếp theo
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
            Gợi ý 3 hoạt động tiếp theo để học sinh thử sức
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Chuyển hóa nhận thức về bản thân thành những trải nghiệm học đường sinh động.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {suggestedNextActivities.map((act, i) => (
            <div
              key={i}
              className="bg-white/90 p-5 rounded-2xl border border-teal-100 shadow-sm space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-sm leading-snug mb-1">
                  {act.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self Insights & Weekly Training Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box 1: Điều em hiểu thêm về bản thân */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Điều em hiểu thêm về bản thân
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60 text-slate-700 leading-relaxed space-y-2">
              <p>
                {favoriteStations.length > 0
                  ? `Em nhận thấy mình cảm thấy tràn đầy năng lượng nhất khi được làm việc với ${favoriteStations.map((s) => s.shortTitle).join(', ')}.`
                  : 'Em đang trong quá trình tiếp tục thử nghiệm để tìm ra lĩnh vực thực sự thôi thúc mình.'}
              </p>
              <p>
                {challengeStations.length > 0
                  ? `Khi gặp những nhiệm vụ khó như ${challengeStations.map((s) => s.shortTitle).join(', ')}, em hiểu rằng mình chỉ cần thêm thời gian rèn luyện phương pháp.`
                  : 'Em sẵn sàng đón nhận những bài toán phức tạp hơn ở phía trước!'}
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-semibold text-slate-700 block">
                Ghi chú thêm suy nghĩ riêng của em:
              </label>
              <textarea
                value={personalNotesInput}
                onChange={(e) => {
                  setPersonalNotesInput(e.target.value);
                  updateProfileDetails({ personalNotes: e.target.value });
                }}
                rows={3}
                placeholder="Viết điều em tâm đắc nhất về bản thân sau buổi trải nghiệm này..."
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Box 2: Mục tiêu rèn luyện trong tuần tới */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Mục tiêu rèn luyện trong tuần tới
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <p className="text-xs text-slate-600 leading-relaxed">
              Chọn 1 hành động nhỏ, cụ thể và khả thi để thực hiện ngay trong các giờ học hoặc sinh hoạt lớp tuần sau:
            </p>

            <textarea
              value={goalInput}
              onChange={(e) => {
                setGoalInput(e.target.value);
                updateProfileDetails({ customGoalForNextWeek: e.target.value });
              }}
              rows={4}
              placeholder="Ví dụ: Trong tuần tới, em sẽ chủ động giơ tay phát biểu theo mô hình PREP ít nhất 2 lần và dành 15 phút lắng nghe bạn cùng bàn khi bạn gặp khó khăn..."
              className="w-full p-3.5 rounded-xl border border-teal-200 bg-teal-50/30 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 leading-relaxed font-medium"
            />

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] text-slate-500 block w-full mb-1">
                Gợi ý chọn nhanh mục tiêu:
              </span>
              <button
                type="button"
                onClick={() => {
                  const g = 'Lắng nghe trọn vẹn không ngắt lời khi làm việc nhóm môn Lịch sử / Địa lý.';
                  setGoalInput(g);
                  updateProfileDetails({ customGoalForNextWeek: g });
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
              >
                + Lắng nghe nhóm tích cực
              </button>
              <button
                type="button"
                onClick={() => {
                  const g = 'Lập danh sách việc cần làm (To-do list) và kiểm soát thời gian học bài mỗi tối.';
                  setGoalInput(g);
                  updateProfileDetails({ customGoalForNextWeek: g });
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
              >
                + Lập thời gian biểu cá nhân
              </button>
              <button
                type="button"
                onClick={() => {
                  const g = 'Thử thiết kế 1 slide thuyết trình hoặc poster cổ động với bố cục thông thoáng.';
                  setGoalInput(g);
                  updateProfileDetails({ customGoalForNextWeek: g });
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] cursor-pointer"
              >
                + Thực hành thiết kế slide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Section for Printed Report (Visible when printed) */}
      <div className="hidden print:block pt-10 border-t border-slate-300 text-xs">
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="font-bold text-slate-800">Ý kiến của Giáo viên Chủ nhiệm / Cố vấn</p>
            <p className="text-[11px] text-slate-500 italic mt-1">(Ký và ghi rõ họ tên)</p>
            <div className="h-16" />
          </div>
          <div>
            <p className="font-bold text-slate-800">Chữ ký của Học sinh</p>
            <p className="text-[11px] text-slate-500 italic mt-1">(Ký xác nhận cam kết rèn luyện)</p>
            <div className="h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};
