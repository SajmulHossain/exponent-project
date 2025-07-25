// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (email, token) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  console.log({ resetLink });

  // await resend.emails.send({
  //   from: "mytools@my-tools.ai",
  //   to: email,
  //   subject: "Reset your password",
  //   html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  // });
};

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  console.log({ confirmLink });

  // await resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: email,
  //   subject: "Confirm your email",
  //   html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  // });
};
