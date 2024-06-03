import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import HistoryItem from '../../components/HistoryItem';
import InputForm from '../../components/InputForm';
import Logo from '../../components/Logo';
import Separator from '../../components/Separator';

/**
 * Settlement Page
 */
const Settlement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const party = params.get('party');

  useEffect(() => {
    if (!party || (party !== 'a' && party !== 'b')) navigate('/');
  }, [party, navigate]);

  return (
    <div className="flex max-w-[400px] flex-col items-center rounded-md bg-white px-6 py-10 shadow-lg">
      {/* Logo and title */}
      <Logo size="extrasmall" />
      <p className="mb-4 text-3xl">Party {party?.toUpperCase()}</p>

      <Separator />

      {/* Settlement input with button */}
      <p className="mb-4 mt-6">Settlement amount</p>

      <InputForm status="accepted" {...{ party }} />

      <Separator direction="top" spacing="small" />

      {/* Last change */}
      <p className="mb-4">Latest change</p>
      <HistoryItem className="w-full" party="b" status="rejected" />

      <NavLink
        to="/history"
        className="mt-2 text-sm font-bold uppercase text-primary transition-all duration-200 hover:scale-105 active:scale-100"
      >
        See full history
      </NavLink>
    </div>
  );
};

export default Settlement;
