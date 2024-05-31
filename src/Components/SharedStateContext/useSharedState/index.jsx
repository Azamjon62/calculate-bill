// src/useSharedState.js
import { useContext } from 'react';
import { SharedStateContext } from '../index';

const useSharedState = () => useContext(SharedStateContext);

export default useSharedState;
