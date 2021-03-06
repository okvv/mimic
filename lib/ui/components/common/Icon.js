import React from 'react';
import styled  from 'styled-components';
import edit from '!!raw-loader!ui/icons/pencil.svg';
import spin from '!!raw-loader!ui/icons/spin.svg';
import mocked from '!!raw-loader!ui/icons/mocked.svg';
import unmocked from '!!raw-loader!ui/icons/unmocked.svg';
import remove from '!!raw-loader!ui/icons/trash.svg';
import record from '!!raw-loader!ui/icons/rec.svg';
import recording from '!!raw-loader!ui/icons/recording.svg';
import search from '!!raw-loader!ui/icons/loupe.svg';
import delay from '!!raw-loader!ui/icons/stopwatch.svg';
import select from '!!raw-loader!ui/icons/select.svg';
import add from '!!raw-loader!ui/icons/new.svg';
import clear from '!!raw-loader!ui/icons/clear.svg';
import expand from '!!raw-loader!ui/icons/expanded.svg';
import close from '!!raw-loader!ui/icons/close.svg';
import settings from '!!raw-loader!ui/icons/settings.svg';
import halfScreen from '!!raw-loader!ui/icons/half-size.svg';
import fullScreen from '!!raw-loader!ui/icons/full-size.svg';
import help from '!!raw-loader!ui/icons/help.svg';
import collapseAll from '!!raw-loader!ui/icons/collapse-all.svg';
import expandAll from '!!raw-loader!ui/icons/expand-all.svg';
import filter from '!!raw-loader!ui/icons/funnel.svg';
import undo from '!!raw-loader!ui/icons/undo.svg';
import check from '!!raw-loader!ui/icons/tick.svg';
import { Div } from 'ui/components/common/base';

const StyledIcon = styled(Div)`
  display: inline-block;
  height: ${(props) => props.src === 'mocked' || props.src === 'unmocked' ? '22px' : '16px'};
  width: ${(props) => props.src === 'mocked' || props.src === 'unmocked' ? '22px' : '16px'};
  user-select: none;
  line-height: ${(props) => props.src === 'mocked' || props.src === 'unmocked' ? '22px' : '16px'};
`;

const ICONS = {
  edit, spin, mocked, unmocked, remove, record, recording, search, delay,
  add, clear, expand, close, settings, halfScreen, fullScreen, help,
  collapseAll, expandAll, filter, undo, select, check
};

const Icon = ({ src, style, onClick, className }) => (
  <StyledIcon style={ style }
              src={ src }
              dangerouslySetInnerHTML={{ __html: ICONS[src] }}
              className={ className }
              onClick={ onClick }/>
);

export default Icon;
