'use client';

import * as Dialog from '@radix-ui/react-dialog';
import AuthDialog from './AuthDialog';
import { User } from '@prisma/client';

type Props = {
  currentUser?: User | null;
};

const Header = ({ currentUser }: Props) => {
  return (
    <header className="bg-gradient-to-r from-violet-500 to-indigo-500 h-16 border-b border-gray-200 mb-4 flex items-center px-8">
      <AuthDialog currentUser={currentUser} />
    </header>
  );
};

export default Header;
