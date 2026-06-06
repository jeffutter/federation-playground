//! Query planning, exposed purely for visualization (decoupled from execution).

use serde_json::{json, Value};

/// Produce a slim, stable query-plan DTO for an operation.
///
/// TODO(milestone-3): build the plan with apollo-federation and map it into our
/// own `QueryPlan` DTO (do not expose Apollo's internal plan type).
pub fn plan(_supergraph_sdl: &str, _operation: &str, _op_name: Option<&str>) -> Value {
    json!({
        "ok": false,
        "errors": [{
            "code": "UNIMPLEMENTED",
            "message": "plan() is wired up in milestone 3",
        }],
    })
}
