declare global {
  interface Window {
    MathJax: any;
  }
}

export const useMathJax = () => {
  const typeset = () => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch(() => {
        // Silently handle errors
      });
    }
  };

  return { typeset };
};
