"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = {
  success: boolean;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ 
    success: false, 
    message: '' 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.' 
        });
        setFormData({ email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      let errorMessage = 'Ocurrió un error al enviar el mensaje';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setSubmitStatus({ 
        success: false, 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl p-8">
      {submitStatus.message && (
        <div className={`mb-4 p-4 rounded-md ${
          submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </div>
      </form>
    </div>
  );
}