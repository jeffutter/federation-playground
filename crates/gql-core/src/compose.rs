//! Federation composition: subgraphs -> supergraph SDL.
//!
//! This is the only place federation logic runs. Wired to `apollo-federation`
//! in Spike 0.

use serde_json::{json, Value};

use crate::dto::SubgraphInput;

/// Compose subgraphs into a supergraph SDL, or report composition errors.
///
/// TODO(spike-0): replace the stub with a call into apollo-federation's
/// composition entry point; map its result into the `{ ok, supergraph_sdl,
/// hints }` / `{ ok: false, errors }` envelope.
pub fn compose(_subgraphs: &[SubgraphInput]) -> Value {
    json!({
        "ok": false,
        "errors": [{
            "code": "UNIMPLEMENTED",
            "message": "compose() is wired up in Spike 0",
        }],
    })
}
