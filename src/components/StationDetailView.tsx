import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STATIONS } from '../data/stationsData';
import { StationIcon } from './StationIcon';
import { ReflectionModal } from './ReflectionModal';
import { StationResult } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Clock,
  RotateCcw,
  BookOpen,
  Award,
  ChevronRight,
  Flame,
  Lightbulb,
} from 'lucide-react';

export const StationDetailView: React.FC = () => {
  const { selectedStationId, startStation, userProfile, saveStationResult, setView } = useApp();

  const station = STATIONS.find((s) => s.id === selectedStationId) || STATIONS[0];

  const existingResult = userProfile.stationResults[station.id];

  // Active step index: 0 = step 1, 1 = step 2, 2 = step 3, 3 = bonus challenge
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    () => existingResult?.stepAnswers || {}
  );
  const [bonusAnswer, setBonusAnswer] = useState<string>(
    () => existingResult?.bonusAnswer || ''
  );
  const [showBonus, setShowBonus] = useState<boolean>(() => !!existingResult?.bonusAnswer);
  const [showReflectionModal, setShowReflectionModal] = useState<boolean>(false);

  const totalSteps = station.steps.length;
  const isBonusStep = currentStepIndex >= totalSteps;
  const currentStep = !isBonusStep ? station.steps[currentStepIndex] : null;

  const currentSelectedOptionId = isBonusStep
    ? bonusAnswer
    : selectedAnswers[currentStepIndex];

  const currentOptions = isBonusStep
    ? station.bonusChallenge.options
    : currentStep?.options || [];

  const handleSelectOption = (optionId: string) => {
    if (isBonusStep) {
      setBonusAnswer(optionId);
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentStepIndex]: optionId,
      }));
    }
  };

  const isCurrentStepAnswered = !!currentSelectedOptionId;

  // Check if all 3 standard steps are answered
  const allStandardStepsAnswered = station.steps.every(
    (_, idx) => !!selectedAnswers[idx]
  );

  const calculateScore = () => {
    let score = 0;
    station.steps.forEach((step, idx) => {
      const ansId = selectedAnswers[idx];
      const opt = step.options.find((o) => o.id === ansId);
      if (opt) score += opt.score || 1;
    });
    if (bonusAnswer) {
      const bonusOpt = station.bonusChallenge.options.find((o) => o.id === bonusAnswer);
      if (bonusOpt) score += bonusOpt.score || 1;
    }
    return score;
  };

  const handleCompleteAndReflect = () => {
    const rawScore = calculateScore();
    const maxScore = station.steps.length * 3 + (bonusAnswer ? 3 : 0);

    const result: StationResult = {
      stationId: station.id,
      completed: true,
      stepAnswers: selectedAnswers,
      bonusAnswer: bonusAnswer || undefined,
      score: rawScore,
      maxScore,
      demonstratedCompetencies: station.competencyFocus,
      reflection: existingResult?.reflection,
    };

    saveStationResult(result);
    setShowReflectionModal(true);
  };

  const currentOptionObject = currentOptions.find((o) => o.id === currentSelectedOptionId);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
        <button
          onClick={() => setView('home')}
          className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Về trang chủ</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-600">{station.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 font-mono text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {station.timeEstimate}
          </span>
        </div>
      </div>

      {/* Station Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${station.color.bg} ${station.color.text} border ${station.color.border}`}
            >
              <StationIcon name={station.iconName} className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Trạm trải nghiệm thực tế
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {station.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {station.introduction}
              </p>
            </div>
          </div>
        </div>

        {/* Step Indicator Tabs */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          {station.steps.map((st, idx) => {
            const isDone = !!selectedAnswers[idx];
            const isActive = currentStepIndex === idx;

            return (
              <button
                key={st.stepNumber}
                onClick={() => setCurrentStepIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : isDone
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <span className="w-4 h-4 rounded-full bg-slate-300 text-slate-700 text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                )}
                <span>Thử thách {idx + 1}</span>
              </button>
            );
          })}

          {/* Bonus Challenge Tab */}
          <button
            onClick={() => {
              setShowBonus(true);
              setCurrentStepIndex(totalSteps);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              currentStepIndex === totalSteps
                ? 'bg-amber-600 text-white shadow-sm'
                : bonusAnswer
                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                : 'bg-slate-100 text-amber-700 hover:bg-amber-100'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Thử thách mở rộng</span>
            {bonusAnswer && <CheckCircle2 className="w-3 h-3 text-amber-600" />}
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {!isBonusStep && currentStep ? (
          <>
            {/* Step Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700">
                <span>BƯỚC {currentStep.stepNumber} TRÊN {totalSteps}</span>
                <span aria-hidden="true">·</span>
                <span>{station.shortTitle}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {currentStep.title}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Scenario Box */}
            {currentStep.scenarioContext && (
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-700 text-xs">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <span>Dữ kiện thực tế & Bối cảnh:</span>
                </div>
                <div className="whitespace-pre-line text-slate-700 leading-relaxed font-mono text-xs sm:text-sm bg-white/70 p-3 rounded-xl border border-slate-200/60">
                  {currentStep.scenarioContext}
                </div>
              </div>
            )}

            {/* Options Interactive Selector */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Hãy lựa chọn phương án suy luận của bạn:
              </div>

              <div className="space-y-3">
                {currentStep.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentStepIndex] === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? option.isCorrect
                            ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-200 text-emerald-950'
                            : 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-200 text-amber-950'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                          isSelected
                            ? option.isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-600 text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </div>

                      <div className="flex-1 space-y-1">
                        <span className="text-sm sm:text-base font-medium leading-snug block">
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pedagogical Explanation Box (Feedback based on reasoning) */}
            {currentOptionObject && (
              <div
                className={`rounded-2xl p-5 border transition-all animate-in fade-in slide-in-from-top-2 ${
                  currentOptionObject.isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    {currentOptionObject.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Lightbulb className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <span className="font-bold block">
                      {currentOptionObject.isCorrect
                        ? 'Phân tích suy luận chính xác:'
                        : 'Gợi ý phân tích & Suy luận mở rộng:'}
                    </span>
                    <p className="leading-relaxed text-slate-700">
                      {currentOptionObject.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Bonus Challenge View */
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>THỬ THÁCH MỞ RỘNG (KHÔNG BẮT BUỘC)</span>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {station.bonusChallenge.title}
              </h2>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                {station.bonusChallenge.description}
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800">
              <strong className="text-amber-900 block mb-1">Câu hỏi tư duy chuyên sâu:</strong>
              <p className="text-slate-800 font-medium">
                {station.bonusChallenge.question}
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {station.bonusChallenge.options.map((option, optIdx) => {
                const isSelected = bonusAnswer === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isSelected
                        ? option.isCorrect
                          ? 'bg-emerald-50/70 border-emerald-300 ring-2 ring-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-200 text-amber-950'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                        isSelected
                          ? option.isCorrect
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-600 text-white'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm sm:text-base font-medium leading-snug block">
                        {option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {currentOptionObject && (
              <div
                className={`rounded-2xl p-5 border transition-all animate-in fade-in slide-in-from-top-2 ${
                  currentOptionObject.isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <span className="font-bold block">Bài học rút ra:</span>
                    <p className="leading-relaxed text-slate-700">
                      {currentOptionObject.explanation}
                    </p>
                    <p className="text-xs text-amber-800 font-medium pt-1">
                      💡 {station.bonusChallenge.learningInsight}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step Navigation Bottom Toolbar */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {currentStepIndex > 0 && (
              <button
                onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Quay lại bước trước
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* If on step 0..2 and not at last step */}
            {!isBonusStep && currentStepIndex < totalSteps - 1 && (
              <button
                onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                disabled={!isCurrentStepAnswered}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isCurrentStepAnswered
                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>Sang thử thách tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* If on step 3 (last standard step) */}
            {!isBonusStep && currentStepIndex === totalSteps - 1 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    setShowBonus(true);
                    setCurrentStepIndex(totalSteps);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>Thử thách mở rộng</span>
                </button>

                <button
                  onClick={handleCompleteAndReflect}
                  disabled={!allStandardStepsAnswered}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    allStandardStepsAnswered
                      ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-md shadow-teal-500/20'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Hoàn thành & Phản tư</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* If on Bonus step */}
            {isBonusStep && (
              <button
                onClick={handleCompleteAndReflect}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 text-white hover:bg-teal-500 text-xs sm:text-sm font-bold shadow-md shadow-teal-500/20 transition-all cursor-pointer"
              >
                <span>Lưu kết quả & Phản tư</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reflection Modal */}
      {showReflectionModal && (
        <ReflectionModal
          station={station}
          initialReflection={existingResult?.reflection}
          onClose={() => setShowReflectionModal(false)}
        />
      )}
    </div>
  );
};
