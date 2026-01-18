import { useState } from 'react';
import { useTheme } from '../../core/ThemeProvider';

const Contact = () => {
    const { mode } = useTheme();
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
        setStatus('Please fill out all fields');
        return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        
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
            value: 'julian-pedroza-garcia',
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4">
            <h3 className={`text-xl font-semibold mb-6 ${
                mode === 'game' ? 'text-cyan-400 uppercase' : 'text-slate-900'
            }`}>
                Get in Touch
            </h3>
            {contactMethods.map((method, idx) => (
                <div
                key={idx}
                className={`p-4 ${
                    mode === 'game'
                    ? 'border border-cyan-500 shadow-[0_0_10px_rgba(0,242,255,0.2)] hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-shadow'
                    : 'border border-slate-300 shadow-sm hover:shadow-md transition-shadow'
                }`}
                >
                    <p className={`text-sm opacity-75 ${mode === 'game' ? 'text-cyan-300' : 'text-slate-600'}`}>
                        {method.icon} {method.label}
                    </p>
                    <p className={`font-mono ${mode === 'game' ? 'text-cyan-400' : 'text-slate-900'}`}>
                    {method.value}
                    </p>
                    <a href={method.href} target="_blank" rel="noopener noreferrer" className={
                    mode === 'game'
                        ? 'text-cyan-400 hover:underline'
                        : 'text-blue-600 hover:underline'
                    }>Visit</a>
                </div>
            ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
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
                placeholder="Your Email"
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
                placeholder="Your Message"
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
                className={`w-full py-2 font-semibold transition-all ${
                mode === 'game'
                    ? 'border border-cyan-500 text-cyan-400 hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] hover:bg-cyan-950'
                    : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
            >
                Send Message
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
