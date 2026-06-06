//! SDL and operation validation via apollo-compiler.
//!
//! Diagnostics carry line/col/len so the editor can underline precisely.

use serde_json::{json, Value};

/// Validate one subgraph SDL. Returns `{ diagnostics: [...] }`.
///
/// TODO(milestone-1): parse with apollo-compiler and map diagnostics to
/// `{ severity, message, line, col, len }`.
pub fn validate_subgraph(_sdl: &str) -> Value {
    json!({ "diagnostics": [] })
}

/// Validate an operation against the composed API schema.
///
/// TODO(milestone-2): validate the executable document against the API schema.
pub fn validate_query(_supergraph_sdl: &str, _operation: &str) -> Value {
    json!({ "diagnostics": [] })
}
