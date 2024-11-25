import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader";

export default function Welcome() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <PageHeader title="WELCOME TO THE PUZZLE APP" />

      <img src="Einstein_Copilot_Announcement.jpg" alt="Einstalk" />
    </div>
  );
}
