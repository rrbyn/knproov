export default function ModalButton({
  onClickFunction,
  buttonText,
  buttonType = 'default',
  disabledStatus = false,
}: {
  onClickFunction: () => void;
  buttonText: string;
  buttonType?: ButtonType;
  disabledStatus?: boolean;
}) {
  //Decided to add support for multiple types of buttons, even if only 2 are currently used currently, for future expandability.
  switch (buttonType) {
    case 'delete':
      return (
        <button
          disabled={disabledStatus}
          className="h-[44px] w-[170px] rounded-lg border border-red-110 bg-red-110 font-semibold text-neutral-0 hover:border-red-120 hover:bg-red-120 focus:shadow-delete-focused focus:outline-none active:border-red-130 active:bg-red-130 disabled:border-red-40 disabled:bg-red-40"
          onClick={onClickFunction}
        >
          {buttonText}
        </button>
      );
    case 'cancel':
      return <DefaultButton onClickFunction={onClickFunction} buttonText={buttonText} />;
    default:
      return <DefaultButton onClickFunction={onClickFunction} buttonText={buttonText} />;
  }
}

function DefaultButton({ onClickFunction, buttonText }: { onClickFunction: () => void; buttonText: string }) {
  return (
    <button
      className="h-[44px] w-[170px] rounded-lg border border-neutral-25 font-semibold text-neutral-100 hover:bg-neutral-6 focus:shadow-cancel-focused focus:outline-none active:bg-neutral-25 disabled:text-neutral-50"
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );
}

type ButtonType = 'delete' | 'cancel' | 'default';
