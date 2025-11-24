import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const result = location.state?.result;

  useEffect(() => {
    if (!result) {
      window.location.href = "/upload";
    }
  }, [result]);

  if (!result) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <h3>Summary</h3>
      <p>Missing Values: {result.missing_values.length}</p>
      <p>Duplicates: {result.duplicates.length}</p>
      <p>Invalid Emails: {result.invalid_emails.length}</p>
      <p>Invalid Phones: {result.invalid_phones.length}</p>

      <h3>AI Cleaning Suggestions</h3>
      <pre>{JSON.stringify(result.ai_suggestions, null, 2)}</pre>

      <h3>Preview</h3>
      <pre>{JSON.stringify(result.preview, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;

