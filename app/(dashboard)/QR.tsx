import React from "react";
import QRCode from "react-qr-code";
import getUserInfo from "@/lib/auth/getUserInfo";

export default async function UserQR() {
  const info = await getUserInfo();
  if (!info) return null;

  const user_id = info.id;

  return (
    <div>
      <QRCode
        size={128}
        fgColor="#002766"
        bgColor="#e4e4e7"
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={user_id}
        viewBox={`0 0 64 64`}
      />
    </div>
  );
}
