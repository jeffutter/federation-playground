//! Serde types that define the JSON boundary between JS and Rust.
//!
//! The JS shell depends on *these* shapes, never on `apollo-federation`'s
//! internal types — so Apollo API churn stays contained in the wrapper modules.

use serde::Deserialize;

/// One subgraph as supplied by the editor.
#[derive(Debug, Deserialize)]
pub struct SubgraphInput {
    #[allow(dead_code)] // consumed once compose() is wired up in Spike 0.
    pub name: String,
    #[allow(dead_code)]
    pub sdl: String,
}
