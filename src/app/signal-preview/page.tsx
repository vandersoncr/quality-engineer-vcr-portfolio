import { SignalCard } from "@/components/SignalCard";

export default function SignalPreviewPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ width: "min(430px, 100%)" }}>
        <SignalCard />
      </div>
    </main>
  );
}
