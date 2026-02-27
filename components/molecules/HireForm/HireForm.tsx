'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/atoms/Input';
import { TextArea } from '@/components/atoms/TextArea';
import { Button } from '@/components/atoms/Button';

const SERVICE_TYPES = [
  { value: 'Full Stack Development', icon: '🖥️' },
  { value: 'Frontend Development', icon: '🎨' },
  { value: 'Backend Development', icon: '⚙️' },
  { value: 'Mobile App Development', icon: '📱' },
  { value: 'UI/UX Design', icon: '✏️' },
  { value: 'DevOps & Cloud', icon: '☁️' },
  { value: 'Consulting & Architecture', icon: '🏗️' },
  { value: 'Maintenance & Support', icon: '🔧' },
];

const TECH_STACK_BY_SERVICE: Record<string, string[]> = {
  'Full Stack Development': ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'Java', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Docker'],
  'Frontend Development': ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Sass', 'HTML5/CSS3'],
  'Backend Development': ['Node.js', 'Python', 'PHP', 'Java', 'Go', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'GraphQL', 'REST API'],
  'Mobile App Development': ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Expo', 'Firebase'],
  'UI/UX Design': ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Photoshop', 'Illustrator', 'Prototyping'],
  'DevOps & Cloud': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Linux'],
  'Consulting & Architecture': ['System Design', 'Microservices', 'API Design', 'Database Design', 'Cloud Architecture', 'Security'],
  'Maintenance & Support': ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Server Management', 'Monitoring', 'Migration'],
};

const DEV_OPTIONS_BY_SERVICE: Record<string, { value: string; label: string }[]> = {
  'UI/UX Design': [
    { value: '1', label: '1 Designer' },
    { value: '2', label: '2 Designers' },
    { value: '3-5', label: '3-5 Designers' },
  ],
  'Consulting & Architecture': [
    { value: '1', label: '1 Consultant' },
    { value: '2', label: '2 Consultants' },
    { value: 'team', label: 'Full Team' },
  ],
};

const DEFAULT_DEV_OPTIONS = [
  { value: '1', label: '1 Dev' },
  { value: '2', label: '2 Devs' },
  { value: '3-5', label: '3-5 Devs' },
  { value: '5-10', label: '5-10 Devs' },
  { value: '10+', label: '10+' },
  { value: 'team', label: 'Full Team' },
];

const BUDGET_RANGES = [
  { value: 'under-50k', label: 'Under ₹50K' },
  { value: '50k-1L', label: '₹50K - ₹1L' },
  { value: '1L-2.5L', label: '₹1L - ₹2.5L' },
  { value: '2.5L-5L', label: '₹2.5L - ₹5L' },
  { value: 'above-5L', label: 'Above ₹5L' },
];

const PROJECT_TIMELINES = [
  { value: 'lt-1m', label: '< 1 Month' },
  { value: '1-3m', label: '1-3 Months' },
  { value: '3-6m', label: '3-6 Months' },
  { value: '6m+', label: '6+ Months' },
  { value: 'ongoing', label: 'Ongoing' },
];

const PLATFORM_OPTIONS = ['Web', 'iOS', 'Android', 'Cross-Platform', 'All Platforms'];

export const HireForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    numberOfDevelopers: '',
    techStack: [] as string[],
    projectDescription: '',
    budget: '',
    timeline: '',
    platform: '',
    additionalRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const availableTechStack = useMemo(() => {
    if (!formData.serviceType) return [];
    return TECH_STACK_BY_SERVICE[formData.serviceType] || [];
  }, [formData.serviceType]);

  const devOptions = useMemo(() => {
    return DEV_OPTIONS_BY_SERVICE[formData.serviceType] || DEFAULT_DEV_OPTIONS;
  }, [formData.serviceType]);

  const showPlatform = ['Full Stack Development', 'Mobile App Development', 'UI/UX Design'].includes(formData.serviceType);

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: service,
      techStack: [],
      numberOfDevelopers: '',
      platform: '',
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleTechStackToggle = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter((t) => t !== tech)
        : [...prev.techStack, tech],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', serviceType: '',
          numberOfDevelopers: '', techStack: [], projectDescription: '',
          budget: '', timeline: '', platform: '', additionalRequirements: '',
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Reusable pill button class */
  const pillActive = 'bg-[#5EBEEB] text-white border-[#5EBEEB] shadow-sm';
  const pillInactive = 'bg-white text-gray-600 border-gray-200 hover:border-[#5EBEEB]/50 hover:bg-[#EDF7FC]';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-16 sm:pb-20">
      {/* Step 1: Personal Information */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#5EBEEB] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">1</div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Personal Information</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Input id="name" label="Full Name" placeholder="Rahul Sharma" required value={formData.name} onChange={handleChange} />
          <Input id="email" label="Email Address" type="email" placeholder="rahul@example.com" required value={formData.email} onChange={handleChange} />
          <Input id="phone" label="Phone Number" type="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleChange} />
          <Input id="company" label="Company (Optional)" placeholder="Your Company" value={formData.company} onChange={handleChange} />
        </div>
      </div>

      {/* Step 2: Service Selection */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#5EBEEB] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">2</div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">What Do You Need?</h3>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* Service Type — button grid instead of native select */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
              Service Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5">
              {SERVICE_TYPES.map(({ value, icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleServiceSelect(value)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg text-[11px] sm:text-xs md:text-sm font-medium border transition-all text-left ${
                    formData.serviceType === value ? pillActive : pillInactive
                  }`}
                >
                  <span className="text-sm sm:text-base shrink-0">{icon}</span>
                  <span className="leading-tight">{value.replace(' Development', ' Dev').replace('Maintenance & Support', 'Maintenance').replace('Consulting & Architecture', 'Consulting')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conditional fields after service selection */}
          {formData.serviceType && (
            <div className="space-y-4 sm:space-y-5 pt-2">
              {/* Selected service indicator */}
              <div className="bg-[#EDF7FC] rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2">
                <span className="text-[#5EBEEB] text-sm">✓</span>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{formData.serviceType}</span>
              </div>

              {/* Platform — only for certain services */}
              {showPlatform && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2.5">
                    Target Platform <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {PLATFORM_OPTIONS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, platform: p }))}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                          formData.platform === p ? pillActive : pillInactive
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Size — pill buttons instead of native select */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2.5">
                  Team Size <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {devOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, numberOfDevelopers: opt.value }))}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                        formData.numberOfDevelopers === opt.value ? pillActive : pillInactive
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2.5">
                  {formData.serviceType === 'UI/UX Design' ? 'Tools & Skills Needed' :
                    formData.serviceType === 'Consulting & Architecture' ? 'Areas of Focus' :
                      formData.serviceType === 'Maintenance & Support' ? 'Support Areas' : 'Technologies Needed'}
                  {' '}<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {availableTechStack.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleTechStackToggle(tech)}
                      className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        formData.techStack.includes(tech)
                          ? 'bg-[#5EBEEB] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                {formData.techStack.length === 0 && (
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5">Select at least one</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Step 3: Project Details — only shows after service selected */}
      {formData.serviceType && (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#5EBEEB] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">3</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Project Details</h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <TextArea
              id="projectDescription"
              label="Project Description"
              placeholder={
                formData.serviceType === 'UI/UX Design'
                  ? 'Describe the design project, target audience, brand guidelines...'
                  : formData.serviceType === 'Mobile App Development'
                    ? 'Describe app features, target platforms, user flows...'
                    : formData.serviceType === 'Maintenance & Support'
                      ? 'Describe current project, issues, and support needed...'
                      : 'Describe your project requirements, goals, and features needed...'
              }
              required
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
            />

            {/* Budget — pill buttons */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2.5">
                Budget <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {BUDGET_RANGES.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, budget: range.value }))}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                      formData.budget === range.value ? pillActive : pillInactive
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline — pill buttons */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-2.5">
                Timeline <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {PROJECT_TIMELINES.map((time) => (
                  <button
                    key={time.value}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, timeline: time.value }))}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                      formData.timeline === time.value ? pillActive : pillInactive
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>

            <TextArea
              id="additionalRequirements"
              label="Additional Notes (Optional)"
              placeholder="Any other details or questions..."
              rows={3}
              value={formData.additionalRequirements}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {/* Submit */}
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isSubmitting || !formData.serviceType || formData.techStack.length === 0}
      >
        {isSubmitting ? 'Sending Request...' : 'Submit Hiring Request'}
      </Button>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
          <p className="text-green-800 text-center text-xs sm:text-sm">
            ✓ Your hiring request has been received! We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
          <p className="text-red-800 text-center text-xs sm:text-sm">
            ✗ Failed to submit. Please try again or email us at career24x7growth@gmail.com
          </p>
        </div>
      )}
    </form>
  );
};
