import React, { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (feedback: string) => void;
};

const FeedbackDialog: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAnimateIn(false);
      return;
    }
    const id = window.setTimeout(() => setAnimateIn(true), 0);
    return () => {
      window.clearTimeout(id);
      setAnimateIn(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setFeedback("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const ANIM_MS = 300;

  const closeWithAnimation = (after?: () => void) => {
    setAnimateIn(false);
    window.setTimeout(() => {
      after?.();
      onClose();
    }, ANIM_MS);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeWithAnimation();
    }
  };

  const handleSubmit = () => {
    closeWithAnimation(() => {
      onSubmit?.(feedback);
    });
  };

  const handleFileUpload = () => {
    // TODO: Implement file upload functionality
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*,image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Handle file upload
        console.log("File selected:", file);
      }
    };
    input.click();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        className={`w-full max-w-[430px] mx-auto bg-white rounded-t-2xl transform transition-transform duration-300 ${
          animateIn ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="px-6 pt-6 pb-4 text-center">
            <span className="text-xl font-bold text-[#282828] font-roboto">
              Share us your feedback
            </span>
          </div>

          <div className="px-6 pb-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Describe your experience here"
              className="w-full min-h-[200px] p-4 border border-[#A9A9A9] rounded-lg resize-none focus:outline-none focus:border-[#282828] text-[#282828] font-roboto font-normal text-sm"
            />
          </div>

          <div className="pb-4 text-center">
            <span className="text-base text-[#282828] font-normal font-roboto">
              or
            </span>
          </div>

          <div className="px-6 pb-4 text-center">
            <p className="text-sm text-[#282828] font-bold font-roboto">
              You can upload your written or video testimonials by clicking the
              button below
            </p>
          </div>

          <div className="flex w-full justify-center px-6 pb-6">
            <button
              type="button"
              onClick={handleFileUpload}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#282828] rounded-lg transition-colors"
            >
              <img src="/assets/icon/upload.png" alt="upload" />
              <span className="text-base text-white font-bold font-roboto">
                Upload video
              </span>
            </button>
          </div>

          <div className="border-t border-[#A9A9A9]" />

          <div className="flex-1 flex flex-row w-full">
            <button
              type="button"
              onClick={() => closeWithAnimation()}
              className="flex w-1/2 py-3 items-center justify-center text-base text-center text-[#282828] font-roboto font-semibold"
            >
              Cancel
            </button>
            <div className="flex border-r border-[#A9A9A9]"></div>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-1/2 py-3 items-center justify-center text-base text-center text-[#282828] font-roboto font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDialog;
