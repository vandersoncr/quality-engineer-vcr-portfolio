import { CheckCircle2, TerminalSquare } from "lucide-react";
import styles from "./SignalCard.module.css";

const domains = ["Web", "API", "E2E", "Performance", "CI/CD"];

export function SignalCard() {
  return (
    <aside className={styles.card} aria-label="Indicadores profissionais">
      <div className={styles.topbar}>
        <div className={styles.signalName}>
          <TerminalSquare size={18} aria-hidden="true" />
          <span>quality.signal</span>
        </div>
        <span className={styles.live}>
          <span className={styles.liveDot} aria-hidden="true" />
          LIVE
        </span>
      </div>

      <div className={styles.experience} data-testid="experience-years">
        <strong>5+</strong>
        <div>
          <span>anos em</span>
          <b>QA &amp; Quality Engineering</b>
        </div>
      </div>

      <div className={styles.metrics}>
        <article className={styles.metric}>
          <span className={styles.metricLabel}>REGRESSÃO</span>
          <strong>~40% <small>↓</small></strong>
          <span className={styles.metricDescription}>tempo reduzido</span>
        </article>

        <article className={styles.metric}>
          <span className={styles.metricLabel}>PIPELINE</span>
          <strong>~35% <small>↓</small></strong>
          <span className={styles.metricDescription}>tempo reduzido</span>
        </article>
      </div>

      <div className={styles.domains} aria-label="Áreas de atuação">
        <CheckCircle2 size={16} aria-hidden="true" />
        <div>
          {domains.map((domain) => (
            <span key={domain} className={styles.domain}>
              <i aria-hidden="true" />
              {domain}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
