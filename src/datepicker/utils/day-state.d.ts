import type { SharedStylePropsT } from '../types';
/**
  r == range - date range can be selected
  d == disabled - disabled date
  h == highlighted - currently highlighed date, the highlight is triggered on hover or focus
  mO == hovered (mouse-over) - currently hovered date
  s == selected - selected date, in a range both start and end date are marked as `selected`
  rS == range-selected - when start and end dates of a range are set
  sD == start-date - selected start date of the range
  eD == end-date - selected end date of the range
  pS == pseudo-selected - any date between two selected dates in a range
  rH == range-highlighed - when only a single date of a range selected and the second date is highlighted but not yet selected
  pH == pseudo-highlighted -  any date between a selected date in a range and the currently highlighted date (case when only one date selected in a range case)
  rR == range-on-right - the range-highlighed case with the highlighed date is after the selected one
  rL == range-on-left - the range-highlighed case with the highlighed date is before the selected one
  sM == start-of-month - the first day of the month
  eM == end-of-month - the last day of the month
  oM == outside-month - date outside of currently disaplayed month (when peekNextMonth is set to true)
 */
export default function getDayStateCode(props: SharedStylePropsT): string;
