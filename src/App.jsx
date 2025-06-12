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
    safetyManagement: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h2>Liberty Mutual Risk Control Form</h2>

      <label>Company Website:
        <input type="text" name="companyWebsite" value={form.companyWebsite} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Meeting Attendees (Name & Position Title):
        <textarea name="meetingAttendees" value={form.meetingAttendees} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <label>Policy #:
        <input type="text" name="policyNumber" value={form.policyNumber} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Survey #:
        <input type="text" name="surveyNumber" value={form.surveyNumber} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Underwriting Contact:
        <input type="text" name="underwritingContact" value={form.underwritingContact} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Account Contact:
        <input type="text" name="accountContact" value={form.accountContact} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Agent Contact:
        <input type="text" name="agentContact" value={form.agentContact} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Brief Description of Operations:
        <textarea name="descriptionOfOps" value={form.descriptionOfOps} onChange={handleChange} style={{ width: "100%" }} rows={5} />
      </label>

      <h3>Employee Management</h3>
      <label>Employee Count:
        <input type="text" name="employeeCount" value={form.employeeCount} onChange={handleChange} style={{ width: "100%" }} />
      </label>

      <label>Current Open Position/Expansion Plans:
        <textarea name="openPositions" value={form.openPositions} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Pre-hire Practices:
        <textarea name="preHirePractices" value={form.preHirePractices} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>New Hire Onboarding Practices:
        <textarea name="onboardingPractices" value={form.onboardingPractices} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Safety Expectations:
        <textarea name="safetyExpectations" value={form.safetyExpectations} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Post Injury Management:
        <textarea name="postInjuryManagement" value={form.postInjuryManagement} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <h3>Safety Management</h3>
      <label>Formal Program in Place / Org Chart:
        <textarea name="formalProgram" value={form.formalProgram} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <label>Leading Indicators:
        <textarea name="leadingIndicators" value={form.leadingIndicators} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <label>Affiliations / Memberships / 3rd Party Engagements:
        <textarea name="affiliations" value={form.affiliations} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Key Hazards:
        <textarea name="keyHazards" value={form.keyHazards} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <label>PPE Requirements / Maintenance:
        <textarea name="ppeRequirements" value={form.ppeRequirements} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Workplace Violence Prevention:
        <textarea name="workplaceViolence" value={form.workplaceViolence} onChange={handleChange} style={{ width: "100%" }} rows={1} />
      </label>

      <label>Emergency Response Plans:
        <textarea name="emergencyPlans" value={form.emergencyPlans} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <h3>General Liability</h3>
      <label>General Liability Exposure:
        <textarea name="generalLiability" value={form.generalLiability} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <h3>Fleet Management</h3>
      <label>Number & Types of Vehicles:
        <textarea name="fleetVehicleDetails" value={form.fleetVehicleDetails} onChange={handleChange} style={{ width: "100%" }} rows={3} />
      </label>

      <label>Leased / Rental:
        <textarea name="leasedRental" value={form.leasedRental} onChange={handleChange} style={{ width: "100%" }} rows={1} />
      </label>

      <label>Number of Drivers / CDL / Auto Allowance:
        <textarea name="driverCount" value={form.driverCount} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Vehicle Usage:
        <textarea name="vehicleUsage" value={form.vehicleUsage} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Driver Qualification / MVR:
        <textarea name="driverQualification" value={form.driverQualification} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Vehicle Assignment:
        <textarea name="vehicleAssignment" value={form.vehicleAssignment} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>Telematics / Monitoring / COI:
        <textarea name="telematics" value={form.telematics} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>

      <label>3rd Party Transportation:
        <textarea name="thirdPartyTransport" value={form.thirdPartyTransport} onChange={handleChange} style={{ width: "100%" }} rows={1} />
      </label>

      <label>Vehicle Storage:
        <textarea name="vehicleStorage" value={form.vehicleStorage} onChange={handleChange} style={{ width: "100%" }} rows={2} />
      </label>
    </div>
  );
}

export default LibertyRiskForm;
