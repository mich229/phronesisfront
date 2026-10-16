import { Component, type ReactNode } from "react";

type State = { failed: boolean };

export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error(error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0D1B2E] px-6 text-center text-white">
        <div>
          <h1 className="font-display text-3xl font-bold">Une erreur est survenue.</h1>
          <p className="mt-3 text-white/60">Rechargez la page. Si le problème persiste, écrivez-nous.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded bg-[#C8A84B] px-6 py-3 text-sm font-semibold text-[#0D1B2E]"
          >
            Recharger
          </button>
        </div>
      </main>
    );
  }
}