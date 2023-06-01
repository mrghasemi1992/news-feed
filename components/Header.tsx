'use client';

import * as Dialog from '@radix-ui/react-dialog';
import AuthDialog from './AuthDialog';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="h-16 border-b border-gray-200 mb-4 flex items-center px-8">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-sm font-semibold ml-auto block bg-violet10 text-white px-4 h-10 rounded-lg outline-none">
            Login
          </button>
        </Dialog.Trigger>
        <AuthDialog />
      </Dialog.Root>
    </header>
  );
};

export default Header;
