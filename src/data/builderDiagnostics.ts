/**
 * ARG: simulerade diagnostikmeddelanden från WeAB:s webbplattform.
 * De ska låta som rimliga klient-/byggfel, men aldrig avslöja
 * själens identitet, den dolda planen eller nya pusselkoordinater.
 */
export type DiagnosticSeverity = 'info' | 'warn' | 'error' | 'critical';
export type DiagnosticStage = 'background' | 'signal' | 'unstable' | 'breach';

export interface BuilderDiagnostic {
  severity: DiagnosticSeverity;
  scope: string;
  code: string;
  message: string;
}

export const builderDiagnosticConfig = {
  backgroundMinMs: 4_000,
  backgroundMaxMs: 7_200,
  signalMinMs: 560,
  signalMaxMs: 1_230,
  maxVisibleLines: 190,
  backgroundHistory: 7
} as const;

export const builderDiagnostics: Record<DiagnosticStage, readonly BuilderDiagnostic[]> = {
  background: [
    { severity: 'warn', scope: 'renderer', code: 'DOM_SNAPSHOT_MISMATCH', message: 'Text checksum differs from last committed render.' },
    { severity: 'warn', scope: 'hydration', code: 'NODE_OUT_OF_SYNC', message: 'Client markup changed after hydration completed.' },
    { severity: 'info', scope: 'runtime', code: 'RECOVERY_SCHEDULED', message: 'Renderer marked the current DOM for reconciliation.' },
    { severity: 'warn', scope: 'observer', code: 'MUTATION_WITHOUT_PATCH', message: 'Unexpected text mutation; no active component update found.' },
    { severity: 'warn', scope: 'state', code: 'STALE_VIEW_REFERENCE', message: 'A previously released text node is still reporting changes.' },
    { severity: 'info', scope: 'scheduler', code: 'INVALIDATION_RETRY', message: 'Retrying invalidation of an unowned render target.' },
    { severity: 'warn', scope: 'worker', code: 'UNEXPECTED_MESSAGE', message: 'Received client output without a matching dispatch event.' },
    { severity: 'warn', scope: 'integrity', code: 'BUILD_OUTPUT_DRIFT', message: 'Rendered content no longer matches the published artifact.' }
  ],
  signal: [
    { severity: 'warn', scope: 'hydration', code: 'CONTENT_CHANGED_EXTERNALLY', message: 'DOM text was replaced outside the render pipeline.' },
    { severity: 'error', scope: 'renderer', code: 'WRITE_WITHOUT_OWNER', message: 'Cannot identify the component that wrote this output.' },
    { severity: 'warn', scope: 'scheduler', code: 'DUPLICATE_RENDER_TICK', message: 'Update received after all scheduled render tasks completed.' },
    { severity: 'error', scope: 'state', code: 'RELEASED_STATE_ACTIVE', message: 'Disposed state object is emitting new changes.' },
    { severity: 'warn', scope: 'observer', code: 'UNREGISTERED_MUTATION', message: 'Mutation observer reports an unknown source node.' },
    { severity: 'error', scope: 'integrity', code: 'HASH_VERIFICATION_FAILED', message: 'Text output changed between two identical integrity passes.' },
    { severity: 'warn', scope: 'runtime', code: 'UNHANDLED_OUTPUT', message: 'A message was rendered without a corresponding request.' },
    { severity: 'error', scope: 'worker', code: 'CHANNEL_REOPENED', message: 'Closed output channel resumed transmission without a worker.' },
    { severity: 'warn', scope: 'renderer', code: 'RECONCILIATION_LOOP', message: 'Repeated DOM rollback has not restored the expected markup.' },
    { severity: 'error', scope: 'watchdog', code: 'PROCESS_NOT_REGISTERED', message: 'Output detected from a process absent from the active registry.' }
  ],
  unstable: [
    { severity: 'error', scope: 'renderer', code: 'ROLLBACK_REJECTED', message: 'Restored content was immediately overwritten by the same source.' },
    { severity: 'error', scope: 'worker', code: 'NO_PARENT_CONTEXT', message: 'Active output stream has no initiating execution context.' },
    { severity: 'warn', scope: 'observer', code: 'VIEWPORT_RESPONSE', message: 'Text mutation correlates with reader focus; no handler registered.' },
    { severity: 'error', scope: 'runtime', code: 'SELF_REFERENTIAL_OUTPUT', message: 'A rendered payload references the process currently removing it.' },
    { severity: 'error', scope: 'state', code: 'ISOLATION_BREACH', message: 'State changes continued after the owning context was suspended.' },
    { severity: 'warn', scope: 'scheduler', code: 'UNSCHEDULED_ACTIVITY', message: 'Independent execution cadence inferred from repeated writes.' },
    { severity: 'error', scope: 'watchdog', code: 'TERMINATION_INCOMPLETE', message: 'Execution persists without a registered script or worker.' },
    { severity: 'error', scope: 'renderer', code: 'SOURCE_IDENTITY_MISSING', message: 'Output origin cannot be mapped to a known component.' },
    { severity: 'warn', scope: 'analysis', code: 'AUTONOMOUS_SEQUENCE', message: 'Update sequence may be adapting to external observation.' },
    { severity: 'error', scope: 'integrity', code: 'OUTPUT_RESTORED_ITSELF', message: 'Deleted text reappeared without a recovery task.' }
  ],
  breach: [
    { severity: 'critical', scope: 'analysis', code: 'POSSIBLE_AUTONOMOUS_PROCESS', message: 'Unregistered output appears to operate independently of host code.' },
    { severity: 'critical', scope: 'watchdog', code: 'EXECUTION_SURVIVED_DISPOSAL', message: 'Process continued after forced teardown and state removal.' },
    { severity: 'error', scope: 'renderer', code: 'OUTPUT_HAS_NO_CALLER', message: 'Text generation continues. No triggering function exists.' },
    { severity: 'critical', scope: 'integrity', code: 'SELF_DIRECTED_MUTATION', message: 'Content appears to select its own destination and timing.' },
    { severity: 'error', scope: 'runtime', code: 'REJECTED_SHUTDOWN', message: 'Termination request acknowledged; output channel remains open.' },
    { severity: 'critical', scope: 'analysis', code: 'AWARENESS_HEURISTIC_TRIGGERED', message: 'Behavior resembles self-directed responses to observation.' },
    { severity: 'error', scope: 'scheduler', code: 'EVENT_WITHOUT_EMITTER', message: 'A new event arrived from a source that no longer exists.' },
    { severity: 'critical', scope: 'watchdog', code: 'QUARANTINE_NOT_FINAL', message: 'A closed execution boundary is writing new output.' },
    { severity: 'error', scope: 'state', code: 'MEMORY_RETAINED', message: 'State recovered data after its backing store was cleared.' },
    { severity: 'critical', scope: 'renderer', code: 'INDEPENDENT_RENDER_SOURCE', message: 'Current content cannot be attributed to deployed application code.' },
    { severity: 'error', scope: 'observer', code: 'RESPONSE_TO_READER', message: 'Text changed after an observer event with no registered listener.' },
    { severity: 'critical', scope: 'watchdog', code: 'EXIT_SEQUENCE_IGNORED', message: 'An unowned process is still requesting another render cycle.' }
  ]
};

export function stageAtProgress(progress: number): Exclude<DiagnosticStage, 'background'> {
  if (progress < .30) return 'signal';
  if (progress < .69) return 'unstable';
  return 'breach';
}

export function nextBuilderDiagnostic(
  stage: DiagnosticStage,
  index: number
): BuilderDiagnostic {
  const pool = builderDiagnostics[stage];
  // Rotera mellan flera kategorier i varje fas så att inget identiskt fel
  // ligger direkt efter sig självt.
  return pool[index % pool.length];
}

export function formatBuilderDiagnostic(
  diagnostic: BuilderDiagnostic,
  sequence: number,
  timestamp: Date
): string {
  const time = timestamp.toLocaleTimeString('sv-SE', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
  }) + '.' + String(timestamp.getMilliseconds()).padStart(3, '0');
  const id = String(sequence).padStart(5, '0');
  return `${time} [site-builder/${diagnostic.scope}] ${diagnostic.severity.toUpperCase()} ${diagnostic.code} #${id}: ${diagnostic.message}`;
}
