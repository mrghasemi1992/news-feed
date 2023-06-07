'use client';

import * as Dialog from '@radix-ui/react-dialog';
import {
  Cross2Icon,
  MixerHorizontalIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import GoogleImage from './assets/images/google.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import * as Avatar from '@radix-ui/react-avatar';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  currentUser?: User | null;
};

const AuthDialog = ({ currentUser }: Props) => {
  const {
    register,
    handleSubmit,
    unregister,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    if (!login) {
      axios
        .post('/api/register', data)
        .then(() => {
          toast.success('You have successfully registered');
          setOpen(false);
        })
        .catch(() => {
          toast.error('Failed to register');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      signIn('credentials', {
        ...data,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          toast.success('Logged in');
          router.refresh();
          setOpen(false);
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {currentUser ? (
        <div className="ml-auto">
          <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium">
              {currentUser.name
                ?.split(' ')
                .map((item) => item[0])
                .join('')}
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
      ) : (
        <Dialog.Trigger asChild>
          <button className="text-sm font-semibold ml-auto block bg-violet10 text-white px-4 h-10 rounded-lg outline-none">
            Login
          </button>
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              Welcome {login && 'back!'}
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-1 mb-5 text-[15px] leading-normal">
              {login
                ? 'Login through here'
                : 'Create an account here!'}
            </Dialog.Description>
            {!login && (
              <fieldset className="mb-[15px]">
                <label
                  className="text-violet11 w-[90px] text-right text-[15px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register('name', { required: true })}
                  className="mt-1 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-10 w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  type="text"
                />
              </fieldset>
            )}
            <fieldset className="mb-[15px]">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register('email', { required: true })}
                className="mt-1 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-10 w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="email"
                type="email"
              />
            </fieldset>
            <fieldset className="mb-[15px]">
              <label
                className="text-violet11 w-[90px] text-right text-[15px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register('password', {
                  required: true,
                })}
                className="mt-1 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-10 w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="password"
                type="password"
              />
            </fieldset>
            <button
              type="submit"
              className="bg-violet10 mt-[25px] text-white focus:shadow-green7 flex h-10 items-center justify-center rounded-lg px-4 font-semibold w-full"
            >
              {isLoading ? (
                <BeatLoader color="white" size={8} />
              ) : login ? (
                'Login'
              ) : (
                'Register'
              )}
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              {login
                ? "If you don't have any account, signup"
                : 'If you have an account, login'}{' '}
              through{' '}
              <span
                className="text-blue-500 cursor-pointer font-medium"
                onClick={() => {
                  if (!login) {
                    unregister('name');
                  }
                  setLogin(!login);
                }}
              >
                here
              </span>
              .
            </p>
            <hr className="my-6" />
            <button className="flex justify-center gap-x-4 items-center border-2 border-violet10 w-full h-10 rounded-lg text-violet11 font-semibold">
              <Image
                src={GoogleImage}
                width={20}
                height={20}
                alt="Google"
              />
              {login ? 'Login' : 'Signup'} with Google
            </button>
          </form>
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
      <Toaster />
    </Dialog.Root>
  );
};

export default AuthDialog;
