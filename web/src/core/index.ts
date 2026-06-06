// Loader and typed wrapper around the Rust/WASM core.
//
// TODO(milestone-1): replace the stub below with the real module emitted by
// `wasm-pack build --target web --out-dir web/src/wasm`:
//
//   import init, * as wasm from "../wasm/gql_core.js";
//   await init();
//   return wrap(wasm);
//
// The stub returns the same envelope shapes the WASM core will, so the UI can
// be built and tested before Spike 0 lands.

import type { ComposeResult, Diagnostic, GqlCore, MockResult, SubgraphInput } from "./types";

let corePromise: Promise<GqlCore> | null = null;

/** Load the core once; subsequent calls return the cached instance. */
export function loadCore(): Promise<GqlCore> {
  corePromise ??= Promise.resolve(makeStubCore());
  return corePromise;
}

function makeStubCore(): GqlCore {
  const noDiagnostics = (): { diagnostics: Diagnostic[] } => ({ diagnostics: [] });
  return {
    validateSubgraph: noDiagnostics,
    validateQuery: noDiagnostics,
    compose(_subgraphs: SubgraphInput[]): ComposeResult {
      return {
        ok: false,
        errors: [{ code: "UNIMPLEMENTED", message: "WASM core not built yet (see Spike 0)" }],
      };
    },
    plan(): unknown {
      return { ok: false, errors: [{ code: "UNIMPLEMENTED", message: "milestone 3" }] };
    },
    executeMock(): MockResult {
      return { data: null, errors: [{ message: "WASM core not built yet (milestone 2)" }] };
    },
  };
}
