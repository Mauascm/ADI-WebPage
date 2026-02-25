import Script from "next/script";
import { createElement } from "react";

const ELEVENLABS_AGENT_ID = "agent_3201kj6qzcgjfc8sj91gzz0m0jtg";

export function ElevenLabsConvaiWidget() {
  return (
    <>
      {createElement("elevenlabs-convai", {
        "agent-id": ELEVENLABS_AGENT_ID,
      })}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        type="text/javascript"
      />
    </>
  );
}

