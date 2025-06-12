import React, { useState } from "react";

function LibertyRiskForm() {
  const [form, setForm] = useState({
    companyName: "",
    website: "",
    meetingDate: "",
    attendees: "",
    policyNumber: "",
    surveyNumber: "",
    uwContact: "",
    accountContact: "",
    agentContact: "",
    uwConcerns: "",
    operations: "",
    safetyProgram: "",
    generalLiability: "",
    autoLiability: "",
    wcLossAnalysis: "",
    glLossAnalysis: "",
    autoLossAnalysis: "",
    wcAccidents: "",
    glAccidents: "",
    autoAccidents: "",
    wcRating: "",
    wcJustification: "",
    glRating: "",
    glJustification: "",
    autoRating: "",
    autoJustification: "",
    fleetManagement: "",
    oshaCompliance: "",
    claimsOverview: "",
    dotNumber: "",
    followUps: ""
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [apiKey, setApiKey] = useState("");
  const [generatedReport, setGeneratedReport] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
      .map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1')}:\n${value}\n`)
      .join("\n");

    const prompt = `You are a risk control consultant writing to a commercial insurance underwriter. Use the data and notes below to generate a professional Liberty Mutual-style risk assessment summary. The tone should be objective, technical yet friendly, and written in paragraph form. Avoid fluff and jargon.\n\n${combinedText}`;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are a safety consultant writing insurance risk control reports." },
            { role: "user", content: prompt },
          ],
          temperature: 0.4,
        })
      });

      const data = await response.json();
      setGeneratedReport(data.choices[0].message.content);
    } catch (err) {
      console.error("Error generating report:", err);
      alert("Failed to generate report. Check your API key or try again.");
    }
  };

  return (
    <div className="form-container" style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2>Liberty Mutual Risk Control Report Form</h2>

      <label>
        OpenAI API Key (not stored):
        <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} style={{ width: "100%", marginBottom: 20 }} />
      </label>

      {/* All previous input fields remain unchanged... */}
      {/* [Shortened here for space; they're still in your code above] */}

      <h3>13. Upload Supporting Documents (up to 5)</h3>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt,.csv"
        multiple
        onChange={handleFileUpload}
      />
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

      <button onClick={generateReport} style={{ marginTop: 20 }}>🧠 Generate Risk Report with AI</button>

      {generatedReport && (
        <div style={{ marginTop: 40 }}>
          <h3>Generated Report:</h3>
          <pre style={{ background: "#f8f8f8", padding: "15px", whiteSpace: "pre-wrap" }}>{generatedReport}</pre>
        </div>
      )}
    </div>
  );
}

export default LibertyRiskForm;
