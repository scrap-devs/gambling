import React from 'react';
import PropTypes from 'prop-types';


function ForgotPassword({ open, handleClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      role="dialog"
      aria-labelledby="dialog-title"
      aria-modal="true"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleClose();
        }}
        className="bg-white rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Dialog Title */}
        <div className="border-b p-4">
          <h2 id="dialog-title" className="text-lg font-semibold text-gray-800">
            Reset password
          </h2>
        </div>

        {/* Dialog Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-sm">
            Enter your account&apos;s email address, and we&apos;ll send you a link to
            reset your password.
          </p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
            autoFocus
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Dialog Actions */}
        <div className="flex justify-end gap-2 p-4 border-t">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;