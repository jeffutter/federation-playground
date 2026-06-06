//! Deterministic mock execution against the composed API schema.
//!
//! Plain single-schema GraphQL field-walker (no federated execution): derive
//! the API schema from the supergraph, then generate values per field from a
//! hash of `(seed, path, field)` so results are reproducible.

use serde_json::{json, Value};

/// Mock-execute an operation. Deterministic in `seed`.
///
/// TODO(milestone-2): derive the API schema from the supergraph, walk the
/// operation's selection set, and generate deterministic values per field
/// (scalars/enums by hash, lists fixed-length, abstract types hash-selected).
pub fn execute_mock(
    _supergraph_sdl: &str,
    _operation: &str,
    _variables: &Value,
    _seed: u64,
) -> Value {
    json!({
        "data": null,
        "errors": [{ "message": "execute_mock() is wired up in milestone 2" }],
    })
}
