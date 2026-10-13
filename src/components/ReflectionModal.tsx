import React, { useState } from 'react';
import { StationData, StationReflection } from '../types';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Heart,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Compass,
  Star,
  Flame,
  X,
} from 'lucide-react';

interface ReflectionModalProps {
  station: StationData;
  initialReflection?: StationReflection;
  onClose: () => void;
}

export const ReflectionModal: React.FC<ReflectionModalProps> = ({
  station,
  initialReflection,
  onClose,
}) => {
  const { saveStationReflection, setView, startStation } = useApp();

  const [interestRating, setInterestRating] = useState<number>(
    initialReflection?.interestRating || 4
  );
  const [difficultyRating, setDifficultyRating] = useState<number>(
    initialReflection?.difficultyRating || 3
  );
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>(
    initialReflection?.strengthsIdentified || [station.strengthsReflectionOptions[0]]
  );
  const [nextIntent, setNextIntent] = useState<'retry' | 'practice_more' | 'explore_other'>(
    initialReflection?.nextIntent || 'explore_other'
  );
  const [notes, setNotes] = useState<string>(initialReflection?.notes || '');

  const toggleStrength = (strength: string) => {
    setSelectedStrengths((prev) =>
      prev.includes(strength) ? prev.filter((s) => s !== strength) : [...prev, strength]
    );
  };

  const handleSaveAndNavigate = () => {
    const reflection: StationReflection = {
      interestRating,
      difficultyRating,
      strengthsIdentified: selectedStrengths,
      nextIntent,
      notes: notes.trim() || undefined,
      completedAt: new Date().toLocaleDateString('vi-VN'),
    };

    saveStationReflection(station.id, reflection);
    onClose();

    if (nextIntent === 'retry') {
      startStation(station.id);
    } else {
      setView('profile');
    }
  };

  const interestLabels = [
    '',
    '1 - Rất ít hứng thú',
    '2 - Hơi tẻ nhạt',
    '3 - Bình thường',
    '4 - Khá thú vị',
    '5 - Cực kỳ cuốn hút',
  ];

  const difficultyLabels = [
    '',
    '1 - Rất dễ dàng',
    '2 - Khá nhẹ nhàng',
    '3 - Vừa sức',
    '4 - Khá thử thách',
    '5 - Rất phức tạp',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-1 max-w-xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-teal-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Góc phản tư sau trải nghiệm
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Bạn hiểu thêm gì về mình qua {station.shortTitle}?
            </h3>
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              Dành 1 phút để lắng nghe cảm nhận thực tế của bản thân. Không có câu trả lời đúng hay sai.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Question 1: Interest Rating */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 block">
              1. Bạn cảm thấy nhiệm vụ tại trạm này thú vị đến mức nào?
            </label>
            <div className="flex items-center gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setInterestRating(val)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    interestRating === val
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm shadow-amber-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Star
                    className={`w-4 h-4 ${
                      interestRating >= val ? 'fill-current' : 'text-slate-400'
                    }`}
                  />
                  <span>{val} sao</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-amber-700 font-medium pt-0.5">
              Đánh giá của bạn: {interestLabels[interestRating]}
            </p>
          </div>

          {/* Question 2: Difficulty Rating */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 block">
              2. Bạn cảm thấy độ khó của nhiệm vụ này ra sao?
            </label>
            <div className="flex items-center gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setDifficultyRating(val)}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    difficultyRating === val
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm shadow-indigo-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Flame
                    className={`w-4 h-4 ${
                      difficultyRating >= val ? 'fill-current' : 'text-slate-400'
                    }`}
                  />
                  <span>Mức {val}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-indigo-700 font-medium pt-0.5">
              Cảm nhận của bạn: {difficultyLabels[difficultyRating]}
            </p>
          </div>

          {/* Question 3: What did you do well? (Strengths identified) */}
          <div className="space-y-2.5">
            <label className="text-sm font-bold text-slate-900 block">
              3. Bạn nghĩ mình đã làm tốt điều gì trong nhiệm vụ vừa rồi?
            </label>
            <div className="space-y-2">
              {station.strengthsReflectionOptions.map((str, idx) => {
                const isChecked = selectedStrengths.includes(str);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleStrength(str)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${
                      isChecked
                        ? 'bg-teal-50 border-teal-300 text-teal-950 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked
                          ? 'bg-teal-600 border-teal-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{str}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 4: Next Intent */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 block">
              4. Sau trạm này, bạn muốn làm gì tiếp theo?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setNextIntent('retry')}
                className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex flex-col justify-between cursor-pointer ${
                  nextIntent === 'retry'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <RotateCcw className="w-4 h-4 mb-2 text-teal-400" />
                <span className="font-bold">Làm lại ngay</span>
                <span className="text-[11px] opacity-80 mt-1">
                  Thử cách suy luận khác để cải thiện
                </span>
              </button>

              <button
                type="button"
                onClick={() => setNextIntent('practice_more')}
                className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex flex-col justify-between cursor-pointer ${
                  nextIntent === 'practice_more'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Sparkles className="w-4 h-4 mb-2 text-amber-400" />
                <span className="font-bold">Muốn rèn luyện thêm</span>
                <span className="text-[11px] opacity-80 mt-1">
                  Đưa lĩnh vực này vào mục tiêu tuần
                </span>
              </button>

              <button
                type="button"
                onClick={() => setNextIntent('explore_other')}
                className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left flex flex-col justify-between cursor-pointer ${
                  nextIntent === 'explore_other'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Compass className="w-4 h-4 mb-2 text-emerald-400" />
                <span className="font-bold">Khám phá trạm khác</span>
                <span className="text-[11px] opacity-80 mt-1">
                  Xem tiếp các lĩnh vực mới
                </span>
              </button>
            </div>
          </div>

          {/* Optional Open-ended Note */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-slate-800">
                5. Điều bạn nhận ra thêm về bản thân (Tùy chọn):
              </label>
              <span className="text-slate-500 text-[11px]">Có thể để trống</span>
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ví dụ: Em nhận ra mình thích làm việc với các dữ liệu thực tế hơn là suy đoán cảm tính..."
              rows={2}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Đóng lại
          </button>

          <button
            onClick={handleSaveAndNavigate}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 text-white hover:bg-teal-500 text-xs sm:text-sm font-bold shadow-md shadow-teal-500/20 transition-all cursor-pointer"
          >
            <span>Lưu & Xem hồ sơ cá nhân</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
