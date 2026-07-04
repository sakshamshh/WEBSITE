/**
 * BrowserMockup — A reusable browser chrome frame for product screenshots.
 *
 * Usage:
 *   <BrowserMockup src="/screenshots/vision-dashboard.png" alt="Auris Vision Dashboard" />
 *   <BrowserMockup />  ← shows placeholder with owl watermark
 *
 * Screenshot guidelines:
 *   - Drop 2x retina screenshots (2560×1600 recommended) into /public/screenshots/
 *   - Filename convention: section-name.png (e.g., vision-dashboard.png, ai-assistant.png, live-map.png)
 *   - Supported formats: PNG, WebP, JPEG
 *   - The component handles responsive sizing automatically
 */

interface BrowserMockupProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function BrowserMockup({ src, alt = 'Product screenshot', className = '' }: BrowserMockupProps) {
  return (
    <div className={`browser-mockup ${className}`}>
      {/* Chrome bar */}
      <div className="browser-mockup-bar">
        <div className="browser-mockup-dot" />
        <div className="browser-mockup-dot" />
        <div className="browser-mockup-dot" />
        <div className="browser-mockup-url" />
      </div>

      {/* Content area */}
      <div className="browser-mockup-content">
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          /* Placeholder: muted panel with owl watermark */
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="/images/logo-owl.png"
              alt=""
              className="w-16 h-16 object-contain opacity-20"
              aria-hidden="true"
            />
            <span className="text-xs text-[var(--color-text-muted)] mt-3 opacity-50 font-medium">
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
