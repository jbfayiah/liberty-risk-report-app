import React, { useState } from "react";

function LibertyRiskForm() {
  const [form, setForm] = useState({
    companyWebsite: "",
    meetingAttendees: "",
    policyNumber: "",
    surveyNumber: "",
    underwritingContact: "",
    accountContact: "",
    agentContact: "",
    descriptionOfOps: "",
    employeeCount: "",
    openPositions: "",
    preHirePractices: "",
    onboardingPractices: "",
    safetyExpectations: "",
    postInjuryManagement: "",
    formalProgram: "",
    leadingIndicators: "",
    affiliations: "",
    keyHazards: "",
    ppeRequirements: "",
    workplaceViolence: "",
    emergencyPlans: "",
    generalLiability: "",
    fleetVehicleDetails: "",
    leasedRental: "",
    driverCount: "",
    vehicleUsage: "",
    driverQualification: "",
    vehicleAssignment: "",
    telematics: "",
    thirdPartyTransport: "",
    vehicleStorage: ""
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [apiKey, setApiKey] = useState("");
  const [generatedReport, setGeneratedReport] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + uploadedFiles.length > 5) {
      alert("You can only upload up to 5 documents.");
      return;
    }
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const generateReport = async () => {
    const combinedText = Object.entries(form)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, " $1")}: \n${value}\n`)
      .join("\n");

    const prompt = `You are a risk control consultant writing to a commercial insurance underwriter. Use the data and notes below to generate a professional Liberty Mutual-style risk assessment summary. The tone should be objective, technical yet friendly, and written in paragraph form. Avoid fluff and jargon.\n\n${combinedText}`;

    console.log("📤 Prompt being sent to OpenAI:\n", prompt);
    console.log("🔐 API Key starts with:", apiKey.slice(0, 8));

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // switched for broader access
          messages: [
            {
              role: "system",
              content: "You are a safety consultant writing insurance risk control reports."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.4
        }),
      });

      const data = await response.json();
      console.log("✅ OpenAI response data:", data);

      if (data.choices?.[0]?.message?.content) {
        setGeneratedReport(data.choices[0].message.content);
      } else {
        throw new Error("No response content. Full response: " + JSON.stringify(data));
      }
    } catch (err) {
      console.error("❌ Error with OpenAI request:", err);
      alert("Something went wrong. See browser console (F12 → Console tab) for details.");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Liberty Mutual Risk Control Report</h2>

      {Object.entries(form).map(([key, value]) => (
        <div key={key} style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
            {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
          </label>
          <textarea
            name={key}
            value={value}
            onChange={handleChange}
            rows={3}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
      ))}

      <div style={{ marginTop: "30px", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          Upload Supporting Documents (up to 5)
        </label>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt,.csv"
          onChange={handleFileUpload}
        />
        <ul>{uploadedFiles.map((f, i) => <li key={i}>{f.name}</li>)}</ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
          OpenAI API Key (not stored):
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-..."
          style={{ width: "100%", padding: "10px", fontSize: "14px" }}
        />
      </div>

      <button onClick={generateReport} style={{ marginTop: "20px", padding: "12px 24px", fontSize: "16px" }}>
        🧠 Generate Risk Report with AI
      </button>

      {generatedReport && (
        <div style={{ marginTop: "40px" }}>
          <h3>Generated Report:</h3>
          <pre style={{ background: "#f8f8f8", padding: "15px", whiteSpace: "pre-wrap" }}>
            {generatedReport}
          </pre>
        </div>
      )}
    </div>
  );
}

export default LibertyRiskForm;