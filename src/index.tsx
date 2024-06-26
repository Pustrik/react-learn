import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import '@/shared/config/i18n/i18n';
import ErrorBoundary from '@/app/providers/ErrorBoundery/ui/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
