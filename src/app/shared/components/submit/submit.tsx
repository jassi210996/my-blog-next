"use client";
import { useFormStatus } from "react-dom";

/**
 * submit button
 * @returns
 */
export const SubmitButton = () => {
  // get pending status for disabling button
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      disabled={pending}
    >
      {pending ? "Saving" : "Save"}
    </button>
  );
};
