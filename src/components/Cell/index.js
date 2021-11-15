import React from 'react';
import { StyledCell } from './styled'
import { TETROMINOS } from '../../tetrominos'

const Cell = ({ type }) => (
 <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default React.memo(Cell)