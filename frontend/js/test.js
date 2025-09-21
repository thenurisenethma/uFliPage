// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#6366F1',     // Slate Blue
                secondary: '#E0E7FF',   // Lavender
                accent: '#14B8A6',      // Muted Teal
                background: '#F9FAFB',  // Off White
                surface: '#F3F4F6',     // Light Gray
                textMain: '#1F2937',    // Charcoal
                textSecondary: '#6B7280', // Cool Gray
                error: '#F87171',       // Rose
                success: '#10B981',     // Soft Green
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
