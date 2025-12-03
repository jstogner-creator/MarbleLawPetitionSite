import React, { useState } from 'react';
import { SectionId, PetitionData } from '../types';
import { CheckCircle, Shield, MapPin, Gavel, Loader2, AlertCircle } from 'lucide-react';

// ==========================================
// GOOGLE SHEETS CONFIGURATION
// ==========================================
// IMPORTANT: YOU MUST GENERATE A *NEW* DEPLOYMENT URL.
// 1. In Google Script: Click Deploy > New Deployment.
// 2. Ensure 'Who has access' is set to 'Anyone'.
// 3. Paste the NEW URL below.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwrBh6gKjTvaEkGM5hfpDDcyVxQbuuc-nfbX-wSg6coNMO-zZXYV9F5GNSsP3rYxWcz/exec";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  state?: string;
  caseType?: string;
  amountPaid?: string;
  experience?: string;
  consent?: string;
}

interface PetitionFormProps {
  onDataChange?: (data: PetitionData) => void;
}

export const PetitionForm: React.FC<PetitionFormProps> = ({ onDataChange }) => {
  const [formData, setFormData] = useState<PetitionData>({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    caseType: '',
    amountPaid: '',
    experience: '',
    consent: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
       newErrors.phone = "Phone number is required";
       isValid = false;
    } else if (!/^[\d\s\-\(\)\.]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)";
      isValid = false;
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (!formData.caseType) {
      newErrors.caseType = "Please select a case type";
      isValid = false;
    }

    if (!formData.amountPaid.trim()) {
       newErrors.amountPaid = "Amount paid is required";
       isValid = false;
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Please share your experience";
      isValid = false;
    } else if (formData.experience.length < 20) {
      newErrors.experience = "Please provide a bit more detail (at least 20 characters)";
      isValid = false;
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy terms to submit.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      if (GOOGLE_SCRIPT_URL) {
        // Prepare URLSearchParams
        const params = new URLSearchParams();
        params.append('fullName', formData.fullName);
        params.append('email', formData.email);
        params.append('phone', formData.phone);
        params.append('state', formData.state);
        params.append('caseType', formData.caseType);
        params.append('amountPaid', formData.amountPaid);
        params.append('experience', formData.experience);
        params.append('consent', String(formData.consent));

        // Use no-cors mode, but explicitly convert params to string
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: {
             // Even though no-cors ignores this for CORS checks, 
             // it helps ensuring the browser formats the body correctly
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
          mode: "no-cors"
        });
        
        // Since no-cors doesn't return status, we assume success
        await new Promise(resolve => setTimeout(resolve, 800));
        setStatus('success');
      } else {
        console.warn("Google Script URL not set.");
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onDataChange?.(newData);
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...formData, consent: e.target.checked };
    setFormData(newData);
    onDataChange?.(newData);

    if (errors.consent) {
      setErrors({ ...errors, consent: undefined });
    }
  };

  const handleReset = () => {
    setStatus('idle');
    const emptyData = {
      fullName: '',
      email: '',
      phone: '',
      state: '',
      caseType: '',
      amountPaid: '',
      experience: '',
      consent: false
    };
    setFormData(emptyData);
    onDataChange?.(emptyData);
  };

  return (
    <section id={SectionId.PETITION} className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-block p-3 rounded-full bg-red-100 text-red-700 mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">
              Stand Together for Consumer Justice
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                This website exists to collect experiences, increase transparency, and allow affected clients to come forward so that attorneys and consumer protection authorities can evaluate whether Marble’s business practices warrant legal action or investigation.
              </p>
              <p className="font-medium text-slate-900">
                If you have felt trapped, misled, or financially drained by Marble Law, your story matters.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                <h4 className="font-bold text-slate-900 mb-4">Why we need your details</h4>
                <p className="text-sm text-slate-500 mb-4">To build a successful case, attorneys need to prove that these issues are happening systematically across different states and case types.</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Establish jurisdiction (State).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Identify patterns in case handling (Divorce vs. Custody).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Calculate total financial damages.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-t-2xl"></div>
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Statement Recorded</h3>
                <p className="text-slate-600 max-w-sm mx-auto mb-8">
                  Your information has been securely recorded. Thank you for coming forward. We will contact you if a class action lawsuit moves forward.
                </p>
                <button 
                  onClick={handleReset}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Submit another experience
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Secure Report Form</h3>
                <p className="text-slate-500 text-sm mb-6">All information is kept strictly confidential.</p>
                
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start mb-4 border border-red-100">
                    <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">There was an error submitting your form. Please try again.</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> State
                    </label>
                    <input
                      name="state"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.state ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                      placeholder="e.g. California"
                      value={formData.state}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    />
                    {errors.state && <p className="mt-1 text-xs text-red-600 font-medium">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                      <Gavel className="w-3 h-3 mr-1" /> Case Type
                    </label>
                    <select
                      name="caseType"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.caseType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white text-slate-700`}
                      value={formData.caseType}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    >
                      <option value="">Select Type</option>
                      <option value="Divorce">Divorce</option>
                      <option value="Custody">Child Custody</option>
                      <option value="Domestic Violence">Domestic Violence</option>
                      <option value="Immigration">Immigration</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.caseType && <p className="mt-1 text-xs text-red-600 font-medium">{errors.caseType}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Approximate Loss ($)</label>
                  <input
                    name="amountPaid"
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.amountPaid ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                    placeholder="e.g. $4,500"
                    value={formData.amountPaid}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                  />
                  {errors.amountPaid && <p className="mt-1 text-xs text-red-600 font-medium">{errors.amountPaid}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Experience</label>
                  <textarea
                    name="experience"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.experience ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-red-500 focus:border-red-500'} focus:ring-2 transition outline-none bg-slate-50 focus:bg-white`}
                    placeholder="Describe what happened. Did you receive the services you paid for?"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                  ></textarea>
                  {errors.experience && <p className="mt-1 text-xs text-red-600 font-medium">{errors.experience}</p>}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        disabled={status === 'submitting'}
                        className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="font-medium text-slate-700">
                        I Affirm and Consent
                      </label>
                      <p className="text-slate-500 mt-1">
                        I certify the information above is true. I consent to having this information reviewed by investigating attorneys for the purpose of a potential class action lawsuit. I understand this form does not establish an attorney-client relationship.
                      </p>
                    </div>
                  </div>
                  {errors.consent && <p className="mt-2 text-xs text-red-600 font-medium pl-7">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full font-bold py-4 rounded-lg transition shadow-lg transform text-lg flex items-center justify-center ${
                    status === 'submitting' 
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white active:scale-[0.98]'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-6 w-6" />
                      Securely Submitting...
                    </>
                  ) : (
                    "Join the Petition"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};