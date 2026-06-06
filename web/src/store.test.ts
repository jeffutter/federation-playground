import { describe, expect, it, beforeEach } from "vitest";
import { useWorkspace } from "./store";

describe("workspace store", () => {
  beforeEach(() => {
    useWorkspace.setState({ subgraphs: [{ name: "products", sdl: "" }], activeSubgraph: 0 });
  });

  it("adds a subgraph and makes it active", () => {
    useWorkspace.getState().addSubgraph("reviews");
    const state = useWorkspace.getState();
    expect(state.subgraphs).toHaveLength(2);
    expect(state.subgraphs[1].name).toBe("reviews");
    expect(state.activeSubgraph).toBe(1);
  });

  it("updates only the targeted subgraph's sdl", () => {
    useWorkspace.getState().addSubgraph("reviews");
    useWorkspace.getState().setSubgraphSdl(0, "type Query { a: Int }");
    const state = useWorkspace.getState();
    expect(state.subgraphs[0].sdl).toBe("type Query { a: Int }");
    expect(state.subgraphs[1].sdl).toBe("");
  });
});
