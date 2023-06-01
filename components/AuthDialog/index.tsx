import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import GoogleImage from './assets/images/google.png';

const AuthDialog = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Welcome
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-1 mb-5 text-[15px] leading-normal">
          Create account or login here!
        </Dialog.Description>
        <fieldset className="mb-[15px]">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-10 w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
          />
        </fieldset>
        <fieldset className="mb-[15px]">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="mt-1 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-10 w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-violet10 text-white focus:shadow-green7 flex h-10 items-center justify-center rounded-lg px-4 font-semibold w-full">
              Login / Register
            </button>
          </Dialog.Close>
        </div>
        <hr className="my-6" />
        <button className='flex justify-center gap-x-4 items-center border-2 border-violet10 w-full h-10 rounded-lg text-violet11 font-semibold'>
          <Image
            src={GoogleImage}
            width={20}
            height={20}
            alt="Google"
          />
          Signup or login with Google
        </button>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default AuthDialog;
