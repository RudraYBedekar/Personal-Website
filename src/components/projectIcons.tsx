import {
  BarChart3,
  Bot,
  Box,
  Car,
  Container,
  Cpu,
  Database,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react';
import type { ProjectIcon } from '../data/portfolioData';

const iconMap: Record<ProjectIcon, LucideIcon> = {
  brain: Bot,
  database: Database,
  chart: BarChart3,
  car: Car,
  message: MessageSquare,
  cpu: Cpu,
  box: Box,
  docker: Container,
};

export const ProjectIconVisual = ({
  icon,
  className = 'w-5 h-5',
}: {
  icon: ProjectIcon;
  className?: string;
}) => {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden />;
};
