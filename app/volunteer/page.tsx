'use client';

import { useState } from 'react';
import { BackNav } from '@/components/BackNav';
import { HeroBanner } from '@/components';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    profession: '',
    mobile: '',
    email: '',
    volunteerType: '',
    address: {
      houseNo: '',
      city: '',
      pincode: ''
    },
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setFormData({ ...formData, submitted: true });
    
    // Store in localStorage or send to API
    try {
      const key = 'bp_volunteer_applications';
      const logs = JSON.parse(localStorage.getItem(key) || '[]');
      logs.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(logs));
    } catch {}
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [field]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <main className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/10 min-h-screen">
      <HeroBanner
        title="Volunteer"
        description="Join us in serving the community and temple activities"
        height="medium"
      />
      
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <BackNav />

        {!formData.submitted ? (
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-brand-gold/20">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-brand-maroon mb-6">Volunteer Application Form</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Enter Profession/Study *</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Mobile *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-maroon mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-lg px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-maroon mb-2">How you want to volunteer in the activities of Ashram *</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="volunteerType"
                        value="padayatra"
                        checked={formData.volunteerType === 'padayatra'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Volunteer for Padayatra
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="volunteerType"
                        value="digital-media"
                        checked={formData.volunteerType === 'digital-media'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Volunteer for Campaigns thru digital media
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="volunteerType"
                        value="temple-ashram"
                        checked={formData.volunteerType === 'temple-ashram'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Volunteer for temple/ashram activities
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="volunteerType"
                        value="literary"
                        checked={formData.volunteerType === 'literary'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Volunteer thru literary activity in any form
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="volunteerType"
                        value="seva"
                        checked={formData.volunteerType === 'seva'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Volunteer for various seva activities
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-maroon mb-2">Address</label>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-brand-maroon mb-1">H.No./Apartment/Colony</label>
                      <input
                        type="text"
                        name="address.houseNo"
                        value={formData.address.houseNo}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-brand-maroon mb-1">City/Town/Village</label>
                        <input
                          type="text"
                          name="address.city"
                          value={formData.address.city}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-4 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-brand-maroon mb-1">Pincode</label>
                        <input
                          type="text"
                          name="address.pincode"
                          value={formData.address.pincode}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-4 py-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-maroon text-brand-gold rounded-lg font-semibold hover:bg-brand-maroon/90 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Thank You!</h2>
            <p className="text-lg text-black mb-6">Your volunteer application has been submitted successfully. We will contact you soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
