//! Browser integration tests, run with `wasm-pack test --headless --chrome`.
//!
//! This is Spike 0's permanent home: it proves the crate not only compiles to
//! wasm32 but that the exports actually run in a real browser. Gated to wasm so
//! native `cargo test` skips it.
#![cfg(target_arch = "wasm32")]

use gql_core::compose;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn compose_returns_a_json_envelope() {
    let out = compose("[]");
    assert!(out.contains("ok"));
}
