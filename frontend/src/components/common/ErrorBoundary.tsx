import React from 'react';
import { Link } from 'react-router-dom';

interface State { hasError: boolean }

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Route render error:', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-xl place-items-center px-6 text-center">
        <div>
          <h1 className="mb-3 font-display text-3xl font-bold">Something went wrong</h1>
          <p className="mb-6 text-fg-soft">This page failed to load. Please refresh, or head back home.</p>
          <div className="flex justify-center gap-3">
            <button onClick={() => window.location.reload()} className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold">Reload</button>
            <Link to="/" onClick={() => this.setState({ hasError: false })} className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
