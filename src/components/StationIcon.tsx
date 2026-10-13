import React from 'react';
import {
  BrainCircuit,
  Cpu,
  FlaskConical,
  Palette,
  PenTool,
  Users,
  CalendarCheck,
  HeartHandshake,
  Compass,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Printer,
  ChevronRight,
  HelpCircle,
  BarChart3,
  Award,
  BookOpen,
  Target,
  ExternalLink,
  ChevronLeft,
  Info,
  Lightbulb,
} from 'lucide-react';

interface StationIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const StationIcon: React.FC<StationIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  switch (name) {
    case 'BrainCircuit':
      return <BrainCircuit className={className} size={size} />;
    case 'Cpu':
      return <Cpu className={className} size={size} />;
    case 'FlaskConical':
      return <FlaskConical className={className} size={size} />;
    case 'Palette':
      return <Palette className={className} size={size} />;
    case 'PenTool':
      return <PenTool className={className} size={size} />;
    case 'Users':
      return <Users className={className} size={size} />;
    case 'CalendarCheck':
      return <CalendarCheck className={className} size={size} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} size={size} />;
    case 'Compass':
      return <Compass className={className} size={size} />;
    case 'Sparkles':
      return <Sparkles className={className} size={size} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} size={size} />;
    case 'Clock':
      return <Clock className={className} size={size} />;
    case 'ArrowRight':
      return <ArrowRight className={className} size={size} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} size={size} />;
    case 'RefreshCw':
      return <RefreshCw className={className} size={size} />;
    case 'Printer':
      return <Printer className={className} size={size} />;
    case 'ChevronRight':
      return <ChevronRight className={className} size={size} />;
    case 'HelpCircle':
      return <HelpCircle className={className} size={size} />;
    case 'BarChart3':
      return <BarChart3 className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'BookOpen':
      return <BookOpen className={className} size={size} />;
    case 'Target':
      return <Target className={className} size={size} />;
    case 'ExternalLink':
      return <ExternalLink className={className} size={size} />;
    case 'ChevronLeft':
      return <ChevronLeft className={className} size={size} />;
    case 'Info':
      return <Info className={className} size={size} />;
    case 'Lightbulb':
      return <Lightbulb className={className} size={size} />;
    default:
      return <Compass className={className} size={size} />;
  }
};
