"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Dashboard render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center p-4">
          {this.props.fallback || (
            <div className="text-center">
              <h2 className="mb-2 text-xl font-semibold text-neutral-100">
                Something went wrong
              </h2>
              <p className="text-neutral-400">
                Unable to load dashboard. Please refresh the page.
              </p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
