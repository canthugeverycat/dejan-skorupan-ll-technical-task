import { STATUSES } from '../../globals/const';
import type { SettlementStatusType } from '../../globals/types';

type StatusPillProps = {
  className?: string;
  size?: 'small' | 'medium';
  animate?: boolean;
  status: SettlementStatusType;
};

/**
 * A pill element showing the settlement status
 * @param {StatusPillProps} props
 */
const StatusPill = ({
  size = 'medium',
  className = '',
  animate = true,
  status,
}: StatusPillProps) => {
  const animateClass = animate ? 'custom-animate-pulse' : '';

  const sizeClass = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
  }[size];

  const colorClass = {
    [STATUSES.ACCEPTED]: 'bg-success',
    [STATUSES.REJECTED]: 'bg-error',
    [STATUSES.PENDING]: 'bg-info',
  }[status];

  return (
    <span
      className={`${sizeClass} ${className} ${animateClass} ${colorClass} absolute rounded-full font-bold uppercase text-white`}
    >
      {status}
    </span>
  );
};

export default StatusPill;
