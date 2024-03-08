import ModalButton from './ModalButton';
import { useState, useEffect } from 'react';

export default function Modal({
  title,
  text,
  isOpen,
  setModalOpen,
}: {
  title: string;
  text: string;
  isOpen: boolean;
  setModalOpen: (isTrue: boolean) => void;
}) {
  const [isDeleteDisabled, setDeleteDisabled] = useState(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  //Wait 2 seconds before enabling delete button
  useEffect(() => {
    setDeleteDisabled(true);
    const deleteEnableTimer = setTimeout(() => {
      setDeleteDisabled(false);
    }, 2000);
    return () => clearTimeout(deleteEnableTimer);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      style={{ backgroundImage: "url('src/assets/background.png'" }}
      className="absolute left-0 top-0 h-screen w-screen bg-cover"
    >
      <div className="flex h-screen w-screen items-center justify-center bg-background-blur/60 font-Open-Sans backdrop-blur-sm">
        <div className="min-h-[296px] w-[400px] rounded-xl bg-neutral-0 p-6 shadow-xl">
          <div className="flex h-full flex-col">
            <img src="src/assets/alert.svg" className="w-[48px] pb-5" />
            <div className="pb-8">
              <h1 className="pb-2 text-lg font-semibold text-neutral-100">{title}</h1>
              <p className="text-sm text-neutral-85">{text}</p>
            </div>
            <div className="flex h-[44px] w-[352px] w-full justify-between">
              <ModalButton onClickFunction={() => closeModal()} buttonText="Cancel" buttonType={'cancel'} />
              <ModalButton
                onClickFunction={() => closeModal()}
                buttonText="Delete"
                disabledStatus={isDeleteDisabled}
                buttonType={'delete'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
