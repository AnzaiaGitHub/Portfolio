import { useState } from 'react';
import { useTheme } from '../../core/ThemeProvider';
import { useTranslation } from '@core/lang/LanguageContext';

const Contact = () => {
    const { mode } = useTheme();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
        setStatus(t('contact.fillAllFields'));
        return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        setStatus(t('contact.msgSentSuccesfully'));
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Clear status message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
    };

    const contactMethods = [
        {
            label: 'Email',
            value: 'julianpg.developer [at] gmail [dot] com',
            icon: '✉',
            href: 'mailto:julianpg.developer@gmail.com'
        },
        {
            label: 'LinkedIn',
            value: 'in/julian-pedroza-garcia',
            icon: '🔗',
            href: 'https://www.linkedin.com/in/julian-pedroza-garcia/'
        },
        {
            label: 'GitHub',
            value: '@AnzaiaGitHub',
            icon: '⚙',
            href: 'https://github.com/AnzaiaGitHub'
        }
    ];

    return (
        <div className="max-w-2xl mx-auto" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            {/* Contact Methods */}
            <div className="space-y-4">
            <h3 className={`text-xl md:text-3xl font-semibold mb-6 ${
                mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
            }`}>
                {t('contact.getInTouch')}
            </h3>
            {contactMethods.map((method, idx) => (
                <div
                key={idx}
                className={`p-4 border-2 ${
                    mode === 'game'
                    ? 'border-cyan-500 shadow-[0_0_10px_rgba(0,242,255,0.2)] hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-shadow animate-border-rotate-dots'
                    : 'border-slate-300 shadow-sm hover:shadow-md transition-shadow'
                }`}
                >
                    <div className="flex justify-between items-center mb-2 text-sm md:text-xl">
                        <p className={`opacity-75 ${mode === 'game' ? 'text-cyan-300' : 'text-slate-600'}`}>
                            {method.icon} {method.label}
                        </p>
                        <a href={method.href} target="_blank" rel="noopener noreferrer" className={
                        mode === 'game'
                            ? 'text-cyan-400 underline hover:text-cyan-200'
                            : 'text-blue-400 underline hover:text-blue-800'
                        }>{t('contact.go')}</a>
                    </div>
                    <p className={`font-mono text-xs md:text-lg ${mode === 'game' ? 'text-cyan-400' : 'text-slate-900'}`}>
                    {method.value}
                    </p>
                </div>
            ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className={`text-xl md:text-2xl font-semibold mb-6 ${
                mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
            }`}>
                {t('contact.demoForm')}
            </h3>
            <input
                type="text"
                name="name"
                placeholder={t('contact.namePH')}
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border outline-none transition-all ${
                mode === 'game'
                    ? 'border-cyan-500 bg-transparent text-cyan-300 placeholder-cyan-600 focus:shadow-[0_0_10px_rgba(0,242,255,0.5)]'
                    : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-500'
                }`}
            />
            
            <input
                type="email"
                name="email"
                placeholder={t('contact.emailPH')}
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border outline-none transition-all ${
                mode === 'game'
                    ? 'border-cyan-500 bg-transparent text-cyan-300 placeholder-cyan-600 focus:shadow-[0_0_10px_rgba(0,242,255,0.5)]'
                    : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-500'
                }`}
            />
            
            <textarea
                name="message"
                placeholder={t('contact.messagePH')}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-2 border outline-none transition-all resize-none ${
                mode === 'game'
                    ? 'border-cyan-500 bg-transparent text-cyan-300 placeholder-cyan-600 focus:shadow-[0_0_10px_rgba(0,242,255,0.5)]'
                    : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:border-slate-500'
                }`}
            />

            <button
                type="submit"
                className={`w-full py-2 font-semibold transition-all cursor-pointer ${
                mode === 'game'
                    ? 'border border-cyan-500 text-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] hover:bg-cyan-950'
                    : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
            >
                {t('contact.sendBtn')}
            </button>

            {status && (
                <p className={`text-center text-sm font-medium ${
                status.includes('successfully')
                    ? mode === 'game' ? 'text-cyan-400' : 'text-green-600'
                    : mode === 'game' ? 'text-cyan-300' : 'text-slate-600'
                }`}>
                {status}
                </p>
            )}
            </form>
        </div>
        </div>
    );
};

export default Contact;
