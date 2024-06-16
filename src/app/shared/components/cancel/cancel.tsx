"use client";
import { useFormStatus } from "react-dom";
/**
 * cancel button
 * @returns
 */
export const CancelButton = () => {
  // get pending status for disabling button
  const { pending } = useFormStatus();
  return (
    <button
      type="button"
      className="text-sm font-semibold leading-6 text-gray-900"
      disabled={pending}
    >
      Cancel
    </button>
  );
};
