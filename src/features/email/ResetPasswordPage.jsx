import { useState } from "react";
import { useParams } from "react-router";
import useResetPassword from "./useResetPassword";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { resetPassword, isResetPasswordLoading } = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match");
    }

    resetPassword({
      token,
      password: newPassword,
      passwordConfirm: confirmPassword,
    });
  };

  return (
    <div className="reset-password-view">
      <div className="reset-password-view__content">
        <h2 className="heading-secondary">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <button type="submit" disabled={isResetPasswordLoading}>
            {isResetPasswordLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
