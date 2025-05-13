import * as React from "react";

function AttachmentButton() {
  return (
    <button
      type="button"
      className="flex gap-2 justify-center items-center w-full rounded-xl border border-dashed border-gray-400 cursor-pointer h-[50px]"
    >
      <div dangerouslySetInnerHTML={{
        __html:
          "<svg id=\"6630:19866\" layer-name=\"372914_add_linecon_more_plus_round_icon 2\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[20px] h-[20px]\"> <g clip-path=\"url(#clip0_6630_19866)\"> <path d=\"M10 0C4.47708 0 0 4.4775 0 10C0 15.5229 4.47708 20 10 20C15.5229 20 20 15.5233 20 10C20 4.4775 15.5229 0 10 0ZM10.0121 18.2683C5.41917 18.2683 1.69583 14.545 1.69583 9.9525C1.69583 5.36 5.41917 1.63583 10.0121 1.63583C14.6046 1.63583 18.3283 5.35917 18.3283 9.95208C18.3283 14.545 14.605 18.2683 10.0121 18.2683Z\" fill=\"#7DA89B\"></path> <path d=\"M13.5667 9.1259H10.8759L10.8792 6.3859C10.8684 6.19674 10.7871 5.82174 10.3246 5.8209L9.66668 5.82007C9.1746 5.81965 9.13252 6.30549 9.13002 6.43257L9.12668 9.12548H6.37377C5.86543 9.12548 5.82252 9.51757 5.82043 9.62965V10.3834C5.82293 10.4863 5.86502 10.8742 6.37377 10.8742H9.1246L9.12127 13.6251C9.12043 14.133 9.51252 14.1767 9.62502 14.1792L10.3788 14.1801C10.4817 14.1776 10.8696 14.1355 10.8704 13.6276L10.8738 10.8747H13.6159C13.805 10.8634 14.18 10.7817 14.18 10.3192V9.66174C14.1796 9.16965 13.6938 9.1284 13.5667 9.1259Z\" fill=\"#7DA89B\"></path> </g> <defs> <clipPath id=\"clip0_6630_19866\"> <rect width=\"20\" height=\"20\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
      }} />
      <span className="text-base font-medium text-gray-400">Add Attachment</span>
    </button>
  );
}

export default AttachmentButton;
