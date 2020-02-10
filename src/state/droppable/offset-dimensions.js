// @flow
import { type Position } from 'css-box-model';
import { invariant } from '../../invariant';
import type {
  DroppableDimension,
  Scrollable,
  DroppableSubject,
} from '../../types';
import { negate, subtract } from '../position';
import getSubject from './util/get-subject';

export default (
  droppable: DroppableDimension,
  offsets: object,
): DroppableDimension => {
  invariant(droppable.frame);

  console.log('offset dimensions', offsets, droppable );

  /*
  // Sometimes it is possible to scroll beyond the max point.
  // This can occur when scrolling a foreign list that now has a placeholder.
  const frame: Scrollable = {
    ...scrollable,
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement,
      },
      // TODO: rename 'softMax?'
      max: scrollable.scroll.max,
    },
  };

  const subject: DroppableSubject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame,
  });

  const result: DroppableDimension = {
    ...droppable,
    frame,
    subject,
  };
   */

  return droppable;
};
